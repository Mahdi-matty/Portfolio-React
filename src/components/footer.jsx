import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLogoVue } from "react-icons/io5"
const Footer = () => {
  return (
    <footer>
      <div className='githubRes'>
          <a href='https://github.com/Mahdi-matty'><FaGithub /></a>
          <a href='https://mahdivue.netlify.app'><IoLogoVue /></a>
        </div>
    </footer>
  );
};

export default Footer;