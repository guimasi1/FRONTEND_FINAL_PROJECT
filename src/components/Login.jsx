import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authentication";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState(null);
  const navigate = useNavigate();
  // const role = localStorage.getItem("role");
  const [role, setRole] = useState("");
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="text-center order-1 mt-5">
          <img
            id="illustration-registration"
            src="images/Phisiotherapy-rafiki.svg"
            alt="physiotherapist illustration"
          />
        </Col>
        <Col xs={12} md={6} className="order-0 " id="login-form">
          <h1 className="text-center">Login</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setLoginData({ ...loginData, email: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setLoginData({ ...loginData, password: e.target.value });
                }}
              />
            </Form.Group>
            <div className="my-3">
              <Form.Label className="mb-3">What are you?*</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Physiotherapist"
                  name="group1"
                  type="radio"
                  value={"PHYSIOTHERAPIST"}
                  id="1"
                  onClick={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <Form.Check
                  inline
                  label="Patient"
                  name="group1"
                  type="radio"
                  value={"PATIENT"}
                  id="2"
                  onClick={(e) => {
                    setRole(e.target.value);
                  }}
                />
              </div>
            </div>

            <Button
              variant="success"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(login(loginData, role));
                navigate("/");
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;