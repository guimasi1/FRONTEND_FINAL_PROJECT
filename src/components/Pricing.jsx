/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import StripeOption1 from "./Utils/StripeOption1";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <Container>
      <Row>
        <Col
          xs={12}
          className="d-flex flex-column justify-content-center text-center mt-5"
        >
          <motion.div
            className="fw-bold"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1.5, delay: 0.3 },
            }}
          >
            <p className="fs-1 fw-bolder">
              Our pricing is simple with no <br /> hidden fees!
            </p>
          </motion.div>
          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 1 },
                },
              }}
              initial="hidden"
              animate={mainControls}
            >
              <p className="fs-5">
                Choose your favourite plan based on your needs.
              </p>
            </motion.div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -175 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 1.5, duration: 0.8 },
              },
            }}
            initial="hidden"
            animate={mainControls}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, delay: 0.2 },
            }}
            className="d-flex flex-column rounded-4 shadow-lg py-4 px-2 fw-bold mt-4"
          >
            <div className="text-center w-50 badge-pricing">
              <div className="px-5 py-2 fs-5 rounded-2 text-black">Basic</div>
            </div>
            <div>
              <p className="fs-lg-1 text-center fw-bolder">
                5€<span className="fs-7">/month</span>
              </p>
            </div>
            <p className="px-5 mt-2">
              The perfect plan for just getting started! Try it now.
            </p>
            <hr className="mt-1 mb-4" />
            <ListGroup className="px-4">
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2 mb-5">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Porta ac consectetur ac
              </ListGroup.Item>
            </ListGroup>
            <div className="w-100 text-center">
              <StripeOption1
                priceId={"price_1OlZiWHxfOF7FT2OHCZ6mH3Q"}
                buttonText={"Get Basic Plan"}
              />
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={4}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 300 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 1.5, duration: 0.8 },
              },
            }}
            initial="hidden"
            animate={mainControls}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, delay: 0.2 },
            }}
            className="d-flex flex-column rounded-4 shadow-lg py-4 px-2 fw-bold mt-4 position-relative"
          >
            <img
              src="images/bookmark.svg"
              alt=""
              className="w-25 position-absolute"
              id="bookmark-favourite-plan"
            />
            <div className="text-center w-50 badge-pricing">
              <div className="px-5 py-2 fs-5 rounded-2 text-black">Premium</div>
            </div>
            <div>
              <p className="fs-lg-1 text-center fw-bolder">
                10€<span className="fs-7">/month</span>
              </p>
            </div>
            <p className="px-5 mt-2">
              The perfect plan for just getting started! Try it now.
            </p>
            <hr className="mt-1 mb-4" />
            <ListGroup className="px-4">
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2 mb-5">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Porta ac consectetur ac
              </ListGroup.Item>
            </ListGroup>
            <div className="w-100 text-center">
              <StripeOption1
                priceId={"price_1OluhEHxfOF7FT2OoAiFXoFi"}
                buttonText={"Get Premium plan"}
              />
            </div>
          </motion.div>
        </Col>
        <Col xs={12} md={4}>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 175 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 1.5, duration: 0.8 },
              },
            }}
            initial="hidden"
            animate={mainControls}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3, delay: 0.2 },
            }}
            className="d-flex flex-column rounded-4 shadow-lg py-4 px-2 fw-bold mt-4"
          >
            <div className="text-center w-50 badge-pricing">
              <div className="px-5 py-2 fs-5 rounded-2 text-black">
                Exclusive
              </div>
            </div>
            <div>
              <p className="fs-lg-1 text-center fw-bolder">
                20€<span className="fs-7">/month</span>
              </p>
            </div>
            <p className="px-5 mt-2">
              The perfect plan for just getting started! Try it now.
            </p>
            <hr className="mt-1 mb-4" />
            <ListGroup className="px-4">
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item className="border-0 fw-lighter fs-7 align-items-center d-flex gap-2 mb-5">
                <span className="material-symbols-outlined fs-4 fw-bold text-success">
                  check_circle
                </span>
                Porta ac consectetur ac
              </ListGroup.Item>
            </ListGroup>
            <div className="w-100 text-center">
              <StripeOption1
                priceId={"price_1Oluk1HxfOF7FT2O2Hl1L094"}
                buttonText={"Get Exclusive plan"}
              />
            </div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Pricing;
