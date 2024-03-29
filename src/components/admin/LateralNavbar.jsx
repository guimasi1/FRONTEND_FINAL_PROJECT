import { motion } from "framer-motion";
import { adminLogout } from "../../redux/actions/adminsActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HashLoader } from "react-spinners";
import Cookies from "js-cookie";
import { useTheme } from "../Theme";
const LateralNavbar = ({
  setActiveBreadCrumb,
  setWidth,
  width,
  activeBreadCrumb,
}) => {
  const setComponent = (component) => {
    setActiveBreadCrumb(component);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const [waiting, setWaiting] = useState(false);
  return (
    <div>
      {waiting && (
        <div className="completely-centered z-1">
          <HashLoader color="#0e9a3d" size={200} />
        </div>
      )}
      <div className="fw-bold px-3 pt-3 vh-100 shadow-sm position-sticky top-0">
        <div>
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
            whileHover={{
              backgroundColor: theme === "dark" ? "#00000" : "#68d89b",
            }}
            className={`${
              theme === "dark" && activeBreadCrumb === "main" ? "bg-black" : ""
            } ${
              theme === "light" && activeBreadCrumb === "main"
                ? "greenish text-white"
                : ""
            }   
             d-flex gap-2 py-2 rounded mb-2 px-2`}
            onClick={() => {
              setComponent("main");
            }}
          >
            <span className="material-symbols-outlined cursor">
              bar_chart_4_bars
            </span>
            {width === "auto" && <p className="cursor m-0">Statistics</p>}{" "}
          </motion.div>
          <motion.div
            whileHover={{
              backgroundColor: theme === "dark" ? "#00000" : "#68d89b",
            }}
            className={`${
              theme === "dark" && activeBreadCrumb === "patients"
                ? "bg-black"
                : ""
            } ${
              theme === "light" && activeBreadCrumb === "patients"
                ? "greenish text-white"
                : ""
            }  d-flex gap-2 py-2 rounded mb-2 px-2`}
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
            className={`${
              theme === "dark" && activeBreadCrumb === "physiotherapists"
                ? "bg-black"
                : ""
            } ${
              theme === "light" && activeBreadCrumb === "physiotherapists"
                ? "greenish text-white"
                : ""
            } d-flex gap-2 py-2 rounded mb-2 px-2`}
            whileHover={{
              backgroundColor: theme === "dark" ? "#00000" : "#68d89b",
            }}
            onClick={() => {
              setComponent("physiotherapists");
            }}
          >
            <span className="material-symbols-outlined cursor">
              medical_mask
            </span>
            {width === "auto" && <p className="cursor m-0">Physiotherapists</p>}{" "}
          </motion.div>
          <motion.div
            className={`${
              theme === "dark" && activeBreadCrumb === "exercises"
                ? "bg-black"
                : ""
            } ${
              theme === "light" && activeBreadCrumb === "exercises"
                ? "greenish text-white"
                : ""
            }  d-flex gap-2 py-2 rounded mb-2 px-2`}
            whileHover={{
              backgroundColor: theme === "dark" ? "#00000" : "#68d89b",
            }}
            onClick={() => {
              setComponent("exercises");
            }}
          >
            <span className="material-symbols-outlined cursor">
              fitness_center
            </span>
            {width === "auto" && <p className="cursor m-0">Exercises</p>}{" "}
          </motion.div>
        </div>
        <motion.div
          whileHover={{
            backgroundColor: theme === "dark" ? "#00000" : "#68d89b",
          }}
          className="d-flex gap-2 rounded mb-2 px-2 pt-2"
        >
          <span
            className="material-symbols-outlined cursor pb-1"
            onClick={() => {
              dispatch(adminLogout());
            }}
          >
            logout
          </span>
          {width === "auto" && (
            <p
              className="cursor"
              onClick={() => {
                setWaiting(true);
                setTimeout(() => {
                  navigate("/admin-login");
                  dispatch(adminLogout());
                  Cookies.set("adminToken", "");
                }, 1000);
              }}
            >
              Logout
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};
export default LateralNavbar;
