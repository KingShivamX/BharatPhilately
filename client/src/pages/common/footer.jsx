import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center" >
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-gray-800">Bharat Philately</h2>
          <p className="text-sm text-gray-600">Connecting the nation through mail and more</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="text-gray-600 text-md hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
        </div>
        <div className="text-sm text-gray-500">
          © 2024 Bharat Philately. All rights reserved.
        </div>
      </div >
    </footer >
  )
}

export default Footer