/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getExercisesCount,
  getNumExercisesByDifficulty,
  getPatientsCount,
  getPhysiosCount,
} from "../../redux/actions/adminsActions";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const DashboardView = () => {
  const dispatch = useDispatch();
  const physiotherapists = useSelector(
    (state) => state.admins.physiotherapists
  );
  const patients = useSelector((state) => state.admins.patientsByLastName);
  //   const exercises = useSelector((state) => state.admins.exercises);
  const totalExercises = useSelector((state) => state.admins.totalExercises);
  const totalPatients = useSelector((state) => state.admins.totalPatients);
  const totalPhysios = useSelector((state) => state.admins.totalPhysios);
  const numOfEasyExercises = useSelector((state) => state.admins.easyExercises);
  const numOfMediumExercises = useSelector(
    (state) => state.admins.mediumExercises
  );
  const numOfHardExercises = useSelector((state) => state.admins.hardExercises);
  const [statistics, setStatistics] = useState("patients-physios");
  useEffect(() => {
    dispatch(getExercisesCount());
    dispatch(getPatientsCount());
    dispatch(getPhysiosCount());
    dispatch(getNumExercisesByDifficulty("EASY"));
    dispatch(getNumExercisesByDifficulty("MEDIUM"));
    dispatch(getNumExercisesByDifficulty("HARD"));
  }, []);

  const data = [
    { name: "Patients", value: totalPatients },
    { name: "Physiotherapists", value: totalPhysios },
  ];

  const exercisesData = [
    { name: "Easy", value: numOfEasyExercises },
    { name: "Medium", value: numOfMediumExercises },
    { name: "Hard", value: numOfHardExercises },
  ];

  const COLORS = ["#ce9d58", "#9E59CF", "#5B401A"];
  return (
    <Row className="mx-2 mt-5 dashboard-rows">
      <Col xs={12} className="mt-2 text-center me-5">
        <Row>
          <Col xs={12} md={4}>
            <motion.div
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.04, backgroundColor: "#ce9d58" }}
              onClick={() => {
                setStatistics("patients-physios");
              }}
              className={`p-4 rounded cursor bg-grey`}
            >
              <p className="fw-bold fs-3">Patients</p>
              <p>Total: {totalPatients}</p>
            </motion.div>
          </Col>
          <Col xs={12} md={4}>
            <motion.div
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.04, backgroundColor: "#ce9d58" }}
              className={`p-4 rounded cursor bg-grey`}
              onClick={() => {
                setStatistics("patients-physios");
              }}
            >
              <p className="fw-bold fs-3">Physiotherapists</p>
              <p>Total: {totalPhysios}</p>
            </motion.div>
          </Col>
          <Col xs={12} md={4}>
            <motion.div
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.04, backgroundColor: "#ce9d58" }}
              onClick={() => {
                setStatistics("exercises");
              }}
              className={`p-4 rounded cursor bg-grey`}
            >
              <p className="fw-bold fs-3">Exercises</p>
              <p>Total: {totalExercises}</p>
            </motion.div>
          </Col>
          <Col xs={12}>
            {statistics === "patients-physios" && (
              <div style={{ height: "550px" }} className="bg-grey">
                <div
                  className="w-100 bg-grey rounded mt-4"
                  style={{ height: "500px" }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={900} height={350}>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="d-flex gap-3 ms-5">
                  <p>Patients = {totalPatients}</p>
                  <p>Physiotherapists = {totalPhysios} </p>
                </div>
              </div>
            )}
            {statistics === "exercises" && (
              <div className="bg-grey rounded mt-4" style={{ height: "550px" }}>
                <div className="w-100" style={{ height: "500px" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={900} height={350}>
                      <Pie
                        data={exercisesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="d-flex gap-3 ms-5">
                    <p>Easy = {numOfEasyExercises}</p>
                    <p> Medium = {numOfMediumExercises} </p>
                    <p> Hard = {numOfHardExercises}</p>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DashboardView;
