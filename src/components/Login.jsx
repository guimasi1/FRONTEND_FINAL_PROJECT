import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authentication";
import { useState } from "react";
const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState(null);
  const role = localStorage.getItem("role");
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

            <Button
              variant="success"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(login(loginData, role));
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
