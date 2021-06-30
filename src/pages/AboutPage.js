import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { skills } from "../data";
const AboutPage = () => {
  const [scrollY, setScrolly] = useState(window.scrollY);

  const handleScroll = () => {
    setScrolly(window.scrollY);
  };

  useEffect(() => {
    if (document.querySelector("#footer").classList.contains("hidden")) {
      document.querySelector("#footer").classList.remove("hidden");
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [scrollY]);
  return (
    <div className='text-white ' style={{ backgroundColor: "#111111" }}>
      <div className='w-full h-28 container'></div>
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        className='md:text-8xl text-4xl md:text-left text-center    md:ml-10'
      >
        About <span className='text-blue-500'>Me</span>
      </motion.h1>
      <motion.h1
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        className='w-full container md:text-left text-center mx-auto m-10 bg-gray-900 p-3 md:text-2xl text-xl'
      >
        let me tell you things about me
      </motion.h1>

      <div className='w-full container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='flex md:flex-row flex-col items-center  gap-20 mt-10 justify-center '
        >
          <img
            src='/obeic.jpg'
            alt=''
            className=' border-4  border-blue-500  shadow-xl md:w-80 w-60 rounded-full   '
          />
          <div>
            <div className='text-xl w-full  md:text-left text-center mx-auto'>
              <h1>
                <h1 className='text-blue-500 text-3xl '>BIO</h1>
                <p className='my-8 w-10/12 md:mx-0 mx-auto tracking-wider 	'>
                  {" "}
                  My name is Obei Mustafa and I am a Freelancer Junior Web
                  Developer , I am an accomplished coder and programmer, and I
                  enjoy using my skills to contribute to the exciting
                  technological advances. I graduated from the Universty of
                  Scince And Technlogoy Department of Computer Sceince in 2021
                  with a Bachelor's Degree .
                </p>
              </h1>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: scrollY > 300 ? 1 : 0,
          }}
          transition={{ duration: 1.3 }}
          className='md:mt-40  mt-32  '
        >
          <h1 className='mx-auto text-center md:text-4xl text-3xl'>
            Skill And <span className='text-blue-500'>Tools</span> I use
          </h1>
          <div>
            <div className='mt-10 flex flex-wrap justify-center gap-10'>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.3,
                  }}
                  className='md:text-4xl text-2xl bg-gray-900 border-4 border-blue-500  p-5 cursor-pointer'
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
          <div className='flex justify-center w-full mt-20'>
            <div className=' '>
              <h1 className=' text-3xl text-center mb-20'>
                How To Reach <span className='text-blue-500'>Me</span>
              </h1>

              <div>
                <h1 className='border md:text-3xl text-base p-3'>
                  <AiOutlineMail className=' inline-block' /> Email :
                  obeimustafa@gmail.com
                </h1>
                <h1 className='border md:text-3xl text-base p-3'>
                  <AiOutlinePhone className=' inline-block' /> Phone :
                  +249126038115
                </h1>
              </div>
            </div>
          </div>
        </motion.div>

        <div className='h-52'></div>
      </div>
    </div>
  );
};

export default AboutPage;
