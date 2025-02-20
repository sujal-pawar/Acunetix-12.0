import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import LetterGlitch from '../components/LetterGlitch'
import brainiacImg from "../assets/Brainiac.png";

const handleRegisterClick = () => {

 window.open("https://docs.google.com/forms/d/e/1FAIpQLSfSM7nRTYyJU2fP1lRIDcY7QjMfuykcglCo1DqH3pX9vn8rww/viewform?embedded=true", "_blank");

};

const Brainiac = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative min-h-screen pt-24 pb-12">
        <div className="absolute inset-0">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-12 h-full">
          <div className="flex flex-col md:flex-row items-center gap-8 h-full">
            {/* Left Column */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center h-full space-y-10">
              {/* Centered Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-white">
               Brainiac
              </h1>

              {/* Mobile View: Poster + Centered Content */}
              <div className="md:hidden flex flex-col items-center space-y-6">
                {/* Mobile Image */}
                <img 
                  src={Brainiac}
                  alt="Event Poster"
                  className="rounded-xl shadow-2xl w-full max-w-sm max-h-[500px] object-contain transform hover:scale-105 transition-all duration-300"
                />

                {/* Description Card - Centered */}
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-500 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Register Button - Centered */}
                <button className="bg-gradient-to-r cursor-pointer from-violet-800 to-violet-900 hover:from-violet-900 hover:to-violet-950 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:ring-2 hover:ring-violet-300 hover:scale-105 shadow-xl">
                  Register Now
                </button>
              </div>

              {/* Desktop View: Description & Register Button */}
              <div className="hidden md:flex flex-col items-center space-y-6">
                {/* Description Card */}
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl border border-gray-500 p-10 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-xl">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                {/* Centered Register Button */}
                <div className="flex justify-center">
                  <button onClick={handleRegisterClick} className="bg-gradient-to-r from-violet-800 to-violet-900 hover:from-violet-900 hover:to-violet-950 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all hover:ring-2 hover:ring-violet-300 hover:scale-105 shadow-xl">
                    Register Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Desktop Image; hidden on mobile */}
            <div className="hidden md:flex md:w-1/2 justify-center">
              <img 
                src={brainiacImg}
                alt="Event Poster"
                className="rounded-xl shadow-2xl w-full md:w-auto max-w-xl max-h-[500px] object-contain transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Brainiac;


