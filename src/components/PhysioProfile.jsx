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
              <Card.Img
                variant="top"
                src="https://placekitten.com/500"
                className="rounded-top-5"
              />
              <Card.Body>
                <Card.Title>My profile</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="d-flex justify-content-between">
                  <div>
                    {myProfile.firstName} {myProfile.lastName}
                  </div>
                  <p>{myProfile.phoneNumber}</p>
                </ListGroup.Item>
                <ListGroup.Item>Email: {myProfile.email}</ListGroup.Item>
                <ListGroup.Item>
                  specializations: {myProfile.specialization}
                </ListGroup.Item>
                <ListGroup.Item>
                  Registration date: {myProfile.registrationDate}
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer className="text-center">
                <Button
                  variant="success"
                  className="py-2 px-5 rounded-4 greenish-3"
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
