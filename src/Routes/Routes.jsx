
import React from 'react'
import { Link, Route } from 'react-router-dom'
import Header from '../Components/Header'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Project from '../Components/Project'
import Project_Page from '../Pages/Project_Page'

const Routes = () => {
  return (
    <div>

      <Link  to={"/Project_Page"} className='text-[30px]  text-[white] '  >  GOOOOOOOO  </Link>

      
                <Routes>
                    <Route  path='/' element={<Header/>} ></Route>
                    <Route  path='/About' element={<About/>} > </Route>
                    <Route  path='/Skills' element={<Skills/>} ></Route>
                    <Route  path='/Project' element={<Project/>} ></Route>
                    <Route  path='/Project_Page' element={<Project_Page/>} ></Route>
                </Routes>

    </div>
  )
}

export default Routes
