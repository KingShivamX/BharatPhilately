import React from 'react'
import PostSection from './components/post-section'
import NewSection from './components/newsection'
import Footer from '@/pages/common/footer'

const Community = () => {
  return (
    <div className="flex justify-between items-start space-x-6 w-full p-6 rounded-lg">

      <div className="w-full md:w-2/3 p-4 rounded-md">
        <PostSection />
      </div>

      <div className="hidden md:block w-1/3 p-4 rounded-md shadow-md sticky top-6">
        <NewSection />
      </div>
    </div>

  )
}

export default Community