import { Col, Row } from "react-bootstrap";

const SingleAssignment = ({ assignment, index }) => {
  return (
    <Row className="mb-2 align-items-center cursor">
      <Col className="fw-bold" xs={1}>
        <div className="d-flex justify-content-center align-items-center py-2">
          {index + 1}
        </div>
      </Col>
      <Col>{assignment.assignmentDate}</Col>
      <Col>{assignment.assignmentStatus}</Col>
      <Col className="d-flex gap-3 justify-content-end">
        <img src="/images\edit.svg" alt="" />
        <img src="/images\delete_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
      </Col>
    </Row>
  );
};

export default SingleAssignment;
