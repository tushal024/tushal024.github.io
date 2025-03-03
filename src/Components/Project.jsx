import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


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
            <a href="https://cute-yeot-5fcd47.netlify.app/" target="_blank" rel="noopener noreferrer">
              <div className="w-full h-72 rounded-lg bg-gray-600 shadow-md mb-4"></div>
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
              <a href="https://github.com/suraniunnati/shopcluse">
                <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                  <i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center  bg-[#111827] p-5 rounded-lg shadow-lg">
            <div className="w-full h-72 rounded-lg bg-gray-600 shadow-md mb-4"></div>
            <h3 className="font-bold text-xl">TATACLIQ CLONE</h3>
            <p className="text-gray-400 text-sm mt-2">
              Built a responsive e-commerce website clone to simulate online shopping, featuring user-friendly navigation and product listings.
            </p>
            <div className="mt-3 flex space-x-2">
              <a href="https://675e768a9935fb268569daf7--tatacilq.netlify.app/">
                <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                  <i className="fa-solid fa-globe"></i>
                </button>
              </a>
              <a href="https://github.com/suraniunnati/tata_cilq">
                <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                  <i className="fa-brands fa-github"></i>
                </button>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col items-center  bg-[#111827] p-5 rounded-lg shadow-lg">
            <div className="w-full h-72 rounded-lg bg-gray-600 shadow-md mb-4"></div>
            <h3 className="font-bold text-xl">FirstCry</h3>
            <p className="text-gray-400 text-sm mt-2">
              The Nykaa website, built using HTML, CSS, Tailwind, and JavaScript, provides a modern and responsive e-commerce platform for beauty and wellness products.
            </p>
            <div className="mt-3 flex space-x-2">
              <button className="p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] rounded-md">
                <i className="fa-solid fa-globe"></i>
              </button>
              <a href="https://github.com/suraniunnati/javascript/tree/main/website_3">
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
