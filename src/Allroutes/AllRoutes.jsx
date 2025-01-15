import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Contact from "../Pages/COntact";
import About from "../Pages/About";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AllRoutes;
