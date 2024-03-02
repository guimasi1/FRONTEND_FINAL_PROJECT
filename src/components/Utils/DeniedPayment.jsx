import { Col, Container, Row } from "react-bootstrap";

const DeniedPayment = () => {
  return (
    <Container>
      <Row>
        <Col
          className="d-flex flex-column justify-content-center align-items-center mt-4"
          id="column-denied-payment"
        >
          <p className="text-center fs-lg-4 fw-bold">
            We're sorry. Something went wrong with the{" "}
            <span className="text-decoration-underline">payment</span>
            <br /> Try again later.
          </p>
          <div>
            <img src="images/sorry.svg" className="w-100" alt="sad person" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DeniedPayment;
