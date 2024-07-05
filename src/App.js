import React from "react";
import "./styles/App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import background from "./assets/images/background5.jpg";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const appStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
    width: "100%",
  };

  return (
    <Router>
      <div
        className="App"
        style={appStyle}
        // style={{
        //   backgroundImage: "url('../images/background5.jpg')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   height: "100vh",
        //   width: "100%",
        // }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
