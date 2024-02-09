/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getSinglePatient } from "../redux/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";
import { getExercises } from "../redux/actions/exercisesActions";
import SingleExercise from "./SingleExercise";
import Select from "react-select";
import {
  addExerciseToAssignment,
  createAssignment,
  getAssignmentsByPatientAndPhysio,
  getSingleAssignment,
} from "../redux/actions/assignmentsActions";
import { getMyPhysioProfile } from "../redux/actions/physiotherapistActions";
import AddedExercise from "./AddedExercise";
import SingleAssignment from "./SingleAssignment";
const AssignExercisesPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const patientProfile = useSelector((state) => state.patients.singlePatient);
  const currentPhysio = useSelector(
    (state) => state.physiotherapists.physioProfile
  );
  const assignments = useSelector(
    (state) => state.assignments.assignmentsByIds
  );
  const currentAssignment = useSelector(
    (state) => state.assignments.newAssignment
  );
  // eslint-disable-next-line no-unused-vars
  const newExerciseId = useSelector((state) => state.exercises.newExercise);

  const exercises = useSelector((state) => state.exercises.exercises.content);
  // const [targetArea, setTargetArea] = useState("");
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    dispatch(getMyPhysioProfile());
    if (id) {
      dispatch(getSinglePatient(id));
    }
    dispatch(getExercises());
    if (id && currentPhysio) {
      dispatch(getAssignmentsByPatientAndPhysio(id, currentPhysio.id));
    }

    if (currentAssignment && currentAssignment.id && assignments) {
      dispatch(getSingleAssignment(currentAssignment.id));
    }
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(getSinglePatient(id));
    }
    dispatch(getExercises());
  }, [update]);

  useEffect(() => {
    if (newExerciseId && currentAssignment && currentAssignment.id) {
      dispatch(addExerciseToAssignment(currentAssignment.id, newExerciseId.id));
    }
  }, [newExerciseId]);

  const options = [
    { value: "Abductors", label: "Abductors" },
    { value: "Adductors", label: "Adductors" },
    { value: "Abs", label: "Abs" },
    { value: "Biceps", label: "Biceps" },
    { value: "Calves", label: "Calves" },
    { value: "Chest", label: "Chest" },
    { value: "Hamstrings", label: "Hamstrings" },
    { value: "Hip flexors", label: "Hip flexors" },
    { value: "Lats", label: "Lats" },
    { value: "Lower back", label: "Lower back" },
    { value: "Upper back", label: "Upper back" },
    { value: "Neck", label: "Neck" },
    { value: "Plantar Fascia", label: "Plantar Fascia" },
    { value: "Quads", label: "Quads" },
    { value: "Shoulders", label: "Shoulders" },
    { value: "Traps", label: "Traps" },
    { value: "Triceps", label: "Triceps" },
    { value: "Cardiovascular", label: "Cardiovascular" },
    { value: "Pulmonary", label: "Pulmonary" },
  ];
  const difficulties = [
    { value: "EASY", label: "Easy" },
    { value: "MEDIUM", label: "Medium" },
    { value: "HARD", label: "Hard" },
  ];
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  return (
    <Container className="px-5">
      {patientProfile && (
        <Row className="gap-3">
          <Col>
            <Row className="shadow-lg rounded-4 py-3">
              <Col xs={12}>
                <div className="position-relative container">
                  <div>
                    <h1 className="text-center ">Your patient</h1>
                  </div>
                </div>
              </Col>
              <Col
                xs={12}
                md={{ offset: 3, span: 6 }}
                className=" rounded-4 px-5"
              >
                <div>
                  <div className="d-flex justify-content-center mt-5 mb-4">
                    <img
                      src={patientProfile.profilePictureUrl}
                      alt=""
                      className="image-profile-exercises rounded-4"
                    />
                  </div>
                  <h3 className="text-center mb-4">
                    {patientProfile.firstName} {patientProfile.lastName}
                  </h3>
                  <div className="d-flex justify-content-between">
                    <p>
                      <strong>Email</strong>: {patientProfile.email}
                    </p>
                    <p>
                      <strong>Phone number</strong>:{" "}
                      {patientProfile.phoneNumber}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between ">
                    <p>
                      <strong>Gender</strong>: {patientProfile.gender}
                    </p>
                    <p>
                      <strong>Date of birth</strong>:{" "}
                      {patientProfile.dateOfBirth}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={12} className="shadow-lg rounded-4 px-5 pb-4 mb-3">
            <h3 className="text-center mt-2 py-3">Assigned programs</h3>
            <Row>
              <Col className="text-end">
                <Button
                  className="brownish-button mb-4"
                  onClick={() => {
                    const newAssignmentData = {
                      notes: "",
                      physiotherapist_id: currentPhysio.id,
                      patient_id: id,
                    };
                    dispatch(createAssignment(newAssignmentData));
                    if (currentAssignment) {
                      console.log(currentAssignment);
                    }
                  }}
                >
                  New assignment
                </Button>
              </Col>
            </Row>
            <Row className="mb-2 align-items-center cursor">
              <Col className="fw-bold" xs={1}>
                <div className="d-flex justify-content-center align-items-center py-2">
                  N°
                </div>
              </Col>
              <Col className="fw-bold">Assignment Date</Col>
              <Col className="fw-bold">Status</Col>
              <Col className="d-flex gap-3 justify-content-end"></Col>
            </Row>
            {assignments &&
              assignments.map((assignment, index) => (
                <SingleAssignment
                  assignment={assignment}
                  index={index}
                  key={assignment.id}
                />
              ))}
          </Col>
          {currentAssignment && (
            <Col className="shadow-lg rounded-4 px-5 mt-3">
              <Row>
                <Col
                  xs={12}
                  className="mt-4 d-flex justify-content-between mb-3"
                >
                  <h2>Assignment</h2>
                  <Badge className="d-flex justify-content-center align-items-center rounded-pill px-4 bg-secondary-subtle text-black">
                    {currentAssignment
                      ? currentAssignment.assignmentStatus
                      : ""}
                  </Badge>
                </Col>
                <Col className="text-end">
                  <p className="p-0 ">
                    <strong>Date</strong>:{" "}
                    {currentAssignment ? currentAssignment.assignmentDate : ""}
                  </p>
                </Col>
              </Row>
              <h3 className="my-4">Exercises</h3>
              <Row>
                <Col xs={12}>
                  <Row className=" rounded-2 text-center ">
                    <Col className="rounded-start-2" xs={1}>
                      N°
                    </Col>
                    <Col>Name</Col>
                    <Col>Sets</Col>
                    <Col className="rounded-end-2">Reps</Col>
                    <Col xs={1}></Col>
                  </Row>
                </Col>
                {currentAssignment.exercisesDetails &&
                  currentAssignment.exercisesDetails.map((exercise, index) => (
                    <AddedExercise
                      key={exercise.id}
                      exercise={exercise}
                      index={index}
                    />
                  ))}
              </Row>
              <Row className="mt-4">
                {currentAssignment && (
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Notes</Form.Label>
                      <Form.Control
                        value={currentAssignment ? currentAssignment.notes : ""}
                        as="textarea"
                        rows={3}
                        onChange={(e) => {}}
                      />
                    </Form.Group>
                  </Col>
                )}
              </Row>
              <Row>
                <Col xs={3} className="my-4 d-flex align-items-center gap-3">
                  <p className="p-0 fw-bold mt-3">Target Area</p>
                  <Select
                    className="w-75"
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </Col>
                <Col xs={3} className="my-4 d-flex align-items-center gap-3">
                  <p className="p-0 fw-bold mt-3">Difficulty</p>
                  <Select
                    className="w-75"
                    defaultValue={selectedDifficulty}
                    onChange={setSelectedDifficulty}
                    options={difficulties}
                  />
                </Col>
              </Row>

              <Row
                xs={1}
                md={2}
                lg={4}
                className="mb-4 gap-2 justify-content-around"
              >
                {exercises &&
                  currentAssignment &&
                  exercises.map((exercise) => (
                    <SingleExercise
                      exercise={exercise}
                      key={exercise.id}
                      getExercises={getExercises}
                      setUpdate={setUpdate}
                      update={update}
                      getSingleAssignment={getSingleAssignment}
                      currentAssignmentId={currentAssignment.id}
                    />
                  ))}
              </Row>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default AssignExercisesPage;
