import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#111" }}>
      <div className='text-white md:absolute top-8 z-10 right-0 md:pr-10 p-5 flex-wrap md:text-base text-sm flex-row   justify-center  flex gap-10 md:gap-16   '>
        {" "}
        <motion.h1 whileHover={{ scale: 1.2, color: "#3b92f6" }}>
          <Link id='RouterNavLink' to='/'>
            Home
          </Link>
        </motion.h1>
        <motion.h1 whileHover={{ scale: 1.2, color: "#3b92f6" }}>
          <Link id='RouterNavLink' to='/about'>
            About
          </Link>
        </motion.h1>{" "}
        <motion.h1 whileHover={{ scale: 1.2, color: "#3b92f6" }}>
          <Link id='RouterNavLink' to='/projects'>
            Projects
          </Link>
        </motion.h1>{" "}
        <motion.h1 whileHover={{ scale: 1.2, color: "#3b92f6" }}>
          {" "}
          <Link id='RouterNavLink' to='/contact'>
            Contact{" "}
          </Link>
        </motion.h1>
      </div>
    </div>
  );
};

export default Navbar;
