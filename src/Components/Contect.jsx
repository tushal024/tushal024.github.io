import React from 'react'

const Contect = () => {
  return (
    <div className='flex w-[90%] m-[auto] mt-[50px]' >



<div id="ab3"  className=' w-[50%] ps-[5%]  h-[auto] text-[white]  px-[2%] pt-[20px] ' >
    
    <h1 className='text-[30px]'  >
        
            
             <p className='text-[16px] mb-[20px] indent-[20px] '  id='ttx'>
             I'm always excited to take on new projects and collaborate with innovative minds. If you
             have a project in mind or just want to chat about design, feel free to reach out!
    <br />
             {/* <button   className='col-span-4 mt-[20px]  rounded-[6px] text-[] bg-gradient-to-r from-sky-500 to-indigo-500  h-[30px] w-[100px]'> Resume </button> */}

            
                </p>
             </h1> 

<div id="dd1"  className='w-[90%] h-[50px]  flex '   >
    <div id="dd11"  className=' w-[12%]  flex justify-center items-center ' >  
    <i class="fa-solid fa-phone text-[#6E4EF2] text-[20px] "></i>
        
      </div>
    <div id="dd12" className='ms-[20px]' >
        <p className='text-[gray]' > Phone Number </p>
        <p>  +91 70166 75228</p>
    </div>
</div>


<div id="dd1"  className='w-[90%] h-[50px] mt-[30px] flex '   >
    <div id="dd11"  className=' w-[12%]  flex justify-center items-center ' >  
    {/* <i class="fa-solid fa-phone text-[#6E4EF2] text-[20px] "></i> */}
    <i class="fa-solid fa-envelope text-[#6E4EF2] text-[20px]  "></i>
      </div>
    <div id="dd12" className='ms-[20px]' >
        <p className='text-[gray]  ' > Email </p>
        <p>  tushalshekh@gmail.com</p>
    </div>
</div>



<div id="dd1"  className='w-[90%] h-[50px] mt-[30px] flex '   >
    <div id="dd11"  className=' w-[12%]  flex justify-center items-center ' >  
    {/* <i class="fa-solid fa-phone text-[#6E4EF2] text-[20px] "></i> */}
    <i class="fa-regular fa-map text-[#6E4EF2] text-[20px] "></i>
        
      </div>
    <div id="dd12" className='ms-[20px]' >
        <p className='text-[gray]  ' > Address </p>
        <p> Rajkot , Gujarat </p>
    </div>
</div>




<div id="dd1"  className='w-[90%] h-[50px] mt-[30px] flex '   >
    <div id="dd11"  className=' w-[12%]  flex justify-center items-center ' >  
    {/* <i class="fa-solid fa-phone text-[#6E4EF2] text-[20px] "></i> */}
    <i class="fa-brands fa-linkedin-in text-[#6E4EF2] text-[20px] "></i>
        
      </div>
    <div id="dd12" className='ms-[20px]' >
        <p className='text-[gray]  ' > Linkedin </p>
        <p>  Tushal Shekh</p>
    </div>
</div>





        </div>
       


    <div id="ab1"  className=' w-[50%] pe-[5%]  h-[auto] text-[white] ' >
    <span className='text-[#6E4EF2]  font-[800] text-[30px]' >
    Leave a messge
     
    
             </span>
             <form action=""  className='text-white   '>

        <div id="ff" className='flex justify-between mt-[20px]' >  
            <div id="ff1" className='w-[47%] '  >
            <label htmlFor="name">Your Name  <span className='text-[#6E4EEA]' > * </span>  </label> <br />
              <input  id='intt' type="text"  placeholder='Tushal Shkeh...' className='bg-[#0D1117] ps-[10px]  h-[40px]  rounded-[6px]  w-[100%] border border-[gray] ' />



            </div>
            <div id="ff1"  className='w-[47%] '>
            <label id='' htmlFor="name"> Email Address  <span className='text-[#6E4EEA]' > * </span>  </label> <br />
    <input  id='intt' type="text" placeholder='Email Address' className='bg-[#0D1117] ps-[10px]  h-[40px]  rounded-[6px] w-[100%] border border-[gray] ' />


            </div>

       
        </div>
       
        <div id="ff" className='flex justify-between ' >  
            <div id="ff1" className='w-[47%] mt-[20px]'  >
            <label htmlFor="name">Your phone  <span className='text-[#6E4EEA]' > * </span>  </label> <br />
              <input  id='intt' type="text"  placeholder='Tushal Shkeh...' className='bg-[#0D1117] ps-[10px]  h-[40px]  rounded-[6px]  w-[100%] border border-[gray] ' />



            </div>
            <div id="ff1"  className='w-[47%] mt-[20px] '>
            <label id='' htmlFor="name"> Subject <span className='text-[#6E4EEA]' > * </span>  </label> <br />
    <input  id='intt' type="text" placeholder='Subject' className='bg-[#0D1117] ps-[10px]   h-[40px]  rounded-[6px] w-[100%] border border-[gray] ' />


            </div>

       
        </div>

        <div id="ff"  className='mt-[20px]'>
        <label id='' htmlFor="name"> Message <span className='text-[#6E4EEA]' > * </span>  </label> <br />

        <textarea name="" id="intt" className='bg-[#0D1117] ps-[10px] pt-[10px]  h-[150px] rounded-[6px] w-[100%] border border-[gray] '      placeholder='Your Message here...' ></textarea>

        </div>

        
     </form>
    
    
   
    </div>
    
        </div>
  )
}

export default Contect
