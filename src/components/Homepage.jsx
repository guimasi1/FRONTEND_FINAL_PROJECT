import { Button, Col, Container, Row } from "react-bootstrap";
import { getPhysiotherapists } from "../redux/actions/physiotherapistActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhysiotherapists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="mb-5">
      <ToastContainer />
      <Row>
        <Col className="order-1 order-md-0">
          <h1 id="headline" className="mt-5">
            Step into Wellness, Move Beyond Limits
          </h1>
          <p className="fs-5 mt-4">
            Access a world of professional physiotherapy support from the
            comfort of your home. Our app connects you with personalized
            exercises, progress tracking, and direct consultations—anytime,
            anywhere.
          </p>
          <div
            id="box-learn-more"
            className="d-flex justify-content-between position-relative"
          >
            <Button className="brownish-button px-5 py-3 fs-5 fw-bold  mt-4 rounded-pill">
              Learn more
            </Button>
          </div>
          {/* <img
            id="blob-homepage"
            src="/images/blob.svg"
            className="position-absolute"
            alt=""
          /> */}
        </Col>
        <Col xs={12} md={6} className="order-0 order-md-1">
          <img src="/images\Phisiotherapy-bro.svg" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
