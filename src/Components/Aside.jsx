import React from 'react'

const Aside = () => {

        
    function closeToggle(){
        document.getElementById("ab3q").style.display="none"
    }

  return (
    <div>
      
<div id="ab3q"  className='  hidden w-[20%] pb-[10%] z-50   ps-[1%] fixed top-0  bg-[#272730]  h-[100%] text-[white]  px-[1%] pt-[3%] ' >
    <div className='relative' >

<i class="fa-solid fa-xmark text-[#6E4EF2]  absolute right-0 top-[-20px] text-[24px] cursor-pointer  "  onClick={closeToggle}  ></i>
    </div>

    
<h1 className='text-center text-[white] text-[30px] underline underline-offset-[20px]  decoration-[#6E4EF2] underline-[red] '>  Get In Touch </h1>


    <h1 className='text-[30px]'  >
        
            
             <p className='text-[13px] mb-[20px]  mt-[40px] '  id='ttx'>
             I'm always excited to take on new projects and collaborate with innovative minds. If you
             have a project in mind or just want to chat about design, feel free to reach out!
    <br />
             {/* <button   className='col-span-4 mt-[20px]  rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[100px]'> Resume </button> */}

            
                </p>
             </h1> 

<div id="dd1"  className='w-[90%] h-[40px] text-[13px] flex mt-[40px] '   >
    <div id="dd11"  className=' w-[15%]  flex justify-center items-center ' >  
    <i class="fa-solid fa-phone text-[#6E4EF2] text-[16px] "></i>
        
      </div>
    <div id="dd12" className='ms-[20px]  ' >
        <p className='text-[gray]' > Phone Number </p>
        <p>  +91 70166 75228</p>
    </div>
</div>


<div id="dd1"  className='w-[90%] h-[40px]  text-[13px]  mt-[30px] flex '   >
    <div id="dd11"  className=' w-[15%]  flex justify-center items-center ' >  
    {/* <i class="fa-solid fa-phone text-[#6E4EF2] text-[20px] "></i> */}
    <i class="fa-solid fa-envelope text-[#6E4EF2] text-[16px]  "></i>
      </div>
    <div id="dd12" className='ms-[20px]' >
        <p className='text-[gray]  ' > Email </p>
        <p>  tushalshekh@gmail.com</p>
    </div>
</div>



<div id="dd1"  className='w-[90%] h-[40px] text-[13px]  mt-[30px] flex '   >
    <div id="dd11"  className=' w-[15%]  flex justify-center items-center ' >  
    {/* <i class="fa-solid fa-phone text-[#6E4EF2] text-[20px] "></i> */}
    <i class="fa-regular fa-map text-[#6E4EF2]  "></i>
        
      </div>
    <div id="dd12" className='ms-[20px]' >
        <p className='text-[gray]  ' > Address </p>
        <p> Rajkot , Gujarat </p>
    </div>
</div>

<div id="dd1"  className='w-[90%] h-[40px]  text-[13px]  mt-[30px] flex '   >
    <div id="dd11"  className=' w-[15%]  flex justify-center items-center ' >  
    {/* <i class="fa-solid fa-phone text-[#6E4EF2] text-[20px] "></i> */}
    <i class="fa-brands fa-linkedin-in text-[#6E4EF2]  "></i>
        
      </div>
    <div id="dd12" className='ms-[20px]' >
        <p className='text-[gray]  ' > Linkedin </p>
        <p>  Tushal Shekh</p>
    </div>
</div>



<div id="h4"  className='border-[white] mt-[50px] m-[auto] pe-[20%] ms-[20%] w-[60%] text-[white]  h-[auto] flex     justify-evenly items-center  ' >
      <i class="fa-brands fa-linkedin-in col-span-1  cursor-pointer"></i>
      <i class="fa-brands fa-github  col-span-1      cursor-pointer "></i>
      <i class="fa-solid fa-phone    col-span-1      cursor-pointer "></i>

      {/* <button   className='col-span-4  rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[100px]'> Hire Me ! </button> */}

      </div>



        </div>
        
       
    </div>
  )
}

export default Aside
