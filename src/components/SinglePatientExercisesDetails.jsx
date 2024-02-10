import { Col, Row } from "react-bootstrap";

const SinglePatientExercisesDetails = ({ exercise }) => {
  return (
    <Row className="pt-4">
      <Col xs={2} className="ps-2 text-center">
        <img src="https://placekitten.com/70" className="rounded-4" alt="" />
      </Col>
      <Col className="p-0 fw-bold" xs={5}>
        {exercise.exercise.name}
      </Col>
      <Col
        xs={2}
        className="p-0 d-flex flex-column justify-content-center align-items-center gap-1"
      >
        <strong>Sets</strong> <p>{exercise.sets}</p>
      </Col>
      <Col
        xs={2}
        className="p-0 d-flex flex-column justify-content-center align-items-center gap-1"
      >
        <strong>Reps</strong> <p>{exercise.reps}</p>
      </Col>
      <Col xs={12} className="mt-3 border-bottom pb-4">
        {exercise.exercise.description}
      </Col>
    </Row>
  );
};

export default SinglePatientExercisesDetails;
