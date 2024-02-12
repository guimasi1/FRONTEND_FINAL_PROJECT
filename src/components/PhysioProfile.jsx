import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPhysioProfile } from "../redux/actions/physiotherapistActions";
import { motion } from "framer-motion";

const PhysioProfile = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector(
    (state) => state.physiotherapists.physioProfile
  );

  useEffect(() => {
    dispatch(getMyPhysioProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="mb-5 mt-4 container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.2 }}
    >
      <Row className="gap-2">
        {myProfile && (
          <Col>
            <Card className="shadow-lg border-0 rounded-3 pt-4 pb-3">
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="https://placekitten.com/300"
                  className="rounded-pill mt-3"
                  alt=""
                />
              </div>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="d-flex justify-content-between pb-2 mb-0 border-0">
                    <div className="d-flex gap-2 p-0">
                      <span className="material-symbols-outlined">badge</span>
                      <div className="fw-bold">
                        {myProfile.firstName} {myProfile.lastName}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center py-0 border-0">
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined">mail</span>
                      <strong>Email:</strong> {myProfile.email}
                    </div>
                    <div className="d-flex gap-2 mt-2">
                      <span className="material-symbols-outlined">call</span>
                      <p className="p-0"> {myProfile.phoneNumber}</p>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-flex gap-2 border-0">
                    <span className="material-symbols-outlined">
                      stethoscope
                    </span>{" "}
                    <strong>Specialization:</strong>
                    {myProfile.specialization.slice(0, 1) +
                      myProfile.specialization.slice(1).toLowerCase()}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex gap-2 border-0">
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                      <strong>Registration date:</strong>
                      {myProfile.registrationDate}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        )}
        <Col>
          <Row>
            <Col
              xs={12}
              className="p-4 shadow-lg rounded-3 link-request-physio-section"
            >
              <h4 className="mb-4">Pending link requests</h4>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          className="mt-4 p-5 shadow-lg rounded-3 ms-2"
          id="biography-section"
        >
          <h4>Biography</h4>
          <p>{myProfile && myProfile.bio}</p>
        </Col>
      </Row>
    </motion.div>
  );
};

export default PhysioProfile;
