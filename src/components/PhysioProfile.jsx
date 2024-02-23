/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editBiography,
  getMyPhysioProfile,
  uploadPhysioProfileImage,
} from "../redux/actions/physiotherapistActions";
import { motion } from "framer-motion";
import SingleRequestPhysio from "./SingleRequestPhysio";
import { getPhysioLinkRequests } from "../redux/actions/linkRequestsActions";
import { parseISO, format } from "date-fns";
import { BeatLoader } from "react-spinners";
import { useTheme } from "./Theme";

const PhysioProfile = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const myProfile = useSelector(
    (state) => state.physiotherapists.physioProfile
  );
  const linkRequests = useSelector(
    (state) => state.requests.linkRequestsByPhysio
  );
  const [showEdit, setShowEdit] = useState(false);

  const [bio, setBio] = useState(myProfile.bio);
  const formattedDate = format(
    parseISO(myProfile.registrationDate),
    "dd MMMM yyyy"
  );
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    dispatch(getMyPhysioProfile());
    if (myProfile) {
      dispatch(getPhysioLinkRequests(myProfile.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ref = useRef(null);

  const handleProfileImgClick = () => {
    ref.current.click();
  };

  const handleUploadPicture = async (e) => {
    const file = e.target.files[0];
    try {
      setWaiting(true);
      const response = await dispatch(
        uploadPhysioProfileImage(myProfile.id, file)
      );
      if (response !== null || response !== undefined) {
        setWaiting(false);
      }
    } catch (err) {
      setWaiting(false);
      console.log(err);
    }
  };

  return (
    <motion.div
      className="mb-5 mt-4 container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.3, ease: "linear", duration: 0.2 }}
    >
      <Row className="gap-2">
        {myProfile && (
          <Col>
            <Card
              className={`${
                theme === "dark" ? "bg-grey" : ""
              } shadow-lg border-0 rounded-3 pt-4 pb-3`}
              id="profile-physio-section"
            >
              <div
                className="d-flex justify-content-center align-items-center position-relative"
                style={{ height: "300px" }}
                onClick={handleProfileImgClick}
              >
                {!waiting && (
                  <img
                    src={
                      myProfile.profilePictureUrl
                        ? myProfile.profilePictureUrl
                        : "images/Circle-icons-profile.svg"
                    }
                    className="rounded-pill cursor mt-3 profile-image"
                    alt=""
                  />
                )}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.5 },
                  }}
                  className="material-symbols-outlined position-absolute top-50 fs-1 border border-2 cursor border-black rounded-pill p-1 pencil-profile-image"
                >
                  edit
                </motion.span>
                {waiting && (
                  <div>
                    <BeatLoader color="#0e9a3d" />
                  </div>
                )}
              </div>
              <Form.Control
                type="file"
                className="d-none"
                ref={ref}
                onChange={handleUploadPicture}
              />
              <Card.Body>
                <ListGroup
                  className={`list-group-flush ${
                    theme === "dark" ? "bg-grey" : ""
                  }`}
                >
                  <ListGroup.Item
                    className={`${
                      theme === "dark" ? "bg-grey text-white" : ""
                    } d-flex justify-content-between pb-2 mb-0 border-0`}
                  >
                    <div className="d-flex gap-2 p-0">
                      <span className="material-symbols-outlined">badge</span>
                      <div className="fw-bold">
                        {myProfile.firstName} {myProfile.lastName}
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={`${
                      theme === "dark" ? "bg-grey text-white" : ""
                    } d-flex justify-content-between align-items-center py-0 border-0`}
                  >
                    <div className="d-flex gap-2">
                      <span className="material-symbols-outlined">mail</span>
                      <strong>Email:</strong> {myProfile.email}
                    </div>
                    <div className="d-flex gap-2 mt-2">
                      <span className="material-symbols-outlined">call</span>
                      <p className="p-0"> {myProfile.phoneNumber}</p>
                    </div>
                  </ListGroup.Item>

                  <ListGroup.Item
                    className={`${
                      theme === "dark" ? "bg-grey text-white" : ""
                    } d-flex gap-2 border-0`}
                  >
                    <span className="material-symbols-outlined">
                      stethoscope
                    </span>{" "}
                    <strong>Specialization:</strong>
                    {myProfile.specialization.slice(0, 1) +
                      myProfile.specialization.slice(1).toLowerCase()}
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={`${
                      theme === "dark" ? "bg-grey text-white" : ""
                    }`}
                  >
                    <div className={`d-flex gap-2 border-0`}>
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                      <strong>Registration date:</strong>
                      {formattedDate}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        )}
        <Col>
          <Row>
            <Col
              xs={12}
              className={`${
                theme === "dark" ? "bg-grey text-white" : ""
              } p-4 shadow-lg rounded-3 link-request-physio-section`}
            >
              <h4 className="mb-4 text-center">Pending link requests</h4>
              {linkRequests &&
                linkRequests.map((request) => (
                  <SingleRequestPhysio request={request} key={request.id} />
                ))}
              {linkRequests.length === 0 && (
                <div
                  className={`${
                    theme === "dark" ? "bg-grey text-white" : "greenish"
                  }  py-3 d-flex justify-content-center align-items-center`}
                >
                  <p className="m-0">You have 0 pending requests right now.</p>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col
          className="mt-4 p-5 shadow-lg rounded-3 ms-2"
          id="biography-section"
        >
          <div className="text-end">
            <span
              className="material-symbols-outlined cursor"
              onClick={() => {
                setShowEdit(true);
              }}
            >
              edit
            </span>
          </div>
          <h3 className="text-center">Biography</h3>
          <div className="mt-4">
            {!showEdit && <p>{myProfile && myProfile.bio}</p>}
          </div>
          {showEdit && (
            <div className="d-flex mt-4">
              <div className="flex-grow-1">
                <Form.Control
                  id="form-control-biography"
                  className="custom-input"
                  as="textarea"
                  rows={6}
                  value={bio ? bio : ""}
                  onChange={(e) => {
                    setBio(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex flex-column gap-2 mt-3 justify-content-center mb-5 cursor">
                <div
                  className="greenish-button rounded-4 py-2 px-4 text-center d-flex gap-2 fw-bold"
                  onClick={() => {
                    dispatch(
                      editBiography(myProfile.id, {
                        ...myProfile,
                        bio,
                      })
                    );
                    setShowEdit(false);
                  }}
                >
                  <span className="material-symbols-outlined">save</span>
                  Save
                </div>
                <div
                  className="btn btn-secondary text-white rounded-4 py-2 px-4 text-center d-flex gap-1 fw-bold"
                  onClick={() => {
                    setShowEdit(false);
                  }}
                >
                  <span className="material-symbols-outlined">close</span>
                  Cancel
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </motion.div>
  );
};

export default PhysioProfile;
