import React from 'react'
import stamps from "../../../config/stamps-sample-schema"
import StampCard from './StampCard'
import { Link } from 'react-router-dom';
import Footer from '@/pages/common/footer';
import LatestNews from './news';
import ScrollingNews from './news';

const Home = () => {

  const getLimitedStamps = (category) => {
    return stamps.filter(stp => stp.category === category).slice(0, 8);
  };

  return (
    <div className='h-fit w-full'>
      {/* Hero Section */}
      <div className="py-4 px-2 text-center h-fit w-full flex justify-center flex-col items-center">
        <div className='m-2 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-cyan-600'>
          Preserving Heritage
        </div>
        <div className='mb-2 font-medium text-gray-600 text-sm text-center' >
          Uncover the rich history and culture behind each stamp.
        </div>
      </div>

      <ScrollingNews />

      {/* stamps */}
      <div className="h-fit w-full p-2 sm:p-4">

        {/* Featured */}
        <div className="mb-8 w-full">
          <div className='text-xl md:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#234d61] to-black'>Featured Stamps</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {getLimitedStamps("Featured").map(stp => (
              <Link key={stp.id} to={`/dashboard/stamp/${stp.id}`}>
                <StampCard stp={stp} />
              </Link>
            ))}
          </div>
        </div>

        {/* Rare Stamps */}
        <div className="mb-8 w-full">
          <div className='text-xl md:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#234d61] to-black'>Rare Stamps</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {getLimitedStamps("Rare").map(stp => (
              <Link key={stp.id} to={`/dashboard/stamp/${stp.id}`}>
                <StampCard stp={stp} />
              </Link>
            ))}
          </div>
        </div>

        {/* Latest Release */}
        <div className="mb-8 w-full">
          <div className='text-xl md:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#234d61] to-black'>Latest Release</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {getLimitedStamps("Latest Release").map(stp => (
              <Link key={stp.id} to={`/dashboard/stamp/${stp.id}`}>
                <StampCard stp={stp} />
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Stamps */}
        <div className="mb-8 w-full">
          <div className='text-xl md:text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#234d61] to-black'>Popular Stamps</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {getLimitedStamps("Popular").map(stp => (
              <Link key={stp.id} to={`/dashboard/stamp/${stp.id}`}>
                <StampCard stp={stp} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
