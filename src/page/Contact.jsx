import React from 'react'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdPedalBike } from "react-icons/md";
import { HiMapPin } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Footer from '../components/Footer';

export default function Contact() {
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
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
            animation: fadeIn 0.50s forwards;
          }
          @keyframes fadeIn {
            to { opacity: 3; }
          }
        
        `}
      </style>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <span className='loader'></span>
        </div>
      ) : (
        <div className='fade-in'>
           <div className="w-[85%] text-sm font-semibold m-auto p-6">
            <span className='flex px-3 py-2 bg-zinc-900 w-[130px] rounded-full justify-center items-center gap-2' >
              <Link to={"/"} ><MdHome className='hover:text-orange-500' /></Link> <MdPedalBike className='hover:text-orange-500 text-zinc-700' />
              Contact</span>
          </div>

        <div className="w-[90%] md:w-[80%] mx-auto mb-20 bg-zinc-800 p-6 rounded-xl flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 h-[250px] md:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8525.39511317042!2d104.90340830337676!3d11.558251126742649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skh!4v1758024737166!5m2!1sen!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <ul className="w-full md:w-1/2 space-y-6 text-lg md:text-xl font-semibold">
              <li className="flex items-center gap-4 hover:scale-105 duration-300">
                <a className="flex items-center gap-3" href="https://maps.app.goo.gl/gmVLj6JApa1Uhbu87">
                  <div className="bg-orange-500 p-4 rounded-full flex items-center justify-center hover:bg-white hover:text-orange-500 duration-300">
                    <HiMapPin />
                  </div>
                  <div>
                    <h3>Address</h3>
                    <p className="text-sm text-zinc-400">11.555019, 104.905608</p>
                  </div>
                </a>
              </li>

              <li className="flex items-center gap-4 hover:scale-105 duration-300">
                <a className="flex items-center gap-3" href="tel:+85512345678">
                  <div className="bg-orange-500 p-4 rounded-full flex items-center justify-center hover:bg-white hover:text-orange-500 duration-300">
                    <MdOutlinePhoneInTalk />
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p className="text-sm text-zinc-400">+855 12 345 678</p>
                  </div>
                </a>
              </li>

              <li className="flex items-center gap-4 hover:scale-105 duration-300">
                <a className="flex items-center gap-3" href="https://twitter.com/">
                  <div className="bg-orange-500 p-4 rounded-full flex items-center justify-center hover:bg-white hover:text-orange-500 duration-300">
                    <RiTwitterXFill />
                  </div>
                  <div>
                    <h3>Social Media</h3>
                    <p className="text-sm text-zinc-400">@xtra_theme_bike</p>
                  </div>
                </a>
              </li>

              <li className="flex items-center gap-4 hover:scale-105 duration-300">
                <a className="flex items-center gap-3" href="https://facebook.com/">
                  <div className="bg-orange-500 p-4 rounded-full flex items-center justify-center hover:bg-white hover:text-orange-500 duration-300">
                    <FaFacebookF />
                  </div>
                  <div>
                    <h3>Facebook</h3>
                    <p className="text-sm text-zinc-400">@xtratheme</p>
                  </div>
                </a>
              </li>

              <li className="flex items-center gap-4 hover:scale-105 duration-300">
                <a className="flex items-center gap-3" href="mailto:support@xtratheme.com">
                  <div className="bg-orange-500 p-4 rounded-full flex items-center justify-center hover:bg-white hover:text-orange-500 duration-300">
                    <MdEmail />
                  </div>
                  <div>
                    <h3>Support</h3>
                    <p className="text-sm text-zinc-400">support@xtratheme.com</p>
                  </div>
                </a>
              </li>
            </ul>

            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl font-bold">
                Contact <span className="text-orange-500">Us</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="bg-zinc-700 border border-zinc-600 p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Your Email(*)</label>
                  <input
                    type="email"
                    className="bg-zinc-700 border border-zinc-600 p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="bg-zinc-700 border border-zinc-600 p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Department</label>
                  <select className="bg-zinc-700 border border-zinc-600 p-2 rounded-md">
                    <option value="">Select</option>
                    <option value="sales">Sales</option>
                    <option value="support">Support</option>
                    <option value="billing">Billing</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label>Message</label>
                <textarea
                  rows="5"
                  className="bg-zinc-700 border border-zinc-600 p-2 rounded-md"
                ></textarea>
              </div>

              <button className="bg-orange-500 px-6 py-3 rounded-full font-bold hover:bg-white hover:text-orange-500 duration-300">
                Send Message
              </button>
            </div>
          </div>
        </div>

      <Footer/>
        </div>
      )}
    </div>
  )
}
