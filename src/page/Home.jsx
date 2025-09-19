import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrBike } from "react-icons/gr";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

export default function Home() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (e) => {
      const { offsetWidth, offsetHeight } = e.currentTarget;
      const x = (e.nativeEvent.offsetX / offsetWidth - 0.1) * 20; 
      const y = (e.nativeEvent.offsetY / offsetHeight - 0.5) * 20;
      setPos({ x, y });
    };
  
    const handleMouseLeave = () => {
      setPos({ x: 0, y: 0 });
    };
    const [transform, setTransform] = useState("translate(0px, 0px) scale(1)");

  const handleMouse = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 40;
    const y = ((e.clientY - top) / height - 0.5) * 40;
    setTransform(`translate(${x}px, ${y}px) scale(1.10)`); 
  };

  const handleMouseLeft = () => {
    setTransform("translate(0px, 0px) scale(1)"); 
  };
  const users = [
    {
      Name : 'Antonio Benz',
      role : 'Bike designer',
      img  : 'https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/t6.jpg',
      discription :'A bicycle, also called a pedal cycle, bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.'
    },
    {
      Name :'Sarah Lisgun',
      role :'bike Rider',
      img : '/14.png',
      discription : 'Bicycles can be either human-powered or motor-assisted. In their traditional form, they are operated through pedals that drive the wheels via a chain mechanism. In modern variations, such as e-bikes, small electric motors provide additional support, making cycling easier and faster.'
    }

  ];
  const [currentIndex, setCurrentIndex] = useState(0);
    const totalUsers = users.length;
  
    const prevUser = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalUsers - 1 : prevIndex - 1));
    };
  
    const nextUser = () => {
      setCurrentIndex((prevIndex) => (prevIndex === totalUsers - 1 ? 0 : prevIndex + 1));
    };
  
    const { Name, role, img, discription } = users[currentIndex];
  

  return (
    <div className='w-full overflow-hidden bg-black'>
      <style>
       {`
          @keyframes marqueeRight {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee  {
            display: inline-block;
            white-space: nowrap;
            animation: marqueeRight 120s linear infinite;
          }

          @keyframes blurFade {
            0% {
              filter: blur(8px);
              background-color: #f97316;
              color: white;
            }
            70% {
              filter: blur(0px);
              background-color: #f97316;
              color: white;
            }
            100% {
              filter: blur(0px);
              background-color: #f97316;
              color: #fff;
            }
          }
        `}
      </style>
      <div className='flex flex-col md:flex-row bg-slate-950 md:h-[700px]  justify-around items-center p-20 mt-10 gap-10 '>
        <div className='text-white space-y-10 lg:w-[50%] md:w-[40%] text-center md:text-start'>
           <h1 className='text-6xl font-bold'>XTRA BIKE is not just for <span className='text-orange-500'>Regular Bicycle</span></h1>
           <p className='text-slate-500 text-lg'>This Bike, aslo called a pedal cycle, bike or cycle, is a  human-powered or moto-powered assisted</p>
            <div className=' text-4xl font-serif font-semibold'>
              <span>$1999</span>
              </div>
              <div className='md:block flex flex-col gap-4'>
                <Link className='bg-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-500 transition-colors me-4' to={'/detail'}>See Details</Link>
              <span className='text-slate-600 text-sm sm:text-base'>Bike have different colors</span>
              </div> 
        </div>
        <div className=' w-full h-[300px] p-2 hidden md:block '>
          <img className='w-[57%] h-[70%] absolute left-[40%] z-10' src="/2.png" alt="" style={{transform: `translate(${pos.x}px, ${pos.y}px)`,}} 
          onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} />
          <img className='w-[55%] h-[800px] relative left-[400px] -top-10 transform ' src="/3.png" alt="" />
        </div>

        {/* Phone Moblie */}
        <div className='md:hidden  w-full h-[300px] p-2  '>
          <img className='w-[20] h-[33%]  absolute left-0 z-10' src="/2.png" alt=""  style={{transform: `translate(${pos.x}px, ${pos.y}px)`,}}
          onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
          />
          <img className='w-[75%] h-[350px] relative left-[150px] -top-10 transform ' src="/3.png" alt="" />
        </div >
      </div>

        <div className='hidden md:flex justify-center mt-14 '>
            <div data-aos="fade-right"
                 data-aos-anchor="#example-anchor"
                 data-aos-offset="1500"
                 data-aos-duration="1500" onMouseMove={handleMouse} onMouseLeave={handleMouseLeft}>
                    <img className='w-full ' src="/4.png" alt="" style={{transform}} />
            </div>
          <div className='text-white space-y-5  w-[75%]  relative left-0 top-[100px]'>
            <h1 className='text-5xl font-semibold'>XTRABike---It's not just a bike,<span className='text-orange-500'>It's a strong bike</span></h1>
            <p className='text-xl text-gray-600 p-3 text-start '>A bicycle, also called a pedal cycle, bike or cycle, is a human powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.</p>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-4 text-lg'>
              <li className='flex items-center gap-3'><CiCircleCheck className='text-5xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Free test to Ride</li>
              <li className='flex items-center gap-3'><CiCircleCheck className='text-5xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Custom Build</li>
              <li className='flex items-center gap-3'><CiCircleCheck className='text-5xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Electric bike</li>
              <li className='flex items-center gap-3'><CiCircleCheck className='text-5xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Expert repairs</li>
              <li className='flex items-center gap-3'><CiCircleCheck className='text-5xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Gear upgrades</li>
              <li className='flex items-center gap-3'><CiCircleCheck className='text-5xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Free shippings</li>
            </ul>
          </div>
        </div>

        {/* mobile phone */}
          <div className='md:hidden'>
             <div data-aos="fade-right"
                 data-aos-anchor="#example-anchor"
                 data-aos-offset="1500"
                 data-aos-duration="1500" onMouseMove={handleMouse} onMouseLeave={handleMouseLeft}>
                    <img src="/4.png" alt="" style={{transform}} />
            </div>
            <div className='text-center p-5'>
               <h1 className='text-2xl text-white font-semibold'>XTRABike---It's not just a bike,<span className='text-orange-500'>It's a strong bike</span></h1>
            <p className='text-xl text-gray-600 p-3 text-start '>A bicycle, also called a pedal cycle, bike or cycle, is a human powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.</p>
               <ul className='grid grid-cols-2 mt-2 gap-y-4 text-lg'>
              <li className='flex items-center gap-3 text-white'><CiCircleCheck className='text-3xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Free test to Ride</li>
              <li className='flex items-center gap-3 text-white'><CiCircleCheck className='text-3xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Custom Build</li>
              <li className='flex items-center gap-3 text-white'><CiCircleCheck className='text-3xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Electric bike</li>
              <li className='flex items-center gap-3 text-white'><CiCircleCheck className='text-3xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Expert repairs</li>
              <li className='flex items-center gap-3 text-white'><CiCircleCheck className='text-3xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Gear upgrades</li>
              <li className='flex items-center gap-3 text-white'><CiCircleCheck className='text-3xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-full' />Free shippings</li>
            </ul>
            </div>
          </div>

      <div className="flex flex-col gap-5 justify-center p-2 mt-5 text-white items-center m-auto w-[80%] h-[250px] bg-orange-500 rounded-3xl">
          <h1 className='text-3xl md:text-6xl text-center font-sans font-bold'>It's a great day for a Ride</h1>   
          <p className='text-slate-300 text-center text-lg'>A bicycle, also called a pedal cycle, bike or cycle, is a human powered</p> 
          <button className='bg-black font-semibold hover:bg-white hover:text-orange-500 px-4 py-3 rounded-3xl group transition-all duration-300'>
            Explore products
          </button>      
      </div> 

      <div className='text-orange-900 text-9xl font-bold animate-marquee drop-shadow-[0_0_10px_rgba(255,0,150,0.7)] '>
        <h1><i> MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERSMEET OUR BESTSELLERS MEET OUR BESTSELLERSMEET OUR BESTSELLERS MEET OUR BESTSELLERSMEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS MEET OUR BESTSELLERS </i></h1>  
      </div> 

      <div className='text-white w-[85%]  m-auto'>
          <h1 className='text-center text-4xl font-semibold relative left-0 bottom-10'>The <span className='text-orange-500'>Bestsellers</span></h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 w-full md:ms-14 lg:grid-cols-3 p-4 gap-8'>
          <div className='Card bg-zinc-900 w-[350px] h-[450px] p-6 rounded-tr-[180px] text-white hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200'>
              <div className='w-[365px] h-[280px] md:w-[400px] md:h-[280px]'>
                <img className='w-full h-[95%]' src="/5.png" alt="" />  
              </div>
              <div className='flex flex-col space-y-2 '>
                <h2 className='text-3xl font-semibold'>Discover 2step-Thru</h2>
                <span className='text-gray-500'>Spacialized</span>
                <div className='space-x-6 flex'>
                  <span className='text-orange-500 '><del className='text-xs'>$1000</del>$899</span>
                  <button className='bg-zinc-700 px-9 py-2 rounded-full text-white hover:bg-orange-500 flex items-center gap-3'><MdOutlineShoppingCart />Add to Card</button>
                </div>
              </div>   
          </div>
          <div className='Card bg-zinc-900 w-[350px] h-[450px] p-6 rounded-tr-[180px] text-white hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200'>
              <div className='w-[365px] h-[280px] md:w-[400px] md:h-[280px]'>
                <img className='w-full h-[95%]' src="/6.png" alt="" />  
              </div>
              <div className='flex flex-col space-y-2 '>
                <h2 className='text-3xl font-semibold'>Folding Electric Bike</h2>
                <span className='text-gray-500'>Orbea</span>
                <div className='space-x-6  flex'>
                  <span className='text-orange-500'><del className='text-xs'>$1500</del>$1270</span>
                  <button className='bg-zinc-700 px-9 py-2 rounded-full text-white hover:bg-orange-500 flex items-center gap-3'><MdOutlineShoppingCart />Add to Card</button>
                </div>
              </div>   
          </div>
          <div className='Card bg-zinc-900 w-[350px] h-[450px] p-6 rounded-tr-[180px] text-white hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200'>
              <div className='w-[365px] h-[280px] md:w-[400px] md:h-[280px]'>
                <img className='w-full h-[95%]' src="/7.png" alt="" />  
              </div>
              <div className='flex flex-col space-y-2 '>
                <h2 className='text-2xl font-semibold'>Parkwood Electric Bike</h2>
                <span className='text-gray-500'>Cannondale</span>
                <div className='space-x-6  flex'>
                  <span className='text-orange-500'><del className='text-xs'>$1000</del>$980</span>
                  <button className='bg-zinc-700 px-9 py-2 rounded-full text-white hover:bg-orange-500 flex items-center gap-3'><MdOutlineShoppingCart />Add to Card</button>
                </div>
              </div>   
          </div>
          <div className='Card bg-zinc-900 w-[350px] h-[450px] p-6 rounded-tr-[180px] text-white hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200'>
              <div className='w-[365px] h-[280px] md:w-[400px] md:h-[280px]'>
                <img className='w-full h-[95%]' src="/8.png" alt="" />  
              </div>
              <div className='flex flex-col space-y-2 '>
                <h2 className='text-2xl font-semibold'>Special Roar Bike CE</h2>
                <span className='text-gray-500'>Cannondale</span>
                <div className='space-x-6  flex'>
                  <span className='text-orange-500'>$675</span>
                  <button className='bg-zinc-700 px-9 py-2 rounded-full text-white hover:bg-orange-500 flex items-center gap-3'><MdOutlineShoppingCart />Add to Card</button>
                </div>
              </div>   
          </div>
          <div className='Card bg-zinc-900 w-[350px] h-[450px] p-6 rounded-tr-[180px] text-white hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200'>
              <div className='w-[365px] h-[280px] md:w-[400px] md:h-[280px]'>
                <img className='w-full h-[95%]' src="/9.png" alt="" />  
              </div>
              <div className='flex flex-col space-y-2 '>
                <h2 className='text-2xl font-semibold'>Vega CE Low-Step</h2>
                <span className='text-gray-500'>Cannondale</span>
                <div className='space-x-6  flex'>
                  <span className='text-orange-500'>$805</span>
                  <button className='bg-zinc-700 px-9 py-2 rounded-full text-white hover:bg-orange-500 flex items-center gap-3'><MdOutlineShoppingCart />Add to Card</button>
                </div>
              </div>   
          </div>
          <div className='Card bg-zinc-900 w-[350px] h-[450px] p-6 rounded-tr-[180px] text-white hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200'>
              <div className='w-[365px] h-[280px] md:w-[400px] md:h-[280px]'>
                <img className='w-full h-[95%]' src="/10.png" alt="" />  
              </div>
              <div className='flex flex-col space-y-2 '>
                <h2 className='text-2xl font-semibold'>Hybird Electric Bike</h2>
                <span className='text-gray-500'>Bianchi</span>
                <div className='space-x-6  flex'>
                  <span className='text-orange-500'>$999</span>
                  <button className='bg-zinc-700 px-9 py-2 rounded-full text-white hover:bg-orange-500 flex items-center gap-3'><MdOutlineShoppingCart />Add to Card</button>
                </div>
              </div>   
          </div>
      </div>

      <div className=' flex justify-center mt-16'>
          <button className="relative overflow-hidden items-center gap-4 flex font-semibold px-9 py-5 rounded-full text-xl text-orange-500 hover:animate-[blurFade_1.2s_forwards]">
             <Link to={'/shop'} className="relative  z-10 flex items-center gap-4">
               <GrBike className="bg-orange-500 text-black px-3 py-3 text-5xl rounded-full" />
               View all products
             </Link>
          </button>      
      </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[80%] m-auto mt-6">
  <div className="relative w-full">
    <img className="rounded-3xl w-full h-auto" src="/11.png" alt="Electric bicycles" />

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-5 flex items-center w-[90%] md:w-[400px] group">
      <div className="bg-zinc-800 px-4 py-3 md:px-7  md:py-9 rounded-s-2xl w-[70%] md:w-[400px]">
        <span className="text-orange-500 text-sm md:text-base">+120 bicycles</span>
        <h2 className="text-white text-lg md:text-4xl font-bold">Electric bicycles</h2>
      </div>

      <div className="bg-orange-500 cursor-pointer px-3 py-[22px] md:px-5 md:py-11 rounded-r-2xl text-white group-hover:bg-white group-hover:text-orange-500 transition-colors duration-300">
        <span className="text-2xl md:text-5xl font-bold">›</span>
      </div>
    </div>
  </div>

  <div className="relative w-full">
    <img className="rounded-3xl w-full h-auto" src="/12.png" alt="Children Bicycles" />

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-5 flex items-center w-[90%] md:w-[400px] group">
      <div className="bg-zinc-800 px-4 py-3 md:px-7 md:py-9 rounded-s-2xl w-[70%] md:w-[400px]">
        <span className="text-orange-500 text-sm md:text-base">+120 bicycles</span>
        <h2 className="text-white text-lg md:text-4xl font-bold">Children Bicycles</h2>
      </div>
      <div className="bg-orange-500 cursor-pointer px-3 py-[22px] md:px-5 md:py-11 rounded-r-2xl text-white group-hover:bg-white group-hover:text-orange-500 transition-colors duration-300">
        <span className="text-2xl md:text-5xl font-bold">›</span>
      </div>
    </div>
  </div>
</div>

      
       <div className='text-white font-sans mt-12 font-bold md:ms-12 ms-8 '>
           <h1 className='text-4xl p-3'>Whatsay<span className='text-orange-500'>ProPeople</span></h1>
        <div className='grid md:grid-cols-2 grid-cols-1'>
          <div className='Card w-[80%] flex flex-col justify-center'>
            <div className='text-white flex gap-2 items-center'>
              <img className='w-[13%] bg-zinc-700 px-1 py-1 rounded-br-3xl rounded-full' src={img} alt={Name} />
              <div>
                <h4 className='text-lg'>{Name}</h4>
                <span className='text-sm text-orange-500'>{role}</span>
              </div>
            </div>
                <p>{discription}</p>
              <div className='flex justify-end me-4 gap-5 text-2xl '>
                   <button className='text-gray-500 hover:text-orange-500 transition-colors duration-150' 
                          onClick={prevUser}
                          aria-label="Previous user"><FaArrowLeft /></button>
                   <button  className='text-gray-500 hover:text-orange-500 transition-colors duration-150' 
                          onClick={nextUser}
                          aria-label="Next user" 
                   ><FaArrowRight /></button>
              </div>
            </div>
         
         
         <div className=''>
            <img src="/13.png" alt="" />
         </div>
       </div>
      </div>

      <div className='w-[90%] h-[450px] m-auto mt-4 flex justify-center items-center'>
          <div className='text-center flex flex-col gap-4'>
            <h1 className='text-white text-4xl font-serif font-semibold'>Get your own <span className='text-orange-500'>Speacial Bike</span></h1>
            <span span>Subcribe to our newletterto get new bike Offers</span>
            <div className='md:flex m-auto space-y-5 md:space-y-0  md:justify-end md:items-center'>
               <input className='md:w-[700px] md:h-[75px] p-5 rounded-full bg-transparent text-white  bg-neutral-800 border border-orange-500 ' type="text" placeholder='Enter your email....' />
             <button className='bg-orange-500 absolute me-2 ms-8 px-5 py-3 rounded-full flex items-center gap-2 text-xl hover:bg-neutral-800 hover:text-white transition-colors duration-200'> <MdMarkEmailRead />Join now</button>
            </div>
          </div>
      </div>
        <Footer/>
      </div>
  )
}
