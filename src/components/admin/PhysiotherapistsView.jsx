/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SinglePhysioAdmin from "./SinglePhysioAdmin";
import { getPhysiosByParameters } from "../../redux/actions/adminsActions";

const PhysiotherapistsView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const physiotherapists = useSelector(
    (state) => state.admins.physiotherapists
  );
  const [specialization, setSpecialization] = useState("");
  const [size, setSize] = useState(13);
  useEffect(() => {
    dispatch(getPhysiosByParameters(specialization, size));
  }, []);
  useEffect(() => {
    dispatch(getPhysiosByParameters(specialization, size));
  }, [specialization, size]);

  return (
    <Row className="mx-2">
      <Col xs={12} className="mt-2 text-center me-5">
        <h1>Physiotherapists</h1>
        <Row className="mb-3 mt-4">
          <Col className="d-flex gap-3">
            <div>
              <Form.Label>Search</Form.Label>

              <Form.Control
                style={{ width: "200px" }}
                placeholder="Search by last name"
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <div>
              <Form.Label>Specialization</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setSpecialization(e.target.value);
                }}
              >
                <option value="ANY">Any</option>
                <option value="CARDIOLOGY">Cardiology</option>
                <option value="PEDIATRIC">Pediatric</option>
                <option value="ORTHOPEDICS">Orthopedics</option>
                <option value="PNEUMOLOGY">Pneumology</option>
                <option value="NEUROLOGY">Neurology</option>
              </Form.Select>
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
            <p className="mt-2 mb-1 pt-1 fw-bold">Specialization</p>
          </Col>
          <Col xs={2} className="border border-end-0 text-start">
            <p className="mt-2 mb-1 pt-1 fw-bold">Registration date</p>
          </Col>
          <Col xs={1} className="border border-start-0"></Col>
        </Row>
        {physiotherapists
          ?.filter((physio) =>
            physio.lastName.toLowerCase().includes(name.toLowerCase())
          )
          .map((physio) => (
            <SinglePhysioAdmin physio={physio} key={physio.id} />
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

export default PhysiotherapistsView;
