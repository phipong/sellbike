import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { MdHome } from "react-icons/md";
import { MdPedalBike } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import Footer from '../components/Footer';


export default function Shop() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const timer =setTimeout(() =>{
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const products =[
    { id: 1, img: "/5.png", title: "Discover 2step-Thru", brand: "Spacialized", oldPrice: "$1000", price: "$899" },
    { id: 2, img: "/6.png", title: "Folding Electric Bike", brand: "Orbea", oldPrice: "$1500", price: "$1270" },
    { id: 3, img: "/7.png", title: "Parkwood Electric Bike", brand: "Cannondale", oldPrice: "$1000", price: "$980" },
    { id: 4, img: "/8.png", title: "Special Roar Bike CE", brand: "Cannondale", price: "$675" },
    { id: 5, img: "/9.png", title: "Vega CE Low-Step", brand: "Cannondale", price: "$805" },
    { id: 6, img: "/10.png", title: "Hybrid Electric Bike", brand: "Bianchi", price: "$999" },
    { id: 7, img: "/23.png", title: "Pro City Rider", brand: "Trek", price: "$1200" },
    { id: 8, img: "/24.png", title: "All-Mountain Pro", brand: "Specialized", price: "$1400" },
   
  ];

   const [page, setPage] = useState(0); 
  const perPage = 6;
  const totalPages = Math.ceil(products.length / perPage);

  const start = page * perPage;
  const visible = products.slice(start, start + perPage);
  return (
    <div className='text-white w-full overflow-hidden'>
      <style>
        {`
           .fade-in {
            opacity: 0;
            animation: fadeIn 0.5s forwards;
          }
          @keyframes fadeIn {
            to { opacity: 1; }

          }
        `}
      </style>
      {Loading ? (
       <div className='flex justify-center items-center text-xl h-screen '>
         <p>Loading...</p>
       </div>
      ) : (
        <div className='fade-in'>
             <div className="w-[85%] text-sm font-semibold m-auto p-6 ">
                <span className='flex px-3 py-2 bg-zinc-900 w-[130px] rounded-full justify-center items-center gap-2' >
                <Link to={"/"} ><MdHome className='hover:text-orange-500' /></Link> <MdPedalBike className='hover:text-orange-500 text-zinc-700' />
                product</span>
             </div>
             <h1 className='text-2xl font-semibold w-[80%] m-auto'>Shop</h1>
            <div className='w-[80%] m-auto p-6 flex flex-wrap md:justify-between justify-center gap-4 '>
              <span>Showing 1–6 of 8 results</span>
              
             <div className='flex gap-2 '>
               <select className='bg-zinc-800 rounded-xl px-5 py-2' name="" id="">
                <option value="">Default</option>
                <option value="">Lowest Discount</option>
                <option value="">Popular</option>
                <option value="">Featured</option>
                <option value="">Top Rated</option>
                <option value="">Relevance</option>
                <option value="">Sort by List</option>
              </select>
              <select className='bg-zinc-800 rounded-xl px-5 py-2' name="" id="">
                <option value="">6 Product</option>
                <option value="">8 Product</option>
                <option value="">12 Product</option>
                <option value="">24 Product</option>
                <option value="">32 Product</option>
                <option value="">128 Product</option>
              </select>
             </div>
            </div>
             <div className='grid grid-cols-1 sm:grid-cols-2 w-full md:ms-14 lg:grid-cols-3 mb-14 p-4 gap-8'>
              {visible.map((p) =>(
                 <div className='Card bg-zinc-900 w-[350px] h-[450px] p-6 rounded-tr-[180px] text-white hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200'>
                          <div className='w-[365px] h-[280px] md:w-[400px] md:h-[280px]'>
                            <img className='w-full h-[95%]' src={p.img} alt={p.title} />  
                          </div>
                          <div className='flex flex-col space-y-2 '>
                            <h2 className='text-3xl font-semibold'>{p.title}</h2>
                            <span className='text-gray-500'>{p.brand}</span>
                            <div className='space-x-6 space-y-[-8px] flex'>
                              <span className='text-orange-500 '><del className='text-xs'>{p.oldPrice}</del>${p.price}</span>
                              <button className='bg-zinc-700 px-9 py-2 rounded-full text-white hover:bg-orange-500 flex items-center gap-3'><MdOutlineShoppingCart />Add to Card</button>
                            </div>
                          </div>   
                      </div>
              ))}
          </div>
       <div className="flex justify-center gap-3 mb-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-10 h-10 rounded-full font-semibold ${
              page === i ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
                <Footer/>
        </div>
      )}
    </div>
  )
}
