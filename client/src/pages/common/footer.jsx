import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 border-t-2 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center" >
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold text-gray-800">Bharat Philately</h2>
          <p className="text-sm text-gray-600">Connecting the nation through mail and more</p>
        </div>
      
        <div className="text-sm text-gray-500">
          © 2024 Bharat Philately. All rights reserved.
        </div>
      </div >
    </footer >
  )
}

export default Footer