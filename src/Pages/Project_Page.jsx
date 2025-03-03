// import React, { useState } from 'react'

import { useState } from "react";

import tt from "../assets/res1.png"

const Project_Page = () => {
    let [state, setState] = useState([
        {
            title: "Web Tech ",
            img1: tt,
            gitlink: `https://github.com/suraniunnati/websites-webpages/tree/main/live_project_1`,
            live: `https://chic-faun-626d72.netlify.app/`,
            type: "webpage"
        }, {
            title: "AI jumpx ",
            img1: tt,
            gitlink: `https://github.com/suraniunnati/websites-webpages/tree/main/live_project_1`,
            live: `https://chic-faun-626d72.netlify.app/`,
            type: "webpage"
        }, {
            title: "AI jumpx ",
            img1: tt,
            gitlink: `https://github.com/suraniunnati/websites-webpages/tree/main/live_project_1`,
            live: `https://chic-faun-626d72.netlify.app/`,
            type: "website"
        }, {
            title: "AI jumpx ",
            img1: tt,
            gitlink: `https://github.com/suraniunnati/websites-webpages/tree/main/live_project_1`,
            live: `https://chic-faun-626d72.netlify.app/`,
            type: "webpage"
        }, {
            title: "AI jumpx ",
            img1: tt,
            gitlink: `https://github.com/suraniunnati/websites-webpages/tree/main/live_project_1`,
            live: `https://chic-faun-626d72.netlify.app/`,
            type: "website"
        },



    ])

    const [filteredData, setFilteredData] = useState(state);

    const filterData = (type) => {
        if (type === "all") {
            setFilteredData(state);
        } else {
            const filtered = state.filter((item) => item.type === type);
            setFilteredData(filtered);
        }
    };


    return (
        <div>


            {/* <Header/> */}
            <div id="titlemain" className='wow animate__animated animate__backInDown h-[auto] p-5 shadow-sm rounded-lg m-5'>
           { /*     <h3 className='font-bold text-2xl mb-2'>My Development Journey</h3>
                <li className='text-[#B7B7B7] text-sm'>50+ Web Pages: Designed and developed responsive web pages.</li>
                <li className='text-[#B7B7B7] text-sm'>5+ Websites: Built fully functional, dynamic websites.</li>
                <li className='text-[#B7B7B7] text-sm'>Other Projects: Worked on interactive apps, responsive designs, and API integrations.</li>
                */}
            </div>
            <div className='xl:w-[60%] flex justify-around items-center m-auto  mt-[50px]'>
            <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md' onClick={() => filterData("website")}>All</button>
            <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md' onClick={() => filterData("website")}>Website</button>
                <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md' onClick={() => filterData("outher")}>Admin Panel</button>
                <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md ' onClick={() => filterData("webpage")}>Webpages</button>
                <button className='bg-gradient-to-r from-[#1DBAB5] to-[#109BBB] p-2 w-[120px] rounded-md' onClick={() => filterData("outher")}>Outher</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-[85%] m-auto my-10 border pt-[80px] h-[auto]  border-[white]'>
                {filteredData.map((el) => {
                    console.log(el);
                    return <div key={el.title} id='alldata' className=' text-[white]  border border-[#111827]  shadow-md  hover:shadow-[#5471F0] rounded-lg p-3'>
                           <a href={el.live}  target="_blank" >
                        <img src={el.img1} alt="dsad" className="rounded-lg   cursor-pointer " />
                        </a>
                        <h3 className='mt-2 mb-[10px] '>{el.title}</h3>
                        <a href={el.gitlink} className=''  target="_blank"  >
                            <button id="btd"  className='col-span-4 me-[8px] rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[120px]'     >
                                {/* <i class="fa-brands fa-sourcetree text-[White]"></i>  */}
                                <i class="fa-solid fa-code me-[8px] text-[White] "></i>
                                View Code</button></a>
                        <a href={el.live}  target="_blank" >
                            <button  id="btd" className='col-span-4 ms-[20px] rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[100px]'  >
                                
                                {/* <i class="fa-solid fa-life-ring text-[White]"></i>  */}
                                <i class="fa-brands fa-chrome text-[White]   me-[10px]"></i>
                                
                                Live</button></a>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Project_Page