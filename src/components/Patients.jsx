import { Col, Container, Row } from "react-bootstrap";
import { getPatientsByPhysio } from "../redux/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";
import SinglePatient from "./SinglePatient";
import { useEffect } from "react";
import { getMyPhysioProfile } from "../redux/actions/physiotherapistActions";
import { motion } from "framer-motion";
const Patients = () => {
  const dispatch = useDispatch();

  const myPhysioProfile = useSelector(
    (state) => state.physiotherapists.physioProfile
  );
  const yourPatients = useSelector(
    (state) => state.patients.patientsByPhysio.content
  );
  useEffect(() => {
    dispatch(getMyPhysioProfile());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (myPhysioProfile && myPhysioProfile.id) {
      dispatch(getPatientsByPhysio(myPhysioProfile.id));
    }
  }, [myPhysioProfile, dispatch]);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, ease: "linear", duration: 0.2 }}
        className="row"
      >
        <Col className="my-5 border p-5 rounded-5 shadow-lg position-relative">
          <div className="fancy-border-radius p-0 top-0 start-0"></div>
          <Row>
            <div className="d-flex flex-column align-items-center">
              <h1>Your Patients</h1>
              <hr className="mb-5 w-75 border border-2 border-black" />
            </div>
            {yourPatients &&
              yourPatients.map((patient) => (
                <SinglePatient patient={patient} key={patient.id} />
              ))}
          </Row>
        </Col>
      </motion.div>
    </Container>
  );
};

export default Patients;
