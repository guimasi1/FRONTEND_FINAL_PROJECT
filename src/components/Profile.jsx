import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { getMyPatientProfile } from "../redux/actions/patientsActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.patients.patientProfile);
  useEffect(() => {
    dispatch(getMyPatientProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="my-5 pt-5">
      <Row>
        {myProfile && (
          <Col>
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src="https://placekitten.com/500" />
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
                <ListGroup.Item>{myProfile.email}</ListGroup.Item>
                <ListGroup.Item>{myProfile.gender}</ListGroup.Item>
                <ListGroup.Item>{myProfile.registrationDate}</ListGroup.Item>
              </ListGroup>
              <Card.Footer className="text-center">
                <Button variant="primary" className="py-2 px-5">
                  Save
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        )}
        <Col>
          <Row>
            <Col xs={12}>Colonna di destra</Col>
            <Col>Colonna di destra</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
