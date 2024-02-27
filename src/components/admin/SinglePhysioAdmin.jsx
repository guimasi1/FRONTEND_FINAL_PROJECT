/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import DeleteConfirmation from "../Utils/DeleteConfirmation";
import { Col, Row } from "react-bootstrap";
import { removePhysio } from "../../redux/actions/adminsActions";
const SinglePhysioAdmin = ({ physio }) => {
  const dispatch = useDispatch();
  const [confirmElimination, setConfirmElimination] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (confirmElimination) {
      dispatch(removePhysio(physio.id));
    }
  }, [confirmElimination]);
  return (
    <>
      {showAlert && (
        <Row className="fs-6 row rounded cursor text-start pb-2">
          <DeleteConfirmation
            message={"Are you sure you want to delete the physiotherapist?"}
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
              {physio?.firstName} {physio?.lastName}
            </p>
          </Col>
          <Col>
            <p className="m-0 pt-2">{physio?.email}</p>
          </Col>
          <Col xs={2}>
            <p className="m-0 pt-2">{physio?.phoneNumber}</p>
          </Col>
          <Col xs={2}>
            <p className="m-0 pt-2">
              {physio?.specialization.slice(0, 1) +
                physio?.specialization.slice(1).toLowerCase()}
            </p>
          </Col>
          <Col xs={2}>
            <p className="m-0 pt-2">{physio?.registrationDate}</p>
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

export default SinglePhysioAdmin;
