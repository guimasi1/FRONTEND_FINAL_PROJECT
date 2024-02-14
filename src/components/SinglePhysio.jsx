/* eslint-disable react-hooks/exhaustive-deps */
import { Badge, Button } from "react-bootstrap";
import {
  connectWithPhysio,
  getPhysiotherapists,
} from "../redux/actions/physiotherapistActions";
import { getMyPatientProfile } from "../redux/actions/patientsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
const SinglePhysio = ({ physio, index }) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => state.patients.patientProfile);
  useEffect(() => {
    dispatch(getMyPatientProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [requestDetails, setRequestDetails] = useState({
    patient_id: "",
    physiotherapist_id: "",
  });
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if ((index + 2) % 10 === 0) {
      dispatch(getPhysiotherapists(index + 10));
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0.04 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.3 }}
      className="d-flex mb-4 gap-3 border border-1 rounded-1 ps-0 shadow-lg "
      xs={12}
    >
      <div className="rounded-start-1">
        <img
          src="https://placekitten.com/220"
          alt=""
          className="rounded-start-1"
        />
      </div>

      <div className="d-flex justify-content-between flex-grow-1 pt-3">
        <div>
          <p className="fw-bold">
            {physio.firstName} {physio.lastName}
          </p>
          <p>{physio.email}</p>
          <p>{physio.phoneNumber}</p>
          <p className="mt-5 pt-2">
            <Badge className="bg-dark">{physio.specialization}</Badge>
          </p>
        </div>

        <div className="mt-3">
          <Button
            variant="success"
            className={`rounded-pill px-4 py-2 fw-bold`}
            onClick={(e) => {
              e.preventDefault();
              setRequestDetails({
                physiotherapist_id: physio.id,
                patient_id: myProfile.id,
              });
              console.log(requestDetails);
              dispatch(connectWithPhysio(requestDetails));
            }}
          >
            Connect
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SinglePhysio;
