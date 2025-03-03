import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'

const Footer = () => {
  return (
    <div className="w-full bg-[#111827]  text-white flex flex-col items-center py-10 mt-[100px]">
      <div className="w-[90%] md:w-[80%] flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="w-full flex justify-center mb-4">
          <img src={logo} alt="Logo" className="w-[250px] md:w-[300px]" />
        </div>

        {/* Navigation Links Section */}
        <div className="w-full flex justify-evenly md:justify-center space-x-4 mb-4">
          <Link to={"/"} className="text-sm hover:text-[#6E4EF2]">Home</Link>
          <Link to={"/About"} className="text-sm hover:text-[#6E4EF2]">About</Link>
          <Link to={"/Skills"} className="text-sm hover:text-[#6E4EF2]">Skills</Link>
          <Link to={"/Project"} className="text-sm hover:text-[#6E4EF2]">Project</Link>
        </div>

        {/* Copyright Section */}
        <div className="w-full flex justify-center items-center mt-4">
          <h1 className="text-xs md:text-sm text-center">
            <i className="fa-regular fa-copyright text-[13px] mr-2"></i>
            Designed & Built by{' '}
            <span className="text-[#6E4EF2] text-[16px] underline-offset-4">
              Tushal Shekh
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
