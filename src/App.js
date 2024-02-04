import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Physiotherapist from "./components/Physiotherapists";
function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/physiotherapists" element={<Physiotherapist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
