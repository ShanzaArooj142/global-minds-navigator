import React from 'react';
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from '../utility/Animation';

const Guidance = ({ heading, description, image, point1Title, point1Desc, point2Title, point2Desc, point3Title, point3Desc }) => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.h2
             variants={SlideRight(0.1)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}

             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
             {heading}
          </motion.h2>
          <motion.p 
             variants={SlideRight(0.1)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
          
             className="text-gray-600 mb-8 text-lg leading-relaxed">
             {description}
          </motion.p>

         
          <div className="flex flex-col gap-6">
            
            <motion.div
               variants={SlideUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            
             className="flex items-start gap-4">
              <div className="bg-[#74BF1A]  p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{point1Title}</h4>
                <p className="text-gray-600 text-md leading-relaxed">{point1Desc}</p>
              </div>
            </motion.div>

            
            <motion.div
              variants={SlideUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            
            
             className="flex items-start gap-4">
              <div className="bg-[#74BF1A]  p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{point2Title}</h4>
                <p className="text-gray-600 text-md leading-relaxed">{point2Desc}</p>
              </div>
            </motion.div>

            
            <motion.div 
              variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            
            
             className="flex items-start gap-4">
              <div className="bg-[#74BF1A]  p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{point3Title}</h4>
                <p className="text-gray-600 text-md leading-relaxed">{point3Desc}</p>
              </div>
            </motion.div>

          </div>
        </div>

      
       <div className="w-full lg:w-1/2 flex justify-center">
       <motion.div
         variants={SlideLeft(0.2)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
       
        className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md lg:max-w-full h-100 cursor-pointer">
        <img  src={image}  alt="" 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  </motion.div>
</div>

      </div>
    </section>
  );
};

export default Guidance;