import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { getMyPatientProfile } from "../redux/actions/patientsActions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientsLinkRequests } from "../redux/actions/linkRequestsActions";
import SingleRequest from "./SingleRequest";

const Profile = () => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(0);
  const myProfile = useSelector((state) => state.patients.patientProfile);
  const patientLinkRequests = useSelector(
    (state) => state.requests.linkRequestsByPatient.content
  );

  const updateProfile = () => setUpdate(update + 1);

  useEffect(() => {
    dispatch(getMyPatientProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(patientLinkRequests);
    console.log("vengo dopo patient link requests");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getPatientsLinkRequests(myProfile.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getMyPatientProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  return (
    <Container className="mb-5 mt-4">
      <Row className="gap-5 ">
        {myProfile && (
          <Col>
            <Card className="shadow-lg border-0 rounded-5">
              <div className="d-flex justify-content-center align-items-center mt-4">
                <Card.Img
                  variant="top"
                  src="https://placekitten.com/500"
                  className="rounded-pill w-50 "
                />
              </div>
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
              {patientLinkRequests &&
                patientLinkRequests.map((request, index) => (
                  <SingleRequest
                    request={request}
                    key={index}
                    updateProfile={updateProfile}
                  />
                ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
