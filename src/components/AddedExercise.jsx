import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  openDialog,
  setCurrentExercise,
} from "../redux/actions/exercisesActions";
const AddedExercise = ({ exercise, index }) => {
  const dispatch = useDispatch();

  return (
    <Col xs={12} className="text-center cursor mb-1 border-bottom py-1">
      {exercise && (
        <Row>
          <Col className=" rounded-start-2" xs={1}>
            {index + 1}
          </Col>
          <Col className="text-start">
            {exercise.exercise && exercise.exercise.name}
          </Col>
          <Col>{exercise.exercise && exercise.exercise.targetArea}</Col>
          <Col>{exercise.exercise && exercise.exercise.difficultyLevel}</Col>
          <Col xs={1}>{exercise && exercise.sets}</Col>
          <Col className=" rounded-end-2" xs={1}>
            {exercise && exercise.reps}
          </Col>
          <Col xs={1} className="rounded-end-2">
            <motion.span
              className="material-symbols-outlined"
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                // dispatch(removeExerciseDetails(exercise.id));
                if (exercise.id) {
                  dispatch(setCurrentExercise(exercise.id));
                }
                dispatch(openDialog());
              }}
            >
              delete
            </motion.span>
          </Col>
        </Row>
      )}
    </Col>
  );
};
export default AddedExercise;
