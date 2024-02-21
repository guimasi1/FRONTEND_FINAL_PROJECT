import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAssignment,
  closeAssignmentDialog,
} from "../../redux/actions/assignmentsActions";
const ConfirmAssignmentDialog = () => {
  const showDialog = useSelector((state) => state.assignments.dialogStatus);
  const dispatch = useDispatch();
  const assignmentToDeleteId = useSelector(
    (state) => state.assignments.assignmentToDeleteId
  );
  return (
    <motion.div
      id="dialog-assignment"
      className={`${
        showDialog ? "d-flex" : "d-none"
      } p-4 flex-column gap-2 position-absolute greenish-6 rounded position-fixed z-3 w-25 border border-2 border-black`}
    >
      <p className="fw-bold">
        Are you sure you want to delete the assignment?{" "}
      </p>
      <div className="d-flex gap-4 justify-content-center">
        <div
          className="d-flex justify-content-center align-items-center cursor"
          style={{ width: "50px", height: "50px" }}
          onClick={() => {
            dispatch(removeAssignment(assignmentToDeleteId));
            dispatch(closeAssignmentDialog());
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
            dispatch(closeAssignmentDialog());
          }}
        >
          <span className="material-symbols-outlined fs-2 bg-secondary text-white rounded-pill">
            close
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ConfirmAssignmentDialog;
