import { motion } from "framer-motion";
const LateralNavbar = ({ setActiveBreadCrumb }) => {
  const setComponent = (component) => {
    setActiveBreadCrumb(component);
  };

  return (
    <div className="fw-bold px-3 pt-3 vh-100">
      <motion.div
        whileHover={{ backgroundColor: "#00000" }}
        className="d-flex gap-2 py-2 rounded px-2"
        onClick={() => {
          setComponent("patients");
        }}
      >
        <span className="material-symbols-outlined">physical_therapy</span>
        <p className="cursor m-0">Patients</p>
      </motion.div>
      <motion.div
        className="d-flex gap-2 py-2 rounded px-2"
        whileHover={{ backgroundColor: "#00000" }}
        onClick={() => {
          setComponent("physiotherapists");
        }}
      >
        <span className="material-symbols-outlined">medical_mask</span>
        <p className="cursor m-0">Physiotherapists</p>
      </motion.div>
      <motion.div
        className="d-flex gap-2 py-2 rounded px-2"
        whileHover={{ backgroundColor: "#00000" }}
        onClick={() => {
          setComponent("exercises");
        }}
      >
        <span className="material-symbols-outlined">fitness_center</span>
        <p className="cursor m-0">Exercises</p>
      </motion.div>
      <motion.div
        className="d-flex gap-2 py-2 rounded px-2"
        whileHover={{ backgroundColor: "#00000" }}
        onClick={() => {
          setComponent("assignments");
        }}
      >
        <span className="material-symbols-outlined">assignment</span>
        <p className="cursor m-0">Assignments</p>
      </motion.div>
    </div>
  );
};
export default LateralNavbar;
