import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  acceptRequest,
  removeRequest,
} from "../redux/actions/linkRequestsActions";
import { useState } from "react";

const SingleRequestPhysio = ({ request }) => {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);

  return (
    <Row
      className={`${hidden ? "d-none" : ""} hover-request mb-2 py-2 rounded-4`}
    >
      <Col xs={2}>
        <img
          src="https://placekitten.com/50"
          className="rounded-pill cursor"
          alt=""
        />
      </Col>
      <Col className="mt-2 p-0 cursor d-flex gap-1">
        <p>{request ? request.patient.firstName : ""}</p>
        <p>{request ? request.patient.lastName : ""}</p>
      </Col>
      <Col className="mt-1 text-end cursor ">
        <img
          src="images\accept-icon.svg"
          alt=""
          className="me-2 icon-request"
          onClick={() => {
            dispatch(acceptRequest(request.id));
            setHidden(true);
          }}
        />
        <img
          src="images/delete_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
          className="icon-request"
          onClick={() => {
            dispatch(removeRequest(request.id));
            setHidden(true);
          }}
        />
      </Col>
    </Row>
  );
};
export default SingleRequestPhysio;
