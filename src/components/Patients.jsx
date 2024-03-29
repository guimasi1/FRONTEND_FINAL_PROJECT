/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Form, Row } from "react-bootstrap";
import { getPatientsByPhysio } from "../redux/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";
import SinglePatient from "./SinglePatient";
import { useEffect, useState } from "react";
import { getMyPhysioProfile } from "../redux/actions/physiotherapistActions";
import { motion } from "framer-motion";
import { useTheme } from "./Theme";
const Patients = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  const myPhysioProfile = useSelector(
    (state) => state.physiotherapists.physioProfile
  );
  const yourPatients = useSelector(
    (state) => state.patients.patientsByPhysio.content
  );
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    dispatch(getMyPhysioProfile());
  }, []);

  useEffect(() => {
    if (myPhysioProfile && myPhysioProfile.id) {
      dispatch(getPatientsByPhysio(myPhysioProfile.id));
    }
  }, [myPhysioProfile, dispatch]);

  useEffect(() => {
    if (myPhysioProfile && lastName !== "") {
      dispatch(getPatientsByPhysio(myPhysioProfile.id, lastName));
    } else if (myPhysioProfile) {
      dispatch(getPatientsByPhysio(myPhysioProfile.id));
    }
  }, [lastName]);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3, ease: "linear", duration: 0.2 }}
        className="row"
      >
        <Col
          className={`${
            theme === "dark" ? "bg-grey border-0" : ""
          } my-5 border p-5 rounded-4 shadow-lg position-relative`}
        >
          <div className="fancy-border-radius p-0 top-0 start-0"></div>
          <Row className="z-3">
            <div className="d-flex flex-column align-items-center">
              <h1>Your Patients</h1>
              <hr className="mb-5 w-75 border border-2 border-black" />
            </div>
            <Col xs={12} className="mb-5">
              <div id="search-bar-patient" className="ms-4">
                <Form.Label className="fw-bold">Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  className="custom-input"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </div>
            </Col>
            <Col xs={12}>
              <Row xs={1} md={2}>
                {yourPatients &&
                  yourPatients.map((patient) => (
                    <SinglePatient patient={patient} key={patient.id} />
                  ))}
              </Row>
            </Col>
          </Row>
        </Col>
      </motion.div>
    </Container>
  );
};

export default Patients;
