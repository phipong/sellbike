import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

export default function Footer() {
    return(
        <div>
           <div className="m-auto w-[80%] md:flex p-6 justify-between bg-zinc-800 rounded-t-[70px]">
            <div className="text-white text-center py-10 md:p-10">
                <span className="text-orange-500">Pre-Sale Question</span>
                <h2 className="text-2xl font-bold">Help@xtrabicycle.com</h2>
            </div>
            <div className=" border-l border-white"><hr /></div>
            <div className="text-white text-center p-10 ">
                <span className="text-orange-500">Call Us</span>
                <h2 className="text-2xl font-bold">+855 30 903 732</h2>
            </div>
            <div className=" border-l border-white"><hr /></div>
            <div className="text-white text-center p-10">
                <span className="text-orange-500">Our Location</span>
                <h2 className="text-2xl font-bold">Phnom Penh, Cambodia</h2>
            </div>
           </div>

          <div className="bg-zinc-900 w-full md:block p-8 md:p-16 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <h3>Offer</h3>
                  <div>
                    <hr className="w-[30px] border-4 rounded-full absolute border-orange-500" />
                    <hr className="w-[75%] border-gray-800" />
                  </div>
                  <ul className="flex flex-col text-lg space-y-4">
                    <li>
                      <a className="flex items-center gap-2" href="">
                        <IoLocationSharp className="bg-white rounded-full text-4xl px-2 text-orange-500 hover:text-white hover:bg-orange-500 transition-all hover:scale-125 " />
                        121 King Street, New york
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2" href="">
                        <IoCall className="bg-white rounded-full text-4xl px-2 text-orange-500 hover:text-white hover:bg-orange-500 transition-all hover:scale-125" />
                        +855 12 34 90 33
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2" href="">
                        <MdEmail className="bg-white rounded-full text-4xl px-2 text-orange-500 hover:text-white hover:bg-orange-500 transition-all hover:scale-125" />
                        xtrabike@gmail.com
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2" href="">
                        <FaFax className="bg-white rounded-full text-4xl px-2 text-orange-500 hover:text-white hover:bg-orange-500 transition-all hover:scale-125" />
                        +1 (800) 333 999
                      </a>
                    </li>
                    <li>
                      <a className="flex items-center gap-2" href="">
                        <FaXTwitter className="bg-white rounded-full text-4xl px-2 text-orange-500 hover:text-white hover:bg-orange-500 transition-all hover:scale-125" />
                        @xtra_bikeshop
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3>New</h3>
                  <div>
                    <hr className="w-[30px] border-4 rounded-full absolute border-orange-500 hover:text-white hover:bg-orange-500 transition-all hover:scale-125" />
                    <hr className="w-[50%] border-gray-800" />
                  </div>
                  <div className="flex flex-col space-y-5">
                    <div className="flex gap-3 group">
                      <div className="relative w-[95px] rounded-lg overflow-hidden">
                        <img
                          className="w-full transition duration-300"
                          src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2017/06/post1-1-150x150.jpg"
                          alt=""
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
                        <a
                          className="absolute inset-0 flex items-center justify-center text-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                          href=""
                        >
                          🔗
                        </a>
                      </div>
                      <div className="hover:text-orange-500">
                        <h2 className="text-lg">Top 7 Must have Accessories for...</h2>
                        <span>10/ June / 2024</span>
                      </div>
                    </div>
                    <hr className="border-gray-600" />
                    <div className="flex gap-3 group">
                      <div className="relative w-[95px] rounded-lg overflow-hidden">
                        <img
                          className="w-full transition duration-300"
                          src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2017/06/post2-1-150x150.jpg"
                          alt=""
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
                        <a
                          className="absolute inset-0 flex items-center justify-center text-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                          href=""
                        >
                          🔗
                        </a>
                      </div>
                      <div className="hover:text-orange-500">
                        <h2 className="text-lg">Top 7 Must have Accessories for...</h2>
                        <span>10/ June / 2024</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3>Shortcuts</h3>
                  <div>
                    <hr className="w-[50px] border-4 rounded-full absolute border-orange-500" />
                    <hr className="w-[50%] border-gray-800" />
                  </div>
                    <ul className="grid grid-cols-2 space-y-2">
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Home</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />City Stores</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />News</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Clients</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Consultation</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Publicityy</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Support</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Maps</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Employees</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Teams</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Benefits</li>
                        <li className="flex items-center gap-1 hover:text-orange-500 transition-transform hover:scale-x-95 duration-200"><FaAngleRight />Privay</li>
                    </ul>
                </div>

                <div className="space-y-4">
                  <h3>Working Hours</h3>
                  <div>
                    <hr className="w-[50px] border-4 rounded-full absolute border-orange-500" />
                    <hr className="w-[50%] border-gray-800" />
                  </div>
                  <div className="space-y-4">
                    <h2>Our support available to help you 24 Hours a day, seven days a week.</h2>
                    <br />
                    <h3 className="flex items-center">Monday to friday <hr className="w-[40px]" />8AM-4PM</h3>
                    <h3 className="flex items-center">Saturday <hr className="w-[99px]" />8AM-1PM</h3>
                    <h3 className="flex items-center">Sunday <hr className="w-[110px]" />Closed</h3>

                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-4 bg-zinc-800 text-white text-center sm:text-left text-sm">
                <p>Copyright © 2025 Xtra Theme. All Rights Reserved</p>
                <img className="w-[250px]" src="https://xtratheme.com/elementor/bike-shop/wp-content/uploads/sites/133/2025/05/payment.png" alt="" />
            </div>
</div>
    )
}