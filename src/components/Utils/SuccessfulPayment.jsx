import { useState } from "react";
import { Col, Container, NavItem, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SuccessfulPayment = () => {
  const navigate = useNavigate();
  const [redirectTimer, setRedirectTimer] = useState(5);

  setInterval(() => {
    if (redirectTimer > 0) {
      setRedirectTimer(redirectTimer - 1);
    } else {
      navigate("/");
    }
  }, 1000);

  return (
    <Container id="container-pricing" fluid>
      <Row>
        <Col>
          <div className="d-flex flex-column align-items-center justify-content-center mt-5 fs-lg-3">
            <p>
              <strong>Congratulation!</strong>
            </p>
            <p className="fs-5">
              <em>The payment has been successful.</em>
            </p>

            <div>
              <p className="fs-5">You'll be redirected to the homepage in</p>
              <div className="d-flex justify-content-center">
                <p
                  className="fw-bold mx-2 brownish-button rounded-pill px-2 py-1 text-white d-flex justify-content-center align-items-center"
                  style={{ width: "30px", height: "30px" }}
                >
                  {redirectTimer}
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <img
            src="/images/successful-payment.jpg"
            className="w-25 rounded-4 mt-5"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessfulPayment;
