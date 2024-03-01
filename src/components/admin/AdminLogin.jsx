import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useTheme } from "../Theme";
import { useState } from "react";
import ErrorAuthentication from "../Utils/ErrorAuthentication";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  adminLogin,
  getMyAdminProfile,
} from "../../redux/actions/adminsActions";
import { HashLoader } from "react-spinners";
const AdminLogin = () => {
  const { theme } = useTheme();
  const [loginData, setLoginData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setWaiting(true);
      const response = await dispatch(adminLogin(loginData));
      if (response) {
        setShowError(false);
        dispatch(getMyAdminProfile());
        navigate("/admin");
        setWaiting(false);
      } else {
        setShowError(true);
        setMessage("Incorrect email or password");
        setWaiting(false);
      }
    } catch (error) {
      console.error("Errore durante il login:", error);
    }
  };
  return (
    <Container
      className={`${
        theme === "dark" ? "border-0" : "border-0"
      } border border-2`}
      id="admin-login-container"
    >
      {waiting && (
        <HashLoader
          color="#0e9a3d"
          className="completely-centered position-absolute"
          size={200}
        />
      )}
      <Row className={`px-5`}>
        <Col xs={12} md={6} className="text-center order-1 pt-4">
          <img
            className="w-100"
            src="images/admin-login.svg"
            alt="physiotherapist illustration"
          />
        </Col>
        <Col xs={12} md={6} className="order-0 pb-0" id="login-form">
          <h1 className="text-center me-5">Admin Login</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fs-5">Email address</Form.Label>
              <Form.Control
                className="custom-input"
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setLoginData({ ...loginData, email: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fs-5">Password</Form.Label>
              <Form.Control
                className="custom-input"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setLoginData({ ...loginData, password: e.target.value });
                }}
              />
            </Form.Group>
            <div className="my-3"></div>
            <div className="text-center me-5">
              {showError && <ErrorAuthentication errorMessage={message} />}
              <Button
                variant="success"
                type="submit"
                className="rounded-pill px-4 py-2 fs-5 mt-3 w-50 fw-bold"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default AdminLogin;
