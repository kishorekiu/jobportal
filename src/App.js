import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Userdashboard from "./components/Userdashboard";
import Recruiterdashboard from "./components/Recruiterdashboard";
import Home from "./components/Home";
import Favouritejobs from "./components/Favouritejobs";
import Appliedjobs from "./components/Appliedjobs";
import Uploadresume from "./components/Uploadresume";
import Footer from "./components/Footer";
import Resumes from "./components/Resumes";
import Postjob from "./components/Postjob";
function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />{" "}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="resumes" element={<Resumes />} />
        <Route path="postjob" element={<Postjob />} />
        <Route path="/userdashboard" element={<Userdashboard />} />
        <Route path="/favourites" element={<Favouritejobs />} />
        <Route path="/appliedjobs" element={<Appliedjobs />} />
        <Route path="/uploadresume" element={<Uploadresume />} />
        <Route path="/recruiterdashboard" element={<Recruiterdashboard />} />
      </Routes>
      <div className="overflow-hidden margin-y-lg mb-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;
