/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import DeleteConfirmation from "./Utils/DeleteConfirmation";
import { useDispatch, useSelector } from "react-redux";
import { removePhysioFromPatient } from "../redux/actions/patientsActions";
import { getPhysiosByPatient } from "../redux/actions/physiotherapistActions";
const SinglePhysioByPatient = ({ physio }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [confirmElimination, setConfirmElimination] = useState(false);
  const myProfile = useSelector((state) => state.patients.patientProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (confirmElimination) {
      dispatch(removePhysioFromPatient(physio.id, myProfile.id));
      dispatch(getPhysiosByPatient(myProfile.id));
    }
    setConfirmElimination(false);
  }, [confirmElimination]);
  return (
    <Col xs={6} md={3}>
      {showAlert && (
        <DeleteConfirmation
          setConfirmElimination={setConfirmElimination}
          setShowAlert={setShowAlert}
          onPointerDown={(e) => e.stopPropagation()}
          message={"Do you want to remove the physio?"}
        />
      )}
      {!showAlert && (
        <motion.div
          className="d-flex gap-3 shadow-lg py-4 rounded cursor px-3 position-relative"
          whileHover={{ scale: 1.05, backgroundColor: "#D7B079" }}
        >
          <motion.div
            className="position-absolute top-0 end-0 me-2 mt-1 text-white bg-secondary d-flex justify-content-center align-items-center rounded-pill mt-2"
            style={{ width: "30px", height: "30px" }}
            whileHover={{ backgroundColor: "#9ea7af" }}
            onClick={() => {
              setShowAlert(true);
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </motion.div>
          <div>
            <img
              src="https://placekitten.com/100"
              className="rounded-pill"
              alt=""
            />
          </div>
          <div className="d-flex flex-column ms-2">
            <div>
              <p className="fw-bold m-0 fs-7">
                {physio ? physio.firstName : ""} {physio ? physio.lastName : ""}
              </p>
            </div>
            <div>
              <p className="m-0 fs-8">
                {physio.specialization.slice(0, 1) +
                  physio.specialization.slice(1).toLowerCase()}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </Col>
  );
};
export default SinglePhysioByPatient;
