import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useState } from "react";
const SinglePatientExercisesDetails = ({ exercise }) => {
  const [isImgHovered, setIsImgHovered] = useState(false);
  return (
    <Row className="pt-4 border border-1 mb-2 rounded">
      <Col xs={2} className="ps-2 text-center">
        <motion.img
          whileHover={{ scale: 4 }}
          onHoverStart={() => {
            setIsImgHovered(true);
          }}
          onHoverEnd={() => {
            setIsImgHovered(false);
          }}
          src={`${
            exercise.exercise.imageUrl
              ? exercise.exercise.imageUrl
              : "images/weights_2871284.png"
          } `}
          className={`${
            isImgHovered ? "" : "rounded-4"
          } image-exercise-default`}
          alt=""
        />
      </Col>
      <Col className="p-0 fw-bold" xs={5}>
        {exercise.exercise && exercise.exercise.name}
      </Col>
      <Col
        xs={1}
        className="p-0 d-flex flex-column justify-content-center align-items-center gap-1"
      >
        <strong>Sets</strong> <p>{exercise && exercise.sets}</p>
      </Col>
      <Col
        xs={1}
        className="p-0 d-flex flex-column justify-content-center align-items-center gap-1"
      >
        <strong>Reps</strong> <p>{exercise && exercise.reps}</p>
      </Col>
      <Col
        xs={1}
        className="p-0 d-flex flex-column justify-content-center align-items-end gap-1 flex-grow-1 text-end"
      >
        <p className="p-0 me-4">
          <span
            className={`mb-3 fs-1 fw-bold material-symbols-outlined ${
              exercise.exercise && exercise.exercise.difficultyLevel === "EASY"
                ? "text-success"
                : exercise.exercise.difficultyLevel === "MEDIUM"
                ? "text-warning"
                : "text-danger"
            }`}
          >
            circle
          </span>
        </p>
      </Col>
      <Col xs={12} className="mt-3 border-bottom pb-4 description-paragraph">
        {exercise.exercise && exercise.exercise.description}
      </Col>
    </Row>
  );
};

export default SinglePatientExercisesDetails;
