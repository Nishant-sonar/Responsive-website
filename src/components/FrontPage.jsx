

import React, { useContext, useEffect } from "react";
import Typed from "typed.js"; 
import {Eye} from 'lucide-react';
import Examplepages from './Examplepage.jsx'
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from "./ThemeContext.jsx";
// import { MdDarkMode } from "react-icons/md";
import Switch from "./Switch.jsx";

const features = [
  "Create a professional resume in just 8 to 10 minutes — fast, stress-free, and efficient.",
  "Assistant Bot helps guide you through each step of the resume-building process.",
  "Choose from high-performing, ATS-optimized templates designed to get you hired.",
  "Preview your resume live as you enter information — complete transparency and control.",
  "Professionally designed layouts for every role, industry, and experience level.",
  "Your data is never saved or shared — full privacy and security ensured.",
  "Export your resume in multiple formats: PDF, HTML/CSS, and JSON database.",
  "Use auto-filled JSON to skip re-entering data on future visits — save time effortlessly.",
  "Get smart, real-time suggestions to improve your content as you type.",
  "Each section is structured using proven resume-writing practices backed by HR research.",
  "Browse and compare multiple templates instantly under the Generated Resumes section.",
  "Supports light/dark themes and responsive layout for all screen sizes."
];


const FrontPage=({views})=>{
  const navigate=useNavigate();

  const handleContinue=()=>{
    navigate('/FileUploadPage');
  };

  const handleViewTemplates=()=>{
    navigate('/ViewTemplates');
  };

  const handleAboutUs=()=>{
    navigate('/AboutUs');
  };

  const { isDark, setIsDark }=useContext(ThemeContext);

  const handleTheme=()=>{
    setIsDark((prev)=>!prev);
  };

  useEffect(()=>{
    const typedMobile=new Typed("#mobile-typing-text",{
      strings: features,
      loop: true,
      typeSpeed: 20,
      backSpeed: 15,
      backDelay: 900,
      cursorChar: " ",
    });

    const typed=new Typed("#desktop-typing-text",{
      strings: features,
      loop: true,
      typeSpeed: 20,
      backSpeed: 15,
      backDelay: 900,
      cursorChar: " "
    });

    return ()=>{
      typedMobile.destroy();
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-300 text-center px-4 dark:bg-slate-950">
      <div className="hidden md:flex justify-between items-center w-full px-6 py-3 bg-white shadow-md rounded-3xl mt-3 dark:bg-slate-800">
        <div className="flex items-center">
          <button 
            className="mr-4 mt-1"
            title="The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it as you prefer"
            onClick={handleTheme}>
              <Switch/>
          </button>
         
          <button
            className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105"
            onClick={handleViewTemplates}
            title="View Generated resume samples"
          >
            Generated Resumes
          </button>
        </div>
        
        <h1 className="text-xl ml-10 font-bold text-gray-800 dark:text-white no-underline">
          <a href="#" title="AI-Powered Resume Builder" target="_blank">
            <span className="lg:hidden">Resume Builder</span>
            <span className="hidden lg:block group">
              <span className="text-black dark:text-slate-300 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500">
                Level Up Your First Impression
              </span>
            </span>

          </a>
        </h1>
        <div className="flex space-x-4">
        <div className="flex items-center gap-2 dark:text-gray-200" title="Number of peoples Engaged here"><Eye />{views}</div>
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105" title="our contributions and contact information" onClick={handleAboutUs}>
            About Us
          </button>
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105" title="Continue fiiling details and craft future jobs" onClick={handleContinue}>
            Continue ➤
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center flex-1 mt-3 mb-3">
        <Examplepages />    
        <span id="desktop-typing-text" className="hidden md:inline-block text-xl md:text-2xl text-gray-800 h-6 dark:text-white"></span>
      </div>


      {/* Mobile View */}
      <div className="flex md:hidden justify-between items-center w-full h-14 px-6 py-3 bg-white shadow-md mt-6 rounded-3xl dark:bg-slate-800">
        <button 
          className="text-2xl mr-8 mt-1"
          title="The Dark/Light mode will be chosen randomly on each refresh, allowing users to experience both modes. You can also set it to your preferred mode."
          onClick={handleTheme}>
            <Switch/>
        </button>

        <div className="md:hidden flex space-x-4">
          {/* <button
            className="px-4 py-[5px] bg-blue-500 text-white rounded-2xl hover:bg-blue-700 hover:scale-105"
            onClick={handleViewTemplates}
            title="View Generated resume samples"
          >
            Generated
          </button> */}
          <button className=" px-4 py-[3px] bg-blue-500 text-white rounded-full hover:bg-blue-700" onClick={handleContinue}>
            Continue
          </button>

        </div>
      </div>

      <div className="md:hidden flex justify-center flex-col items-center flex-grow">
        {/* <h1 className="text-2xl md:hidden sm:text-3xl font-bold mb-3 dark:text-white">
          Resume Builder
        </h1> */}
        <p className="text-sm sm:text-lg text-gray-500 font-semibold mb-4">   {/* Here the mobile span are with desktop id  */}
          <span id="mobile-typing-text" className="md:hidden text-xl sm:text-2xl text-gray-800 h-6 mb-4 dark:text-white"></span>
        </p>
        <a
          onClick={handleViewTemplates}
          className="cursor-pointer text-gray-600 dark:text-gray-300/80 font-bold"
        >
          Generated Templates
        </a> 
        </div>

      <div className="md:hidden absolute bottom-4 font-bold text-gray-800 left-1/2 -translate-x-1/2 text-center dark:text-white/80">
        <br />
        <a
          onClick={handleAboutUs}
          className="cursor-pointer dark:text-gray-300"
        >
          About Us
        </a>
      </div>

      {/* <p className="text-sm sm:text-lg text-gray-500 font-semibold mb-4">       Here the desktop span are with mobile id
        <span id="mobile-typing-text" className="hidden md:inline-block text-xl md:text-2xl text-gray-800 h-6 mb-3 dark:text-white"></span>
      </p> */}
    </div>

  );
};

export default FrontPage;
