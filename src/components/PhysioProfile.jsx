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
    <Container className="my-5 pt-5 ">
      <Row className="gap-5 ">
        {myProfile && (
          <Col>
            <Card className="shadow-lg border-0 rounded-5">
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
                      <span class="material-symbols-outlined">badge</span>
                      <div className="fw-bold">
                        {myProfile.firstName} {myProfile.lastName}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center py-0 border-0">
                    <div className="d-flex gap-2">
                      <span class="material-symbols-outlined">mail</span>
                      <strong>Email:</strong> {myProfile.email}
                    </div>
                    <div className="d-flex gap-2 mt-2">
                      <span class="material-symbols-outlined">call</span>
                      <p className="p-0"> {myProfile.phoneNumber}</p>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item className="d-flex gap-2 border-0">
                    <span class="material-symbols-outlined">stethoscope</span>{" "}
                    <strong>Specialization:</strong>
                    {myProfile.specialization.slice(0, 1) +
                      myProfile.specialization.slice(1).toLowerCase()}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex gap-2 border-0">
                      <span class="material-symbols-outlined">
                        calendar_month
                      </span>
                      <strong>Registration date:</strong>
                      {myProfile.registrationDate}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button
                  variant="success"
                  className="py-2 px-5 rounded-4 greenish-3 mt-3"
                >
                  Save
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        )}
        <Col>
          <Row>
            <Col xs={12} className="p-4 shadow-lg rounded-5">
              <h4 className="mb-4">Pending link requests</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PhysioProfile;
