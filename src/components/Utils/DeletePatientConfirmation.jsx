const DeletePatientConfirmation = ({
  message,
  setConfirmElimination,
  setShowAlert,
}) => {
  return (
    <div className="d-flex flex-column gap-2 mb-2 ms-3 shadow-lg delete-confirmation-alert rounded py-2 px-4 align-items-center border border-3">
      <p className="m-0 text-center">{message}</p>
      <div className="d-flex gap-4 mt-3">
        <span
          className="material-symbols-outlined cursor"
          onClick={() => {
            setConfirmElimination(true);
            setShowAlert(false);
          }}
        >
          check
        </span>
        <span
          className="material-symbols-outlined cursor"
          onClick={() => {
            setShowAlert(false);
          }}
        >
          close
        </span>
      </div>
    </div>
  );
};
export default DeletePatientConfirmation;
