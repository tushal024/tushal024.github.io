import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Hiro from '../Components/Hiro'
import Skills from '../Components/Skills'
import Git from '../Components/Git'
import Contect from '../Components/Contect'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='  '>
            <Header/>
            <div className='ps-[5%] pe-[5%] ' >
          <Hiro/>
        
          {/* <About/> */}
          <h1 className='text-center text-[white] text-[30px] underline underline-offset-8   mt-[50px] '>  My Skill </h1>
          <Skills/>
          <h1 className='text-center text-[white] text-[30px] underline underline-offset-8   mt-[50px] '>  GitHub </h1>
          <Git/>
          <h1 className='text-center text-[white] text-[30px] underline underline-offset-8   mt-[50px] '>  Get In Touch </h1>
          <Contect/>
          </div>
          <Footer/>
       

    </div>
  )
}

export default Home
