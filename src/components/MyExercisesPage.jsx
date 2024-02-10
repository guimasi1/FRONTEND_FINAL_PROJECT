/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMyPatientProfile } from "../redux/actions/patientsActions";
import {
  getAssignmentsByPatient,
  setAssignmentCompleted,
  setAssignmentToInProgress,
} from "../redux/actions/assignmentsActions";
import { useFetcher } from "react-router-dom";
import SinglePatientAssignment from "./SinglePatientAssignment";
import SinglePatientExercisesDetails from "./SinglePatientExercisesDetails";
import DownloadPDFButton from "./DownloadPDFButton";

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

  const myExercisesDetails = useSelector(
    (state) => state.assignments.exercisesDetailsByAssignment
  );

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
          {myAssignments &&
            myAssignments.map((assignment, index) => (
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
                <div className="d-flex gap-2">
                  <Button
                    className={`rounded-1 ${
                      currentAssignment.assignmentStatus === "IN_PROGRESS"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                    onClick={() => {
                      dispatch(setAssignmentToInProgress(currentAssignment.id));
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
              )}
            </div>
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
