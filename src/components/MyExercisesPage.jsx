/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMyPatientProfile } from "../redux/actions/patientsActions";
import {
  getAssignmentsByPatient,
  setAssignmentCompleted,
  setAssignmentToInProgress,
} from "../redux/actions/assignmentsActions";
import SinglePatientAssignment from "./SinglePatientAssignment";
import SinglePatientExercisesDetails from "./SinglePatientExercisesDetails";
import DownloadPDFButton from "./DownloadPDFButton";
import { motion } from "framer-motion";

const MyExercisesPage = () => {
  const myPatientProfile = useSelector(
    (state) => state.patients.patientProfile
  );
  const myAssignments = useSelector(
    (state) => state.assignments.patientAssignments
  );

  const currentAssignment = useSelector(
    (state) => state.assignments.newAssignment
  );

  const exercises = useSelector(
    (state) => state.assignments.exercisesDetailsByAssignment
  );
  const myExercisesDetails = Object.values(
    exercises.reduce((acc, exercise) => {
      // Usa l'ID dell'esercizio come chiave nell'oggetto di appoggio
      acc[exercise.id] = exercise;
      return acc;
    }, {})
  );

  const [assignmentsFilter, setAssignmentsFilter] = useState("");

  const [showNotes, setShowNotes] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyPatientProfile());
  }, []);

  useEffect(() => {
    if (myPatientProfile) {
      dispatch(getAssignmentsByPatient(myPatientProfile.id));
    }
  }, [myPatientProfile]);

  return (
    <Container className="mt-5">
      <Row className="gap-4">
        <Col
          xs={12}
          xl={4}
          className="shadow-lg rounded-5 p-5 assignment-column-patient"
        >
          <h4>Your assignments</h4>

          <hr className="p-0 mb-4" />
          <div className="d-flex gap-2 mb-3">
            <motion.span
              whileHover={{ opacity: 0.6 }}
              className={`cursor badge px-2 py-2 ${
                assignmentsFilter === "" ? "bg-warning" : "bg-secondary"
              }`}
              onClick={() => {
                setAssignmentsFilter("");
              }}
            >
              All
            </motion.span>
            <motion.span
              whileHover={{ opacity: 0.6 }}
              className={`cursor badge px-2 py-2 ${
                assignmentsFilter === "ASSIGNED" ? "bg-warning" : "bg-secondary"
              }`}
              onClick={() => {
                setAssignmentsFilter("ASSIGNED");
              }}
            >
              Assigned
            </motion.span>
            <motion.span
              whileHover={{ opacity: 0.6 }}
              className={`cursor badge px-2 py-2 ${
                assignmentsFilter === "IN_PROGRESS"
                  ? "bg-warning"
                  : "bg-secondary"
              }`}
              onClick={() => {
                setAssignmentsFilter("IN_PROGRESS");
              }}
            >
              In progress
            </motion.span>
            <motion.span
              whileHover={{ opacity: 0.6 }}
              className={`cursor badge px-2 py-2 ${
                assignmentsFilter === "COMPLETED"
                  ? "bg-warning"
                  : "bg-secondary"
              }`}
              onClick={() => {
                setAssignmentsFilter("COMPLETED");
              }}
            >
              Completed
            </motion.span>
          </div>
          {myAssignments &&
            myAssignments
              .filter((assignment) =>
                assignment.assignmentStatus.includes(assignmentsFilter)
              )
              .map((assignment, index) => (
                <SinglePatientAssignment
                  assignment={assignment}
                  key={assignment.id}
                  index={index}
                />
              ))}
        </Col>
        <Col className="shadow-lg rounded-5 p-5" id="exercises">
          <div className="d-flex justify-content-end ">
            <DownloadPDFButton />
          </div>
          <div>
            <div>
              <h4 className="mb-4">Exercises</h4>
              {currentAssignment && (
                <div className="d-flex justify-content-between mb-4">
                  <div className="d-flex gap-2">
                    <Button
                      className={`rounded-1 ${
                        currentAssignment.assignmentStatus === "IN_PROGRESS"
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                      onClick={() => {
                        dispatch(
                          setAssignmentToInProgress(currentAssignment.id)
                        );
                      }}
                    >
                      In progress
                    </Button>
                    <Button
                      className={`rounded-1 ${
                        currentAssignment.assignmentStatus === "COMPLETED"
                          ? "btn-success"
                          : "btn-secondary"
                      }`}
                      onClick={() => {
                        dispatch(setAssignmentCompleted(currentAssignment.id));
                      }}
                    >
                      Completed
                    </Button>
                  </div>
                  <Button
                    className="brownish-button-2 d-flex justify-content-center px-3 align-items-center me-2"
                    onClick={() => {
                      setShowNotes(!showNotes);
                    }}
                  >
                    <span className="material-symbols-outlined fs-4">
                      clinical_notes
                    </span>
                  </Button>
                </div>
              )}
            </div>
            {currentAssignment && showNotes && (
              <div className="d-flex flex-column mt-3">
                <p className="p-0 fw-bold mb-0">Notes</p>
                <p>{currentAssignment.notes}</p>
              </div>
            )}
            {myExercisesDetails &&
              myExercisesDetails.map((exercise) => (
                <SinglePatientExercisesDetails
                  key={exercise.id}
                  exercise={exercise}
                />
              ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default MyExercisesPage;
