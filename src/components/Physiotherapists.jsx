/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  getPhysiosByParams,
  getPhysiotherapists,
} from "../redux/actions/physiotherapistActions";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Row } from "react-bootstrap";
import SinglePhysio from "./SinglePhysio";
import GoUpButton from "./Utils/GoUpButton";
import Select from "react-select";
import { motion } from "framer-motion";
import { getPatientsAcceptedRequests } from "../redux/actions/linkRequestsActions";
import { useTheme } from "./Theme";

const Physiotherapist = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const physiotherapists = useSelector(
    (state) => state.physiotherapists.physiotherapistsData.content
  );
  const myProfile = useSelector((state) => state.patients.patientProfile);
  const acceptedRequestsByPatient = useSelector(
    (state) => state.requests.acceptedRequestsByPatient
  );

  const physiosToHide = acceptedRequestsByPatient.map(
    (link) => link.physiotherapist.id
  );

  const specializations = [
    { value: "", label: "Any" },
    { value: "CARDIOLOGY", label: "Cardiology" },
    { value: "ORTHOPEDICS", label: "Orthopedics" },
    { value: "PNEUMOLOGY", label: "Pneumology" },
    { value: "PEDIATRIC", label: "Pediatric" },
    { value: "NEUROLOGY", label: "Neurology" },
  ];
  useEffect(() => {
    dispatch(getPhysiotherapists());
    if (myProfile) {
      dispatch(getPatientsAcceptedRequests(myProfile.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [specialization, setSpecialization] = useState("");
  const [physioParams, setPhysioParams] = useState({
    lastName: "",
    specialization,
  });
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderColor: "#9e9e9e",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#9e9e9e",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#4a4a4a",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "#4a4a4a",
      backgroundColor: state.isSelected ? "#ce9d58" : null,
      "&:hover": {
        backgroundColor: "#ce9d58",
        color: "white",
      },
    }),
  };
  useEffect(() => {
    dispatch(getPhysiosByParams(physioParams));
    //dispatch(getPhysiosBySpecialization(specialization.value));
  }, [physioParams]);

  return (
    <motion.div
      className={`${
        theme === "dark" ? "bg-grey border-0" : ""
      } mb-5 mt-2 border p-5 rounded-5 shadow-lg position-relative container physiotherapists-container`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.3 }}
    >
      <Row>
        <div className="d-flex flex-column align-items-center">
          <h1 className="mb-2">Our physiotherapists</h1>
          <img src="images/health-team.svg" alt="equipe" className="w-25" />
          <hr className="mb-4 w-75 border border-2 border-black" />
        </div>
        <Col xs={4} className="flex-grow-1 mb-4">
          <Form className="d-flex gap-3 ms-5 ps-4">
            <Form.Group className="mb-3 d-flex gap-3 align-items-center">
              <Form.Label className="fw-bold">Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                className="custom-input"
                onChange={(e) => {
                  setPhysioParams({
                    ...physioParams,
                    lastName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="flex-grow-1">
              <Select
                styles={customStyles}
                className="w-50 mt-1"
                value={specializations.find(
                  (option) => option.value === physioParams.specialization
                )}
                onChange={(selectedOption) => {
                  setPhysioParams((prevParams) => ({
                    ...prevParams,
                    specialization: selectedOption.value,
                  }));
                }}
                options={specializations}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={12}>
          {physiotherapists &&
            physiotherapists
              .filter((physio) => !physiosToHide.includes(physio.id))
              .map((physio, index) => (
                <SinglePhysio physio={physio} key={physio.id} index={index} />
              ))}
        </Col>
      </Row>
      <GoUpButton />
    </motion.div>
  );
};

export default Physiotherapist;
