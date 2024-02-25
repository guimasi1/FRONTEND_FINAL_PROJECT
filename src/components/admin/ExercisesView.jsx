/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Col, Form, Row } from "react-bootstrap";
import SingleExerciseAdmin from "./SingleExerciseAdmin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllExercisesByParams } from "../../redux/actions/adminsActions";
import Select from "react-select";

const ExercisesView = () => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(13);
  const exercises = useSelector((state) => state.admins.exercises);
  const [params, setParams] = useState({
    name: "",
    difficultyLevel: "",
    targetArea: "",
  });

  const difficulties = [
    { value: "ANY", label: "Any" },
    { value: "EASY", label: "Easy" },
    { value: "MEDIUM", label: "Medium" },
    { value: "HARD", label: "Hard" },
  ];

  const options = [
    { value: "ANY", label: "Any" },
    { value: "Abductors", label: "Abductors" },
    { value: "Adductors", label: "Adductors" },
    { value: "Abs", label: "Abs" },
    { value: "Biceps", label: "Biceps" },
    { value: "Calves", label: "Calves" },
    { value: "Chest", label: "Chest" },
    { value: "Hamstrings", label: "Hamstrings" },
    { value: "Hip flexors", label: "Hip flexors" },
    { value: "Glutes", label: "Glutes" },
    { value: "Hips", label: "Hips" },
    { value: "Lats", label: "Lats" },
    { value: "Lower back", label: "Lower back" },
    { value: "Upper back", label: "Upper back" },
    { value: "Neck", label: "Neck" },
    { value: "Plantar Fascia", label: "Plantar Fascia" },
    { value: "Quads", label: "Quads" },
    { value: "Shoulders", label: "Shoulders" },
    { value: "Traps", label: "Traps" },
    { value: "Triceps", label: "Triceps" },
    { value: "Wrists", label: "Wrists" },
    { value: "Ankles", label: "Ankles" },
    { value: "Cardiovascular", label: "Cardiovascular" },
    { value: "Pulmonary", label: "Pulmonary" },
    { value: "Balance", label: "Balance" },
  ];
  const handleDifficultyChange = (selectedOption) => {
    setParams({
      ...params,
      difficultyLevel: selectedOption.value,
    });
  };
  const handleSelectChange = (selectedOption) => {
    setParams({
      ...params,
      targetArea: selectedOption.value,
    });
  };
  useEffect(() => {
    dispatch(getAllExercisesByParams(params, size));
  }, []);

  useEffect(() => {
    dispatch(getAllExercisesByParams(params, size));
  }, [params, size]);

  return (
    <Row className="mx-2 dashboard-rows h-100">
      <Col xs={12} className="mt-2 text-center me-5">
        <h1>Exercises</h1>
        <Row className="mb-3 mt-4 text-start ">
          <Col xs={2} className="d-flex gap-3">
            <div className="d-flex flex-column">
              <Form.Label>Search</Form.Label>
              <Form.Control
                placeholder="Search by name"
                style={{ width: "250px" }}
                onChange={(e) => {
                  setParams({ ...params, name: e.target.value });
                }}
              />
            </div>
          </Col>
          <Col xs={{ offset: 0, span: 3 }}>
            <div className="d-flex flex-column ms-5 ps-4">
              <Form.Label>Target Area</Form.Label>
              <Select
                defaultValue={options.find(
                  (option) => option.value === params.targetArea
                )}
                onChange={handleSelectChange}
                options={options}
              />
            </div>
          </Col>
          <Col xs={{ offset: 0, span: 3 }}>
            <div className="d-flex flex-column ">
              <Form.Label>Difficulty level</Form.Label>
              <Select
                defaultValue={difficulties.find(
                  (option) => option.value === params.difficultyLevel
                )}
                onChange={handleDifficultyChange}
                options={difficulties}
              />
            </div>
          </Col>
        </Row>
        <Row className="mt-0 border rounded">
          <Col className="border border-bottom-0 border-top-0 border-end-0 rounded">
            <div className="d-flex gap-2 mt-2 mb-1 pt-1 cursor">
              <p className="fw-bold">Name</p>
              <span className="material-symbols-outlined">swap_vert</span>
            </div>
          </Col>
          <Col className="border text-start">
            <p className="mt-2 mb-1 pt-1 fw-bold">Target Area</p>
          </Col>
          <Col xs={2} className="border text-start">
            <p className="mt-2 mb-1 pt-1 fw-bold">Difficulty</p>
          </Col>
          <Col xs={2} className="border border-end-0 text-start">
            <p className="mt-2 mb-1 pt-1 fw-bold">Image Url</p>
          </Col>
          <Col xs={1} className="border border-start-0"></Col>
        </Row>
        {exercises?.map((exercise) => (
          <SingleExerciseAdmin exercise={exercise} key={exercise.id} />
        ))}

        <Button
          className="btn btn-secondary my-4 px-5 fw-bold"
          onClick={() => {
            setSize(size + 10);
          }}
        >
          Show more
        </Button>
      </Col>
    </Row>
  );
};
export default ExercisesView;
