import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SinglePatient = ({ patient }) => {
  const navigate = useNavigate();
  return (
    <Col
      className="shadow-lg rounded-3 d-flex py-2 px-3 ms-4 patient-card"
      xs={12}
      md={6}
      lg={12}
    >
      <div>
        <img
          src="https://placekitten.com/80"
          alt=""
          className="rounded-4 ms-1"
        />
      </div>
      <div className="d-flex flex-column align-items-stretch justify-content-end">
        <div className="flex-grow-1 ms-3">
          <p className="fw-bold pb-0 mb-0 ">
            {patient.firstName} {patient.lastName}
          </p>
        </div>
        <div className="ms-3 mt-1 fs-8 d-flex gap-1">
          <span className="material-symbols-outlined fs-5">mail</span>
          {patient.email}
        </div>
        <div className="ms-3 fs-7 d-flex gap-1 mt-1">
          <span className="material-symbols-outlined fs-5">call</span>
          {patient.phoneNumber}
        </div>
        <div className="mt-5 d-flex mb-3 name-container-patient align-self-end ms-4 ps-2">
          <div className="text-end ms-3">
            <Button
              className="py-2 px-5 fs-8 rounded-2 brownish-button fw-bold "
              onClick={() => {
                navigate("/assignExercises/" + patient.id);
              }}
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SinglePatient;
