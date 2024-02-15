/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { setLogStatus, setRoleState } from "../redux/actions/authentication";

const MyNavbar = () => {
  const myProfile = useSelector((state) => state.patients.patientProfile);
  const dispatch = useDispatch();
  let role = Cookies.get("role");
  const roleState = useSelector((state) => state.register.role);
  const loggedIn = useSelector((state) => state.register.loggedIn);
  const location = useLocation();
  const navigate = useNavigate();
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
              <Link
                to="/"
                className={`text-decoration-none text-black mt-2 fw-bold ${
                  location.pathname === "/"
                    ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                    : ""
                }`}
              >
                Home
              </Link>
              {roleState === "PATIENT" && loggedIn ? (
                <Link
                  to="/physiotherapists"
                  className={`text-decoration-none text-black mt-2 fw-bold ${
                    location.pathname === "/physiotherapists"
                      ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                      : ""
                  }`}
                >
                  Physiotherapists
                </Link>
              ) : (
                ""
              )}
              {roleState === "PHYSIOTHERAPIST" && loggedIn ? (
                <Link
                  to="/patients"
                  className={`text-decoration-none text-black mt-2 fw-bold ${
                    location.pathname === "/patients"
                      ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                      : ""
                  }`}
                >
                  Patients
                </Link>
              ) : (
                ""
              )}
              {roleState === "PATIENT" && loggedIn ? (
                <Link
                  to="/myExercises"
                  className={`text-decoration-none text-black mt-2 fw-bold ${
                    location.pathname.startsWith("/myExercises")
                      ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                      : ""
                  }`}
                >
                  Your programs
                </Link>
              ) : (
                ""
              )}
              {
                // eslint-disable-next-line no-const-assign
                roleState === "PATIENT" && loggedIn ? (
                  <Link
                    to="/profile"
                    className={`text-decoration-none text-black mt-2 fw-bold ${
                      location.pathname === "/profile"
                        ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                        : ""
                    }`}
                  >
                    Profile
                  </Link>
                ) : (
                  ""
                )
              }
              {
                // eslint-disable-next-line no-const-assign
                roleState === "PHYSIOTHERAPIST" && loggedIn ? (
                  <Link
                    to="/physioProfile"
                    className={`text-decoration-none text-black mt-2 fw-bold ${
                      location.pathname === "/physioProfile"
                        ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                        : ""
                    }`}
                  >
                    Profile
                  </Link>
                ) : (
                  ""
                )
              }

              <Link
                to="/pricing"
                className={`text-decoration-none text-black mt-2 fw-bold ${
                  location.pathname === "/pricing"
                    ? "border border-5 border-bottom border-success border-top-0 border-end-0 border-start-0"
                    : ""
                }`}
              >
                Pricing
              </Link>
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
            <div>
              <img
                src="https://placekitten.com/50"
                className="rounded-pill cursor"
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
