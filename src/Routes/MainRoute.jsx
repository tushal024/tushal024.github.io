

import React, { useState } from 'react'
import Home from '../Pages/Home'
import { useDispatch, useSelector } from 'react-redux';
import Project_Page from '../Pages/Project_Page';
import { Link, useNavigate } from 'react-router-dom';

  export const MainRoute = () => {
        
    let GetData= useSelector(st=>st)
    // console.log();
    let [con,setcon]= useState(GetData.Move)

    let Dispatch= useDispatch()
    let navv= useNavigate()



      // <Link  to={"/Project_Page"} className='text-[30px]  text-[white] '  >  GOOOOOOOO  </Link>


      

  return (
    <div>


          {/* {  con ?  <Project_Page/>  : <Home/> } */}
        
          <Home/>



          
<Link  to={"/Project_Page"} className='text-[30px]  text-[white] '  >  GOOOOOOOO  </Link>
    </div>
  )
}

