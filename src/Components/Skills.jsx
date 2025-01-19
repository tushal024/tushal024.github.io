import React from 'react'
import js from '../assets/js.png'
import css from '../assets/css-3.png'
import html from '../assets/html-5.png'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.png'
import chakra from '../assets/chakra ui.png'
import reduxlogo from '../assets/redux.png'
import boot from '../assets/boot.png'



const Skills = () => {
  return (
    <div className='w-[90%] flex-wrap m-[auto]  flex justify-evenly items-center  h-[auto]  mt-[50px]  ' >

      <div id="t1" className='w-[13%] flex-col flex justify-center items-center   h-[200px] border  rounded-[10px]  text-[white] ' >
        <img src={js} alt="" className='w-[100px] rounded-[10px] ' />

            <h3 className='mt-[20px] ' >
        JavaScript
        </h3>

      </div>
      <div id="t1" className='w-[13%]  flex-col  ms-[3%]   h-[200px] border  flex justify-center items-center rounded-[10px]  text-[white] ' >
        <img src={html} alt="" className='w-[100px] rounded-[10px]   ' />
        <h3 className='mt-[20px] ' >
        HTML
        </h3>


      </div>
      <div id="t1" className='w-[13%]   flex-col  ms-[3%]  h-[200px] border  flex justify-center items-center  rounded-[10px]  text-[white] ' >

        <img src={css} alt="" className='w-[100px] rounded-[10px]   ' />
        <h3 className='mt-[20px] ' >
        CSS
        </h3>


      </div>
      <div id="t1" className='w-[13%]   flex-col ms-[3%]   h-[200px] border   flex justify-center items-center  rounded-[10px]  text-[white] ' >


        <img src={react} alt="" className='w-[100px] rounded-[10px]   ' />

        <h3 className='mt-[20px] ' >
        React
        </h3>


      </div>
      <div id="t1" className='w-[13%]   flex-col ms-[3%]   h-[200px] border   flex justify-center items-center  rounded-[10px]  text-[white] ' >

        {/* Redux */}
        <img src={reduxlogo} alt="" className='w-[100px] rounded-[10px]   ' />

        <h3 className='mt-[20px] ' >
        Redux
        </h3>


      </div>
      <div id="t1" className='w-[13%]   flex-col  ms-[3%]    h-[200px] border   flex justify-center items-center  rounded-[10px]  text-[white] ' >

        <img src={tailwind} alt="" className='w-[100px] rounded-[10px]   ' />
        <h3 className='mt-[20px] ' >
        Tailwind
        </h3>



      </div>
      <div id="t1" className='w-[13%]   flex-col  mt-[3%]  h-[200px] border   flex justify-center items-center  rounded-[10px]  text-[white] ' >

        {/* Boostrap */}
        <img src={boot} className='w-[100px] rounded-[10px]   ' alt="" />

        <h3 className='mt-[20px] ' >
        Boostrap
        </h3>


      </div>
      <div id="t1" className='w-[13%]   flex-col  mt-[3%]   h-[200px] border   flex justify-center items-center rounded-[10px]  text-[white] ' >

        <img src={git} className='w-[100px] rounded-[10px]   ' alt="" />
        <h3 className='mt-[20px] ' >
        Git
        </h3>


      </div>
      <div id="t1" className='w-[13%]   flex-col mt-[3%]   h-[200px] border   flex justify-center items-center rounded-[10px]  text-[white] ' >

        <img src={chakra} className='w-[100px] rounded-[10px]   ' alt="" />
        <h3 className='mt-[20px] ' >
        Chakra UI
        </h3>


      </div>
      <div id="t1" className='w-[13%]   flex-col  mt-[3%]   h-[200px] border   flex justify-center items-center rounded-[10px]  text-[white] ' >

<img src={git} className='w-[100px] rounded-[10px]   ' alt="" />
<h3 className='mt-[20px] ' >
Git
</h3>


</div>
<div id="t1" className='w-[12%]   flex-col mt-[3%]   h-[200px] border   flex justify-center items-center rounded-[10px]  text-[white] ' >

<img src={chakra} className='w-[100px] rounded-[10px]   ' alt="" />
<h3 className='mt-[20px] ' >
Chakra UI
</h3>


</div>


    </div>
  )
}

export default Skills
