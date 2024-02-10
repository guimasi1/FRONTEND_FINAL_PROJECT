import { Button, Col, Container, Row } from "react-bootstrap";
import { getPhysiotherapists } from "../redux/actions/physiotherapistActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
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
          <motion.h1
            id="headline"
            className="mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, ease: "linear", duration: 2 }}
          >
            Step into Wellness, Move Beyond Limits
          </motion.h1>
          <motion.p
            className="fs-5 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, ease: "linear", duration: 2 }}
          >
            Access a world of professional physiotherapy support from the
            comfort of your home. Our app connects you with personalized
            exercises, progress tracking, and direct consultations—anytime,
            anywhere.
          </motion.p>
          <div
            id="box-learn-more"
            className="d-flex justify-content-between position-relative"
          >
            <motion.button
              className="brownish-button px-5 py-3 fs-5 fw-bold  mt-4 rounded-pill text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.3, ease: "easeInOut", duration: 2 }}
              whileTap={{ scale: 0.8 }}
            >
              Learn more
            </motion.button>
          </div>
          {/* <img
            id="blob-homepage"
            src="/images/blob.svg"
            className="position-absolute"
            alt=""
          /> */}
        </Col>
        <Col xs={12} md={6} className="order-0 order-md-1">
          <motion.img
            src="/images\Phisiotherapy-bro.svg"
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, ease: "easeOut", duration: 2 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
