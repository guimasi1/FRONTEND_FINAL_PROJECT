import { Col, Row } from "react-bootstrap";
import { getSingleAssignment } from "../redux/actions/assignmentsActions";
import { useDispatch } from "react-redux";

const SingleAssignment = ({ assignment, index }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className="mb-2 align-items-center cursor single-assignment rounded-2"
      onClick={() => {
        console.log(assignment.id);
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
        <img src="/images\delete_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
      </Col>
    </Row>
  );
};

export default SingleAssignment;
