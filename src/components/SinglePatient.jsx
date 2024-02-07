import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SinglePatient = ({ patient }) => {
  const navigate = useNavigate();
  return (
    <Col
      className="shadow-lg rounded-3 d-flex flex-column gap-3 py-2 px-3 ms-3"
      xs={12}
      md={6}
      lg={3}
    >
      <div className="mt-3 d-flex justify-content-between mb-5">
        <img
          src="https://placekitten.com/80"
          alt=""
          className="rounded-pill ms-3"
        />
        <div>
          <Button
            className="py-2 rounded-pill brownish-button"
            onClick={() => {
              navigate("/assignExercises/" + patient.id);
            }}
          >
            Assign exercises
          </Button>
        </div>
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
