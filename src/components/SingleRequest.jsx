import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeRequest } from "../redux/actions/linkRequestsActions";

const SingleRequest = ({ request, updateProfile }) => {
  const dispatch = useDispatch();

  return (
    <Row className="mb-2">
      <Col xs={2}>
        <img src="https://placekitten.com/50" className="rounded-pill" alt="" />
      </Col>
      <Col className="mt-1 p-0 ">
        {request ? request.physiotherapist.firstName : ""}{" "}
        {request ? request.physiotherapist.lastName : ""}
      </Col>
      <Col className="mt-1 text-end cursor">
        <img
          src="images/delete_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
          onClick={() => {
            dispatch(removeRequest(request.id));
            updateProfile();
          }}
        />
      </Col>
    </Row>
  );
};
export default SingleRequest;
