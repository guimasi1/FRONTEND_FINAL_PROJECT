import { motion } from "framer-motion";
import { Col } from "react-bootstrap";
const SinglePhysioByPatient = ({ physio }) => {
  return (
    <Col xs={6} md={3}>
      <motion.div
        className="d-flex gap-3 shadow-lg py-4 rounded cursor px-3"
        whileHover={{ scale: 1.05, backgroundColor: "#D7B079" }}
      >
        <div>
          <img
            src="https://placekitten.com/100"
            className="rounded-pill"
            alt=""
          />
        </div>
        <div className="d-flex flex-column ms-2">
          <div>
            <p className="fw-bold m-0">
              {physio ? physio.firstName : ""} {physio ? physio.lastName : ""}
            </p>
          </div>
          <div>
            <p className="m-0 fs-7">
              {physio.specialization.slice(0, 1) +
                physio.specialization.slice(1).toLowerCase()}
            </p>
          </div>
        </div>
      </motion.div>
    </Col>
  );
};
export default SinglePhysioByPatient;
