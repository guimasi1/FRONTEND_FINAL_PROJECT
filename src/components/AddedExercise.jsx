import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeExerciseDetails } from "../redux/actions/assignmentsActions";

const AddedExercise = ({ exercise, index }) => {
  const dispatch = useDispatch();

  return (
    <Col xs={12} className="text-center cursor mb-1">
      {exercise && (
        <Row>
          <Col className=" rounded-start-2" xs={1}>
            {index + 1}
          </Col>
          <Col className="">{exercise.exercise.name}</Col>
          <Col className="">{exercise.sets}</Col>
          <Col className=" rounded-end-2">{exercise.reps}</Col>
          <Col xs={1} className=" rounded-end-2">
            <img
              src="/images/delete_FILL0_wght400_GRAD0_opsz24.svg"
              alt=""
              onClick={() => {
                dispatch(removeExerciseDetails(exercise.id));
              }}
            />
          </Col>
        </Row>
      )}
    </Col>
  );
};
export default AddedExercise;
