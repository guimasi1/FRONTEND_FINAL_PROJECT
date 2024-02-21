const ErrorAuthentication = ({ errorMessage }) => {
  return (
    <div className="d-flex error-message px-2 pt-2 align-items-center justify-content-center border border-2 border-black fw-bold w-100">
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorAuthentication;
