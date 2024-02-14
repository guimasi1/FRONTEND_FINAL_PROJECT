const SuccessfulActionMessage = ({ message }) => {
  return (
    <div className="d-flex gap-2 greenish-2 position-fixed successful-action-message rounded py-2 px-4 align-items-center border border-3">
      <span className="material-symbols-outlined">task_alt</span>
      <p className="m-0">{message}</p>
    </div>
  );
};
export default SuccessfulActionMessage;
