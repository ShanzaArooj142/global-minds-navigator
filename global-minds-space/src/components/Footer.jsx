import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone } from 'react-icons/fa6'; // Agar react-icons use kar rahi ho

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-blue-600">
        
      
        <div className="space-y-4">
          <div className="bg-white p-3 rounded-2xl w-40 h-40 flex items-center justify-center shadow-md">
            <img src="https://globalmindsconsultants.com/images/logo.png" alt="" className="max-h-full max-w-full cursor-pointer" />
          </div>
          <p className="text-sm  text-white  leading-relaxed">
            Global Minds Consultants helps students choose the right destination, apply <br /> confidently, and complete their visa <br /> process with expert support.
          </p>
          <div className="flex space-x-3 pt-2">
            <a href="#" className="w-9 h-9 rounded-full bg-blue-400 hover:bg-white text-white hover:text-blue-900 flex items-center justify-center transition">
              <FaFacebookF className="text-sm" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-blue-400 hover:bg-white text-white hover:text-blue-900 flex items-center justify-center transition">
              <FaInstagram className="text-sm" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-blue-400 hover:bg-white text-white hover:text-blue-900 flex items-center justify-center transition">
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>
        </div>

    
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2.5 text-md ">
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About Us</a></li>
            <li><a href="#" className="text-white">Services</a></li>
            <li><a href="#" className="text-white">Study Destinations</a></li>
            <li><a href="#" className="text-white">Events</a></li>
            <li><a href="#" className="text-white">Blog</a></li>
            <li><a href="#" className="text-white">Reviews</a></li>
            <li><a href="#" className="text-white">Success Stories</a></li>
            <li><a href="#" className="text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2.5 text-md ">
            <li><a href="#" className="text-white">IELTS Preparation</a></li>
            <li><a href="#" className="text-white">University Admissions</a></li>
            <li><a href="#" className="text-white">Scholarship Guidance</a></li>
            <li><a href="#" className="text-white">Course Filter</a></li>
            <li><a href="#" className="text-white">Book Free Consultation</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Contact Info</h3>
          <ul className="space-y-4 text-md ">
            <li className="flex items-start space-x-3">
              <FaLocationDot className="text-green-400 mt-1 shrink-0" />
              <span className="text-white leading-relaxed">Office no 14, 4th floor, Mall of Sargodha</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone className="text-green-400 shrink-0" />
              <span className="text-white">+92 317 1115091 / +92 317 1115092</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaFacebookF className="text-green-400 shrink-0" />
              <span className="text-white">Global Minds Consultants</span>
            </li>
          </ul>
        </div>

      </div>
      
      
      <div className="max-w-7xl mx-auto pt-6 text-center text-sm font-semibold text-white">
        Global Minds Consultants 2026 | Private LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;