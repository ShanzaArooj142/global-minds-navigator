import React from 'react';
import { motion } from "framer-motion";
import {FadeIn,SlideDown} from '../utility/Animation';
const DestinationFAQs = () => {
  return (
    <div className="bg-gray-50 py-25 px-6 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center mb-5">
        
       
        <motion.h2 
          variants={SlideDown(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        
         className="text-4xl font-bold text-gray-900">
          Destination <span className="text-lime-600 font-semibold">FAQs</span>
        </motion.h2>

        <motion.p 
           variants={FadeIn(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        
         className="text-gray-500 text-md mt-4">
          No FAQs available right now.
        </motion.p>

      </div>
    </div>
  );
};

export default DestinationFAQs;