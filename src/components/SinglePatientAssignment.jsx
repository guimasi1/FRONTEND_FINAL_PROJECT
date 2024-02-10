import { Badge, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAssignment } from "../redux/actions/assignmentsActions";

const SinglePatientAssignment = ({ assignment }) => {
  const dispatch = useDispatch();
  const currentAssignment = useSelector(
    (state) => state.assignments.newAssignment
  );

  return (
    <Row
      className={`cursor single-assignment py-3 px-2 rounded-2 mb-2 ${
        currentAssignment && currentAssignment.id === assignment.id
          ? "selected-assignment"
          : ""
      }`}
      onClick={() => {
        dispatch(getSingleAssignment(assignment.id));
      }}
    >
      <Col xs={3}>
        {assignment && (
          <Badge
            className={`${
              assignment.assignmentStatus === "ASSIGNED"
                ? "bg-secondary-subtle text-black"
                : assignment.assignmentStatus === "IN_PROGRESS"
                ? "bg-primary text-white"
                : "bg-success text-white"
            }`}
          >
            {assignment.assignmentStatus}
          </Badge>
        )}
      </Col>
      {assignment && (
        <Col>
          Dr. {assignment.assignedBy.firstName} {assignment.assignedBy.lastName}
        </Col>
      )}
      {assignment && (
        <Col xs={4} className="text-end">
          {assignment.assignmentDate}
        </Col>
      )}
    </Row>
  );
};

export default SinglePatientAssignment;
