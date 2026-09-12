import React from 'react';
import { TiTick } from "react-icons/ti";

const Guidance = ({ heading, description, image, point1Title, point1Desc, point2Title, point2Desc, point3Title, point3Desc }) => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {heading}
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {description}
          </p>

         
          <div className="flex flex-col gap-6">
            
            <div className="flex items-start gap-4">
              <div className="bg-[#74BF1A]  p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{point1Title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{point1Desc}</p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#74BF1A]  p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{point2Title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{point2Desc}</p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#74BF1A]  p-1 rounded-full text-white mt-1">
                <TiTick className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{point3Title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{point3Desc}</p>
              </div>
            </div>

          </div>
        </div>

      
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-md lg:max-w-full h-100">
            <img 
              src={image} 
              alt="Guidance" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Guidance;