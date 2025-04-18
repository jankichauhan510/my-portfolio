import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
//import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Router>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </Router>
      <Contact />
    </div>
  );
}

export default App;
