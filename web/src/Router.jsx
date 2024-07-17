import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/components/Header/Header';
import Main from "../src/pages/Main/Main"

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path='/main' element={<Main />}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;
