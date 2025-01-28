import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Project_Page from '../Pages/Project_Page'
import { Check } from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux'

const Project = () => {


  // let [Move,setMove] = useState(false)


    let navigate= useNavigate()
    // console.log(Move);
    
    

    let GetData= useSelector(st=>st)
    console.log(GetData);

    let Dispatch= useDispatch()

    function Check1(){
      Dispatch({type: "Move" })


      navigate("/Projetc_Page ")
    }
    

  return (
    <div>
     <div>
      {/* <h1 className='text-5xl font-bold text-center p-5    '>MY WORKS</h1> */}
      <div className='w-[80%] m-auto mt-[50px] text-[white] '>
        <div className='flex h-[300px] '>
          <div className='w-[60%] p-5 border-e-2 border-[#1DBAB5]'>  
             
             <a href="https://cute-yeot-5fcd47.netlify.app/" target="_blank" rel="noopener noreferrer">
             <div id="qqq" className='w-full h-full rounded-lg shadow-md shadow-[gray]'  >  




             </div>

             </a>
             {/* <img   src="src\assets\Jiooo.png" alt="" className='w-full h-full rounded-lg shadow-md shadow-[gray]' /> */}

             
             
             </div>
          <div className='w-[40%] p-5 relative'>
          <div className='pr2 h-full w-full absolute top-0 left-0 opacity-10'></div>
            <h3 className='font-bold'>JIO MART</h3>
            <p className='text-[#B7B7B7] text-sm mt-2'>Created a responsive e-commerce clone with a modern
              UI/UX, featuring product listings, detailed views, and add-
              to-cart functionality. Used JavaScript for dynamic
              interactions and Tailwind CSS for a mobile-friendly,
              consistent design. Focused on optimizing performance for
              smooth navigation and quick load times.</p>
              <a href="https://cute-yeot-5fcd47.netlify.app/"  target='/blank' >
              <button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-solid fa-globe">      </i></button>
              
              </a>
              <a href="https://github.com/suraniunnati/shopcluse"><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-brands fa-github"></i></button></a>
          </div>
        </div>
        <div className='flex h-[300px]   mt-10'>
          <div className='w-[40%] p-5 relative '>
            <div className='pr1 h-full w-full absolute top-0 left-0 opacity-10'></div>
            <h3 className='font-bold'>TATACLIQ CLONE</h3>
            <p className='text-[#B7B7B7] text-sm mt-2'>Built a responsive e-commerce website clone to simulate
              online shopping, featuring user-friendly navigation,
              product listings with filters, shopping cart functionality,
              payment options, and a mock backend. This project
              enhanced my skills in web development, state
              management, and understanding e-commerce workflows.</p>
              <a href="https://675e768a9935fb268569daf7--tatacilq.netlify.app/"><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-solid fa-globe"></i></button></a>
              <a href="https://github.com/suraniunnati/tata_cilq"><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-brands fa-github"></i></button></a>
          </div>
          <div className='w-[60%] p-5 border-s-2 border-[#1DBAB5]'><img src="src\assets\TATA.png" alt="" className='w-full h-full rounded-lg shadow-md shadow-[gray]' /></div>
        </div>
        <div className='flex h-[300px]  mt-10'>
          <div className='w-[60%] p-5 border-e-2 border-[#1DBAB5]'><img src="src\assets\FirstCry.png" alt="" className='w-full h-full rounded-lg shadow-md shadow-[gray]' /></div>
          <div className='w-[40%] p-5 relative'>
          <div className='pr2 h-full w-full absolute top-0 left-0 opacity-10'></div>
            <h3 className='font-bold'>FirstCry </h3>
            <p className='text-[#B7B7B7] text-sm mt-2'>
              The Nykaa website, built using HTML, CSS, Tailwind, and JavaScript, provides a modern and responsive e-commerce platform for beauty and wellness products. HTML structures the content, Tailwind CSS ensures efficient styling and a mobile-first design, while JavaScript adds interactivity for dynamic product displays and user-friendly navigation. This stack creates a seamless and visually appealing user experience.
            </p>
            <button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-solid fa-globe"></i></button>
            <a href="https://github.com/suraniunnati/javascript/tree/main/website_3"><button className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[50px] ms-2 mt-3 rounded-md'><i class="fa-brands fa-github"></i></button></a>
          </div>
        </div>
      </div>
    <div className='flex justify-center p-3 mt-5'>
     <Link  to={"/Project_Page"}><button onClick={()=> Check1() }  className='p-2 bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] w-[180px] h-[50px]font-bold rounded'>  MORE <i class="fa-solid fa-right-long"></i></button>   </Link>   </div>

     {/* <Navigate  to={"/Project_Page"} ></Navigate>  */}
    </div>
    </div>
  )
}
export default Project