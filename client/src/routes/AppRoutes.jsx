import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

import About from "../pages/About";
import BloodAvailability from "../pages/BloodAvailability/BloodAvailability";
import BecomeDonor from "../pages/BecomeDonor/BecomeDonor";
import Contact from "../pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route
        path="/availability"
        element={<BloodAvailability />}
      />
      <Route
        path="/donate"
        element={<BecomeDonor />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;