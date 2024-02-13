const GoUpButton = () => {
  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={goToTop}
      className={` btn-secondary position-fixed bottom-0 end-0 me-4 mb-4 text-white greenish rounded-pill d-flex justify-content-center align-items-center cursor`}
      style={{ width: "40px", height: "40px" }}
    >
      <span className="material-symbols-outlined fs-3">arrow_upward</span>
    </div>
  );
};

export default GoUpButton;
