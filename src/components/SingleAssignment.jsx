import { Col, Row } from "react-bootstrap";
import { getSingleAssignment } from "../redux/actions/assignmentsActions";
import { useDispatch, useSelector } from "react-redux";
import { removeAssignment } from "../redux/actions/assignmentsActions";
import { motion } from "framer-motion";
import { current } from "@reduxjs/toolkit";
const SingleAssignment = ({ assignment, index }) => {
  const dispatch = useDispatch();
  const currentAssignment = useSelector(
    (state) => state.assignments.newAssignment
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.3 }}
      className={`mb-2 align-items-center cursor single-assignment rounded-2 row ${
        currentAssignment && currentAssignment.id === assignment.id
          ? "selected-assignment"
          : ""
      }`}
      onClick={() => {
        dispatch(getSingleAssignment(assignment.id));
      }}
    >
      <Col className="fw-bold" xs={1}>
        <div className="d-flex justify-content-center align-items-center py-2">
          {assignment ? index + 1 : ""}
        </div>
      </Col>
      <Col>{assignment ? assignment.assignmentDate : ""}</Col>
      <Col>{assignment ? assignment.assignmentStatus : ""}</Col>
      <Col className="d-flex gap-3 justify-content-end">
        <img src="/images\edit.svg" alt="" />
        <img
          src="/images\delete_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
          onClick={() => {
            console.log(assignment.id);
            dispatch(removeAssignment(assignment.id));
          }}
        />
      </Col>
    </motion.div>
  );
};

export default SingleAssignment;
