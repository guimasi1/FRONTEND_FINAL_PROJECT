/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPatientsByLastName } from "../../redux/actions/adminsActions";
import SinglePatientAdmin from "./SinglePatientAdmin";
import { useTheme } from "../Theme";

const PatientsView = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const patients = useSelector((state) => state.admins.patientsByLastName);
  const [size, setSize] = useState(13);

  useEffect(() => {
    dispatch(getPatientsByLastName(name, size));
  }, []);
  useEffect(() => {
    dispatch(getPatientsByLastName(name, size));
  }, [name, size]);

  return (
    <Row className="mx-2 dashboard-rows">
      <Col xs={12} className="mt-2 text-center me-5">
        <h1>Patients</h1>
        <Row className="mb-3 mt-4 text-start">
          <Col xs={4}>
            <div className="d-flex flex-column">
              <Form.Label>Search</Form.Label>
              <Form.Control
                placeholder="Search by last name"
                style={{ width: "200px" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-0 border rounded">
          <Col className="border border-bottom-0 border-top-0 border-end-0 rounded">
            <div className="d-flex gap-2 mt-2 mb-1 pt-1 cursor">
              <p className="fw-bold">Name</p>
              <span className="material-symbols-outlined">swap_vert</span>
            </div>
          </Col>
          <Col className="border text-start">
            <p className="mt-2 mb-1 pt-1 fw-bold">Email</p>
          </Col>
          <Col xs={2} className="border text-start">
            <p className="mt-2 mb-1 pt-1 fw-bold">Phone number</p>
          </Col>
          <Col xs={2} className="border text-start">
            <p className="mt-2 mb-1 pt-1 fw-bold">Gender</p>
          </Col>
          <Col xs={2} className="border border-end-0 text-start">
            <p className="mt-2 mb-1 pt-1 fw-bold">Registration date</p>
          </Col>
          <Col xs={1} className="border border-start-0"></Col>
        </Row>
        {patients?.map((patient) => (
          <SinglePatientAdmin patient={patient} key={patient.id} />
        ))}

        <Button
          className="btn btn-secondary my-4 px-5 fw-bold"
          onClick={() => {
            setSize(size + 10);
          }}
        >
          Show more
        </Button>
      </Col>
    </Row>
  );
};
export default PatientsView;
