import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { MdPedalBike } from "react-icons/md";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // hide loader after delay
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white  ">
      <style>
        {`
          .loader {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: inline-block;
            position: relative;
            background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #ff3d00 100%);
            box-sizing: border-box;
            animation: rotation 2s linear infinite;
          }
          .loader::after {
            content: '';  
            box-sizing: border-box;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: #263238;
          }
          @keyframes rotation {
            0% { transform: rotate(0deg) }
            100% { transform: rotate(360deg)}
          }
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.5s forwards;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>

      {loading ? (
       <div className="flex flex-col gap-4 justify-center items-center h-screen text-3xl font-semibold overflow-hidden">
         <span className="loader "></span>
       </div>
      ) : (
        <div className="fade-in ">
          <div className="w-[85%] text-sm font-semibold m-auto p-6 ">
            <span className='flex px-3 py-2 bg-zinc-900 w-[130px] rounded-full justify-center items-center gap-2' >
              <Link to={"/"} ><MdHome className='hover:text-orange-500' /></Link> <MdPedalBike className='hover:text-orange-500 text-zinc-700' />
              About</span>
          </div>
          <h1 className="flex flex-col gap-4 justify-center items-center h-screen text-3xl font-semibold overflow-hidden">Coming Soon</h1>
        </div>
        
          
      )}
    </div>
  );
}
