import { Col, Container, Row } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img src="images/404.svg" className="w-100" alt="404" />
        </Col>
        <Col className="d-flex align-items-center justify-content-center flex-column gap-4">
          <h1>Error 404:</h1>
          <h1>Page Not Found</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
