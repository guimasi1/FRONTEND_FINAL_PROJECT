/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import DeleteConfirmation from "../Utils/DeleteConfirmation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removePatient } from "../../redux/actions/adminsActions";
const SinglePatientAdmin = ({ patient }) => {
  const dispatch = useDispatch();
  const [confirmElimination, setConfirmElimination] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (confirmElimination) {
      dispatch(removePatient(patient.id));
    }
  }, [confirmElimination]);

  return (
    <>
      {showAlert && (
        <Row className="fs-6 row rounded cursor text-start pb-2">
          <DeleteConfirmation
            message={"Are you sure you want to delete the patient?"}
            setShowAlert={setShowAlert}
            setConfirmElimination={setConfirmElimination}
          />
        </Row>
      )}
      {!showAlert && (
        <motion.div
          className="fs-6 row rounded cursor text-start pb-2"
          whileHover={{ backgroundColor: "#00000" }}
        >
          <Col>
            <p className="m-0 pt-2">
              {patient?.firstName} {patient?.lastName}
            </p>
          </Col>
          <Col>
            <p className="m-0 pt-2">{patient?.email}</p>
          </Col>
          <Col xs={2}>
            <p className="m-0 pt-2">{patient?.phoneNumber}</p>
          </Col>
          <Col xs={2}>
            <p className="m-0 pt-2">
              {patient?.gender.slice(0, 1) +
                patient?.gender.slice(1).toLowerCase()}
            </p>
          </Col>
          <Col xs={2}>
            <p className="m-0 pt-2">{patient?.registrationDate}</p>
          </Col>
          <Col
            xs={1}
            className="d-flex align-items-center mt-2 justify-content-end "
          >
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setShowAlert(true);
              }}
            >
              delete_forever
            </span>
          </Col>
        </motion.div>
      )}
    </>
  );
};
export default SinglePatientAdmin;
