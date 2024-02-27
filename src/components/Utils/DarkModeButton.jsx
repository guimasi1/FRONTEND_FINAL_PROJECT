import { useTheme } from "../Theme";
const DarkModeButton = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div>
      <span
        className="material-symbols-outlined cursor mt-1"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "dark_mode" : "light_mode"}
      </span>
    </div>
  );
};

export default DarkModeButton;
