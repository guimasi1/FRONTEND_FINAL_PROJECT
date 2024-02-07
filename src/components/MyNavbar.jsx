import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const MyNavbar = () => {
  const myProfile = useSelector((state) => state.patients.patientProfile);
  let role = Cookies.get("role");
  console.log("role");
  console.log(role);
  return (
    <Navbar expand="lg">
      <Container className="ps-lg-5">
        <Navbar.Brand className="me-0 me-lg-5">PhysioWEB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
              {role === "PATIENT" ? (
                <Link
                  to="/physiotherapists"
                  className="text-decoration-none text-black mt-2 fw-bold "
                >
                  Physiotherapists
                </Link>
              ) : (
                ""
              )}
              <Link
                to="/patients"
                className="text-decoration-none text-black mt-2 fw-bold "
              >
                Patients
              </Link>
              {
                // eslint-disable-next-line no-const-assign
                role === "PATIENT" ? (
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
                (role = "PHYSIOTHERAPIST" ? (
                  <Link
                    to="/physioProfile"
                    className="text-decoration-none text-black mt-2 fw-bold "
                  >
                    Profile
                  </Link>
                ) : (
                  ""
                ))
              }
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex gap-4">
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
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
