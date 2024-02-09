/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMyPatientProfile } from "../redux/actions/patientsActions";
import { getAssignmentsByPatient } from "../redux/actions/assignmentsActions";
import { useFetcher } from "react-router-dom";
import SinglePatientAssignment from "./SinglePatientAssignment";
import SinglePatientExercisesDetails from "./SinglePatientExercisesDetails";

const MyExercisesPage = () => {
  const myPatientProfile = useSelector(
    (state) => state.patients.patientProfile
  );
  const myAssignments = useSelector(
    (state) => state.assignments.patientAssignments
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
          {/* <Row className="fw-bold mt-3 mb-2">
            <Col xs={1}>N°</Col>
            <Col>Assigned by</Col>
            <Col>Date</Col>
          </Row> */}
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
        <Col className="shadow-lg rounded-5 p-5">
          <h4 className="mb-4">Exercises</h4>
          {myExercisesDetails &&
            myExercisesDetails.map((exercise) => (
              <SinglePatientExercisesDetails
                key={exercise.id}
                exercise={exercise}
              />
            ))}
        </Col>
      </Row>
    </Container>
  );
};
export default MyExercisesPage;
