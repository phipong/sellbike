import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

export default function Detail() {
useEffect(() => {
  document.body.style.backgroundColor ="#1F1200";
    return () => {
        document.body.style.backgroundColor = null; 
    };
},[]);
  return (
    <div>
        <div data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="50"
             data-aos-offset="0"
             >
             <div className=' md:flex flex-col hidden p-3 justify-center items-center h-[650px] w-[60%] m-auto bg-slate-300'>
        <h1 className=' shadow-lg text-center text-4xl font-semibold '> Detail</h1>
            <img className='w-[50%] h-[300px]' src="/2.png" alt="" />
            <div className='m-10 space-y-14'>
                  <h1 className='text-3xl font-bold'>XTRA BIKE is not just for Regular Bicycle</h1>
                <p className='text-lg text-slate-600'>This Bike, aslo called a pedal cycle, bike or cycle, is a  human-powered or moto-powered assisted. it's easy to ride on the mountain.</p>
                <span className='text-2xl font-semibold'>$1999</span>
            </div>
               <div>
                   <button className='bg-orange-500 px-5 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-colors me-4'>Buy Now</button>
                    <Link className='bg-amber-400 px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-colors me-4' to={'/'} >Back</Link>
               </div>
        </div>
        {/* Phone mobile */}
        <div className=' md:hidden flex flex-col p-3 justify-center space-y-4  h-[600px] w-[90%] m-auto bg-slate-300'>
            <h1 className=' shadow-lg text-center text-white text-4xl font-semibold '> Detail</h1>
            <img className='w-[95%] h-[200px]' src="/2.png" alt="" />
            <h1 className='text-3xl font-bold'>XTRA BIKE is not just for Regular Bicycle</h1>
            <p className='text-lg text-slate-600'>This Bike, aslo called a pedal cycle, bike or cycle, is a  human-powered or moto-powered assisted. it's easy to ride on the mountain.</p>
             <span className='text-2xl font-semibold'>$1999</span>
             <div>
                <button className='bg-orange-500 px-5 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-colors me-4'>Buy Now</button>
                <Link className='bg-amber-400 px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-colors me-4' to={'/'} >Back</Link>
            </div>
        </div>
        </div>
       
    </div>
  )
}

