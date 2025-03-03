import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Project_Page from '../Pages/Project_Page'

const MainRoute = () => {
  return (
    <div>
      <Routes>
                <Route path='/' element={<Home/>}  ></Route>
                <Route path='/Project_Page' element={<Project_Page/>}  ></Route>

      </Routes>
    </div>
  )
}

export default MainRoute
