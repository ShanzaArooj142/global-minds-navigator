import React from 'react';
import { motion } from "framer-motion";
import { SlideUp } from '../utility/Animation';

const Destination2 = ({ image, title, description }) => {
  return (
    <motion.div 
       variants={SlideUp(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    
    
     className="relative rounded-2xl overflow-hidden shadow-lg h-112.5 w-full cursor-pointer">
      <img 
         src={image} 
         alt="" 
         className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
        <h3 className="text-3xl font-bold mb-2 ml-5">{title}</h3>
        <p className="text-sm text-gray-200 leading-relaxed ml-5">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Destination2;