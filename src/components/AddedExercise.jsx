import { Col, Row } from "react-bootstrap";

const AddedExercise = () => {
  return (
    <Col className=" border rounded-2 text-center">
      <Row>
        <Col className="border py-1 rounded-start-2" xs={1}>
          Number
        </Col>
        <Col className="border py-1">Nome........</Col>
        <Col className="border py-1">Sets</Col>
        <Col className="border py-1 rounded-end-2">Reps</Col>
      </Row>
    </Col>
  );
};
export default AddedExercise;
