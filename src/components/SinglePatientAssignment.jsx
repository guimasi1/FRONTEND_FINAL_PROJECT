import { Badge, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAssignment } from "../redux/actions/assignmentsActions";
import { format, parseISO } from "date-fns";
import { useTheme } from "./Theme";
const SinglePatientAssignment = ({ assignment }) => {
  const dispatch = useDispatch();
  const currentAssignment = useSelector(
    (state) => state.assignments.newAssignment
  );
  const formattedDate = format(
    parseISO(assignment.assignmentDate),
    "dd MMM yyyy"
  );
  const { theme } = useTheme();

  return (
    <Row
      className={` cursor single-assignment py-3 px-2 rounded-2 mb-2 fs-7 ${
        theme === "dark"
          ? currentAssignment && currentAssignment.id === assignment.id
            ? "selected-assignment"
            : "text-white"
          : ""
      } ${
        theme === "light" &&
        currentAssignment &&
        currentAssignment.id === assignment.id
          ? "selected-assignment"
          : "text-black"
      }`}
      onClick={() => {
        dispatch(getSingleAssignment(assignment.id));
      }}
    >
      <Col xs={3} className="p-0">
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
            {assignment.assignmentStatus === "IN_PROGRESS"
              ? assignment.assignmentStatus.replace("_", " ")
              : assignment.assignmentStatus}
          </Badge>
        )}
      </Col>
      {assignment && (
        <Col>
          Dr.{assignment.assignedBy.firstName} {assignment.assignedBy.lastName}
        </Col>
      )}
      {assignment && (
        <Col xs={4} className="text-end ">
          {formattedDate}
        </Col>
      )}
    </Row>
  );
};

export default SinglePatientAssignment;
