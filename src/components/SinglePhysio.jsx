/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Button, Col } from "react-bootstrap";
import {
  connectWithPhysio,
  getPhysiotherapists,
} from "../redux/actions/physiotherapistActions";
import { getMyPatientProfile } from "../redux/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { easeOut, motion, useInView } from "framer-motion";
import {
  getPatientsLinkRequests,
  getSingleRequest,
} from "../redux/actions/linkRequestsActions";
import { useNavigate } from "react-router-dom";
const SinglePhysio = ({ physio, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myProfile = useSelector((state) => state.patients.patientProfile);
  const pendingRequestsByPatient = useSelector(
    (state) => state.requests.linkRequestsByPatient.content
  );
  const recentSentRequestId = useSelector(
    (state) => state.physiotherapists.linkRequest
  );
  const pendingPhysios = pendingRequestsByPatient.map(
    (link) => link.physiotherapist.id
  );
  const [requestDetails, setRequestDetails] = useState({
    patient_id: "",
    physiotherapist_id: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref);
  const averageRating =
    physio.reviews.reduce((acc, review) => {
      return review.rating + acc;
    }, 0) / physio.reviews.length || null;
  useEffect(() => {
    dispatch(getMyPatientProfile());
    dispatch(getPatientsLinkRequests(myProfile.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (recentSentRequestId) {
      dispatch(getSingleRequest(recentSentRequestId.uuid));
    }
  }, [recentSentRequestId]);

  useEffect(() => {
    if ((index + 2) % 10 === 0) {
      dispatch(getPhysiotherapists(index + 10));
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      whileHover={{
        scale: 1.01,
      }}
      exit={{ scale: 1 }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0.04 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.3 }}
      className="d-flex mb-4 gap-3 border border-1 rounded-1 ps-0 shadow-lg row"
      xs={12}
    >
      <Col xs={2} className="rounded-start-1">
        <img
          onClick={() => {
            navigate("/physioDetails/" + physio.id);
            window.scrollTo(0, 0);
          }}
          src={`${
            physio.profilePictureUrl !== null
              ? physio.profilePictureUrl
              : // : "https://placekitten.com/240"
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png"
          }`}
          alt=""
          className={`rounded-start-1 mt-3 cursor  ${
            physio.profilePictureUrl === null
              ? "physio-profile-image-card-fallback"
              : "physio-profile-image-card"
          }`}
        />
      </Col>
      <Col xs={4} className="d-flex justify-content-between pt-3 ms-lg-5">
        <div>
          <p
            className="fw-bold cursor"
            onClick={() => {
              navigate("/physioDetails/" + physio.id);
              window.scrollTo(0, 0);
            }}
          >
            {physio.firstName} {physio.lastName}
          </p>
          <div className="d-flex gap-2">
            <span className="material-symbols-outlined">mail</span>
            <p className="fs-7">{physio.email}</p>
          </div>
          <div className="d-flex gap-2">
            <span className="material-symbols-outlined">call</span>
            <p className="fs-7">{physio.phoneNumber}</p>
          </div>
          <p className="mt-5 pt-2">
            <Badge className="bg-dark">{physio.specialization}</Badge>
          </p>
        </div>
      </Col>
      <Col className="flex-grow-1">
        <p
          className="mt-3 fw-bold cursor"
          onClick={() => {
            navigate("/physioDetails/" + physio.id);
            window.scrollTo(0, 0);
          }}
        >
          Rating
        </p>
        <div
          className="d-flex gap-2 cursor"
          onClick={() => {
            navigate("/physioDetails/" + physio.id);
            window.scrollTo(0, 0);
          }}
        >
          {averageRating && (
            <p>
              {Array.from({ length: Math.floor(averageRating) }, (_, i) => (
                <span key={i}>
                  <i className="bi bi-star-fill text-warning"></i>
                </span>
              ))}
              {averageRating % 1 >= 0.5 && (
                <span>
                  <i className="bi bi-star-half text-warning"></i>
                </span>
              )}
              {Array.from(
                {
                  length:
                    5 - Math.floor(averageRating) - (averageRating % 1 >= 0.5),
                },
                (_, i) => (
                  <span key={i}>
                    <i className="bi bi-star text-warning"></i>
                  </span>
                )
              )}
            </p>
          )}
          <p>
            {physio.reviews && physio.reviews.length > 0
              ? "(" + physio.reviews.length + ")"
              : "There aren't reviews."}
          </p>
        </div>
      </Col>
      <Col className="mt-4 text-end">
        <Button
          className={`rounded-pill px-4 py-2 fw-bold ${
            pendingPhysios.includes(physio.id) ? "btn-secondary" : "btn-success"
          } `}
          onClick={(e) => {
            e.preventDefault();
            setRequestDetails({
              physiotherapist_id: physio.id,
              patient_id: myProfile.id,
            });
            if (!pendingPhysios.includes(physio.id)) {
              dispatch(connectWithPhysio(requestDetails));
            } else {
              console.log(
                "Please, wait for the physiotherapist to accept your request."
              );
            }
          }}
        >
          {pendingPhysios.includes(physio.id) ? "Pending" : "Connect"}
        </Button>
      </Col>
    </motion.div>
  );
};

export default SinglePhysio;
