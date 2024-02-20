import { Col, Container, Row } from "react-bootstrap";

const DeniedPayment = () => {
  return (
    <Container>
      <Row>
        <Col>
          We're sorry. Something went wrong with the payment. Try again later.
        </Col>
      </Row>
    </Container>
  );
};

export default DeniedPayment;
