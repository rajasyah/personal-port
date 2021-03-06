import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutHome from "./components/AboutHome";
import Header from "./components/Header";
import Skills from "./components/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  const location = useLocation();

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route index element={<AboutHome />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
        </Route>
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
