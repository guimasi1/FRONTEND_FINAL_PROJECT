import { Col, Container, Row } from "react-bootstrap";
import { getPatientsByPhysio } from "../redux/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";
import SinglePatient from "./SinglePatient";
import { useEffect } from "react";
import { getMyPhysioProfile } from "../redux/actions/physiotherapistActions";

const Patients = () => {
  const dispatch = useDispatch();
  const yourPatients = useSelector(
    (state) => state.patients.patientsByPhysio.content
  );
  console.log(yourPatients);
  const myPhysioProfile = useSelector(
    (state) => state.physiotherapists.physioProfile
  );

  useEffect(() => {
    dispatch(getMyPhysioProfile());

    dispatch(getPatientsByPhysio(myPhysioProfile.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-5 border p-5 rounded-5 shadow-lg position-relative">
          <div className="fancy-border-radius p-0 top-0 start-0"></div>
          <Row>
            <div className="d-flex flex-column align-items-center">
              <h1>Your Patients</h1>
              <hr className="mb-5 w-75 border border-2 border-black" />
            </div>
            {yourPatients &&
              yourPatients.map((patient) => (
                <SinglePatient patient={patient} />
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Patients;
