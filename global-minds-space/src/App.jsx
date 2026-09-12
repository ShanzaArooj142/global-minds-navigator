import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destination1 from './components/Destination1'
import Destination2 from './components/Destination2'
import Guidance from './components/Guidance'
import Footer from './components/Footer'
import Faqs from './components/Faqs'
import Bookings from './components/Bookings'
import Services from './components/Services'

const App = () => {
  return (
    <div>
      <Hero/>
      <Destination1/>
      
      <div className='flex flex-col md:flex-row gap-5 ml-10 mr-10 my-10'>
            
      <Destination2 
        image={'https://globalmindsconsultants.com/uploads/destinations/1772813241_69aafbb9baa4a.png'}
        title="Canada"
        description={<p>Canada provides high-quality education and a safe student lifestyle. Enjoy affordable tuition and excellent post-study work opportunities.</p>}
      />
      <Destination2 
        image={'https://globalmindsconsultants.com/uploads/destinations/1772813212_69aafb9cbf885.jpg'}
        title="Finland"
        description={<p>Study at leading universities in a vibrant and diverse environment. Australia offers excellent education, research opportunities, and career pathways.</p>}
      />
      <Destination2 
        image={'https://globalmindsconsultants.com/uploads/destinations/1772813188_69aafb849066b.jpg'}
        title="United Kingdom"
        description={<p>Experience world-class education at top UK universities. Build a global career with internationally recognized degrees.</p>}
      />
    </div>   
    

     < div className='bg-gray-50 min-h-screen'>
      <Guidance 
        heading={<h1>Helping You Choose a Top Study Destination</h1>}
        description={<p>Discover the best countries and universities that match your goals, <br />lifestyle, and academic interests. Our expert guidance helps you make <br /> the right decision — from selecting your dream destination to securing <br /> your admission successfully.</p>}
        image='https://globalmindsconsultants.com/images/student.jpg'
        point1Title="Personalized Guidance"
        point1Desc={<p>Get one-on-one counseling sessions to choose the right country, course, <br /> and university according to your profile.</p>}
        point2Title={<h1>Scholarship Assistance</h1>}
        point2Desc={<p>Learn about scholarship opportunities and eligibility to make your education <br /> abroad more affordable.</p>}
        point3Title={<h1>Application Support</h1>}
        point3Desc={<p>From university shortlisting to documentation and visa guidance, we're with <br />you at every step of the process.</p>}
      />
    </div>

    <Services/>


     < div className='bg-gray-50 min-h-screen'>
      <Guidance 
        heading={<h1>Key Factors to Consider While Choosing to Study Abroad</h1>}
        description={<p>Selecting the right study destination requires thoughtful planning. From <br /> education quality to living expenses and cultural exposure, <br /> understanding these key factors helps you make an an informed and <br /> confident decision about your future abroad.</p>}
        image='https://globalmindsconsultants.com/images/girl.jpg'
        point1Title={<h1>Academic Excellence</h1>}
        point1Desc={<p>Research the global ranking, reputation, and specialization of universities to <br /> ensure the program aligns with your academic and career goals.</p>}
        point2Title={<h1>Cost of Living & Tuition Fees</h1>}
        point2Desc={<p>Compare tuition costs, accommodation, and daily expenses to choose a destination that fits your financial plan without compromising on quality.</p>}
        point3Title={<h1>Work & Immigration Opportunities</h1>}
        point3Desc={<p>Explore part-time work options, post-study work permits, and immigration pathways to maximize your international exposure and career prospects.</p>}
      />
    </div>
    
     <Bookings/>
     <Faqs/>
     <Footer/>
    </div>
  )
}

export default App
