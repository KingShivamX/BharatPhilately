import realTimeNews from '@/config/latest-news';
import React from 'react'

const NewSection = () => {
  return (
    <div className='md:flex flex-col max-w-md items-center my-2'>
      <p className='text-xl font-semibold'>Latest News</p>
      <div className='flex flex-col space-y-2 items-center justify-center '>
        {
          realTimeNews.map((news) => (
            <div key={news.id} className='py-2 cursor-pointer hover:bg-gray-100 px-4 rounded-md'>
              <h3 className='text-sm font-medium'>{news.title}</h3>
              <p className='text-xs'>{news.description}</p>
              <p className='text-xs text-gray-500'>{news.date}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NewSection;