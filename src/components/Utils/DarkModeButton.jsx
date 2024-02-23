import { useTheme } from "../Theme";
const DarkModeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <span className="material-symbols-outlined cursor" onClick={toggleTheme}>
        dark_mode
      </span>
    </div>
  );
};

export default DarkModeButton;
