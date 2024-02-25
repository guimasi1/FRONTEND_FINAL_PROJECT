import { motion } from "framer-motion";
const LateralNavbar = ({ setActiveBreadCrumb, setWidth, width }) => {
  const setComponent = (component) => {
    setActiveBreadCrumb(component);
  };

  return (
    <div className="fw-bold px-3 pt-3 vh-100 shadow-sm">
      <div className="d-flex justify-content-end">
        <span
          onClick={() => {
            if (width === "auto") {
              setWidth("70px");
            } else {
              setWidth("auto");
            }
          }}
          className={`${
            width !== "auto" ? "me-2 mb-3" : ""
          } material-symbols-outlined cursor me-2 mb-3`}
        >
          side_navigation
        </span>
      </div>
      <motion.div
        whileHover={{ backgroundColor: "#00000" }}
        className="d-flex gap-2 py-2 rounded px-2"
        onClick={() => {
          setComponent("patients");
        }}
      >
        <span className="material-symbols-outlined cursor">
          physical_therapy
        </span>
        {width === "auto" && <p className="cursor m-0">Patients</p>}{" "}
      </motion.div>
      <motion.div
        className="d-flex gap-2 py-2 rounded px-2"
        whileHover={{ backgroundColor: "#00000" }}
        onClick={() => {
          setComponent("physiotherapists");
        }}
      >
        <span className="material-symbols-outlined cursor">medical_mask</span>
        {width === "auto" && (
          <p className="cursor m-0">Physiotherapists</p>
        )}{" "}
      </motion.div>
      <motion.div
        className="d-flex gap-2 py-2 rounded px-2"
        whileHover={{ backgroundColor: "#00000" }}
        onClick={() => {
          setComponent("exercises");
        }}
      >
        <span className="material-symbols-outlined cursor">fitness_center</span>
        {width === "auto" && <p className="cursor m-0">Exercises</p>}{" "}
      </motion.div>
      <motion.div
        className="d-flex gap-2 py-2 rounded px-2"
        whileHover={{ backgroundColor: "#00000" }}
        onClick={() => {
          setComponent("assignments");
        }}
      >
        <span className="material-symbols-outlined cursor">assignment</span>
        {width === "auto" && <p className="cursor m-0">Assignments</p>}{" "}
      </motion.div>
    </div>
  );
};
export default LateralNavbar;
