import React from 'react'
import { Link } from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { MdPedalBike } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Footer from '../components/Footer';

export default function Blog() {
  const tags = [
    "article", "computer", "developer", "famous",
    "interview", "it", "learn", "money",
    "photography", "post", "seo",
    "technology", "tutorial", "tuts", "website",
    "wordpress", "WP"
  ];
  return (
    <div className='text-white '>
       <div className="w-[85%] text-sm font-semibold m-auto p-6">
            <span className='flex px-3 py-2 bg-zinc-900 w-[130px] rounded-full justify-center items-center gap-2' >
              <Link to={"/"} ><MdHome className='hover:text-orange-500' /></Link> <MdPedalBike className='hover:text-orange-500 text-zinc-700' />
              Blog</span>
       </div>

       <div className='md:w-[85%] w-full h-auto m-auto p-3 flex flex-wrap iterms-center gap-5 mb-16 bg-zinc-800 rounded-xl '>
         <div>
            <div className='flex flex-wrap gap-5 p-3 group'>
              <div className='w-[340px] h-[300px] relative overflow-hidden rounded-2xl '>
                <img className='w-full h-full transition duration-300 group-hover:scale-110' src="/19.png" alt="" />
                <div className='absolute inset-0 bg-black opacity-0 transition duration-400 group-hover:opacity-30'></div>
                <a className='absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition duration-300' href="">
                 <div className="bg-orange-500 rounded-full p-6">
                  <FaLink className="text-2xl text-white" />
                 </div>
                </a>
              </div>
              <div className='flex flex-col iterms-center max-w-lg gap-3'>
                <h2 className='text-3xl  font-semibold'>Top 7 Must have Accessories for Every Cyclist</h2>
                <div className='space-y-3'>
                    <div className='flex items-center gap-2 w-[40px]'>
                      <img className='rounded-full' src="/20.png" alt="" />
                      <div className='flex flex-col mt-2 text-xs'>
                        <p>Elmntr</p>
                        <span className='text-gray-500'>10/June/2024</span>
                      </div>
                    </div>
                    <p className='text-lg text-zinc-400'>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...</p>
                    <button className='flex items-center gap-2 hover:bg-orange-500 transition-colors duration-300 bg-red-700/40 px-2 py-1 rounded-full'>
                    <FaAngleRight className='bg-red-600/50 rounded-full p-2 text-3xl' />
                    read more</button>
                </div>
              </div>
            </div>
              <hr className='border-t border-zinc-700 my-4' />
              
            <div className='flex flex-wrap gap-5 p-3 group'>
              <div className='w-[340px] h-[300px] relative overflow-hidden rounded-2xl '>
                <img className='w-full h-full transition duration-300 group-hover:scale-110' src="/21.png" alt="" />
                <div className='absolute inset-0 bg-black opacity-0 transition duration-400 group-hover:opacity-30'></div>
                <a className='absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition duration-300' href="">
                 <div className="bg-orange-500 rounded-full p-6">
                  <FaLink className="text-2xl text-white" />
                 </div>
                </a>
              </div>
              <div className='flex flex-col iterms-center max-w-lg gap-3'>
                <h2 className='text-3xl  font-semibold'>Top 7 Must have Accessories for Every Cyclist</h2>
                <div className='space-y-3'>
                    <div className='flex items-center gap-2 w-[40px]'>
                      <img className='rounded-full' src="/20.png" alt="" />
                      <div className='flex flex-col mt-2 text-xs'>
                        <p>Elmntr</p>
                        <span className='text-gray-500'>10/June/2024</span>
                      </div>
                    </div>
                    <p className='text-lg text-zinc-400'>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...</p>
                    <button className='flex items-center gap-2 hover:bg-orange-500 transition-colors duration-300 bg-red-700/40 px-2 py-1 rounded-full'>
                    <FaAngleRight className='bg-red-600/50 rounded-full p-2 text-3xl' />
                    read more</button>
                </div>
              </div>
            </div>
              <hr className='border-t border-zinc-700 my-4' />

            <div className='flex flex-wrap gap-5 p-3 group'>
              <div className='w-[340px] h-[300px] relative overflow-hidden rounded-2xl '>
                <img className='w-full h-full transition duration-300 group-hover:scale-110' src="/22.png" alt="" />
                <div className='absolute inset-0 bg-black opacity-0 transition duration-400 group-hover:opacity-30'></div>
                <a className='absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition duration-300' href="">
                 <div className="bg-orange-500 rounded-full p-6">
                  <FaLink className="text-2xl text-white" />
                 </div>
                </a>
              </div>
              <div className='flex flex-col iterms-center max-w-lg gap-3'>
                <h2 className='text-3xl  font-semibold'>Top 7 Must have Accessories for Every Cyclist</h2>
                <div className='space-y-3'>
                    <div className='flex items-center gap-2 w-[40px]'>
                      <img className='rounded-full' src="/20.png" alt="" />
                      <div className='flex flex-col mt-2 text-xs'>
                        <p>Elmntr</p>
                        <span className='text-gray-500'>10/June/2024</span>
                      </div>
                    </div>
                    <p className='text-lg text-zinc-400'>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta ...</p>
                    <button className='flex items-center gap-2 hover:bg-orange-500 transition-colors duration-300 bg-red-700/40 px-2 py-1 rounded-full'>
                    <FaAngleRight className='bg-red-600/50 rounded-full p-2 text-3xl' />
                    read more</button>
                </div>
              </div>
            </div>
              <hr className='border-t border-zinc-700 my-4' />
         </div>
         
         <div className='mt-5 '>
            <div className='flex flex-col items-center bg-neutral-800 w-[340px] rounded-xl '>
                <h3 className='text-center w-full bg-orange-900/30 rounded-t-xl font-bold p-5'>Search in Blog</h3>
                <div className='p-5 flex gap-5 '>
                  <input className='bg-transparent bg-neutral-700 p-3 rounded-full' type="text" placeholder='Search...' />
                  <button className='bg-orange-500 px-5 py-4 rounded-full'>Search</button>
                </div>
            </div>

            <div className='flex flex-col items-center bg-neutral-800 w-[340px] mt-10 rounded-xl'>
              <h3 className='text-center w-full bg-orange-900/30 rounded-t-xl font-bold p-5'>Tags cloud</h3>
              <div className='flex flex-wrap gap-3 p-4'>
                {tags.map((tag, index) => (
                  <a
                    key={index}
                    href={`#${tag}`}
                    className="bg-zinc-700 text-white text-sm px-4 py-2 rounded-full cursor-pointer transition hover:bg-orange-500"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
         </div>
       </div>
       <Footer/>
    </div>
  )
}
