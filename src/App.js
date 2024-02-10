import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Physiotherapists from "./components/Physiotherapists";
import Profile from "./components/Profile";
import Patients from "./components/Patients";
import PhysioProfile from "./components/PhysioProfile";
import AssignExercisesPage from "./components/AssignExercisesPage";
import MyExercisesPage from "./components/MyExercisesPage";
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/physiotherapists" element={<Physiotherapists />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/physioProfile" element={<PhysioProfile />} />
        <Route path="/assignExercises/:id" element={<AssignExercisesPage />} />
        <Route path="/myExercises" element={<MyExercisesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
