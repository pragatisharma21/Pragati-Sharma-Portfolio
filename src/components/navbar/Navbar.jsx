import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="py-2 z-10 px-10 ">
      <div className="border flex justify-between items-center py-2 px-10 border-white rounded-full radial-bg">
        <div className="text-white font-semibold text-lg">
          <Link to="/">Logo</Link>
        </div>

        <div className="w-1/2">
          <ul className="hidden md:flex gap-10 justify-between ">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="font-semibold text-lg text-gray-300 cursor-pointer hover:text-gray-100"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <div className="w-6 h-0.5 bg-white mb-2"></div>
            <div className="w-6 h-0.5 bg-white mb-2"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden absolute top-0 right-0 radial-bg w-full h-screen flex flex-col items-center justify-center gap-20 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="absolute top-5 right-5 text-white text-8xl"
          onClick={toggleMenu}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: !isMenuOpen ? -90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoIosClose />
          </motion.div>
        </div>
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={handleLinkClick}
            className="font-semibold text-4xl text-gray-300 cursor-pointer hover:text-gray-500 list-none"
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
