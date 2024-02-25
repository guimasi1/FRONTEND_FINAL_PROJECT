import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useTheme } from "./Theme";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  return (
    <Container
      fluid
      className={location.pathname === "/admin" ? "d-none" : "mt-5 pt-5"}
    >
      <Row
        className={`fs-8 ${theme === "dark" ? "bg-grey-2" : "greenish-6"} pt-5`}
      >
        <Col xs={{ offset: 2, span: 2 }}>
          <p
            className={`${
              theme === "dark" ? "text-white border-white" : ""
            } border border-start-5 border-black border-bottom-0 border-top-0 border-end-0 ps-2 cursor`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
          <p
            className={`${
              theme === "dark" ? "text-white border-white" : ""
            } border border-start-5 border-black border-bottom-0 border-top-0 border-end-0 ps-2 cursor`}
          >
            Contact us
          </p>
        </Col>
        <Col md={2}>
          <p
            className={`${
              theme === "dark" ? "text-white border-white" : ""
            } border border-start-5 border-black border-bottom-0 border-top-0 border-end-0 ps-2 cursor`}
          >
            How it works
          </p>
          <p
            className={`${
              theme === "dark" ? "text-white border-white" : ""
            } border border-start-5 border-black border-bottom-0 border-top-0 border-end-0 ps-2 cursor`}
          >
            Privacy policy
          </p>
          <p className={`${theme === "dark" ? "text-white" : ""}`}>
            Images by{" "}
            <a
              href="https://www.freepik.com/"
              className={`${theme === "dark" ? "text-white" : "text-black"}`}
            >
              Freepik
            </a>{" "}
            and
            <a
              href="https://storyset.com/"
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } ms-1`}
            >
              StorySet
            </a>
          </p>
        </Col>
        <Col md={2}>
          <p
            className={`${
              theme === "dark" ? "text-white border-white" : ""
            } border border-start-5 border-black border-bottom-0 border-top-0 border-end-0 ps-2 cursor`}
          >
            Our mission
          </p>
          <p
            className={`${
              theme === "dark" ? "text-white border-white" : ""
            } border border-start-5 border-black border-bottom-0 border-top-0 border-end-0 ps-2 cursor`}
          >
            Pricing
          </p>
        </Col>
        <Col md={2} className="d-flex flex-column gap-1 pb-3">
          <i
            className={`${
              theme === "dark" ? "text-white" : ""
            } bi bi-facebook fs-5 ps-2 cursor`}
          ></i>
          <i
            className={`${
              theme === "dark" ? "text-white" : ""
            } bi bi-instagram fs-5 ps-2 cursor`}
          ></i>
          <i
            className={`${
              theme === "dark" ? "text-white" : ""
            } bi bi-github fs-5 ps-2 cursor`}
          ></i>
          <i
            className={`${
              theme === "dark" ? "text-white" : ""
            } bi bi-twitter-x fs-5 ps-2 cursor`}
          ></i>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
