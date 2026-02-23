import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import Acceuil from "../pages/Acceuil";
import Connexion from "../pages/Connexion";
import Support from "../pages/Support";
import Confidentialite from "../pages/Confidentialite";
import Conditions from "../pages/Conditions";
import Enregistrement from "../pages/enregistrement";
import Dashboard from "../dashboard/dashboard";
import Scenario from "../dashboard/Scenario";
import Profil from "../dashboard/Profil";
import Appareil from "../dashboard/appareil";
import Layout from "../dashboard/components/Layout";
import Sidebar from "../dashboard/components/Sidebar";
import Topbar from "../dashboard/components/Topbar";
import MobileNav from "../dashboard/components/MobileNav";

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
        <Route path="/Enregistrement" element={<Enregistrement />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Scenario" element={<Scenario />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Appareil" element={<Appareil />} />
        <Route path="/MobileNav" element={<MobileNav />} />
        <Route path="/Topbar" element={<Topbar />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Layout" element={<Layout />} />
      </Routes>
    </Router>

  </React.StrictMode>
);