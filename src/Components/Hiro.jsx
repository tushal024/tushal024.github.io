import React from 'react';
import me from '../assets/TS.png';
import { Link } from 'react-router-dom';

function Hiro() {
  return (
    // <div className='flex flex-col md:flex-row w-[90%] mt-[100px] mx-auto '>
    //   {/* Left Section */}
    //   <div id="ab1w" className='w-full md:w-[50%] h-auto text-[white] p-[5%]'>
    //     <h1 className='text-[32px] md:text-[50px]'>
    //       <span className='text-[#757580]'>I'm a</span> <br />
    //       <span className='text-[#6E4EF2] font-[800]'>Web Developer</span> <br />
    //       <p className='text-[16px] md:text-[20px] mt-[10px]' id='ttx'>
    //         Expert in HTML, CSS, JavaScript, and modern frameworks to create seamless, user-focused web experiences.
    //         <br />
    //         <button className='mt-[20px] rounded-[7px] bg-gradient-to-r from-sky-500 to-indigo-500 h-[40px] w-[130px]'>
    //           Resume
    //         </button>
    //       </p>
    //     </h1>
    //   </div>
      
    
    //   <div id="ab1" className='w-full md:w-[50%] relative h-auto flex justify-center items-center'>
       
    //     <div id="trii1" className='absolute h-[360px] border-[red]'>
        
    //     </div>

    //     <div className='relative'>
    //       <div className='side1 h-[300px] absolute'></div>
    //       <div className='side h-[300px] absolute'></div>
          
    //       <div id="trii" className='w-full h-[300px] flex justify-center items-center'>
    //         <img src={me} alt="Developer"  id='tushal024' className='w-[75%] md:w-[50%] rounded-[30px]' />
    //       </div>
    //     </div>
    //   </div>
    // </div>



<div className=" flex flex-col md:flex-row h-[auto] pt-[50px] justify-between mt-[100px] items-center">
    
      <div className="flex xl:ps-[7%]  flex-col items-start space-y-4  h-[400px]  md:w-1/2   border-white   ">
        {/* <h2 className="text-2xl font-semibold text-[#673AAC]  ">Professional Summary</h2> */}

        <h2 className='text-[white] font-bold text-[4vw] lg:text-[2vw] xl:text-[1.5vw] md:text-[24px] '>Frontend Web Developer</h2>
                        <h2 className='text-[#6E4EF2] font-bold text-[10vw] sm:text-[8vw] lg:text-[4vw] xl:text-[3.5vw] md:text-[30px]  '>Tushal Shekh</h2>

        <p className="  text-[white] mb-5 text-[20px] md:text-[16px] xl:text-[20px] ">
       
        Hey there! My name is Chirag and I'm Front-end web developer with expertise in creating responsive and user-friendly
                            interfaces. Skilled in modern web technologies and frameworks, with strong soft
                            skills in communication, problem-solving, and teamwork.

        </p>
        <br />
        <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
         Resume
        </button>
      </div>

       <div className="md:w-1/2 mt-10 md:mt-0 relative h-[400px]     border-white">
      <div className=" w-[300px] h-[300px]  xl:w-[400px] sm:h-[350px] sm:w-[350px] xl:ms-[40%]  mt-[90px] sm:mt-[0px] md:ms-[20%] md:h-[300px] md:w-[300px]  sm:ms-[10%]  xl:h-[400px] mx-auto rounded-full overflow-hidden border-4 border-blue-500 transform hover:scale-105 transition-all duration-500 z-10">
     <img src={me} alt="Developer" className='w-full h-full object-cover absolute  ' />
      </div>
 
      </div>

    </div>



  );
}

export default Hiro;
