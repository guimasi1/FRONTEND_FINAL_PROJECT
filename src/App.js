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
import Footer from "./components/Footer";
import GoBackButton from "./components/Utils/GoBackButton";
import PageNotFound from "./components/Utils/PageNotFound";
import SinglePhysioDetails from "./components/SinglePhysioDetails";
import SuccessfulPayment from "./components/Utils/SuccessfulPayment";
import DeniedPayment from "./components/Utils/DeniedPayment";
import Pricing from "./components/Pricing";
import { ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MyNavbar />
        <GoBackButton />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/physiotherapists" element={<Physiotherapists />} />
          <Route path="/physioDetails/:id" element={<SinglePhysioDetails />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/physioProfile" element={<PhysioProfile />} />
          <Route
            path="/assignExercises/:id"
            element={<AssignExercisesPage />}
          />
          <Route path="/myExercises" element={<MyExercisesPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/successful-payment" element={<SuccessfulPayment />} />
          <Route path="/denied-payment" element={<DeniedPayment />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
