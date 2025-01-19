import React from 'react'
import me from '../assets/pass.png'
import { Link } from 'react-router-dom'
function Hiro() {
  return (
    <div className='flex w-[90%]  mt-[40px] m-[auto] ' >



<div id="ab1"  className=' w-[50%]  h-[400px] text-[white] p-[5%] ' >

<h1 className='text-[50px]'  >
     <span className='  text-[#757580]'>   I'm a  </span>  <br />
        <span className='text-[#6E4EF2]  font-[800]' >
         Web Developer
         </span>
         <br />
         <p className='text-[20px] mt-[10px] '  id='ttx'>
         Expert in HTML, CSS, JavaScript, and modern  
         <br />
          frameworks to create seamless, user-focused web experiences.

<br />
<Link  target="_blank" to={'https://drive.google.com/file/d/1ltA_2jwAktGezmjwYjscguSiYhki7fXa/view?usp=sharing'} >      <button   className='col-span-4 mt-[20px]  rounded-[7px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500
           h-[40px] w-[130px]'>    Resume </button>

</Link>         
            </p>

            {/* <p className='text-[18px] mt-[10px]'  >

I'm  <span className='text-[#6E4EF2]' >  Tushal Shekh  </span>

, a Front-End Developer skilled in HTML, CSS, JavaScript, and React. I specialize in creating fast, responsive, and user-friendly web experiences. My focus is on writing clean, maintainable code and building seamless, interactive interfaces that work flawlessly across all devices. I'm passionate about continuous learning and always eager to take on new challenges to craft high-quality digital solutions.
</p>
  */}


         </h1>


    </div>  

<div id="ab1"  className=' w-[50%]   h-[400px] flex justify-center items-center ' >

        <div id="imgg"  className='w-[55%] rounded-[30px]   bg-[#0B0F12] h-[90%] flex justify-center items-center   border' >
<img src={me} alt="" className='sss' />

        </div>

{/* <div id="trii"  className='triangle  w-[300px] h-[300px]  ms-[2%] border' > */}

{/* </div> */}


</div>

         
         
    </div>
  )
}

export default Hiro
