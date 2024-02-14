/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { disableInstantTransitions, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { removePatientFromPhysio } from "../redux/actions/physiotherapistActions";
import DeletePatientConfirmation from "./Utils/DeletePatientConfirmation";
import { useEffect, useState } from "react";

const SinglePatient = ({ patient }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myProfile = useSelector(
    (state) => state.physiotherapists.physioProfile
  );
  const [showAlert, setShowAlert] = useState(false);
  const [confirmElimination, setConfirmElimination] = useState(false);

  useEffect(() => {
    if (confirmElimination) {
      dispatch(removePatientFromPhysio(myProfile.id, patient.id));
    }
    setConfirmElimination(false);
  }, [confirmElimination]);

  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { delay: 0.2 } }}
      className="shadow-lg rounded-3 d-flex pt-4 pb-2 ps-1 ms-4 patient-card z-3 col"
    >
      {showAlert && (
        <DeletePatientConfirmation
          setConfirmElimination={setConfirmElimination}
          setShowAlert={setShowAlert}
          onPointerDown={(e) => e.stopPropagation()}
          message={"Do you want to remove the patient?"}
        />
      )}
      {!showAlert && (
        <div>
          <img
            src="https://placekitten.com/80"
            alt=""
            className="rounded-4 ms-1"
          />
        </div>
      )}

      {patient && !showAlert && (
        <div className="d-flex flex-column align-items-stretch justify-content-end position-relative">
          <span
            onClick={() => {
              if (myProfile) {
                // dispatch(removePatientFromPhysio(myProfile.id, patient.id));
                setShowAlert(true);
              } else {
                console.log("Something went wrong");
              }
            }}
            className="material-symbols-outlined text-end position-absolute top-0 end-0 bg-secondary-subtle d-flex justify-content-center align-items-center rounded-pill cursor"
            style={{ width: "25px", height: "25px" }}
          >
            close
          </span>
          <div className="flex-grow-1 ms-3">
            <p className="fw-bold pb-0 mb-0 ">
              {patient.firstName} {patient.lastName}
            </p>
          </div>
          <div className="ms-3 mt-1 fs-8 d-flex gap-1">
            <span className="material-symbols-outlined fs-5">mail</span>
            <p className="truncate m-0">{patient.email}</p>
          </div>
          <div className="ms-3 fs-7 d-flex gap-1 mt-1">
            <span className="material-symbols-outlined fs-5">call</span>
            {patient.phoneNumber}
          </div>
          <div className="mt-5 d-flex mb-3 name-container-patient align-self-end ms-4 ps-2">
            <div className="text-end ">
              <Button
                className="py-2 px-5 fs-8 rounded-2 brownish-button fw-bold "
                onClick={() => {
                  navigate("/assignExercises/" + patient.id);
                }}
              >
                View
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SinglePatient;
