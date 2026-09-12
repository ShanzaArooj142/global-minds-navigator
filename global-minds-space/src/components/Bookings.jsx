import React from 'react';

const Bookings = () => {
  return (
    <section className="bg-white py-10 px-6 text-center my-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl font-bold text-black mb-6">
          For further help, <span className="text-[#74BF1A] font-bold">book a call </span> now!
        </h2>

       
        <a 
          href="#contact" 
          className="bg-[#74BF1A] hover:bg-green-600 cursor-pointer text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-300 mt-5 "
        >
          Talk to an Expert
        </a>

      </div>
    </section>
  );
};

export default Bookings;