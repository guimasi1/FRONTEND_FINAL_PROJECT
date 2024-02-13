import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { closeDialog } from "../../redux/actions/exercisesActions";
import { removeExerciseDetails } from "../../redux/actions/assignmentsActions";
const ConfirmDialog = () => {
  const showDialog = useSelector((state) => state.exercises.dialogStatus);
  const dispatch = useDispatch();
  const exerciseId = useSelector((state) => state.exercises.currentExerciseId);
  return (
    <motion.div
      id="dialog"
      className={`${
        showDialog ? "d-flex" : "d-none"
      } p-4 flex-column gap-2 position-absolute greenish-6 rounded position-fixed z-3`}
    >
      <p className="fw-bold">Are you sure you want to delete the exercise?</p>

      {exerciseId && (
        <div className="d-flex gap-4 justify-content-center">
          <div
            className="d-flex justify-content-center align-items-center cursor"
            style={{ width: "50px", height: "50px" }}
            onClick={() => {
              dispatch(removeExerciseDetails(exerciseId));
              dispatch(closeDialog());
            }}
          >
            <span className="material-symbols-outlined fs-2 text-white greenish rounded-pill">
              check
            </span>
          </div>
          <div
            className="d-flex justify-content-center align-items-center cursor"
            style={{ width: "50px", height: "50px" }}
            onClick={() => {
              dispatch(closeDialog());
            }}
          >
            <span className="material-symbols-outlined fs-2 bg-secondary text-white rounded-pill">
              close
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ConfirmDialog;
