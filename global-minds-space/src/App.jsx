import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destination1 from './components/Destination1'
import Destination2 from './components/Destination2'
import Guidance from './components/Guidance'

const App = () => {
  return (
    <div>
      <Hero/>
      <Destination1/>

      <div className='flex flex-col md:flex-row gap-5 ml-10 mr-10 my-10 '>
            
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
        heading="Helping You Choose a Top Study Destination"
        description={<p>Discover the best countries and universities that match your goals, <br />lifestyle, and academic interests. Our expert guidance helps you make <br /> the right decision — from selecting your dream destination to securing <br /> your admission successfully.</p>}
        image="https://globalmindsconsultants.com/images/student.jpg"
        point1Title="Personalized Guidance"
        point1Desc={<p>Get one-on-one counseling sessions to choose the right country, course, and university according to your profile.</p>}
        point2Title="Scholarship Assistance"
        point2Desc="Learn about scholarship opportunities and eligibility to make your education abroad more affordable."
        point3Title="Application Support"
        point3Desc="From university shortlisting to documentation and visa guidance, we're with you at every step of the process."
      />
    </div>
     
    </div>
  )
}

export default App
