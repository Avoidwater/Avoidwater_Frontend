import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NearShelter from "./pages/NearShelter/NearShelter";
import Header from "../src/components/Header/Header";
import Main from "../src/pages/Main/Main";
import DmgPreGuide from "../src/pages/DmgPreGuide/DmgPreGuide";
import SubmergedCar from "../src/pages/SubmergedCarCheck/SubmergedCarCheck";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/nearshelter" element={<NearShelter />} />
        <Route path="/" element={<Header />} />
        <Route path="/main" element={<Main />} />
        <Route path="/dmgpreguide" element={<DmgPreGuide />} />
        <Route path="/submergedcar" element={<SubmergedCar />} />
      </Routes>
    </Router>
  );
}
export default AppRouter;
