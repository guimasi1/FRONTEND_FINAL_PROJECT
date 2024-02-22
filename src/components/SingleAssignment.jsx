import { Col } from "react-bootstrap";
import {
  getSingleAssignment,
  openAssignmentDialog,
  setCurrentAssignmentToDelete,
} from "../redux/actions/assignmentsActions";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { parseISO, format } from "date-fns";
const SingleAssignment = ({ assignment, index }) => {
  const dispatch = useDispatch();
  const currentAssignment = useSelector(
    (state) => state.assignments.newAssignment
  );
  const formattedDate = format(
    parseISO(assignment.assignmentDate),
    "dd MMMM yyyy"
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.3 }}
      className={`mb-2 align-items-center cursor single-assignment rounded-2 row fs-6 ${
        currentAssignment && currentAssignment.id === assignment.id
          ? "selected-assignment"
          : ""
      }`}
    >
      <Col
        className="fw-bold"
        xs={1}
        onClick={() => {
          dispatch(getSingleAssignment(assignment.id));
        }}
      >
        <div className="d-flex justify-content-center align-items-center py-2">
          {assignment ? index + 1 : ""}
        </div>
      </Col>
      <Col
        xs={3}
        onClick={() => {
          dispatch(getSingleAssignment(assignment.id));
        }}
      >
        {assignment ? formattedDate : ""}
      </Col>
      <Col
        xs={6}
        onClick={() => {
          dispatch(getSingleAssignment(assignment.id));
        }}
      >
        {assignment?.assignmentStatus === "IN_PROGRESS"
          ? assignment.assignmentStatus.replace("_", " ")
          : assignment.assignmentStatus}
      </Col>
      <Col className="d-flex gap-3 justify-content-end">
        <img
          src="/images\delete_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
          onClick={() => {
            dispatch(openAssignmentDialog());
            dispatch(setCurrentAssignmentToDelete(assignment.id));
          }}
        />
      </Col>
    </motion.div>
  );
};

export default SingleAssignment;
