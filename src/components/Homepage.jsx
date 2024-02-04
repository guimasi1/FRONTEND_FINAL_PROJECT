import { Col, Container, Row } from "react-bootstrap";
import { getPhysiotherapists } from "../redux/actions/physiotherapistActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhysiotherapists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Homepage;
