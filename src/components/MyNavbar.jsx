/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { setLogStatus, setRoleState } from "../redux/actions/authentication";
import { motion } from "framer-motion";
const MyNavbar = () => {
  const myProfile = useSelector((state) => state.patients.patientProfile);
  const myPhysioProfile = useSelector(
    (state) => state.physiotherapists.physioProfile
  );

  const dispatch = useDispatch();
  let role = Cookies.get("role");
  const roleState = useSelector((state) => state.register.role);
  const loggedIn = useSelector((state) => state.register.loggedIn);
  const location = useLocation();
  const navigate = useNavigate();
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isPatientsHovered, setIsPatientsHovered] = useState(false);
  const [isPhysiosHovered, setIsPhysiosHovered] = useState(false);
  const [isYourProgramsHovered, setIsYourProgramsHovered] = useState(false);
  const [isPatientProfileHovered, setIsPatientProfileHovered] = useState(false);
  const [isPhysioProfileHovered, setIsPhysioProfileHovered] = useState(false);
  const [isPricingHovered, setIsPricingHovered] = useState(false);
  const profilePictureUrl =
    roleState === "PATIENT"
      ? myProfile.profilePictureUrl || "images/Circle-icons-profile.svg"
      : myPhysioProfile.profilePictureUrl || "images/Circle-icons-profile.svg";
  useEffect(() => {
    dispatch(setRoleState(role));
  }, []);
  useEffect(() => {
    dispatch(setRoleState(role));
  }, [role]);
  return (
    <Navbar expand="lg">
      <Container className="ps-lg-5">
        <Navbar.Brand className="me-0 ">
          <img
            src="/images/logo.svg"
            width="100"
            height="100"
            className="d-inline-block align-top "
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto me-lg-3  ">
            <div
              className="d-flex gap-5 justify-content-evenly"
              id="navbar-div"
            >
              <motion.div
                onHoverStart={() => {
                  setIsHomeHovered(true);
                }}
                onHoverEnd={() => {
                  setIsHomeHovered(false);
                }}
                animate={{
                  backgroundColor: isHomeHovered ? "#0e9a3d" : "#fff",
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className={`rounded-4 px-3 ${
                  location.pathname === "/"
                    ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                    : ""
                }`}
              >
                <div className={`d-flex align-items-center fw-bold`}>
                  <Link
                    to="/"
                    className={`text-decoration-none ${
                      isHomeHovered ? "text-white" : "text-black"
                    }  mt-2 pb-1`}
                  >
                    Home
                  </Link>
                </div>
              </motion.div>
              {roleState === "PATIENT" && loggedIn ? (
                <motion.div
                  onHoverStart={() => {
                    setIsPhysiosHovered(true);
                  }}
                  onHoverEnd={() => {
                    setIsPhysiosHovered(false);
                  }}
                  animate={{
                    backgroundColor: isPhysiosHovered ? "#0e9a3d" : "#fff",
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className={`rounded-4 px-3 ${
                    location.pathname === "/physiotherapists"
                      ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                      : ""
                  }`}
                >
                  <div className={`d-flex align-items-center fw-bold`}>
                    <Link
                      to="/physiotherapists"
                      className={`${
                        isPhysiosHovered ? "text-white" : "text-black"
                      } text-decoration-none mt-2 fw-bold pb-1`}
                    >
                      Physiotherapists
                    </Link>
                  </div>
                </motion.div>
              ) : (
                ""
              )}
              {roleState === "PHYSIOTHERAPIST" && loggedIn ? (
                <motion.div
                  onHoverStart={() => {
                    setIsPatientsHovered(true);
                  }}
                  onHoverEnd={() => {
                    setIsPatientsHovered(false);
                  }}
                  animate={{
                    backgroundColor: isPatientsHovered ? "#0e9a3d" : "#fff",
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className={`rounded-4 px-3 ${
                    location.pathname === "/patients"
                      ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                      : ""
                  }`}
                >
                  <div className={`d-flex align-items-center fw-bold`}>
                    <Link
                      to="/patients"
                      className={`${
                        isPatientsHovered ? "text-white" : "text-black"
                      } text-decoration-none mt-2 fw-bold pb-1`}
                    >
                      Patients
                    </Link>
                  </div>
                </motion.div>
              ) : (
                ""
              )}
              {roleState === "PATIENT" && loggedIn ? (
                <motion.div
                  onHoverStart={() => {
                    setIsYourProgramsHovered(true);
                  }}
                  onHoverEnd={() => {
                    setIsYourProgramsHovered(false);
                  }}
                  animate={{
                    backgroundColor: isYourProgramsHovered ? "#0e9a3d" : "#fff",
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className={`rounded-4 px-3 ${
                    location.pathname === "/myExercises"
                      ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                      : ""
                  }`}
                >
                  <div className={`d-flex align-items-center fw-bold`}>
                    <Link
                      to="/myExercises"
                      className={`${
                        isYourProgramsHovered ? "text-white" : "text-black"
                      } text-decoration-none mt-2 fw-bold pb-1`}
                    >
                      Your programs
                    </Link>
                  </div>
                </motion.div>
              ) : (
                ""
              )}
              {
                // eslint-disable-next-line no-const-assign
                roleState === "PATIENT" && loggedIn ? (
                  <motion.div
                    onHoverStart={() => {
                      setIsPatientProfileHovered(true);
                    }}
                    onHoverEnd={() => {
                      setIsPatientProfileHovered(false);
                    }}
                    animate={{
                      backgroundColor: isPatientProfileHovered
                        ? "#0e9a3d"
                        : "#fff",
                    }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className={`rounded-4 px-3 ${
                      location.pathname === "/profile"
                        ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                        : ""
                    }`}
                  >
                    <div className={`d-flex align-items-center fw-bold`}>
                      <Link
                        to="/profile"
                        className={`${
                          isPatientProfileHovered ? "text-white" : "text-black"
                        } text-decoration-none mt-2 fw-bold pb-1`}
                      >
                        Profile
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  ""
                )
              }
              {
                // eslint-disable-next-line no-const-assign
                roleState === "PHYSIOTHERAPIST" && loggedIn ? (
                  <motion.div
                    onHoverStart={() => {
                      setIsPhysioProfileHovered(true);
                    }}
                    onHoverEnd={() => {
                      setIsPhysioProfileHovered(false);
                    }}
                    animate={{
                      backgroundColor: isPhysioProfileHovered
                        ? "#0e9a3d"
                        : "#fff",
                    }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                    className={`rounded-4 px-3 ${
                      location.pathname === "/physioProfile"
                        ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                        : ""
                    }`}
                  >
                    <div className={`d-flex align-items-center fw-bold`}>
                      <Link
                        to="/physioProfile"
                        className={`${
                          isPhysioProfileHovered ? "text-white" : "text-black"
                        } text-decoration-none mt-2 fw-bold pb-1`}
                      >
                        Profile
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  ""
                )
              }

              <motion.div
                onHoverStart={() => {
                  setIsPricingHovered(true);
                }}
                onHoverEnd={() => {
                  setIsPricingHovered(false);
                }}
                animate={{
                  backgroundColor: isPricingHovered ? "#0e9a3d" : "#fff",
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className={`rounded-4 px-3 ${
                  location.pathname === "/pricing"
                    ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                    : ""
                }`}
              >
                <div className={`d-flex align-items-center fw-bold`}>
                  <Link
                    to="/pricing"
                    className={`text-decoration-none ${
                      isPricingHovered ? "text-white" : "text-black"
                    }  mt-2 pb-1`}
                  >
                    Pricing
                  </Link>
                </div>
              </motion.div>
            </div>
          </Nav>
        </Navbar.Collapse>
        {!loggedIn && (
          <div className="d-flex gap-4 mt-2">
            <Link
              to="/login"
              className="text-decoration-none text-black fw-bold py-3"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-decoration-none text-black fw-bold greenish py-3 px-4 rounded-pill text-white"
            >
              Get Started
            </Link>
          </div>
        )}
        {loggedIn && (
          <div className="d-flex gap-4 mt-2 align-items-center">
            {roleState === "PHYSIOTHERAPIST" && (
              <p className="m-0 fw-bold">Hi, John!</p>
            )}
            {roleState === "PATIENT" && (
              <p className="m-0 fw-bold">Hi, {myProfile?.firstName}!</p>
            )}
            <div style={{ width: "50px" }}>
              <img
                src={profilePictureUrl}
                className="rounded-pill cursor w-100"
                alt=""
                onClick={() => {
                  if (roleState === "PATIENT") {
                    navigate("/profile");
                  } else {
                    navigate("/physioProfile");
                  }
                }}
              />
            </div>
            <div
              onClick={() => {
                dispatch(setLogStatus());
                navigate("/");
              }}
              className="text-decoration-none text-black fw-bold py-3 cursor"
            >
              Logout
            </div>
          </div>
        )}
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
