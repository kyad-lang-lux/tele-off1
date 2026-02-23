import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import Acceuil from "../pages/Acceuil";
import Connexion from "../pages/Connexion";
import Support from "../pages/Support";
import Confidentialite from "../pages/Confidentialite";
import Conditions from "../pages/Conditions";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Acceuil" element={<Acceuil />} />
        <Route path="/Connexion" element={<Connexion />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Conditions" element={<Conditions />} />
      </Routes>
    </Router>

  </React.StrictMode>
);