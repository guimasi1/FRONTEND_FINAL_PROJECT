import { Badge, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSingleAssignment } from "../redux/actions/assignmentsActions";

const SinglePatientAssignment = ({ assignment }) => {
  const dispatch = useDispatch();

  return (
    <Row
      className="cursor single-assignment py-3 px-2 rounded-2 mb-2"
      onClick={() => {
        dispatch(getSingleAssignment(assignment.id));
      }}
    >
      <Col xs={3}>
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
      </Col>
      <Col>
        Dr. {assignment.assignedBy.firstName} {assignment.assignedBy.lastName}
      </Col>
      <Col xs={4} className="text-end">
        {assignment.assignmentDate}
      </Col>
    </Row>
  );
};

export default SinglePatientAssignment;
