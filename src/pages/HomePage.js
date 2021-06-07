import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
const HomePage = () => {
  useEffect(() => {
    if (!document.querySelector("#footer").classList.contains("hidden")) {
      document.querySelector("#footer").classList.add("hidden");
    }
  }, []);
  return (
    <div className='relative'>
      <img
        src='/background.jpg'
        style={{ height: "100vh" }}
        className='w-full object-cover '
        alt=''
      />
      <div
        className='absolute w-full h-full  bg-black top-0 opacity-50'
        st
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute md:top-48 md:left-52 left-10 top-44 text-white'
      >
        <h1 className='md:text-7xl sm:text-5xl text-3xl uppercase'>
          obei <span className='text-blue-500'>mustafa</span>{" "}
        </h1>
        <p className='md:text-2xl sm:text-2xl text-lg  m-3 uppercase'>
          Programmer , Web | Software Developer
        </p>
        <div className='flex gap-4  ml-5 mt-5 '>
          <a href='https://www.linkedin.com/in/obei-mostafa-58159b207/'>
            {" "}
            <FaLinkedin className='text-2xl hover:text-blue-500 cursor-pointer' />
          </a>
          <a href='https://t.me/obeimustafa'>
            <FaTelegram className='text-2xl hover:text-blue-500 cursor-pointer' />
          </a>
          <a href='https://github.com/obeim'>
            <FaGithub className='text-2xl hover:text-blue-500 cursor-pointer' />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
