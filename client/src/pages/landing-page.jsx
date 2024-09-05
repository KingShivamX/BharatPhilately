import LandingPageCards from '@/config/landing-cards';
import { Button } from 'antd';
import React from 'react'
import { Link } from "react-router-dom";
import Footer from './common/footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full container mx-auto px-4">
      {/* section 1 */}
      <div className="py-16 flex flex-col items-center justify-center space-y-8">
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600">
            Bharat Philately
          </div>
          <div className="text-gray-600 text-center mt-4 text-sm md:text-md max-w-3xl mx-auto">
            Bharat Philately is a premier platform dedicated to Indian stamp collectors, showcasing India's rich postal history, cultural heritage, and rare philatelic material.
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to={'/auth/login'}>
            <Button className="px-6 py-3 text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out">
              Get Started
            </Button>
          </Link>
          <Link to={'#'}>
            <Button className="px-6 py-3   rounded-lg shadow-md transition duration-300 ease-in-out">
              Explore Collection
            </Button>
          </Link>
        </div>

        {/* CARDs */}
        <div className="w-full mt-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-800">Featured Collections</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {
              LandingPageCards.map((card) => (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-64 md:w-80 transition-transform transform hover:scale-105">
                  <img src={card.path} alt="Stamp" className="w-full h-48 object-contain" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-gray-800">{card.title}</h3>
                    <p className="text-gray-700 text-base">{card.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className="py-16 flex flex-col items-center justify-center space-y-8">
        <h1 className="text-6xl font-extrabold">
          A New Era for Indian Philately
        </h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          Access philatelic material from across India, order online, and stay updated with the latest releases, all in one place.
        </p>
        <Link to={'/auth/register'}>
          <Button className="px-8 py-4 text-white bg-teal-500 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            Create an Account
          </Button>
        </Link>
      </div>



      <div className="py-16">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">Why Choose Bharat Philately?</h2>
        <div className="grid grid-cols-1 max-w-4xl md:grid-cols-2 gap-8 text-center mx-auto">
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-3xl font-semibold ">Centralized Access</h3>
            <p className="text-gray-700 mt-4">Explore philatelic material released by all postal circles across India in one place.</p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-3xl font-semibold ">Online Ordering & Payment</h3>
            <p className="text-gray-700 mt-4">Order and pay for philatelic items easily with secure online transactions.</p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-3xl font-semibold">Reliable Postal Services</h3>
            <p className="text-gray-700 mt-4">Get your orders delivered with Registered or Speedpost services at standard rates.</p>
          </div>
          <div className="p-8 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-3xl font-semibold">Stay Updated</h3>
            <p className="text-gray-700 mt-4">Receive the latest updates on cancellation releases and other services.</p>
          </div>
        </div>
      </div>



      {/* footer section */}
      <Footer />
    </div>
  )
}

export default LandingPage