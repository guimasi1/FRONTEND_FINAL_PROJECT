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
import { useTheme } from "../Theme";
import { motion } from "framer-motion";
import { HashLoader } from "react-spinners";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [activeBreadCrumb, setActiveBreadCrumb] = useState("main");
  const [width, setWidth] = useState("auto");
  const adminProfile = useSelector((state) => state.admins.adminProfile);
  const navigate = useNavigate();
  const [waiting, setWaiting] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    dispatch(getMyAdminProfile());
  }, []);

  return (
    <Container fluid>
      {waiting && (
        <div className="completely-centered z-1">
          <HashLoader color="#0e9a3d" size={200} />
        </div>
      )}
      {adminProfile && (
        <Row>
          <Col
            xs={2}
            className={`${theme === "dark" ? "bg-grey" : ""} p-0 `}
            style={{ width }}
          >
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
                <div className="d-flex justify-content-center align-items-center">
                  <motion.span
                    whileHover={{
                      backgroundColor: theme === "dark" ? "#00000" : "#68d89b",
                    }}
                    className="material-symbols-outlined mb-2 cursor fs-3 px-2 py-2 rounded-pill"
                    onClick={() => {
                      setWaiting(true);
                      setTimeout(() => {
                        navigate("/admin-login");
                        dispatch(adminLogout());
                        Cookies.set("adminToken", "");
                      }, 1000);
                    }}
                  >
                    logout
                  </motion.span>
                </div>
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
