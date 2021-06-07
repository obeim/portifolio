import React from "react";
import { motion } from "framer-motion";
import { CgMediaLive } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data";
const ProjectsPage = () => {
  return (
    <div style={{ backgroundColor: "#111111" }} className='text-white'>
      <div className='w-full h-28 container'></div>
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        className='md:text-8xl text-4xl md:text-left text-center   md:ml-10'
      >
        <span className='text-blue-500'>My</span> Projects
      </motion.h1>
      <div className='w-full container mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: index / 3 }}
              key={index}
              className='border-8 shadow-lg border-gray-900 relative lg:w-full md:w-11/12 w-8/12 mx-auto'
            >
              <div className='absolute  top-0  h-full bg-black w-full md:opacity-0 md:hover:opacity-90 transition duration-500 opacity-70  p-10'>
                {" "}
                {project.info}
                <div className='flex justify-center items-center gap-10 mt-10'>
                  <a href={project.live} className='border px-4 py-2'>
                    <CgMediaLive className='inline-block' /> Live
                  </a>
                  <motion.a
                    whileHover={{ color: "blue", scale: 1.1 }}
                    href={project.github}
                  >
                    <FaGithub className='inline-block' /> github
                  </motion.a>
                </div>
              </div>
              <img
                src={project.img}
                alt=''
                className='h-60 w-full object-cover'
              />

              <h1 className='p-2 text-xl bg-gray-900'>{project.name}</h1>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='h-96'></div>
    </div>
  );
};

export default ProjectsPage;
