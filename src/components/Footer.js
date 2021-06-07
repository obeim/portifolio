import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id='footer' className='w-full text-center text-white my-10'>
      <div className='flex gap-4   mb-8 justify-center'>
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
      CopyRight <FaRegCopyright className='inline-block' /> {year} .All rights
      reserved
    </div>
  );
};

export default Footer;
