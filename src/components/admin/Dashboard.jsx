import { Col, Container, Row } from "react-bootstrap";
import LateralNavbar from "./LateralNavbar";
import { useState } from "react";
import PatientsView from "./PatientsView";
import PhysiotherapistsView from "./PhysiotherapistsView";
import ExercisesView from "./ExercisesView";

const Dashboard = () => {
  const [activeBreadCrumb, setActiveBreadCrumb] = useState("");
  const [width, setWidth] = useState("auto");
  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="p-0 bg-grey" style={{ width }}>
          <LateralNavbar
            setActiveBreadCrumb={setActiveBreadCrumb}
            setWidth={setWidth}
            width={width}
          />
        </Col>
        <Col>
          {activeBreadCrumb === "patients" && <PatientsView />}
          {activeBreadCrumb === "physiotherapists" && <PhysiotherapistsView />}
          {activeBreadCrumb === "exercises" && <ExercisesView />}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
