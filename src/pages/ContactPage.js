import React from "react";
import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      className='text-white '
      style={{ backgroundColor: "#111111" }}
    >
      <div className='w-full h-28 container'></div>
      <h1 className='md:text-8xl text-4xl md:text-left text-center    md:ml-10'>
        Contact <span className='text-blue-500'>Me</span>
      </h1>

      <div className='h-96'></div>
    </motion.div>
  );
};

export default ContactPage;
