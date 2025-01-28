import React from 'react';
import me from '../assets/TS.png';
import { Link } from 'react-router-dom';

function Hiro() {
  return (
    <div className='flex w-[90%] mt-[100px] m-[auto]'>
      <div id="ab1w" className='w-[50%] h-[400px] text-[white] p-[5%]'>
        <h1 className='text-[50px]'>
          <span className='text-[#757580]'>I'm a</span> <br />
          <span className='text-[#6E4EF2] font-[800]'>Web Developer</span> <br />
          <p className='text-[20px] mt-[10px]' id='ttx'>
            Expert in HTML, CSS, JavaScript, and modern frameworks to create seamless, user-focused web experiences.
            <br />
            <Link target="_blank" to={'https://drive.google.com/file/d/1ltA_2jwAktGezmjwYjscguSiYhki7fXa/view?usp=sharing'}>
              <button className='col-span-4 mt-[20px] rounded-[7px] bg-gradient-to-r from-sky-500 to-indigo-500 h-[40px] w-[130px]'>Resume</button>
            </Link>
          </p>
        </h1>
      </div>
      <div id="ab1" className='w-[50%] h-[400px] flex justify-center items-center'>
        {/* <div id="imgg" className='w-[55%] rounded-[30px] bg-[#0B0F12] h-[90%] flex justify-center items-center border'>
          <img src={me} alt="" className='sss w-[75%]' />
        </div> */}

            <div id="trii" className='w-[] h-[300px] flex justify-center items-center' >
                    <img src={me} alt="" id='rot' />
            </div>


      </div>
    </div>
  );
}

export default Hiro;
