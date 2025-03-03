import React from 'react'
import me from "../assets/TS.png"
const About = () => {
  return (
    <div className='flex w-[90%] m-[auto] ' >

    <div id="ab111"  className='border w-[50%] flex justify-center items-center  h-[400px] ' >
    
    <img src={me} alt="" />
    
    
    </div>
    
   <div id="ab1"  className='border w-[50%]  h-[400px] text-[white] p-[5%] ' >
    

    <p>
   
    I'm  <span className='text-[#6E4EF2]' >  Tushal Shekh  </span>
      
      , a Front-End Developer skilled in HTML, CSS, JavaScript, and React.
       I specialize in creating fast, responsive, and user-friendly web experiences. 
       My focus is on writing clean, maintainable code and building seamless, interactive 
       interfaces that work flawlessly across all devices. I'm passionate about continuous
        learning and always eager to take on new challenges to craft high-quality digital
         solutions.
     </p>
        
    
    
              </div>
             
        </div>
  
  )
}

export default About
