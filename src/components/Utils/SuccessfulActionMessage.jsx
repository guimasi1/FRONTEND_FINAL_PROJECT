import { useTheme } from "../Theme";
const SuccessfulActionMessage = ({ message }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-grey border-white" : "greenish-2"
      } d-flex gap-2 shadow-lg position-fixed successful-action-message rounded py-2 px-4 align-items-center border border-3`}
    >
      <span className="material-symbols-outlined">task_alt</span>
      <p className="m-0">{message}</p>
    </div>
  );
};
export default SuccessfulActionMessage;
