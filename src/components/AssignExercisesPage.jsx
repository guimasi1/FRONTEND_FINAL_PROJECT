/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  Pagination,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getSinglePatient } from "../redux/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";
import {
  getExercises,
  getExercisesByName,
} from "../redux/actions/exercisesActions";
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
import { motion } from "framer-motion";
import MyPagination from "./MyPagination";
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
  const exercisesDetailsByAssignment = useSelector(
    (state) => state.assignments.exercisesDetailsByAssignment
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
  const page = useSelector((state) => state.exercises.page);

  return (
    <motion.div
      className="px-3 container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.3 }}
    >
      {patientProfile && (
        <Row>
          <Col xs={{ span: 4 }}>
            <Row
              className="shadow-lg rounded-4 py-3 px-5 ms-3"
              id="your-patient-section"
            >
              <Col xs={12}>
                <div>
                  <div>
                    <h3 className="text-center pt-3">Your patient</h3>
                  </div>
                </div>
              </Col>
              <Col xs={12} className=" rounded-4 ">
                <div>
                  <div className="d-flex justify-content-center mt-2 mb-4">
                    <img
                      src={patientProfile.profilePictureUrl}
                      alt=""
                      className="image-profile-exercises rounded-4"
                    />
                  </div>
                  <h3 className="text-center mb-4 fs-4">
                    {patientProfile.firstName} {patientProfile.lastName}
                  </h3>
                  <div className="d-flex justify-content-between fs-7">
                    <p>
                      <strong>Email</strong>: {patientProfile.email}
                    </p>
                    <p>
                      <strong>Phone number</strong>:{" "}
                      {patientProfile.phoneNumber}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between fs-7">
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

          <Col
            xs={7}
            className="shadow-lg rounded-4 px-5 pb-3 ms-5"
            id="assigned-programs-section"
          >
            <h3 className="text-center mt-2 py-3">Assigned programs</h3>
            <Row>
              <Col className="text-end">
                <Button
                  className="brownish-button rounded-pill text-white mb-4 btn btn-sm "
                  onClick={() => {
                    const newAssignmentData = {
                      notes: "",
                      physiotherapist_id: currentPhysio.id,
                      patient_id: id,
                    };
                    dispatch(createAssignment(newAssignmentData));
                  }}
                >
                  <span className="material-symbols-outlined fs-3 px-2 py-2 rounded-circle d-flex justify-content-center align-items-center">
                    post_add
                  </span>
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
                  <Badge
                    className={`d-flex justify-content-center align-items-center rounded-pill px-4 ${
                      currentAssignment.assignmentStatus === "COMPLETED"
                        ? "bg-success text-white"
                        : currentAssignment.assignmentStatus === "IN_PROGRESS"
                        ? "bg-primary"
                        : "bg-secondary-subtle"
                    } text-black`}
                  >
                    {currentAssignment
                      ? currentAssignment.assignmentStatus
                      : ""}
                  </Badge>
                </Col>
                <Col className="text-end">
                  <p className="p-0 ">
                    <strong>Date: </strong>
                    {currentAssignment ? currentAssignment.assignmentDate : ""}
                  </p>
                </Col>
              </Row>
              <h3 className="my-4">Exercises</h3>
              <motion.div
                className="row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, ease: "linear", duration: 0.3 }}
              >
                <Col xs={12}>
                  <Row className=" rounded-2 text-center mb-2 fw-bold border-bottom pb-2">
                    <Col className="rounded-start-2" xs={1}>
                      N°
                    </Col>
                    <Col>Name</Col>
                    <Col>Target area</Col>
                    <Col>Difficulty</Col>
                    <Col xs={1}>Sets</Col>
                    <Col className="rounded-end-2" xs={1}>
                      Reps
                    </Col>
                    <Col xs={1}></Col>
                  </Row>
                </Col>
                {exercisesDetailsByAssignment &&
                  exercisesDetailsByAssignment.map((exercise, index) => (
                    <AddedExercise
                      key={index}
                      exercise={exercise}
                      index={index}
                    />
                  ))}
              </motion.div>
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
                  <span className="material-symbols-outlined">search</span>
                  <Form.Control
                    placeholder="Search by name"
                    onChange={(e) => {
                      dispatch(getExercisesByName(e.target.value, page));
                    }}
                  />
                </Col>
                <Col xs={5} className="my-4 d-flex align-items-center gap-3">
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
              <Row className="flex-grow-1">
                {exercises && (
                  <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
                    <MyPagination
                      className="d-flex justify-content-center align-items-center ms-5 flex-grow-1"
                      itemsCount={
                        exercises.length < 100 ? 100 : exercises.length
                      }
                      itemsPerPage={10}
                    />
                  </Col>
                )}
              </Row>
              <Row className="mb-4 gap-2 ms-lg-5 ps-lg-5">
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
    </motion.div>
  );
};

export default AssignExercisesPage;
