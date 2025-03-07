import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import jiomart from "src\assets\JIOMART_SS.png",
import jiomart from '../assets/JIOMART_SS.png'
import TataCliq from '../assets/Tata Cliq_SS.png'
import AdminPanel from '../assets/AdminPanel_SS.png'



const Project = () => {
  let navigate = useNavigate()

  
  // console.log(GetData)

  

  function Check1() {
    Dispatch({ type: 'Move' })
  }

  return (
    <div className="w-full py-10">
      <div className="w-[90%] md:w-[80%] mx-auto text-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project 1 */}

          <div className="flex flex-col items-center  bg-[#111827] p-5 rounded-lg shadow-lg">
            <div className="w-full h-72 rounded-lg bg-gray-600 shadow-md mb-4">
            <a href="https://helpful-mochi-34269f.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={AdminPanel} alt="" className=' w-full h-full rounded-lg  ' />
            </a>

            </div>
            <h3 className="font-bold text-xl">Admin Panel</h3>
            <p className="text-gray-400 text-sm mt-2">
            A Modern And Responsive React Admin Panel With Full CRUD
 Functionality, Secure Authentication And Private Routing. Features
 Include Sorting, Filtering, And Searching, With Role-Based Access For
 Efficient Management.
            </p>
            <div className="mt-3 flex space-x-2">
              <a href="https://helpful-mochi-34269f.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                <i className="fa-solid fa-globe"></i>
              </button>
              </a>
              <a target='_blank' href="https://github.com/tushal024/NxtWave_AdminPanel">
                <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                  <i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
          </div>


        
          {/* Project 2 */}
          <div className="flex flex-col items-center  bg-[#111827] p-5 rounded-lg shadow-lg">
            <div className="w-full h-72 rounded-lg bg-gray-600 shadow-md mb-4">
            <a target='_blank' href="https://675e768a9935fb268569daf7--tatacilq.netlify.app/">

            <img src={TataCliq} alt="" className=' w-full h-full rounded-lg  ' />
            </a>
            </div>
            <h3 className="font-bold text-xl">TATACLIQ CLONE</h3>
            <p className="text-gray-400 text-sm mt-2">
            Developed a responsive e-commerce website clone.
Features smooth navigation and dynamic product listings.
Optimized for a seamless user experience across all devices.
            </p>
            <div className="mt-3 flex space-x-2">
              <a target='_blank' href="https://675e768a9935fb268569daf7--tatacilq.netlify.app/">
                <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                  <i className="fa-solid fa-globe"></i>
                </button>
              </a>
              <a  target='_blank' href="https://github.com/tushal024/__TATA_CLIQ__">
                <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                  <i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
          </div>

          {/* Project 3 */}

          <div className="flex flex-col items-center  bg-[#111827] p-5 rounded-lg shadow-lg">
            <a href="https://cute-yeot-5fcd47.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="w-full h-72 rounded-lg bg-gray-600 shadow-md mb-4 ">
              <a href="https://cute-yeot-5fcd47.netlify.app/" target="_blank">

                <img src={jiomart} alt="" className=' w-full h-full rounded-lg  ' />
                </a>
              </div>
            </a>
            <h3 className="font-bold text-xl">JIO MART</h3>
            <p className="text-gray-400 text-sm mt-2">
              Created a responsive e-commerce clone with a modern UI/UX, featuring product listings, detailed views, and add-to-cart functionality.
            </p>
            <div className="mt-3 flex space-x-2">
              <a href="https://cute-yeot-5fcd47.netlify.app/" target="_blank">
                <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                  <i className="fa-solid fa-globe"></i>
                </button>
              </a>
              <a target='_blank' href="https://github.com/tushal024/JioMart">
                <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                  <i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
          </div>

        
        </div>

        <div className="flex justify-center p-3 mt-10">
          {/* <a href="/Project_Page" target="_blank" rel="noopener noreferrer">  455454 </a> */}
          <Link to={"/Project_Page"}>
            <button
              onClick={() => Check1()}
              className='rounded-[6px] text-[20px] mt-[20px] bg-gradient-to-r from-sky-500 to-indigo-500  h-[50px] w-[200px]' 
            >
              MORE <i className="fa-solid fa-right-long"></i>
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Project
