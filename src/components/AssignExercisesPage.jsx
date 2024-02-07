import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getSinglePatient } from "../redux/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";

const AssignExercisesPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const patientProfile = useSelector((state) => state.patients.singlePatient);

  useEffect(() => {
    dispatch(getSinglePatient(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="shadow-lg my-5 rounded-5 py-5 px-5">
      {patientProfile && (
        <Row className="g-5">
          <Col xs={12}>
            <div className="position-relative container pb-2">
              <div>
                <h1 className="mb-5 text-center ">Your patient</h1>
                <img
                  src="/images/stroke.svg"
                  alt=""
                  className="position-absolute "
                  id="stroke-text"
                />
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="shadow-sm rounded-4 px-5">
              <div className="d-flex justify-content-center mt-5 mb-4">
                <img
                  src={patientProfile.profilePictureUrl}
                  alt=""
                  className="image-profile-exercises rounded-4"
                />
              </div>
              <h3 className="text-center mb-4">
                {patientProfile.firstName} {patientProfile.lastName}
              </h3>
              <div className="d-flex justify-content-between">
                <p>
                  <strong>Email</strong>: {patientProfile.email}
                </p>
                <p>
                  <strong>Phone number</strong>: {patientProfile.phoneNumber}
                </p>
              </div>
              <div className="d-flex justify-content-between pb-5">
                <p>
                  <strong>Gender</strong>: {patientProfile.gender}
                </p>
                <p>
                  <strong>Date of birth</strong>: {patientProfile.dateOfBirth}
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="shadow-sm rounded-4 px-5">
            <h3 className="text-center">Statistics</h3>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default AssignExercisesPage;
