import Cookies from "js-cookie";
import { Col, Container, Row } from "react-bootstrap";

const Homepage = () => {
  const token = Cookies.get("token");
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Homepage;
