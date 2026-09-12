import React from 'react';
import { motion } from "framer-motion";
import { SlideUp } from '../utility/Animation';

const Destination1 = () => {
  return (
    <div className="py-12 px-4 text-center">
      <div className="max-w-7xl mx-auto">
     
        <motion.h1
         variants={SlideUp(0.05)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
        
        className="text-[#74BF1A] font-bold tracking-wide text-3xl block mb-4">
          Study Abroad
        </motion.h1>
        

        <motion.p
          variants={SlideUp(0.05)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
        
         className="text-4xl  font-bold text-gray-900 leading-tight">
          Explore Comprehensive Information on Top Study Destinations Around the Globe
        </motion.p>
      </div>
    </div>
  );
};

export default Destination1;