import React from 'react'
import { useEffect, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { MdHome } from "react-icons/md";
import { MdPedalBike } from "react-icons/md";
import { Link } from 'react-router-dom';
import { BsBicycle } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Footer from '../components/Footer';

export default function Service() {
  const [ loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const [openIndex, setopenIndex] = useState(null);

  const faqs = [
    {
      question :"What is type of do you sell",
      answer:
            "we offer a wide range of bike including road bikes, mountain bikes, hybird bikes, electric bikes, and kids bikes."
    },
    {
      question: "Do you provide bike repair services?",
      answer: "We offer a wide range of bikes including road bikes, mountain bikes, hybrid bikes, electric bikes, and kids' bikes."
    },
    {
      question : "How long does a standard tune-up take?",
      answer : "We offer a wide range of bikes including road bikes, mountain bikes, hybrid bikes, electric bikes, and kids' bikes."
    },
    {
      question : "Can I book a service appointment online?",
      answer: "We offer a wide range of bikes including road bikes, mountain bikes, hybrid bikes, electric bikes, and kids' bikes."
    },
  ]

  const toggleFAQ = (index) => {
    setopenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='text-white w-full overflow-hidden bg-black'>
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

          @keyframes marqueeRight {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee  {
            display: inline-block;
            white-space: nowrap;
            animation: marqueeRight 120s linear infinite;
          }

          
`}
      </style>
        {loading ? (
         <div className='flex justify-center items-center h-screen'>
          <span className='loader'></span>
         </div>
        ) : (
         <div>
          <div className="w-[85%] text-sm font-semibold m-auto p-6">
            <span className='flex px-3 py-2 bg-zinc-900 w-[130px] rounded-full justify-center items-center gap-2' >
              <Link to={"/"} ><MdHome className='hover:text-orange-500' /></Link> <MdPedalBike className='hover:text-orange-500 text-zinc-700' />
              Service</span>
          </div>

            <div className='text-center space-y-4  mt-10'>
          <h1 className='text-5xl font-bold'>Our Popular <span className='text-orange-500'>Bike Services</span></h1>
          <p className='text-lg max-w-lg text-zinc-600 mx-auto'>At Velocity Cycles, we take pride in  delivering top notch service to keep your bike in peak condition</p>
        </div>

        <div className='justify-center md:flex hidden flex-wrap mt-20 md:mt-14'>
          <div className="card  flex flex-col relative items-center p-4 bg-zinc-800 w-[350px] h-[300px] pt-20 mt-5 ms-14 md:ms-0 rounded-s-3xl">
            <BsBicycle className='text-9xl text-black absolute top-[-60px] bg-orange-500 px-5 rounded-full' />
              <h1 className='text-3xl font-bold'>Tune-Up Package</h1>
              <span className='text-center mt-1 text-neutral-500'>Want a bike that fits your style and performance goals? We offer custom builds using high-quality components</span>
          </div>
          <div className="card flex flex-col relative items-center bg-zinc-700 w-[450px] pt-24 p-10  md:ms-0  ms-[-29px] h-[350px] rounded-3xl">
            <img className='w-[130px] h-[130px] object-cover p-4  absolute top-[-45px] bg-orange-500 rounded-full ' src="/15.png" alt="" />
            <h1 className='text-3xl font-bold'>Checks & Setup</h1>
            <span className='text-center mt-2  text-neutral-500'>Want a bike that fits your style and performance goals? We offer custom builds using high-quality components</span>
          </div>
          <div className="card flex flex-col relative items-center p-3 bg-zinc-800 w-[350px] pt-20 h-[300px] mt-5 rounded-e-3xl">
            <img className='w-[130px] h-[130px] object-cover p-4  absolute top-[-60px] bg-orange-500 rounded-full ' src="/16.png" alt="" />
            <h1 className='text-3xl font-bold'>Chain Cleaning</h1>
            <span className='text-center mt-2 text-neutral-500'>Want a bike that fits your style and performance goals? We offer custom builds using high-quality components</span>
          </div>
        </div>

        {/* Mobile Phone */}
      <div className="flex flex-col md:hidden flex-wrap justify-center gap-6 mt-20 md:mt-14 px-4">
         <div className="card flex flex-col relative items-center p-6 bg-zinc-800 w-full sm:w-[300px] md:w-[350px] lg:w-[350px] h-auto pt-20 rounded-3xl">
           <BsBicycle className="text-8xl text-black absolute -top-12 bg-orange-500 px-5 rounded-full" />
           <h1 className="text-2xl md:text-3xl font-bold">Tune-Up Package</h1>
           <span className="text-center mt-2 text-neutral-500">Want a bike that fits your style and performance goals? We offer custom builds using high-quality components</span>
         </div>
         <div className="card flex flex-col relative items-center bg-zinc-700 w-full sm:w-[320px] md:w-[400px] lg:w-[450px] pt-24 p-6 h-auto rounded-3xl">
           <img className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover p-4 absolute -top-12 bg-orange-500 rounded-full" src="/15.png" alt=""/>
           <h1 className="text-2xl md:text-3xl font-bold">Checks & Setup</h1>
           <span className="text-center mt-2 text-neutral-500">
             Want a bike that fits your style and performance goals? We offer custom builds using high-quality components
           </span>
         </div>
                
         <div className="card flex flex-col relative items-center p-6 bg-zinc-800 w-full sm:w-[300px] md:w-[350px] lg:w-[350px] h-auto pt-20 rounded-3xl">
           <img
             className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] object-cover p-4 absolute -top-12 bg-orange-500 rounded-full"
             src="/16.png"
             alt=""
           />
           <h1 className="text-2xl md:text-3xl font-bold">Chain Cleaning</h1>
           <span className="text-center mt-2 text-neutral-500">
             Want a bike that fits your style and performance goals? We offer custom builds using high-quality components
           </span>
         </div>
      </div>

        <div className='flex justify-center mt-20 mb-20'>
            <Link className='flex items-center gap-3 text-lg font-semibold bg-orange-500 hover:bg-white hover:text-orange-500 transition-colors duration-300 px-8 py-4 rounded-full' to={"/contact"}>Order your service <FaLongArrowAltRight /></Link>
        </div>

        <div className="flex flex-col lg:flex-row bg-zinc-800 w-[90%] lg:w-[78%] m-auto h-auto lg:h-[670px] rounded-[25px] lg:rounded-[45px] overflow-hidden">

      <div className="p-6 md:p-10 lg:p-20 w-full lg:w-1/2 space-y-8 lg:space-y-14">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Ride.Learn.<span className="text-orange-500">Connect.</span>
        </h1>
        <p className="text-base md:text-lg text-zinc-500">
          At velocity Cycles, we take pride in delivering top notch service to keep your bike in peak condition.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-base md:text-lg">
          <li className="flex items-center gap-3">
            <FaCheck className="bg-orange-500 text-3xl md:text-4xl rounded-full px-2 hover:bg-white hover:text-orange-500 hover:scale-125 duration-300" />
            Free test rides
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="bg-orange-500 text-3xl md:text-4xl rounded-full px-2 hover:bg-white hover:text-orange-500 hover:scale-125 duration-300" />
            Custom builds
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="bg-orange-500 text-3xl md:text-4xl rounded-full px-2 hover:bg-white hover:text-orange-500 hover:scale-125 duration-300" />
            Electric bikes
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="bg-orange-500 text-3xl md:text-4xl rounded-full px-2 hover:bg-white hover:text-orange-500 hover:scale-125 duration-300" />
            Expert repairs
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="bg-orange-500 text-3xl md:text-4xl rounded-full px-2 hover:bg-white hover:text-orange-500 hover:scale-125 duration-300" />
            Gear upgrades
          </li>
          <li className="flex items-center gap-3">
            <FaCheck className="bg-orange-500 text-3xl md:text-4xl rounded-full px-2 hover:bg-white hover:text-orange-500 hover:scale-125 duration-300" />
            Free Shipping
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button className="bg-orange-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white hover:text-orange-500 transition-colors">
            See Full details
          </button>
          <span className="text-slate-600 text-sm sm:text-base">
            Bike have different colors
          </span>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <img
          className=" h-[370px] sm:h-[400px] lg:h-full w-full lg:rounded-br-[45px]"
          src="/17.png"
          alt="Bike"
        />
      </div>
    </div>

        <div className='flex flex-col gap-7 justify-center items-center w-[90%] h-[300px] m-auto'>
          <div className='text-orange-900 text-9xl font-bold animate-marquee drop-shadow-[0_0_10px_rgba(255,0,150,0.7)] '>
            <h1><i> MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERSMEET OUR BESTSELLERS MEET OUR BESTSELLERSMEET OUR BESTSELLERS MEET OUR BESTSELLERSMEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS </i></h1>  
          </div> 
            <h2 className="md:text-5xl text-4xl text-center absolute md:mt-4 font-bold">Pre Services <span className='text-orange-500'>Common Questions</span></h2>
            <p className='max-w-lg text-center text-xl  text-zinc-500'>At Velocity Cycles, we take pride in delivering top notch services to keep your bike in peak condition</p>
        </div>

    <div className="flex flex-col md:flex-row items-center w-[90%] md:w-[80%] mb-6 m-auto gap-6 md:gap-10 py-6">
      <div className="w-full md:w-[43%]">
        <img
          className="w-full h-[300px] md:h-[600px] rounded-xl object-cover"
          src="/18.png"
          alt="bike"
        />
      </div>
      <div className="w-full md:w-[57%] mt-6 md:mt-0">
        <div className="bg-black text-white p-6 space-y-3 w-full rounded-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium"
              >
                <span
                  className={`${
                    openIndex === index ? "text-orange-500" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FiChevronUp className="text-orange-500" />
                ) : (
                  <FiChevronDown />
                )}
              </button>

              {openIndex === index && (
                <div className="p-4 pt-0 text-zinc-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
          <Footer/>

  </div>
          
        )}
    </div>
  )
}
