import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  const myProfile = useSelector((state) => state.patients.patientProfile);
  return (
    <Navbar expand="lg" className="greenish">
      <Container>
        <Navbar.Brand href="#home">PhysioWEB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="d-flex gap-3">
              <Link to="/" className="text-decoration-none text-black mt-2">
                Home
              </Link>
              <Link
                to="/physiotherapists"
                className="text-decoration-none text-black mt-2"
              >
                Physiotherapists
              </Link>
              <Link
                to="/patients"
                className="text-decoration-none text-black mt-2"
              >
                Patients
              </Link>
              <Link
                to="/profile"
                className="text-decoration-none text-black mt-2"
              >
                Profile
              </Link>
            </div>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex gap-3">
          <Link to="/login" className="text-decoration-none text-black fw-bold">
            Login
          </Link>
          <Link
            to="/register"
            className="text-decoration-none text-black fw-bold"
          >
            Get Started
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
