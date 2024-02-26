/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, Row } from "react-bootstrap";
import { getPhysiotherapists } from "../redux/actions/physiotherapistActions";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, useAnimation, useInView } from "framer-motion";
import TypingEffect from "./TypingEffect";
import GoUpButton from "./Utils/GoUpButton";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./Theme";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPhysiotherapists());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const motionControls = useAnimation();
  const motionControls2 = useAnimation();
  useEffect(() => {
    if (isInView) {
      motionControls.start("visible");
    }
  }, [isInView]);
  useEffect(() => {
    if (isInView2) {
      motionControls2.start("visible");
    }
  }, [isInView2]);
  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "light") {
      document.getElementById("root").classList.add("light");
      document.getElementById("root").classList.remove("dark");
    } else {
      document.getElementById("root").classList.add("dark");
      document.getElementById("root").classList.remove("light");
    }
  }, [theme]);

  return (
    <Container className={`mb-5 ${theme}`}>
      <ToastContainer />
      <Row>
        <Col className="order-1 order-md-0">
          <motion.h1
            id="headline"
            className="mt-5 fw-bolder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, ease: "linear", duration: 2 }}
          >
            Step into Wellness, Move Beyond
            <motion.p
              className="d-block d-md-inline ms-3 text-greenish"
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
              onClick={() => {
                navigate("/pricing");
              }}
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
          <motion.div ref={ref}>
            <motion.h2
              className="motivational-text mb-5"
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 1, duration: 1 },
                },
              }}
              initial="hidden"
              animate={motionControls}
            >
              Discover a Healthier, Stronger You
            </motion.h2>
            <motion.p
              className="fs-5"
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 1.4, duration: 1 },
                },
              }}
              initial="hidden"
              animate={motionControls}
            >
              <strong>Embrace the Journeys</strong>: Dive into our tailored
              physiotherapy exercises and unlock a world where mobility meets
              freedom. Our expertly designed programs promise more than
              recovery; they open the door to a life without limits.
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 1.7, duration: 1 },
                },
              }}
              initial="hidden"
              animate={motionControls}
              className="p-0 d-flex align-items-center gap-2"
            >
              <span className="material-symbols-outlined pt-2 align-self-baseline fs-1 fw-bold check-box-icon">
                check_box
              </span>{" "}
              <span className="fs-5">
                <strong>Improved Mobility & Flexibility:</strong> Say goodbye to
                stiffness and hello to moving freely.
              </span>
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 2, duration: 1 },
                },
              }}
              initial="hidden"
              animate={motionControls}
              className="p-0 d-flex align-items-center gap-2"
            >
              <span className="material-symbols-outlined pt-2 align-self-baseline fs-1 fw-bold check-box-icon">
                check_box
              </span>{" "}
              <span className="fs-5">
                <strong>Strength & Resilience:</strong> Build muscle strength
                around key areas, safeguarding against future injuries.
              </span>
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 2.3, duration: 1 },
                },
              }}
              initial="hidden"
              animate={motionControls}
              className="p-0 d-flex align-items-center gap-2"
            >
              <span className="material-symbols-outlined pt-2 align-self-baseline fs-1 fw-bold check-box-icon">
                check_box
              </span>{" "}
              <span className="fs-5">
                <strong>Balance & Posture:</strong> Enhance your core, improve
                your balance, and stand taller, stronger.
              </span>
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 200 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 2.6, duration: 1 },
                },
              }}
              initial="hidden"
              animate={motionControls}
              className="p-0 d-flex align-items-center gap-2"
            >
              <span className="material-symbols-outlined pt-2 align-self-baseline fs-1 fw-bold check-box-icon">
                check_box
              </span>{" "}
              <span className="fs-5">
                <strong>Effective Pain Relief:</strong> Target the root of your
                discomfort, reducing pain with each session.
              </span>
            </motion.p>
          </motion.div>
        </Col>
      </Row>
      <Row className="mt-5 py-5 d-none d-md-flex">
        <Col xs={12}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.8 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: 1, duration: 1.2 },
              },
            }}
            initial="hidden"
            animate={motionControls2}
          >
            <h2 className="motivational-text">Your New Chapter begins now!</h2>
            <p className="mt-3 fs-5">
              Join us and step into a brighter, pain-free future. Your journey
              to well-being starts here.
            </p>
          </motion.div>
        </Col>
        <Col
          id="layer-container"
          className="position-relative rounded-4 mt-5 cursor"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 1.6, duration: 1 },
              },
            }}
            initial="hidden"
            animate={motionControls2}
            id="layer-under"
            className="position-absolute rounded-4 border border-2 greenish-6"
          >
            <motion.img
              src="images/Jogging-amico.svg"
              className={`w-100 rounded-top-4 bg-white`}
              alt=""
            />
            <p className="fs-5 ps-4 mt-2 fw-bold text-black">
              Discover the power of physiotherapy
            </p>
          </motion.div>
        </Col>
        <Col
          id="layer-container"
          className="position-relative rounded-4 mt-5 cursor"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 1.1, duration: 1 },
              },
            }}
            initial="hidden"
            animate={motionControls2}
            id="layer-under"
            className="position-absolute rounded-4 border border-2 greenish-6"
          >
            <motion.img
              src="images/physical-therapy-image.svg"
              className="w-100 rounded-top-4 bg-white "
              alt=""
            />
            <p className="fs-5 ps-4 mt-2 fw-bold text-black">
              Get in touch with the best physiotherapists
            </p>
          </motion.div>
        </Col>
        <Col
          ref={ref2}
          id="layer-container"
          className="position-relative rounded-4 mt-5 cursor"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 1.1, duration: 1 },
              },
            }}
            initial="hidden"
            animate={motionControls2}
            id="layer-under"
            className="position-absolute rounded-4 border border-2 greenish-6"
          >
            <motion.img
              src="images/physical-therapy-image-2.svg"
              className="w-100 rounded-top-4 bg-white"
              alt=""
            />
            <p className="fs-5 ps-4 mt-2 fw-bold text-black">
              Follow a personalized exercise program{" "}
            </p>
          </motion.div>
        </Col>
        <Col
          id="layer-container"
          className="position-relative rounded-4 mt-5 cursor"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 200 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 1.6, duration: 1 },
              },
            }}
            initial="hidden"
            animate={motionControls2}
            id="layer-under"
            className="position-absolute rounded-4 border border-2 greenish-6"
          >
            <motion.img
              src="images/physical-therapy-image-3.svg"
              className="w-100 rounded-top-4 bg-white"
              alt=""
            />
            <p className="fs-5 ps-4 mt-2 fw-bold text-black">
              Receive feedback from your therapist{" "}
            </p>
          </motion.div>
        </Col>
      </Row>

      <Row className="" id="row-margin-top"></Row>
      <Row className="mt-5">
        <Col className="d-flex flex-column text-center mt-5">
          <h4 className="fs-1 fw-bold">Are you ready?</h4>
          <div className="d-flex justify-content-center ">
            <svg
              className="w-25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <motion.path
                  d="M8 12.3333L10.4615 15L16 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#0e9a3d"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  whileInView={{ opacity: 1, pathLength: 1 }}
                  transition={{ duration: 2.5, delay: 4 }}
                ></motion.path>
              </g>
            </svg>
          </div>
        </Col>
      </Row>
      <GoUpButton />
    </Container>
  );
};

export default Homepage;
