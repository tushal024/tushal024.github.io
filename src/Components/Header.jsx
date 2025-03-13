import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'

const Header = () => {
 
    // let [num,setnum]=useState(true)


//  function toggle(){
//   document.getElementById("ab3q").style.display="block"
//  }


//  function headerToggle(){
//   setnum(!num)
//   if(num){

//     document.getElementById("h3").style.display="none"
//   }
//   else{
//     document.getElementById("h3").style.display="flex"

//   }
//   // document.getElementById("h3").toggleAttribute

//  }
 
  return (






<div  className='fixed w-[100%] top-0 z-20 ' id='oo' >

    <div className='w-[100%]   sm:h-[70px] h-[auto] flex-col sm:flex-row   pb-[10px]  relative  flex
     justify-between items-center sm:pb-0  ps-[1%] pe-[1%]  bg-[#111827]  ' >

      <div id="h1"  className='border-[white] md:w-[10%] sm:h-[100%]  sm:hidden sm:static absolute left-1 top-1  md:flex  justify-center items-center  w-[10%]    h-[40px]  ' >     
      {/* <i class="fa-solid fa-signal text-[white] "></i> */}
      {/* <i class="fa-solid fa-sliders text-[white] text-[20px] "></i> */}
      {/* <i class="fa-regular fa-chart-bar text-[white] text-[20px] "></i> */}
      {/* <i class="fa-solid fa-qrcode  text-[white] text-[20px] "></i> */}
      {/* <i class="fa-solid fa-bars-staggered text-[white] text-[20px] cursor-pointer md:hidden " onClick={headerToggle}   ></i> */}

      </div>

      <div id="h2"  className='border-[white]  md:w-[30%] sm:h-[100%]  justify-center md:justify-start items-center flex w-[40%]  h-[40px]   text-[white]  ' >

          {/* <span className=' '> <i class="fa-solid fa-hashtag  text-[20px] "></i>  Tushal Shekh </span> */}
          <Link  to={"/"}  >
          <img src={logo} alt="" className='w-[270px] h-[100%] '/>
          </Link>

      </div>
     
      

      <div id="h3"  className={`  flex md:flex border-[white] md:w-[30%] sm:h-[100%]  sm:pt-[1%] content-center   items-center justify-end  sm:w-[50%]  pb-[10px] sm:flex-row  flex-col w-[40%]  h-[auto]  text-[white]  `} >

      {/* <Link to={"/"}  className='' >  Home </Link> */}
      {/* <Link to={"#ab1w"} >  About </Link> */}
      {/* <a href="#about1"> Home </a> */}

      {/* <a href="#skill1"> Skills </a> */}
      {/* <a href="#Project"> Project </a> */}

      <Link to={"/Project_Page"} className='text-[20px] hover:text-[#6E4EF2]  ' >  Projects </Link>
      {/* <a href="#contact"> Contact </a> */}
      {/* <a href="#skill1"> Skills </a> */}
      {/* <Link to={"#skill1"} >  Skills </Link> */}
      {/* <Link to={"/Project"} >  Project </Link> */}
          





        </div>

      <div id="h4"  className='border-[white] sm:h-[100%] md:w-[25%]   sm:w-[40%] w-[100%] text-[white]  h-[auto] flex     justify-evenly items-center  ' >

      <a href="https://www.linkedin.com/in/tushal-shekh-3973102ba/" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-linkedin-in col-span-1 "></i>
      </a>
         <a href="https://github.com/tushal024" target="_blank" rel="noopener noreferrer"> 
           <i class="fa-brands fa-github  col-span-1 "></i>  </a>
                          <i class="fa-solid fa-phone    col-span-1 "></i>
      

      <button id='contt' 
       className='col-span-4  rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[100px]'> Hire Me ! </button>

      </div>
      
    </div>
    </div>
  )
}

export default Header
