import React from 'react';

const Destination2 = ({ image, title, description }) => {
  return (
   
    <div className="relative rounded-2xl overflow-hidden shadow-lg h-130 w-370 cursor-pointer ">
     
      <img 
        src={image} 
        alt="" 
        
       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
     <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white ">
        <h3 className="text-3xl font-bold mb-2 ml-5">{title}</h3>
        <p className="text-sm text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  
  );
};

export default Destination2;