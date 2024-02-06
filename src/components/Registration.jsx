import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { register } from "../redux/actions/authentication";
import { useDispatch } from "react-redux";
const Registration = () => {
  const [role, setRole] = useState("");
  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
  });
  const dispatch = useDispatch();
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  return (
    <Container>
      <Row className="my-5 justify-content-center">
        <Col xs={12}>
          <h1 className="text-center bw-bold">Start your healing journey</h1>
        </Col>
        <Col xs={12} md={8} lg={6} className="mt-5">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First name*</Form.Label>
              <Form.Control
                value={registrationData.firstName}
                type="text"
                onChange={(e) => {
                  setRegistrationData({
                    ...registrationData,
                    firstName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last name*</Form.Label>
              <Form.Control
                value={registrationData.lastName}
                type="text"
                onChange={(e) => {
                  setRegistrationData({
                    ...registrationData,
                    lastName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                value={registrationData.email}
                type="email"
                onChange={(e) => {
                  setRegistrationData({
                    ...registrationData,
                    email: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password*</Form.Label>
              <Form.Control
                value={registrationData.password}
                type="password"
                onChange={(e) => {
                  setRegistrationData({
                    ...registrationData,
                    password: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                value={registrationData.phoneNumber}
                type="text"
                onChange={(e) => {
                  setRegistrationData({
                    ...registrationData,
                    phoneNumber: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of birth*</Form.Label>
              <Form.Control
                value={registrationData.dateOfBirth}
                type="date"
                onChange={(e) => {
                  setRegistrationData({
                    ...registrationData,
                    dateOfBirth: e.target.value,
                  });
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
                    console.log(registrationData);
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
                    console.log(registrationData);
                  }}
                />
              </div>
            </div>
            {role === "PHYSIOTHERAPIST" ? (
              <Form.Group className="mb-3">
                <Form.Label>Specialization*</Form.Label>
                <Form.Control
                  value={registrationData.specialization}
                  type="text"
                  onChange={(e) => {
                    const { gender, ...rest } = registrationData;
                    setRegistrationData({
                      ...rest,
                      specialization: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            ) : (
              ""
            )}
            {role === "PATIENT" ? (
              <Form.Group className="mb-3">
                <Form.Label>Gender*</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Male"
                    name="group2"
                    type="radio"
                    value={"MALE"}
                    id="3"
                    onClick={(e) => {
                      const { specialization, ...rest } = registrationData; // Estrae specialization e mette il resto in 'rest'
                      setRegistrationData({
                        ...rest, // Usa 'rest', che non include 'specialization'
                        gender: e.target.value,
                      });
                    }}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="group2"
                    type="radio"
                    value={"FEMALE"}
                    id="4"
                    onClick={(e) => {
                      const { specialization, ...rest } = registrationData; // Estrae specialization e mette il resto in 'rest'
                      setRegistrationData({
                        ...rest, // Usa 'rest', che non include 'specialization'
                        gender: e.target.value,
                      });
                    }}
                  />
                </div>
              </Form.Group>
            ) : (
              ""
            )}
            <Button
              variant="primary"
              type="submit"
              className="rounded-pill py-2 px-5 fw-bold"
              onClick={(e) => {
                e.preventDefault();
                dispatch(register(registrationData, role));
              }}
            >
              Submit
            </Button>
          </Form>
          {registrationCompleted && (
            <Alert variant="success" className="mt-4">
              Registration completed. An email has been sent to your email
              address.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
//ricordarsi di inserire questo link <a href="https://storyset.com/health">Health illustrations by Storyset</a> per storyset.