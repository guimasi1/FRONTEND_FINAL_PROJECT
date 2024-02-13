const GoBackButton = () => {
  return (
    <div
      className={` btn-secondary position-fixed top-0 left-0 ms-4 mt-5 text-white brownish-button rounded-pill d-flex justify-content-center align-items-center cursor`}
      style={{ width: "40px", height: "40px" }}
    >
      <span className="material-symbols-outlined fs-3">arrow_back</span>
    </div>
  );
};
export default GoBackButton;
