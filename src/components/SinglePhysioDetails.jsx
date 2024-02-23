/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPhysioById } from "../redux/actions/physiotherapistActions";
import { parseISO, format } from "date-fns";
import SingleReview from "./SingleReview";
import { motion } from "framer-motion";
import { createReview } from "../redux/actions/reviewsActions";
import { useTheme } from "./Theme";

const SinglePhysioDetails = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const dispatch = useDispatch();
  const physio = useSelector((state) => state.physiotherapists.singlePhysio);
  useEffect(() => {
    dispatch(getPhysioById(id));
  }, []);
  const formattedDate = format(parseISO(physio.dateOfBirth), "dd MMMM yyyy");
  const averageRating =
    physio.reviews.reduce((acc, review) => {
      return review.rating + acc;
    }, 0) / physio.reviews.length || null;
  const myPatientProfile = useSelector(
    (state) => state.patients.patientProfile
  );

  const hasAlreadyReviewed = physio.reviews.some(
    (review) => review.patient.id === myPatientProfile.id
  );

  const [hoveredStar, setHoveredStar] = useState(null);

  const [newReview, setNewReview] = useState({
    rating: 0,
    content: "",
    physiotherapist_id: id,
    patient_id: myPatientProfile.id,
  });
  return (
    <Container id="physio-card-details">
      <Row className="py-5">
        <Col xs={12} md={{ span: 10, offset: 1 }} className="text-center">
          <Row
            className={`${
              theme === "dark" ? "bg-grey" : ""
            } mt-4 shadow-lg rounded-4 py-4 px-4`}
          >
            <Col xs={12}>
              <img
                src={
                  physio.profilePictureUrl
                    ? physio.profilePictureUrl
                    : "/images/Circle-icons-profile.svg"
                }
                className="physio-profile-image-details-card rounded-pill"
                alt=""
              />
            </Col>
            <Col xs={12} className="d-flex justify-content-between">
              <p className="fw-bold fs-4">
                Dr. {physio ? physio.lastName + " " + physio.firstName : ""}
              </p>
              <div className="d-flex gap-2 align-items-center">
                <p>Specialization: </p>
                <p className="bg-dark text-white fw-bold py-1 px-3 rounded ">
                  {physio.specialization.slice(0, 1) +
                    physio.specialization.slice(1).toLowerCase()}
                </p>
              </div>
            </Col>
            <Col className="text-start fs-7">
              <div className="d-flex gap-2">
                <span className="material-symbols-outlined">mail</span>
                <p>
                  <strong>Email:</strong> {physio.email}
                </p>
              </div>
              <div className="d-flex gap-2">
                <span className="material-symbols-outlined">call</span>
                <p>
                  <strong>Phone number:</strong> {physio.phoneNumber}
                </p>
              </div>
              <div className="d-flex gap-2">
                <span className="material-symbols-outlined">cake</span>
                <p>
                  <strong>Date of birth:</strong> {formattedDate}
                </p>
              </div>
              <div className="d-flex gap-2">
                <span className="material-symbols-outlined">lab_profile</span>{" "}
                <p>
                  <strong>Bio:</strong> {physio.bio}
                </p>
              </div>
            </Col>
          </Row>
          <Row
            className={`${
              theme === "dark" ? "bg-grey" : ""
            } mt-4 shadow-lg rounded-4 py-4 px-4`}
            id="row-reviews"
          >
            <Col className="text-start">
              <h4 className="fs-5 mt-4 mb-4">
                {physio.reviews ? physio.reviews.length : ""}
                <span className="ms-2">
                  {physio.reviews.length === 1 ? "Review" : "Reviews"}
                </span>
              </h4>
              {physio.reviews &&
                physio.reviews.map((review) => (
                  <SingleReview review={review} key={review.id} />
                ))}
            </Col>
            {!hasAlreadyReviewed && (
              <Col className="mt-4">
                <p className="fw-bold">Add a review</p>
                <Form>
                  {Array.from({ length: 5 }, (_, i) => (
                    <motion.span
                      className="cursor"
                      key={i}
                      onHoverStart={() => {
                        setHoveredStar(i + 1);
                      }}
                      onHoverEnd={() => {
                        setHoveredStar(null);
                      }}
                      onClick={() => {
                        setNewReview({ ...newReview, rating: i + 1 });
                      }}
                    >
                      {
                        <i
                          className={`bi bi-star${
                            i + 1 <= hoveredStar ||
                            (newReview.rating ? i + 1 <= newReview.rating : "")
                              ? "-fill"
                              : ""
                          } text-warning fs-5 me-1`}
                        ></i>
                      }
                    </motion.span>
                  ))}
                  <Form.Control
                    value={newReview ? newReview.content : ""}
                    rows={5}
                    className="mt-3"
                    as="textarea"
                    onChange={(e) => {
                      setNewReview({ ...newReview, content: e.target.value });
                    }}
                  />
                  <div className="d-flex gap-2 mt-3 justify-content-center">
                    <Button
                      className="btn btn-secondary rounded-4 fw-bold"
                      onClick={() => {
                        setNewReview({ ...newReview, rating: 0, content: "" });
                      }}
                    >
                      Cancel
                    </Button>
                    <div
                      className="brownish-button rounded-4 d-flex align-items-center justify-content-center text-white fw-bold py-2 px-4 cursor"
                      onClick={() => {
                        dispatch(createReview(newReview));
                        setNewReview({ ...newReview, rating: 0, content: "" });
                      }}
                    >
                      Save
                    </div>
                  </div>
                </Form>
              </Col>
            )}
            {hasAlreadyReviewed && <Col></Col>}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SinglePhysioDetails;
