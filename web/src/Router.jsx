import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NearShelter from './pages/NearShelter/NearShelter';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/nearshelter" element={<NearShelter />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
