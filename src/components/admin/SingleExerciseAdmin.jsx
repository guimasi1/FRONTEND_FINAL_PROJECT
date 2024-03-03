/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import DeleteConfirmation from "../Utils/DeleteConfirmation";
import { motion } from "framer-motion";
import { removeExercise } from "../../redux/actions/adminsActions";
import { useTheme } from "../Theme";

const SingleExerciseAdmin = ({ exercise }) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const [confirmElimination, setConfirmElimination] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (confirmElimination) {
      dispatch(removeExercise(exercise.id));
    }
  }, [confirmElimination]);
  return (
    <>
      {showAlert && (
        <Row className="fs-6 row rounded cursor text-start pb-2">
          <DeleteConfirmation
            message={"Are you sure you want to delete the exercise?"}
            setShowAlert={setShowAlert}
            setConfirmElimination={setConfirmElimination}
          />
        </Row>
      )}
      {!showAlert && (
        <motion.div
          className="fs-6 row rounded cursor text-start pb-2"
          whileHover={{
            backgroundColor: theme === "dark" ? "#00000" : "#68d89b",
          }}
        >
          <Col>
            <p className="m-0 pt-2">
              {exercise?.firstName} {exercise?.name}
            </p>
          </Col>
          <Col>
            <p className="m-0 pt-2">{exercise?.targetArea}</p>
          </Col>

          <Col xs={2}>
            <p className="m-0 pt-2">
              {exercise?.difficultyLevel.slice(0, 1) +
                exercise?.difficultyLevel.slice(1).toLowerCase()}
            </p>
          </Col>
          <Col xs={2}>
            <p className="m-0 pt-2 truncate">{exercise?.imageUrl}</p>
          </Col>
          <Col
            xs={1}
            className="d-flex align-items-center mt-2 justify-content-end "
          >
            <span
              className="material-symbols-outlined"
              onClick={() => {
                setShowAlert(true);
              }}
            >
              delete_forever
            </span>
          </Col>
        </motion.div>
      )}
    </>
  );
};

export default SingleExerciseAdmin;
