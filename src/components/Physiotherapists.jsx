/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  getPhysiosByName,
  getPhysiosBySpecialization,
  getPhysiotherapists,
} from "../redux/actions/physiotherapistActions";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Form, Row } from "react-bootstrap";
import SinglePhysio from "./SinglePhysio";
import Select from "react-select";
import { motion } from "framer-motion";
const Physiotherapist = () => {
  const dispatch = useDispatch();
  const physiotherapists = useSelector(
    (state) => state.physiotherapists.physiotherapistsData.content
  );
  const specializations = [
    { value: "ANY", label: "Any" },
    { value: "CARDIOLOGY", label: "Cardiology" },
    { value: "ORTHOPEDICS", label: "Orthopedics" },
    { value: "PNEUMOLOGY", label: "Pneumology" },
    { value: "PEDIATRIC", label: "Pediatric" },
    { value: "NEUROLOGY", label: "Neurology" },
  ];
  useEffect(() => {
    dispatch(getPhysiotherapists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [name, setName] = useState(null);
  const [specialization, setSpecialization] = useState("");
  useEffect(() => {
    if (specialization.value === "ANY") {
      dispatch(getPhysiotherapists());
    } else {
      dispatch(getPhysiosBySpecialization(specialization.value));
    }
  }, [specialization]);

  useEffect(() => {
    console.log(name);
    if (name) {
      dispatch(getPhysiosByName(name));
    }
  }, [name]);

  return (
    <motion.div
      className="mb-5 mt-2 border p-5 rounded-5 shadow-lg position-relative container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.3 }}
    >
      <div className="fancy-border-radius p-0 top-0 start-0"></div>

      <Row>
        <div className="d-flex flex-column align-items-center">
          <h1 className="mb-2">Our physiotherapists</h1>
          <hr className="mb-4 w-75 border border-2 border-black" />
        </div>
        <Col xs={4} className="flex-grow-1 mb-4">
          <Form className="d-flex gap-3 ms-5 ps-4">
            <Form.Group className="mb-3 d-flex gap-3 align-items-center">
              <Form.Label className="fw-bold">Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                className="custom-input"
                onChange={(e) => {
                  setName({ ...name, firstName: e.target.value });
                }}
              />
              <Form.Control
                type="text"
                placeholder="Last name"
                className="custom-input"
                onChange={(e) => {
                  setName({ ...name, lastName: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="flex-grow-1">
              <Select
                className="w-50 mt-1"
                defaultValue={specialization}
                onChange={setSpecialization}
                options={specializations}
              />
            </Form.Group>
          </Form>
        </Col>
        {physiotherapists &&
          physiotherapists.map((physio) => (
            <SinglePhysio physio={physio} key={physio.id} />
          ))}
      </Row>
    </motion.div>
  );
};

export default Physiotherapist;
