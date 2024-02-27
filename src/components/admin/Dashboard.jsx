/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from "react-bootstrap";
import LateralNavbar from "./LateralNavbar";
import { useEffect, useState } from "react";
import PatientsView from "./PatientsView";
import PhysiotherapistsView from "./PhysiotherapistsView";
import ExercisesView from "./ExercisesView";
import DashboardView from "./DashboardView";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLogout,
  getMyAdminProfile,
} from "../../redux/actions/adminsActions";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [activeBreadCrumb, setActiveBreadCrumb] = useState("main");
  const [width, setWidth] = useState("auto");
  const adminProfile = useSelector((state) => state.admins.adminProfile);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getMyAdminProfile());
  }, []);
  return (
    <Container fluid>
      {adminProfile && (
        <Row>
          <Col xs={2} className="p-0 bg-grey" style={{ width }}>
            <LateralNavbar
              activeBreadCrumb={activeBreadCrumb}
              setActiveBreadCrumb={setActiveBreadCrumb}
              setWidth={setWidth}
              width={width}
            />
          </Col>
          <Col>
            {adminProfile && (
              <div className="d-flex justify-content-center align-items-end me-3 flex-column">
                <p className="mt-2 text-end fw-bold">
                  Admin: {adminProfile?.firstName} {adminProfile?.lastName}
                </p>
                <span
                  className="material-symbols-outlined mb-2 cursor fs-3"
                  onClick={() => {
                    dispatch(adminLogout());
                    navigate("/admin-login");
                    Cookies.set("adminToken", "");
                  }}
                >
                  logout
                </span>
              </div>
            )}
            {adminProfile && (
              <>
                {activeBreadCrumb === "main" && <DashboardView />}
                {activeBreadCrumb === "patients" && <PatientsView />}
                {activeBreadCrumb === "physiotherapists" && (
                  <PhysiotherapistsView />
                )}
                {activeBreadCrumb === "exercises" && <ExercisesView />}
              </>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;
