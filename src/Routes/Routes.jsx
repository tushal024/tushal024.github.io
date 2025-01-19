
import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Components/Header'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Project from '../Components/Project'

const Routes = () => {
  return (
    <div>
                <Routes>
                    <Route  path='/' element={<Header/>} ></Route>
                    <Route  path='/About' element={<About/>} > </Route>
                    <Route  path='/Skills' element={<Skills/>} ></Route>
                    <Route  path='/Project' element={<Project/>} ></Route>
                </Routes>

    </div>
  )
}

export default Routes
