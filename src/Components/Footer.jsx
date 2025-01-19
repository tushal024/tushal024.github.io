import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'

const Footer = () => {
    return (
        <div className='h-[auto]  text-[white] flex  flex-col  justify-center items-center w-[100%]  bg-[#272730] mt-[100px]' >
            <div className='w-[90%]  h-[90%] m-[auto] flex flex-col  items-center '  >

                <div id="ee" className=' w-[30%] h-[50px] mt-[20px] flex justify-center items-center ' >

                   <img src={logo} alt=""  className='w-[250px]'  />
                </div>

                <div id="ee" className=' w-[30%] h-[50px]  flex justify-evenly items-center ' >

                    <Link to={"/"} className='' >  Home </Link>
                    <Link to={"/About"} >  About </Link>
                    <Link to={"/Skills"} >  Skills </Link>
                    <Link to={"/Project"} >  Project </Link>




                </div>
                <div id="ee" className=' w-[40%] h-[50px]  flex justify-center items-center ' >

                    <h1 className='text-[12px]' >
                        <i class="fa-regular fa-copyright  text-[13px]  me-[5px]"></i>
                        {/* <i class="fa-solid fa-at  text-[18px] "></i> */}
                        Designed & Built by  <span className='text-[#6E4EF2] text-[16px]  underline-offset-4' > Tushal Shekh </span></h1>
                    {/* <p>  Create With React  </p> */}
                </div>
            </div>


        </div>
    )
}

export default Footer
