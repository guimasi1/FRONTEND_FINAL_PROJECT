import { Col, Container, Row } from "react-bootstrap";
import Stripe from "./Utils/StripeOption1";

const Pricing = () => {
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          className="d-flex flex-column justify-content-center text-center mt-5"
        >
          <div>
            <p className="fs-1 fw-bold">
              Our pricing is simple with no <br /> hidden fees!
            </p>
          </div>
          <div>
            <p className="fs-5">
              Choose your favourite plan based on your needs.
            </p>
          </div>
        </Col>
        <Col>
          <Stripe />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Pricing;
