import { useState } from "react";
import { Badge, Col, Form, Row } from "react-bootstrap";
import { createExerciseWithDetails } from "../redux/actions/exercisesActions";
const SingleExercise = ({ exercise }) => {
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(1);

  return (
    <Col className="border rounded-5 p-4 ">
      <Row>
        <Col xs={12} className="fw-bold">
          {exercise.name}
        </Col>
        <Col className="mt-3 d-flex justify-content-between" xs={12}>
          <div>
            <strong>Target area: </strong>
            {exercise.targetArea}
          </div>
          <Badge
            className="py-2 px-3"
            bg={`${
              exercise.difficultyLevel === "EASY"
                ? "success"
                : exercise.difficultyLevel === "MEDIUM"
                ? "warning"
                : "danger"
            } `}
          >
            {exercise.difficultyLevel}
          </Badge>
        </Col>
        <Col xs={12} className="mt-3">
          {exercise.description}
        </Col>
        <Col xs={12} className="my-3">
          <div className="d-flex align-items-center justify-content-between">
            <Form.Label>Sets</Form.Label>
            <Form.Select
              className="mb-2 w-50"
              onChange={(e) => setSets(e.target.value)}
            >
              <option>Sets</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <Form.Label>Repetitions</Form.Label>
            <Form.Select
              className="w-50"
              onChange={(e) => {
                setReps(e.target.value);
                console.log(sets);
                console.log(reps);
              }}
            >
              <option>Reps</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </div>
        </Col>
        <Col className="mt-1 d-flex justify-content-center ">
          <div className="d-flex justify-content-center align-items-center bg-warning w-50 rounded-pill cursor fw-bold add-button">
            <p className="p-0 mt-3 me-2">ADD</p>
            <img src="\images\add-icon.svg" alt="" className="add-icons" />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleExercise;