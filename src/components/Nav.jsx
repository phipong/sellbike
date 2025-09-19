import React, { useState } from "react";
import { MdPedalBike } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/70 p-4 px-6 md:px-16 flex justify-between items-center">

      <img className="w-[23%] h-[20%] md:w-[8%] md:h-[8%]" src="/1.png" alt="Logo" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-mono text-xl text-gray-400">
        {[
          {name:"Home", path:'/'},
          {name:"About", path:'/about'},
          {name:"Service", path:'/service'},
          {name:"Blog", path:'/blog'},
          {name:"Shop", path:'/shop'},
          {name:"FAQ", path:'/faq'},
          {name:"Contact", path:'/contact'},
        ].map((item) => (
            <li
              key={item.name}
              className="relative group hover:text-white cursor-pointer"
            >
              {/* {item.name} */}
              <Link to={item.path}>{item.name}</Link> 
              <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 hidden group-hover:block w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-orange-500"></span>
            </li>
          )
        )}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4 text-white">
        <button className="flex items-center gap-3 text-lg hover:bg-white hover:text-orange-500 transition-colors font-semibold bg-orange-500 px-4 py-2 rounded-full">
          <MdPedalBike className="text-2xl" />
          Help & Service
        </button>
        <button className="px-[15px] bg-gray-400/10 text-xl rounded-full hover:text-orange-500">
          <FaRegHeart />
        </button>
        <button className="px-[15px] bg-gray-400/10 text-xl rounded-full hover:text-orange-500">
          <MdAddShoppingCart />
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
  className="md:hidden text-white text-3xl"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <FiX /> : <FiMenu />}
</button>

{/* Mobile Dropdown */}
<div
  className={`absolute top-16 left-0 w-full bg-black/90 text-white text-lg flex flex-col p-7 gap-6 py-6 md:hidden z-50 transform transition-all duration-500 ease-in-out
  ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
  
>
  {[
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Shop", path: "/shop" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ].map((item) => (
    <li
      key={item.name}
      className="relative group hover:text-orange-500 cursor-pointer list-none"
       to={item.path} 
      onClick={() => setIsOpen(false)} 
    >
      <Link to={item.path}>{item.name}</Link>
    </li>
  ))}

  <div className="grid grid-flow-col gap-4 mt-4">
    <button className="flex items-center justify-center gap-3 text-lg hover:bg-white hover:text-orange-500 transition-colors font-semibold bg-orange-500 px-2 py-2 rounded-full">
      <MdPedalBike className="text-2xl" />
      Help & Service
    </button>
    <div className="flex gap-4">
      <button className="px-[15px] py-[15px] bg-gray-400/10 text-xl rounded-full hover:text-orange-500">
        <FaRegHeart />
      </button>
      <button className="px-[15px] bg-gray-400/10 text-xl rounded-full hover:text-orange-500">
        <MdAddShoppingCart />
      </button>
    </div>
  </div>
</div>

    </nav>
  );
}
