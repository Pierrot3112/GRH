
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.scss';
import './pages/mdi/mdi/css/materialdesignicons.min.css';
import Home from './pages/home';
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


