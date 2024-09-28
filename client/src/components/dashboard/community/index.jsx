import React from 'react'
import PostSection from './components/post-section'
import NewSection from './components/newsection'
import Footer from '@/pages/common/footer'
import CommunitySection from './components/community-section'

const Community = () => {
  return (
    <div className="flex sticky justify-between items-start space-x-6 w-full p-6 rounded-lg">
      <div className="w-full md:w-2/3 p-4 rounded-md">
        <PostSection />
      </div>
      <div className='hidden md:block w-1/3 p-4 top-6 space-y-5'>
        <div>
          <CommunitySection />
        </div>
        <div className=" rounded-md shadow-md  ">
          <NewSection />
        </div>
      </div>
    </div>

  )
}

export default Community