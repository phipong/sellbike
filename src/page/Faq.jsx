import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { MdPedalBike } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

export default function Faq() {
  const [Loading, setLoading] = useState(true);
  useEffect(() =>{
    const timer = setTimeout(() =>{
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='text-white mt-7'>
      {Loading ? (
        <div className='flex justify-center items-center text-xl h-screen '>
          <p>Loading...</p>
        </div>
      ) : (
        <div className='fade-in'>
           <div className="w-[85%] text-sm font-semibold m-auto p-6">
              <span className='flex px-3 py-2 bg-zinc-900 w-[130px] rounded-full justify-center items-center gap-2' >
                <Link to={"/"} ><MdHome className='hover:text-orange-500' /></Link> <MdPedalBike className='hover:text-orange-500 text-zinc-700' />
                FAQ</span>
         </div>

      <div className=" flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[85%] mx-auto p-6 md:p-8 gap-10">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold ">
            Common <span className="text-orange-500">Questions</span>
          </h1>
          <p className="text-base md:text-lg text-zinc-500 max-w-xl mx-auto md:mx-0">
            Please read questions below, and if you cannot find your answer,
            please send us your question. We will answer you as soon as possible.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-2 text-xl md:text-2xl font-bold">
            <FaQuestion className='bg-red-500/10 w-10 h-10 p-2 rounded-full' /> F.A.Qs
          </div>
        </div>
       <div className=" w-full md:w-2/5 flex justify-center items-center relative">
          <img
            src="/25.png"
            alt="Faq"
            className="w-[80%] absolute md:w-[450px] max-w-sm mr-5 md:max-w-none"
          />
       </div>
     </div>
        <div className='md:w-[85%] w-full md:flex flex-wrap gap-6 m-auto bg-zinc-800 p-10 md:mt-2 mt-20 rounded-xl'>
          <div className=' md:w-[65%]  space-y-4 text-sm md:text-base'>
            <div className='bg-white/40 w-full md:space-y-8 md:h-[200px] md:text-xl rounded-lg p-4'>
              <span className='flex items-center gap-1 text-black font-semibold'><FaCaretDown />What types of bikes do you sell?</span>
              <p className='md:text-base text-[10px] text-black'>We offer road bikes, mountain bikes, hybrid bikes, electric bikes, kids’ bikes, and more to suit all cycling needs. Absolutely! Test rides are available for most models in our store to ensure the right fit and comfort. We stock top brands including Trek, Giant, Specialized, Cannondale, and more. We allow returns or exchanges within 14 days of purchase, provided the bike is in like-new condition.</p>
            </div>
            <details className='p-4 rounded-md bg-zinc-900/50 hover:bg-white/40 transition-colors duration-300 group'>
              <summary className='font-semibold cursor-pointer group-hover:text-black duration-200'>How do I list my bike for sale?</summary>
              <p className='mt-2 text-zinc-400 group-hover:text-black duration-200'>To list your bike for sale, simply create an account on our platform, navigate to the "Sell Bike" section, and fill out the listing form with details about your bike, including photos and pricing.</p>
            </details>
            <details className='p-4 rounded-md bg-zinc-900/50 hover:bg-white/40 transition-colors duration-300 group'>
              <summary className='font-semibold cursor-pointer group-hover:text-black duration-200'>Do you sell used or refurbished bikes?</summary>
              <p className='mt-2 text-zinc-400 group-hover:text-black duration-200'>We offer road bikes, mountain bikes, hybrid bikes, electric bikes, kids’ bikes, and more to suit all cycling needs. Absolutely! Test rides are available for most models in our store to ensure the right fit and comfort. We stock top brands including Trek, Giant, Specialized, Cannondale, and more. We allow returns or exchanges within 14 days of purchase, provided the bike is in like-new condition.</p>
            </details>
            <details className='p-4 rounded-md bg-zinc-900/50 hover:bg-white/40 transition-colors duration-300 group'>
              <summary className='font-semibold cursor-pointer group-hover:text-black duration-200'>How do I choose the right size bike?</summary>
              <p className='mt-2 text-zinc-400 group-hover:text-black duration-200'>To list your bike for sale, simply create an account on our platform, navigate to the "Sell Bike" section, and fill out the listing form with details about your bike, including photos and pricing.</p>
            </details>
            <details className='p-4 rounded-md bg-zinc-900/50 hover:bg-white/40 transition-colors duration-300 group'>
              <summary className='font-semibold cursor-pointer group-hover:text-black duration-200'>What brands of bikes do you carry?</summary>
              <p className='mt-2 text-zinc-400 group-hover:text-black duration-200'>To list your bike for sale, simply create an account on our platform, navigate to the "Sell Bike" section, and fill out the listing form with details about your bike, including photos and pricing.</p>
            </details>
          </div>
          <div className='md:w-[33%]  gap-4 mt-8 bg-zinc-700 rounded-2xl pt-4'>
           <div className='flex justify-center gap-5'>
             <div className='w-[40%] flex flex-col'>
              <label htmlFor="">Your Name</label>
              <input className='bg-zinc-600 rounded-xl p-2' type="text" />
            </div>
            <div className='w-[40%] flex flex-col'>
              <label htmlFor="">Your Email</label>
              <input className='bg-zinc-600 rounded-xl p-2' type="email" />
            </div>
           </div>
            <div className='flex flex-col gap-3 mt-4 px-8'>
              <label htmlFor="">Subject</label>
              <input className='bg-zinc-600 rounded-xl p-2' type="text" />
              <label htmlFor="">Department</label>
              <select className='bg-zinc-600 rounded-xl p-2' name="" id="">
                <option value="">Select</option>
                <option value="1">Sales</option>
                <option value="2">Support</option>
                <option value="3">General</option>
                <option value="4">Billing</option>
              </select>
              <label htmlFor="">Your Question</label>
              <textarea className='bg-zinc-600 rounded-xl p-2' name="" id=""></textarea>
              <button className='bg-orange-500 flex w-28 justify-center rounded-xl p-2'>Ask</button>
            </div>
            
          </div>

        </div>

      </div>
      )}
    </div>
  )
}

