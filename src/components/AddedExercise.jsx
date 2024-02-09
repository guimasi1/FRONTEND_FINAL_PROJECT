import { Col, Row } from "react-bootstrap";

const AddedExercise = ({ exercise, index }) => {
  return (
    <Col xs={12} className=" border rounded-2 text-center">
      {exercise && (
        <Row>
          <Col className="border py-1 rounded-start-2" xs={1}>
            {index + 1}
          </Col>
          <Col className="border py-1">{exercise.exercise.name}</Col>
          <Col className="border py-1">{exercise.sets}</Col>
          <Col className="border py-1 rounded-end-2">{exercise.reps}</Col>
        </Row>
      )}
    </Col>
  );
};
export default AddedExercise;
