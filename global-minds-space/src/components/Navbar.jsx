import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex h-20 p-6 items-center justify-between bg-white  relative">
      <div className="flex items-center">
        <img
          src="https://globalmindsconsultants.com/images/logo.png"
          className="h-20 sm:h-20 lg:h-22.5 w-auto md:h-25"
          alt="Global Minds Consultants"
        />
      </div>

      <ul className="hidden lg:flex items-center justify-between w-full max-w-5xl mx-6">
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">Home</a></li>
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">About us</a></li>
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">Services</a></li>
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">Events</a></li>
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">Blog</a></li>
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">Reviews</a></li>
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">Success Stories</a></li>
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">Study Destinations</a></li>
        <li><a href="#" className="text-gray-700 hover:text-[#74BF1A] font-semibold">Contact</a></li>
      </ul>

      <button className=" w-57.25 h-11 rounded-lg bg-[#74BF1A] text-white font-bold hover:bg-green-600 cursor-pointer ">
        Book free counselling
      </button>
    </nav>
  )
}

export default Navbar