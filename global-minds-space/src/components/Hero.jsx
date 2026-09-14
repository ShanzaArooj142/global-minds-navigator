import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion";
import { SlideDown, SlideUp } from '../utility/Animation'
import { ZoomIn } from '../utility/Animation';
const Hero = () => {
  return (

  <div 
     style={{ backgroundImage: "url('/herobg.jpg')" }} 
     className="h-screen w-full bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40"></div>

        <Navbar/>

     <div className="relative flex flex-col items-center justify-center text-center px-4 py-20 min-h-[80vh]">
      <motion.h1
       variants={SlideDown(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      
       className="text-[#74BF1A] text-lg md:text-xl font-medium tracking-wide mb-4">
       Your Gateway to Global Education
      </motion.h1>

      <motion.h1 
        variants={SlideUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}

       className=" text-7xl font-bold tracking-tight text-white max-w-5xl leading-20 mb-6">
       Explore <span className="text-[#74BF1A]">Top Study <br />Destinations</span>  Worldwide
     </motion.h1>

      <motion.p 
        variants={SlideUp(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}

       className="text-white text-xl max-w-5xl mb-8">
       Find comprehensive guides, essential visa information, and personalized advice for studying in the UK, USA, <br /> Canada, and Australia.
     </motion.p>

      <motion.button
       variants={ZoomIn(0.2)}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true }}

       className="bg-[#74BF1A] hover:bg-[#65A817] text-white font-semibold text-base md:text-lg px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg cursor-pointer">
       Start Your Journey
     </motion.button>
     </div>
 </div>
  )
}

export default Hero
