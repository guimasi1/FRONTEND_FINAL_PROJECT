/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { setRole, setLogStatus } from "../redux/actions/authentication";

const MyNavbar = () => {
  const myProfile = useSelector((state) => state.patients.patientProfile);
  const dispatch = useDispatch();
  let role = Cookies.get("role");
  const roleState = useSelector((state) => state.register.role);
  const loggedIn = useSelector((state) => state.register.loggedIn);
  const key = process.env.REACT_APP_KEY_REDUX_PERSIST;
  console.log(key);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setRole(role));
  }, []);
  useEffect(() => {
    dispatch(setRole(role));
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
                className="text-decoration-none text-black mt-2 fw-bold "
              >
                Home
              </Link>
              {roleState === "PATIENT" && loggedIn ? (
                <Link
                  to="/physiotherapists"
                  className="text-decoration-none text-black mt-2 fw-bold "
                >
                  Physiotherapists
                </Link>
              ) : (
                ""
              )}
              {roleState === "PHYSIOTHERAPIST" && loggedIn ? (
                <Link
                  to="/patients"
                  className="text-decoration-none text-black mt-2 fw-bold "
                >
                  Patients
                </Link>
              ) : (
                ""
              )}
              {roleState === "PATIENT" && loggedIn ? (
                <Link
                  to="/myExercises"
                  className="text-decoration-none text-black mt-2 fw-bold "
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
                    className="text-decoration-none text-black mt-2 fw-bold "
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
                    className="text-decoration-none text-black mt-2 fw-bold "
                  >
                    Profile
                  </Link>
                ) : (
                  ""
                )
              }{" "}
              <Link
                to="/"
                className="text-decoration-none text-black mt-2 fw-bold "
              >
                Resources
              </Link>
              <Link
                to="/"
                className="text-decoration-none text-black mt-2 fw-bold "
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
                console.log(loggedIn + "loggedin");
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
