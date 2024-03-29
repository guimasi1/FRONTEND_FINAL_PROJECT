import { Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import {
  getMyPatientProfile,
  uploadPatientProfileImage,
} from "../redux/actions/patientsActions";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientsLinkRequests } from "../redux/actions/linkRequestsActions";
import SingleRequest from "./SingleRequest";
import SinglePhysioByPatient from "./SinglePhysioByPatient";
import { getPhysiosByPatient } from "../redux/actions/physiotherapistActions";
import { format, parseISO } from "date-fns";
import { BeatLoader } from "react-spinners";
import { motion } from "framer-motion";
import { useTheme } from "./Theme";

const Profile = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(0);
  const myProfile = useSelector((state) => state.patients.patientProfile);
  const patientLinkRequests = useSelector(
    (state) => state.requests.linkRequestsByPatient.content
  );
  const physiosByPatient = useSelector(
    (state) => state.physiotherapists.physiosByPatient
  );
  const [waiting, setWaiting] = useState(false);
  const updateProfile = () => setUpdate(update + 1);

  useEffect(() => {
    dispatch(getMyPatientProfile());
    dispatch(getPhysiosByPatient(myProfile.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (myProfile) {
      dispatch(getPatientsLinkRequests(myProfile.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getMyPatientProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  const formattedDate = format(
    parseISO(myProfile.registrationDate),
    "dd MMMM yyyy"
  );

  const handleProfileImgClick = () => {
    ref.current.click();
  };

  const handleUploadPicture = async (e) => {
    const file = e.target.files[0];
    try {
      setWaiting(true);
      const response = await dispatch(
        uploadPatientProfileImage(myProfile.id, file)
      );
      if (response !== null || response !== undefined) {
        setWaiting(false);
      }
    } catch (err) {
      setWaiting(false);
      console.log(err);
    }
  };

  return (
    <Container className="mb-5 mt-4">
      <Row className="gap-5 ">
        {myProfile && (
          <Col>
            <Card
              className={`${
                theme === "dark" ? "bg-grey" : ""
              } shadow-lg border-0 rounded-3`}
              id="info-profile-section"
            >
              <div
                className="d-flex justify-content-center align-items-center cursor position-relative"
                style={{ height: "300px" }}
                onClick={handleProfileImgClick}
              >
                {waiting && (
                  <div>
                    <BeatLoader color="#0e9a3d" />
                  </div>
                )}
                {!waiting && (
                  <img
                    src={`${
                      myProfile.profilePictureUrl
                        ? myProfile.profilePictureUrl
                        : "images/Circle-icons-profile.svg"
                    }`}
                    style={{ width: "300px" }}
                    className={`bg-white rounded-pill mt-3 shadow-sm`}
                    alt="profile"
                  />
                )}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.5 },
                  }}
                  className="material-symbols-outlined position-absolute top-50 fs-1 border border-2 cursor border-black rounded-pill p-1 pencil-profile-image"
                >
                  edit
                </motion.span>
              </div>
              <Form.Control
                type="file"
                className="d-none"
                ref={ref}
                onChange={handleUploadPicture}
              />
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item
                    className={`${
                      theme === "dark" ? "bg-grey text-white" : ""
                    } py-0 border-0 d-flex justify-content-between mb-2`}
                  >
                    <div className="fw-bold d-flex gap-2">
                      <span className="material-symbols-outlined">badge</span>
                      {myProfile.firstName} {myProfile.lastName}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={`${
                      theme === "dark" ? "bg-grey text-white" : ""
                    } py-0 border-0 d-flex justify-content-between align-items-center`}
                  >
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined">mail</span>
                      <strong>Email:</strong> {myProfile.email}
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <span className="material-symbols-outlined">call</span>
                      <p className="p-0 mt-3">{myProfile.phoneNumber}</p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={`${
                      theme === "dark" ? "bg-grey text-white" : ""
                    } py-0 border-0 d-flex gap-1`}
                  >
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined">man</span>
                      <strong>Gender:</strong>{" "}
                    </div>
                    <p className="p-0">
                      {myProfile.gender.slice(0, 1)}
                      {myProfile.gender.slice(1).toLowerCase()}
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={`${
                      theme === "dark" ? "bg-grey text-white" : ""
                    } py-0 border-0 d-flex gap-1`}
                  >
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                      <strong>Registration date: </strong>
                    </div>
                    {formattedDate}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        )}
        <Col>
          <Row>
            <Col
              xs={12}
              className={`${
                theme === "dark" ? "bg-grey" : ""
              } p-4 shadow-lg rounded-3`}
              id="sent-requests-section"
            >
              <h4 className="mb-4 text-center">Sent link requests</h4>
              {patientLinkRequests &&
                patientLinkRequests.map((request, index) => (
                  <SingleRequest
                    request={request}
                    key={index}
                    updateProfile={updateProfile}
                  />
                ))}
              {patientLinkRequests.length === 0 && (
                <div
                  className={`${
                    theme === "dark" ? "brownish-button" : "greenish-6"
                  } py-3 d-flex justify-content-center align-items-center`}
                >
                  <p className="m-0">You have 0 pending requests right now.</p>
                </div>
              )}
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Row>
            <Col
              className={`${
                theme === "dark" ? "bg-grey" : ""
              } mt-4 p-5 shadow-lg rounded-3 ms-2`}
              id="biography-section"
            >
              <h3 className="text-center mb-5">Your physiotherapists</h3>
              <Row>
                {physiosByPatient &&
                  physiosByPatient.map((physio) => (
                    <SinglePhysioByPatient physio={physio} key={physio.id} />
                  ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
