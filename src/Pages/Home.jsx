import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Hiro from '../Components/Hiro'
import Skills from '../Components/Skills'
import Git from '../Components/Git'
import Contect from '../Components/Contect'
import Footer from '../Components/Footer'
import Aside from '../Components/Aside'
import Project from '../Components/Project'

const Home = () => {
  return (
    
    <div className='  '>
            {/* <Header/>  */}
            <Aside/>
            <div id='about1' className='ps-[5%] pe-[5%] h-[auto]  ' >
          <Hiro/>
          {/* <About/> */}
          <h1  id='skill1' className='text-center text-[white] text-[30px] underline underline-offset-8   mt-[50px] '>  My Skill </h1>
          <Skills/>
          <h1 className='text-center text-[white] text-[30px] underline underline-offset-8   mt-[50px] '>  GitHub </h1>
          <Git/>
          <h1 id='Project' className='text-center text-[white] text-[30px] underline underline-offset-8   mt-[50px] '> My Projects </h1>
          <Project/>
          <h1 id='contact' className='text-center text-[white] text-[30px] underline underline-offset-8   mt-[50px] '>  Get In Touch </h1>
          <Contect/>
          </div>
          <Footer/>
    </div>
  )
}

export default Home
