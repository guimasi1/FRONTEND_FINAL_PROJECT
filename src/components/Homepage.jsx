import { Button, Col, Container, Row } from "react-bootstrap";
import { getPhysiotherapists } from "../redux/actions/physiotherapistActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";
import GoUpButton from "./GoUpButton";
const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhysiotherapists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
            Step into Wellness, Move Beyond{" "}
            <motion.p
              className="d-block d-md-inline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, ease: "linear", duration: 2 }}
            >
              <TypingEffect />
            </motion.p>
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
      <Row className="position-relative mt-5 pt-5">
        <motion.img
          src="images/right-footprint.svg"
          alt=""
          className="right-footprint position-absolute"
          style={{ width: "120px " }}
          transition={{ delay: 1.3, ease: "easeInOut", duration: 0.2 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
          whileInView={{ opacity: 0.7 }}
        />
        <motion.img
          src="images/right-footprint.svg"
          alt=""
          className="right-footprint-2 position-absolute"
          style={{ width: "120px " }}
          transition={{ delay: 1.6, ease: "easeInOut", duration: 0.2 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
          whileInView={{ opacity: 0.7 }}
        />
        <motion.img
          src="images/right-footprint.svg"
          alt=""
          className="right-footprint-3 position-absolute"
          style={{ width: "120px " }}
          transition={{ delay: 2.5, ease: "easeInOut", duration: 0.2 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
          whileInView={{ opacity: 0.7 }}
        />
        <motion.img
          src="images/left-footprint.svg"
          alt=""
          className="left-footprint position-absolute"
          style={{ width: "138px " }}
          transition={{ delay: 1.7, ease: "easeInOut", duration: 0.2 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
          whileInView={{ opacity: 0.7 }}
        />
        <motion.img
          src="images/left-footprint.svg"
          alt=""
          className="left-footprint-2 position-absolute"
          style={{ width: "138px " }}
          transition={{ delay: 2.3, ease: "easeInOut", duration: 0.2 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
          whileInView={{ opacity: 0.7 }}
        />
        <motion.img
          src="images/left-footprint.svg"
          alt=""
          className="left-footprint-3 position-absolute"
          style={{ width: "138px " }}
          transition={{ delay: 2.9, ease: "easeInOut", duration: 0.2 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }}
          whileInView={{ opacity: 0.7 }}
        />
        <Col xs={12} md={5} className="pe-5 mt-4">
          <img src="images/breathing-exercise.svg" alt="" />
        </Col>
        <Col className="ps-4">
          <h2 className="motivational-text mb-5">
            Discover a Healthier, Stronger You
          </h2>
          <p className="fs-5">
            <strong>Embrace the Journeys</strong>: Dive into our tailored
            physiotherapy exercises and unlock a world where mobility meets
            freedom. Our expertly designed programs promise more than recovery;
            they open the door to a life without limits.
          </p>
          <p className="p-0 d-flex align-items-center gap-2">
            <span className="material-symbols-outlined pt-2 align-self-baseline fs-1 fw-bold check-box-icon">
              check_box
            </span>{" "}
            <span className="fs-5">
              <strong>Improved Mobility & Flexibility:</strong> Say goodbye to
              stiffness and hello to moving freely.
            </span>
          </p>
          <p className="p-0 d-flex align-items-center gap-2">
            <span className="material-symbols-outlined pt-2 align-self-baseline fs-1 fw-bold check-box-icon">
              check_box
            </span>{" "}
            <span className="fs-5">
              <strong>Strength & Resilience:</strong> Build muscle strength
              around key areas, safeguarding against future injuries.
            </span>
          </p>
          <p className="p-0 d-flex align-items-center gap-2">
            <span className="material-symbols-outlined pt-2 align-self-baseline fs-1 fw-bold check-box-icon">
              check_box
            </span>{" "}
            <span className="fs-5">
              <strong>Balance & Posture:</strong> Enhance your core, improve
              your balance, and stand taller, stronger.
            </span>
          </p>
          <p className="p-0 d-flex align-items-center gap-2">
            <span className="material-symbols-outlined pt-2 align-self-baseline fs-1 fw-bold check-box-icon">
              check_box
            </span>{" "}
            <span className="fs-5">
              <strong>Effective Pain Relief:</strong> Target the root of your
              discomfort, reducing pain with each session.
            </span>
          </p>
        </Col>
      </Row>
      <Row className="mt-5 py-5">
        <Col xs={12}>
          <h2 className="motivational-text">Your New Chapter begins now!</h2>
          <p className="mt-3 fs-5">
            Join us and step into a brighter, pain-free future. Your journey to
            well-being starts here.
          </p>
        </Col>
        <Col
          id="layer-container"
          className="position-relative rounded-4 mt-5 cursor"
        >
          <motion.div
            id="layer-under"
            className="position-absolute rounded-4 border border-2 greenish-6"
          >
            <motion.img
              src="images/Jogging-amico.svg"
              className="w-100 rounded-top-4 bg-white"
              alt=""
            />
            <p className="fs-5 ps-4 mt-2 fw-bold">
              Discover the power of physiotherapy
            </p>
          </motion.div>
        </Col>
        <Col
          id="layer-container"
          className="position-relative rounded-4 mt-5 cursor"
        >
          <motion.div
            id="layer-under"
            className="position-absolute rounded-4 border border-2 greenish-6"
          >
            <motion.img
              src="images/physical-therapy-image.svg"
              className="w-100 rounded-top-4 bg-white "
              alt=""
            />
            <p className="fs-5 ps-4 mt-2 fw-bold">
              Get in touch with the best physiotherapists
            </p>
          </motion.div>
        </Col>
        <Col
          id="layer-container"
          className="position-relative rounded-4 mt-5 cursor"
        >
          <motion.div
            id="layer-under"
            className="position-absolute rounded-4 border border-2 greenish-6"
          >
            <motion.img
              src="images/physical-therapy-image-2.svg"
              className="w-100 rounded-top-4 bg-white"
              alt=""
            />
            <p className="fs-5 ps-4 mt-2 fw-bold">
              Follow a personalized exercise program{" "}
            </p>
          </motion.div>
        </Col>
        <Col
          id="layer-container"
          className="position-relative rounded-4 mt-5 cursor"
        >
          <motion.div
            id="layer-under"
            className="position-absolute rounded-4 border border-2 greenish-6"
          >
            <motion.img
              src="images/physical-therapy-image-3.svg"
              className="w-100 rounded-top-4 bg-white"
              alt=""
            />
            <p className="fs-5 ps-4 mt-2 fw-bold">
              Get feedback from your therapist{" "}
            </p>
          </motion.div>
        </Col>
      </Row>
      <Row className="" id="row-margin-top"></Row>
      <GoUpButton />
    </Container>
  );
};

export default Homepage;
