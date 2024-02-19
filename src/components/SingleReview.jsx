/* eslint-disable react-hooks/exhaustive-deps */
import { parseISO, format } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DeleteConfirmation from "./Utils/DeleteConfirmation";
import { removeReview } from "../redux/actions/reviewsActions";
const SingleReview = ({ review }) => {
  const dispatch = useDispatch();
  const formattedDate = format(parseISO(review.date), "dd MMMM yyyy");

  const [showAlert, setShowAlert] = useState(false);
  const [confirmElimination, setConfirmElimination] = useState(false);

  useEffect(() => {
    if (confirmElimination) {
      dispatch(removeReview(review.id));
    }
  }, [confirmElimination]);
  return (
    <>
      {showAlert && (
        <DeleteConfirmation
          message={"Are you sure you want to delete the review?"}
          setShowAlert={setShowAlert}
          setConfirmElimination={setConfirmElimination}
        />
      )}
      {!showAlert && (
        <div className="fs-8 mb-2">
          {review && (
            <div className="d-flex gap-3">
              <div>
                <img
                  className="patient-profile-image-review rounded-pill mt-1"
                  src={
                    review.patient.profilePictureUrl
                      ? review.patient.profilePictureUrl
                      : "/images/Circle-icons-profile.svg"
                  }
                  alt=""
                />
              </div>
              <div className="d-flex flex-grow-1">
                <div className="flex-grow-1">
                  <p className="mt-0 mb-1 fw-bold">
                    {review.patient.firstName} {review.patient.lastName}
                  </p>
                  <p className="mb-1">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span key={i}>
                        <i className="bi bi-star-fill text-warning"></i>
                      </span>
                    ))}
                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                      <span key={i}>
                        <i className="bi bi-star text-warning"></i>
                      </span>
                    ))}
                  </p>
                  <p>{formattedDate}</p>
                  <p>{review.content}</p>
                </div>
                <div className="cursor me-5">
                  <div
                    className="d-flex justify-content-center align-items-center rounded-pill bg-secondary-subtle"
                    onClick={() => {
                      setShowAlert(true);
                    }}
                  >
                    <span className="material-symbols-outlined fs-5">
                      close
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default SingleReview;
