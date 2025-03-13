import React from 'react'

const Contect = () => {


    function form1(e){
      e.preventDefault();
    }

    const altt = () => {
      // Using SweetAlert2 after adding CDN link
      window.Swal.fire({
        title: 'Success!',
        text: 'You clicked the button!',
        icon: 'success',
        // confirmButtonText: 'Cool'
      });
    };

    // function altt(){
    //   window. Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    //   })
     
    // }

  return (
    <div className='flex flex-wrap w-[90%]     m-auto mt-[50px]'>
     

      {/* Left Section: Contact Info */}
      <div id="ab3" className='w-full sm:w-[50%] md:w-[100%] md:ps-[10%] xl:w-[49%]     px-[5%] h-auto text-[white] py-[20px]'>
        <h1 className='text-[30px]'>
          <p className='text-[20px] mb-[35px] indent-[20px]' id='ttx'>
            I'm always excited to take on new projects and collaborate with innovative minds. If you
            have a project in mind or just want to chat about design, feel free to reach out!
          </p>
        </h1>

        {/* Phone Section */}
        <div id="dd1" className='w-full h-[60px] flex mb-[20px]'>
          <div id="dd11" className='w-[12%] flex justify-center items-center'>
            <i className="fa-solid fa-phone text-[#6E4EF2] text-[20px]" />
          </div>
          <div id="dd12" className='ml-[20px]'>
            <p className='text-[gray]'>Phone Number</p>
            <p>+91 70166 75228</p>
          </div>
        </div>

        {/* Email Section */}
        <div id="dd1" className='w-full  h-[60px] flex mb-[20px]'>
          <div id="dd11" className='w-[12%] flex justify-center items-center'>
            <i className="fa-solid fa-envelope text-[#6E4EF2] text-[20px]" />
          </div>
          <div id="dd12" className='ml-[20px]'>
            <p className='text-[gray]'>Email</p>
            <p>tushalshekh@gmail.com</p>
          </div>
        </div>

        {/* Address Section */}
        <div id="dd1" className='w-full h-[60px] flex mb-[20px]'>
          <div id="dd11" className='w-[12%] flex justify-center items-center'>
            <i className="fa-regular fa-map text-[#6E4EF2] text-[20px]" />
          </div>
          <div id="dd12" className='ml-[20px]'>
            <p className='text-[gray]'>Address</p>
            <p>Rajkot, Gujarat</p>
          </div>
        </div>

        {/* LinkedIn Section */}
        <div id="dd1" className='w-full h-[60px] flex mb-[20px]'>
          <div id="dd11" className='w-[12%] flex justify-center items-center'>
            <i className="fa-brands fa-linkedin-in text-[#6E4EF2] text-[20px]" />
          </div>
          <div id="dd12" className='ml-[20px]'>
            <p className='text-[gray]'>LinkedIn</p>
            <p>Tushal Shekh</p>
          </div>
        </div>
      </div>

      {/* Right Section: Form */}
      <div id="ab1" className='w-full h-[auto]   md:w-[100%] md:ps-[10%] xl:w-[49%]     sm:w-[50%] px-[5%]  text-[white]'>
        <span className='text-[#6E4EF2] font-[800] text-[30px]'>
          Leave a Message
        </span>
        <form className='text-white' onSubmit={form1} >

          {/* Name & Email Fields */}
          <div id="ff" className='flex flex-wrap justify-between mt-[20px]'>
            <div id="ff1" className='w-full sm:w-[47%]'>
              <label htmlFor="name"   >Your Name <span className='text-[#6E4EEA]'>*</span></label><br />
              <input
                id='intt'
                type="text"
                placeholder='Tushal Shekh...'
                className='bg-[#0D1117] p-[10px] mt-[12px] h-[40px] rounded-[6px] w-full border border-[gray]'
              />
            </div>
            <div id="ff1" className='w-full sm:w-[47%] mt-[20px] sm:mt-0'>
              <label htmlFor="email">Email Address <span className='text-[#6E4EEA]'>*</span></label><br />
              <input
                id='intt'
                type="text"
                placeholder='Email Address'
                className='bg-[#0D1117] p-[10px] mt-[12px]  h-[40px] rounded-[6px] w-full border border-[gray]'
              />
            </div>
          </div>

          {/* Phone & Subject Fields */}
          <div id="ff" className='flex flex-wrap justify-between mt-[20px]'>
            <div id="ff1" className='w-full sm:w-[47%]'>
              <label htmlFor="phone">Your Phone <span className='text-[#6E4EEA]'>*</span></label><br />
              <input
                id='intt'
                type="text"
                placeholder='Your Phone...'
                className='bg-[#0D1117] p-[10px]  mt-[12px] h-[40px] rounded-[6px] w-full border border-[gray]'
              />
            </div>
            <div id="ff1" className='w-full sm:w-[47%] mt-[20px] sm:mt-0'>
              <label htmlFor="subject">Subject <span className='text-[#6E4EEA]'>*</span></label><br />
              <input
                id='intt'
                type="text"
                placeholder='Subject'
                className='bg-[#0D1117] p-[10px]  mt-[12px] h-[40px] rounded-[6px] w-full border border-[gray]'
              />
            </div>
          </div>

          {/* Message Field */}
          <div id="ff" className='mt-[20px]'>
            <label htmlFor="message">Message <span className='text-[#6E4EEA]'>*</span></label><br />
            <textarea
              name="message"
              id="intt"
              className='bg-[#0D1117] p-[10px] mt-[12px] pt-[10px] h-[150px] rounded-[6px] w-full border border-[gray]'
              placeholder='Your message here...'
            />
          </div>
          <div>
            <button onClick={altt }  className='rounded-[6px] text-[20px] mt-[20px] bg-gradient-to-r from-sky-500 to-indigo-500  h-[40px] w-[200px]' > Submit </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contect;
