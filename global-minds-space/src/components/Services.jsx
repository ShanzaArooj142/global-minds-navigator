import React from 'react';
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import { SlideRight,SlideUp } from '../utility/Animation';  

const DestinationBenefits = () => {
  return (
    <section className="bg-white py-12 px-6 max-w-7xl mx-auto ">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            variants={SlideRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

           className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md lg:max-w-full h-100 group cursor-pointer">
            <img 
              src="https://globalmindsconsultants.com/images/students.jpg" 
              alt="Students" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

       
        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.h2
            variants={SlideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          
           className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            What We Provide for Study <br /> Abroad Destination Services
          </motion.h2>
          <motion.p
            variants={SlideUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          
          
           className="text-gray-600 mb-8 text-lg leading-relaxed">
            We offer complete guidance and support to help students achieve their <br /> dream of studying abroad. From career counseling to admission and <br /> visa assistance, our team ensures a smooth journey towards your <br /> international education goals.
          </motion.p>

         
          <div className="flex flex-col gap-6">
            
           
            <div className="flex items-start gap-4">
              <div className="bg-[#74BF1A] p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Expert Counseling Sessions</h4>
                <p className="text-gray-600 text-md leading-relaxed">Get professional guidance from experienced counselors to choose the best <br /> country, university, and program for your future.</p>
              </div>
            </div>

        
            <div className="flex items-start gap-4">
              <div className="bg-[#74BF1A] p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Application & Admission Support</h4>
                <p className="text-gray-600 text-md leading-relaxed">We help you prepare and submit all required documents, ensuring your <br /> application stands out and meets university requirements.</p>
              </div>
            </div>

           
            <div className="flex items-start gap-4">
              <div className="bg-[#74BF1A] p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Visa & Pre-Departure Assistance</h4>
                <p className="text-gray-600 text-md leading-relaxed">Our team provides end-to-end support for visa applications, interviews, <br /> and pre-departure guidance to ensure a seamless transition abroad.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DestinationBenefits;