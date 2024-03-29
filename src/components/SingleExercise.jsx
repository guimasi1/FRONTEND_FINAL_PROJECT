import { useState } from "react";
import { Badge, Col, Form, Row } from "react-bootstrap";
import { createExerciseWithDetails } from "../redux/actions/exercisesActions";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import SuccessfulActionMessage from "./Utils/SuccessfulActionMessage";
import { useTheme } from "./Theme";

const SingleExercise = ({
  exercise,
  getExercises,
  setUpdate,
  update,
  getSingleAssignment,
  currentAssignmentId,
}) => {
  const { theme } = useTheme();
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(1);
  const dispatch = useDispatch();
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
    <Col
      xs={12}
      md={12}
      lg={3}
      className={`${
        theme === "dark" ? "bg-grey-2 border-0" : ""
      } border rounded-2 py-2 px-3 col-exercise ms-lg-4`}
    >
      {showConfirmation && (
        <SuccessfulActionMessage message={"Exercise added successfully"} />
      )}
      {exercise && (
        <Row>
          <Col xs={12} className="fw-bold text-center pt-2">
            {exercise.name}
          </Col>
          <Col className="mt-3 d-flex justify-content-between" xs={12}>
            <div>
              <strong>Target area: </strong>
              {exercise.targetArea === "Cardiovascular"
                ? "Cardio"
                : exercise.targetArea}
            </div>
            <Badge
              className={`${
                exercise.difficultyLevel === "MEDIUM" ? "py-2" : "py-2 px-3"
              } d-flex align-items-center justify-content-center`}
              bg={`${
                exercise.difficultyLevel === "EASY"
                  ? "success"
                  : exercise.difficultyLevel === "MEDIUM"
                  ? "warning"
                  : "danger"
              } `}
            >
              {exercise.difficultyLevel}
            </Badge>
          </Col>
          <Col
            xs={12}
            className="mt-3 description-add-exercise truncate-exercise-description"
          >
            {exercise && exercise.description}
          </Col>
          <Col xs={12} className="my-2">
            <div className="d-flex align-items-center justify-content-between">
              <Form.Label>Sets</Form.Label>
              <Form.Select
                className="mb-2 w-50"
                onChange={(e) => setSets(e.target.value)}
              >
                <option>1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <Form.Label>Repetitions</Form.Label>
              <Form.Select
                className="w-50 "
                onChange={(e) => {
                  setReps(e.target.value);
                }}
              >
                <option>1</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </div>
          </Col>
          <Col className="mt-1 d-flex justify-content-center">
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="d-flex justify-content-center align-items-center add-exercise-button mt-3 w-50 py-2 rounded-pill cursor fw-bold add-button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  createExerciseWithDetails({
                    sets: sets,
                    reps: reps,
                    exercise_id: exercise.id,
                  })
                );
                setShowConfirmation(true);
                setTimeout(() => {
                  setShowConfirmation(false);
                }, 1000);
              }}
            >
              <span className="material-symbols-outlined fw-bold fs-3">
                add
              </span>
            </motion.div>
          </Col>
        </Row>
      )}
    </Col>
  );
};

export default SingleExercise;
