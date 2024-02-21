const DeleteConfirmation = ({
  message,
  setConfirmElimination,
  setShowAlert,
}) => {
  return (
    <div className="d-flex flex-column gap-2 mb-2 ms-3 shadow-lg greenish-6 fw-bold delete-confirmation-alert rounded py-2 px-4 align-items-center border border-3">
      <p className="m-0 text-center">{message}</p>
      <div className="d-flex gap-4 mt-3">
        <div
          style={{ width: "30px", height: "30px" }}
          className="greenish d-flex justify-content-center align-items-center text-white rounded-pill cursor"
          onClick={() => {
            setConfirmElimination(true);
            setShowAlert(false);
          }}
        >
          <span className="material-symbols-outlined ">check</span>
        </div>
        <div
          style={{ width: "30px", height: "30px" }}
          className="bg-secondary d-flex justify-content-center align-items-center text-white rounded-pill cursor"
          onClick={() => {
            setShowAlert(false);
          }}
        >
          <span className="material-symbols-outlined cursor">close</span>
        </div>
      </div>
    </div>
  );
};
export default DeleteConfirmation;
