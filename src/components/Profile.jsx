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
    if (myProfile) {
      dispatch(getPatientsLinkRequests(myProfile.id));
    }
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
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="https://placekitten.com/300"
                  className="rounded-pill mt-3"
                  alt=""
                />
              </div>
              <Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="py-0 border-0 d-flex justify-content-between mb-2">
                    <div className="fw-bold d-flex gap-2">
                      <span className="material-symbols-outlined">badge</span>
                      {myProfile.firstName} {myProfile.lastName}
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-0 border-0 d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined">mail</span>
                      <strong>Email:</strong> {myProfile.email}
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <span className="material-symbols-outlined">call</span>
                      <p className="p-0 mt-3">{myProfile.phoneNumber}</p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-0 border-0 d-flex gap-1">
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined">man</span>
                      <strong>Gender:</strong>{" "}
                    </div>
                    <p className="p-0">
                      {myProfile.gender.slice(0, 1)}
                      {myProfile.gender.slice(1).toLowerCase()}
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="py-0 border-0 d-flex gap-1">
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                      <strong>Registration date:</strong>
                    </div>
                    {myProfile.registrationDate}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
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
              <h4 className="mb-4">Sent link requests</h4>
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
