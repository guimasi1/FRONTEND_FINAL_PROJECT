import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  acceptRequest,
  removeRequest,
} from "../redux/actions/linkRequestsActions";
import { useState } from "react";
const SingleRequest = ({ request, updateProfile }) => {
  const dispatch = useDispatch();
  const [accepted, setAccepted] = useState(false);
  const [removed, setRemoved] = useState(false);
  return (
    <Row
      className={`hover-request mb-2 py-2 rounded-4 ${
        accepted || removed ? "d-none" : ""
      }`}
    >
      <Col xs={2}>
        <img
          src="https://placekitten.com/50"
          className="rounded-pill cursor"
          alt="profile"
        />
      </Col>
      <Col className="mt-1 p-0 cursor">
        {request ? request.physiotherapist.firstName : ""}
        {request ? request.physiotherapist.lastName : ""}
      </Col>
      <Col className="mt-1 text-end cursor ">
        <img
          src="images/delete_FILL0_wght400_GRAD0_opsz24.svg"
          alt="trash icon"
          className="icon-request"
          onClick={() => {
            dispatch(removeRequest(request.id));
            updateProfile();
            setRemoved(true);
          }}
        />
      </Col>
    </Row>
  );
};
export default SingleRequest;
