import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar+footer/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Jobs from "./components/jobs/Jobs";
import Contact from "./components/contact/Contact";
import Footer from "./components/navbar+footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
