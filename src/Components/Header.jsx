import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'

const Header = () => {
  return (





    <div className='w-[100%] sm:h-[60px] h-[auto] flex-col sm:flex-row   pb-[10px]  relative  flex
     justify-between items-center sm:pb-0  ps-[1%] pe-[1%]  bg-[#272730]  ' >



     
 
 

      <div id="h1"  className='border-[white] md:w-[10%] sm:h-[100%]  sm:hidden sm:static absolute left-1 top-1  md:flex  justify-center items-center  w-[10%]    h-[40px]  ' >     
      {/* <i class="fa-solid fa-signal text-[white] "></i> */}
      {/* <i class="fa-solid fa-sliders text-[white] text-[20px] "></i> */}
      {/* <i class="fa-regular fa-chart-bar text-[white] text-[20px] "></i> */}
      {/* <i class="fa-solid fa-qrcode  text-[white] text-[20px] "></i> */}
      <i class="fa-solid fa-bars-staggered text-[white] text-[20px] "></i>

      </div>

      <div id="h2"  className='border-[white]  md:w-[30%] sm:h-[100%]  justify-center md:justify-start items-center flex w-[40%]  h-[40px]   text-[white]  ' >

          {/* <span className=' '> <i class="fa-solid fa-hashtag  text-[20px] "></i>  Tushal Shekh </span> */}
          <img src={logo} alt="" className='w-[200px] h-[100%] '  />

      </div>
     
      <div id="h3"  className='border-[white] md:w-[30%] sm:h-[100%]  sm:pt-[1%] content-center  flex items-center justify-between 
       sm:w-[50%]  pb-[10px] sm:flex-row  flex-col w-[40%]  h-[auto]  text-[white]  ' >

      <Link to={"/"}  className='' >  Home </Link>
      <Link to={"/About"} >  About </Link>
      <Link to={"/Skills"} >  Skills </Link>
      <Link to={"/Project"} >  Project </Link>
          





        </div>

      <div id="h4"  className='border-[white] sm:h-[100%] md:w-[25%]   sm:w-[40%] w-[100%] text-[white]  h-[auto] flex     justify-evenly items-center  ' >
      <i class="fa-brands fa-linkedin-in col-span-1 "></i>
      <i class="fa-brands fa-github  col-span-1 "></i>
      <i class="fa-solid fa-phone    col-span-1 "></i>

      <button   className='col-span-4  rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[100px]'> Hire Me ! </button>

      </div>
      
    </div>
  )
}

export default Header
