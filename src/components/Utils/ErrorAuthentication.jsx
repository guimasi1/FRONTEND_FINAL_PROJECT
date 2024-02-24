import { useTheme } from "../Theme";
const ErrorAuthentication = ({ errorMessage }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "text-black border-0" : ""
      } d-flex error-message px-2 pt-2 align-items-center justify-content-center border border-2 border-black fw-bold w-100`}
    >
      <p className="mb-2">{errorMessage}</p>
    </div>
  );
};

export default ErrorAuthentication;
