/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { setLogStatus, setRoleState } from "../redux/actions/authentication";
import { motion } from "framer-motion";
import { useTheme } from "./Theme";
import DarkModeButton from "./Utils/DarkModeButton";

const MyNavbar = ({ ThemeProvider }) => {
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
  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "light") {
      document.getElementById("root").classList.add("light");
      document.getElementById("root").classList.remove("dark");
    } else {
      document.getElementById("root").classList.add("dark");
      document.getElementById("root").classList.remove("light");
    }
  }, [theme]);

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };
  const pathLength = 1396.5869140625;
  return (
    <Navbar
      expand="lg"
      className={location.pathname === "/admin" ? "d-none" : ""}
    >
      <Container className="ps-lg-3">
        <Navbar.Brand className="me-0 ">
          {/* <img
            src="/images/logo.svg"
            width="100"
            height="100"
            className="d-inline-block align-top "
            alt="React Bootstrap logo"
          /> */}

          <motion.svg
            className="mt-2"
            width="140.951"
            height="40"
            viewBox="-1 0 240.951 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="svgGroup"
              stroke-linecap="round"
              fill-rule="evenodd"
              font-size="9pt"
              stroke="#0e9a3d"
              stroke-width="1mm"
              fill="#0e9a3d"
              style={{
                stroke: "#0e9a3d",
                strokeWidth: "0.5mm",
                fill: "#0e9a3d",
              }}
            >
              <motion.path
                id="mypath"
                d="M 46.45 22.275 L 46.45 37.5 L 44.95 37.5 L 44.95 22.275 Q 44.95 19.775 43.738 17.75 Q 42.525 15.725 40.488 14.513 Q 38.45 13.3 35.975 13.3 Q 33.5 13.3 31.463 14.513 Q 29.425 15.725 28.213 17.75 A 8.606 8.606 0 0 0 27.001 22.119 A 10.219 10.219 0 0 0 27 22.275 L 27 37.5 L 25.5 37.5 L 25.5 0 L 27 0 L 27 16.875 Q 28.375 14.575 30.75 13.188 Q 33.125 11.8 35.975 11.8 Q 38.875 11.8 41.25 13.212 Q 43.625 14.625 45.038 17 Q 46.45 19.375 46.45 22.275 Z M 220.95 22.275 L 220.95 37.5 L 219.45 37.5 L 219.45 22.275 Q 219.45 19.775 218.238 17.75 Q 217.025 15.725 214.988 14.513 Q 212.95 13.3 210.475 13.3 Q 208 13.3 205.963 14.513 Q 203.925 15.725 202.713 17.75 A 8.606 8.606 0 0 0 201.501 22.119 A 10.219 10.219 0 0 0 201.5 22.275 L 201.5 37.5 L 200 37.5 L 200 0 L 201.5 0 L 201.5 16.875 Q 202.875 14.575 205.25 13.188 Q 207.625 11.8 210.475 11.8 Q 213.375 11.8 215.75 13.212 Q 218.125 14.625 219.538 17 Q 220.95 19.375 220.95 22.275 Z M 73.35 32.6 L 74.75 32 A 4.516 4.516 0 0 0 75.733 33.591 A 6.202 6.202 0 0 0 76.613 34.362 A 10.781 10.781 0 0 0 79.328 35.79 A 12.341 12.341 0 0 0 79.763 35.938 Q 81.525 36.5 83.1 36.5 Q 85.05 36.5 86.75 35.813 A 7.746 7.746 0 0 0 88.373 34.93 A 6.376 6.376 0 0 0 89.5 33.9 Q 90.55 32.675 90.55 31.05 A 4.28 4.28 0 0 0 90.397 29.875 A 3.177 3.177 0 0 0 89.463 28.363 Q 88.391 27.389 86.713 26.768 A 11.921 11.921 0 0 0 86.663 26.75 A 76.526 76.526 0 0 0 83.56 25.695 A 83.814 83.814 0 0 0 83.1 25.55 Q 80.899 24.861 79.203 24.23 A 47.471 47.471 0 0 1 78.212 23.85 A 10.796 10.796 0 0 1 76.845 23.199 Q 76.165 22.811 75.647 22.356 A 5.552 5.552 0 0 1 75.15 21.863 A 3.974 3.974 0 0 1 74.303 20.252 Q 74.138 19.651 74.107 18.936 A 7.781 7.781 0 0 1 74.1 18.6 A 5.93 5.93 0 0 1 74.526 16.331 A 5.582 5.582 0 0 1 75.375 14.912 A 8.057 8.057 0 0 1 77.958 12.844 A 9.774 9.774 0 0 1 78.7 12.5 A 11.335 11.335 0 0 1 82.953 11.651 A 12.918 12.918 0 0 1 83.1 11.65 Q 86.225 11.65 88.738 13.037 A 9.195 9.195 0 0 1 90.454 14.242 A 6.502 6.502 0 0 1 92.15 16.6 L 90.85 17.35 Q 90.325 16.025 89.088 15.087 Q 87.85 14.15 86.263 13.65 A 10.516 10.516 0 0 0 83.248 13.151 A 9.928 9.928 0 0 0 83.1 13.15 A 10.393 10.393 0 0 0 80.23 13.538 A 9.508 9.508 0 0 0 79.412 13.813 A 7.518 7.518 0 0 0 77.791 14.668 A 6.171 6.171 0 0 0 76.65 15.7 Q 75.6 16.925 75.6 18.6 Q 75.6 19.849 76.065 20.671 A 2.743 2.743 0 0 0 76.487 21.238 A 4.862 4.862 0 0 0 77.415 21.971 Q 78.108 22.402 79.05 22.725 Q 80.725 23.3 83.1 24.05 A 65.769 65.769 0 0 1 85.915 25.017 A 55.291 55.291 0 0 1 87.488 25.625 A 11.744 11.744 0 0 1 89.175 26.462 A 8.507 8.507 0 0 1 90.788 27.712 A 4.239 4.239 0 0 1 91.979 30.115 A 5.974 5.974 0 0 1 92.05 31.05 A 5.991 5.991 0 0 1 91.639 33.291 A 5.589 5.589 0 0 1 90.788 34.738 Q 89.525 36.3 87.475 37.15 Q 85.425 38 83.1 38 Q 80.95 38 78.913 37.275 A 12.565 12.565 0 0 1 76.576 36.173 A 10.707 10.707 0 0 1 75.375 35.325 A 7.547 7.547 0 0 1 74.283 34.242 A 5.465 5.465 0 0 1 73.35 32.6 Z M 60.15 35.4 L 68.55 12.5 L 70.1 12.5 L 56.45 50 L 54.85 50 L 59.4 37.5 L 50.45 12.5 L 52.1 12.5 L 60.15 35.4 Z M 176.75 18.3 L 176.75 12.5 L 178.25 12.5 L 178.25 37.5 L 176.75 37.5 L 176.75 31.65 Q 175.4 34.575 172.8 36.363 A 10.079 10.079 0 0 1 168.52 38.009 A 13.285 13.285 0 0 1 166.55 38.15 A 12.756 12.756 0 0 1 161.599 37.188 A 12.378 12.378 0 0 1 161.45 37.125 Q 159.075 36.1 157.263 34.288 Q 155.45 32.475 154.425 30.1 A 12.727 12.727 0 0 1 153.4 25.021 A 14.516 14.516 0 0 1 153.4 25 A 13.006 13.006 0 0 1 154.185 20.465 A 12.396 12.396 0 0 1 154.425 19.862 Q 155.45 17.475 157.263 15.662 Q 159.075 13.85 161.45 12.825 A 12.727 12.727 0 0 1 166.529 11.8 A 14.516 14.516 0 0 1 166.55 11.8 A 12.442 12.442 0 0 1 169.692 12.18 A 9.792 9.792 0 0 1 172.8 13.588 Q 175.4 15.375 176.75 18.3 Z M 1.5 37.5 L 0 37.5 L 0 2.5 L 10.2 2.5 A 9.906 9.906 0 0 1 13.77 3.135 A 9.307 9.307 0 0 1 15.175 3.812 Q 17.4 5.125 18.7 7.387 A 9.837 9.837 0 0 1 19.968 11.624 A 11.929 11.929 0 0 1 20 12.5 A 10.567 10.567 0 0 1 19.541 15.659 A 9.323 9.323 0 0 1 18.663 17.638 Q 17.325 19.9 15.1 21.2 Q 12.875 22.5 10.2 22.5 L 1.5 22.5 L 1.5 37.5 Z M 133.4 37.5 L 131.9 37.5 L 131.9 2.5 L 142.1 2.5 A 9.906 9.906 0 0 1 145.67 3.135 A 9.307 9.307 0 0 1 147.075 3.812 Q 149.3 5.125 150.6 7.387 A 9.837 9.837 0 0 1 151.868 11.624 A 11.929 11.929 0 0 1 151.9 12.5 A 10.567 10.567 0 0 1 151.441 15.659 A 9.323 9.323 0 0 1 150.563 17.638 Q 149.225 19.9 147 21.2 Q 144.775 22.5 142.1 22.5 L 133.4 22.5 L 133.4 37.5 Z M 195.55 12.5 L 195.55 14 L 188.7 14 L 188.65 37.5 L 187.15 37.5 L 187.2 14 L 182.05 14 L 182.05 12.5 L 187.2 12.5 L 187.15 4.65 L 188.65 4.65 L 188.7 12.5 L 195.55 12.5 Z M 114.9 38.15 Q 111.45 38.15 108.613 36.375 Q 105.775 34.6 104.088 31.613 A 13.163 13.163 0 0 1 102.402 25.226 A 15.447 15.447 0 0 1 102.4 25 A 13.692 13.692 0 0 1 103.044 20.771 A 12.78 12.78 0 0 1 103.375 19.862 Q 104.35 17.475 106.063 15.662 Q 107.775 13.85 110.05 12.825 Q 112.325 11.8 114.9 11.8 Q 118.35 11.8 121.188 13.575 Q 124.025 15.35 125.713 18.35 A 13.273 13.273 0 0 1 127.398 24.744 A 15.644 15.644 0 0 1 127.4 25 A 13.471 13.471 0 0 1 126.706 29.349 A 12.706 12.706 0 0 1 126.425 30.1 Q 125.45 32.475 123.738 34.288 Q 122.025 36.1 119.763 37.125 Q 117.5 38.15 114.9 38.15 Z M 166.55 36.65 A 10.997 10.997 0 0 0 169.231 36.338 A 8.472 8.472 0 0 0 172.037 35.075 A 9.933 9.933 0 0 0 175.473 30.855 A 15.179 15.179 0 0 0 175.475 30.85 A 13.79 13.79 0 0 0 176.594 26.374 A 16.512 16.512 0 0 0 176.65 25 A 15.462 15.462 0 0 0 176.27 21.513 A 12.966 12.966 0 0 0 175.45 19.075 A 10.265 10.265 0 0 0 173.145 15.798 A 9.806 9.806 0 0 0 171.987 14.863 Q 169.725 13.3 166.55 13.3 Q 163.325 13.3 160.675 14.875 Q 158.025 16.45 156.463 19.113 Q 154.9 21.775 154.9 25 A 11.418 11.418 0 0 0 155.697 29.29 A 10.847 10.847 0 0 0 156.513 30.912 Q 158.125 33.55 160.775 35.1 Q 163.425 36.65 166.55 36.65 Z M 114.9 36.65 Q 118 36.65 120.488 35.038 Q 122.975 33.425 124.438 30.775 Q 125.9 28.125 125.9 25 Q 125.9 21.85 124.438 19.188 Q 122.975 16.525 120.488 14.912 Q 118 13.3 114.9 13.3 A 10.351 10.351 0 0 0 110.821 14.097 A 9.947 9.947 0 0 0 109.287 14.913 Q 106.8 16.525 105.35 19.188 Q 103.9 21.85 103.9 25 A 12.138 12.138 0 0 0 104.577 29.091 A 11.226 11.226 0 0 0 105.4 30.887 Q 106.9 33.525 109.4 35.088 Q 111.9 36.65 114.9 36.65 Z M 1.5 4 L 1.5 21 L 10.2 21 Q 12.475 21 14.363 19.9 Q 16.25 18.8 17.375 16.875 A 8.285 8.285 0 0 0 18.47 13.29 A 10.144 10.144 0 0 0 18.5 12.5 A 9.119 9.119 0 0 0 18.124 9.843 A 7.976 7.976 0 0 0 17.375 8.125 Q 16.25 6.2 14.363 5.1 Q 12.475 4 10.2 4 L 1.5 4 Z M 133.4 4 L 133.4 21 L 142.1 21 Q 144.375 21 146.263 19.9 Q 148.15 18.8 149.275 16.875 A 8.285 8.285 0 0 0 150.37 13.29 A 10.144 10.144 0 0 0 150.4 12.5 A 9.119 9.119 0 0 0 150.024 9.843 A 7.976 7.976 0 0 0 149.275 8.125 Q 148.15 6.2 146.263 5.1 Q 144.375 4 142.1 4 L 133.4 4 Z M 96.4 37.5 L 96.4 12.5 L 97.9 12.5 L 97.9 37.5 L 96.4 37.5 Z M 97.175 7.25 Q 96.7 7.25 96.363 6.938 Q 96.025 6.625 96.025 6.15 A 1.198 1.198 0 0 1 96.079 5.783 A 0.964 0.964 0 0 1 96.363 5.35 A 1.178 1.178 0 0 1 97.16 5.05 A 1.495 1.495 0 0 1 97.175 5.05 Q 97.625 5.05 97.95 5.35 A 0.995 0.995 0 0 1 98.274 6.066 A 1.342 1.342 0 0 1 98.275 6.125 A 1.252 1.252 0 0 1 98.219 6.507 A 1.018 1.018 0 0 1 97.95 6.937 Q 97.625 7.25 97.175 7.25 Z"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 3 }}
              />
            </g>
          </motion.svg>
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
                  backgroundColor: isHomeHovered
                    ? "#0e9a3d"
                    : theme === "light"
                    ? "#fff"
                    : "#333",
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
                    }  mt-2 pb-1 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
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
                    backgroundColor: isPhysiosHovered
                      ? "#0e9a3d"
                      : theme === "light"
                      ? "#fff"
                      : "#333",
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
                      } text-decoration-none mt-2 fw-bold pb-1 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
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
                    backgroundColor: isPatientsHovered
                      ? "#0e9a3d"
                      : theme === "light"
                      ? "#fff"
                      : "#333",
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
                      } text-decoration-none mt-2 fw-bold pb-1 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
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
                    backgroundColor: isYourProgramsHovered
                      ? "#0e9a3d"
                      : theme === "light"
                      ? "#fff"
                      : "#333",
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
                      } text-decoration-none mt-2 fw-bold pb-1 ${
                        theme === "dark" ? "text-white" : "text-black"
                      }`}
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
                        : theme === "light"
                        ? "#fff"
                        : "#333",
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
                        } text-decoration-none mt-2 fw-bold pb-1 ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
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
                        : theme === "light"
                        ? "#fff"
                        : "#333",
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
                        } text-decoration-none mt-2 fw-bold pb-1 ${
                          theme === "dark" ? "text-white" : "text-black"
                        }`}
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
                  backgroundColor: isPricingHovered
                    ? "#0e9a3d"
                    : theme === "light"
                    ? "#fff"
                    : "#333",
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
                    } mt-2 pb-1 ${
                      theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    Pricing
                  </Link>
                </div>
              </motion.div>
            </div>
          </Nav>
        </Navbar.Collapse>
        {!loggedIn && (
          <div className="d-flex gap-4">
            <Link
              to="/login"
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-decoration-none fw-bold py-3`}
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
          <div className="d-flex gap-4 align-items-center">
            {roleState === "PHYSIOTHERAPIST" && (
              <p className="m-0 fw-bold">Hi, {myPhysioProfile?.firstName}!</p>
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
              className={`text-decoration-none ${
                theme === "dark" ? "text-white" : "text-black"
              } fw-bold py-3 cursor`}
            >
              Logout
            </div>
            <DarkModeButton />
          </div>
        )}
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
