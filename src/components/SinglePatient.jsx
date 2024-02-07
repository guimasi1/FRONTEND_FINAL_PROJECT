import { Col } from "react-bootstrap";

const SinglePatient = ({ patient }) => {
  return (
    <Col
      className="shadow-lg rounded-3 d-flex flex-column gap-3"
      xs={12}
      md={6}
      lg={3}
    >
      <div className="mt-3">
        <img src="https://placekitten.com/80" alt="" className="rounded-pill" />
      </div>
      <div className="d-flex justify-content-between">
        <p>
          {patient.firstName} {patient.lastName}
        </p>
        <p>{patient.phoneNumber}</p>
      </div>
      <div></div>
    </Col>
  );
};

export default SinglePatient;
