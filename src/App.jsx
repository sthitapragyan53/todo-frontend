import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import WelcomePage from "./components/welcomepage/WelcomePage";
import LoginPage from "./components/Signing/LoginPage";
import Progress from "./components/Progress/Progress";
import About from "./components/About/About";
import Clock from "./components/Clock/Clock";
import Settings from "./components/Settings/Settings";


const App = () => {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/about" element={<About />} /> {/* <-- Add this */}
          <Route path="/clock" element={<Clock />} />
          <Route path="/settings" element={<Settings />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
