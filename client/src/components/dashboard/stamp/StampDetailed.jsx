import React from 'react';
import { useParams } from 'react-router-dom';
import stamps from "../../../config/stamps-sample-schema";
import NotFoundPage from '@/pages/page-not-found';
import { Link } from 'react-router-dom';
import StampCard from '../../dashboard/home/StampCard';
import comments from '@/config/stamp-commnts';
import CommentsCard from '../comments/CommentCard';
import Footer from '@/pages/common/footer';
import { Button } from 'antd';

const StampDetail = () => {
  const { id } = useParams();
  const stp = stamps.find(st => st.id === parseInt(id));

  const randomStp = stamps.filter(st => st.id !== parseInt(id)).slice(0, 4);

  if (!stp) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen w-full">

      {/* Stamp Details Section */}
      <div className="h-fit lg:h-[75vh] w-full flex flex-col lg:flex-row">
        <div className='h-fit lg:h-full w-full lg:w-1/2 flex justify-center items-center p-4'>
          <img className='w-full lg:w-[85%] max-h-[90%] object-contain rounded-lg shadow-xl' src={stp.imageUrl} alt="Stamp" />
        </div>
        <div className='h-full w-full lg:w-1/2 text-left p-4 flex flex-col justify-center'>
          <div>
            <h1 className='font-bold text-2xl lg:text-4xl py-4'>{stp.title}</h1>
            <p className='font-medium text-lg lg:text-2xl pb-4'>{stp.description}</p>
            <p className='font-normal text-lg lg:text-xl'>Category: {stp.category}</p>
            <p className='font-normal text-lg lg:text-xl pb-4'>Release Date: {stp.releaseDate}</p>
            <p className='font-medium italic text-xl lg:text-2xl pb-4'>Value: {stp.value.toLocaleString("en-IN")} rs/-</p>
          </div>
          <div className='w-full mx-auto flex gap-4'>
            <Button className="p-4 text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out">
              Add to Cart
            </Button>
            <Button className="p-4 rounded-lg shadow-md transition duration-300 ease-in-out">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Recommended Stamps Section */}
      <div className='px-4 w-full pb-8'>
        <hr />
        <h1 className='font-bold text-xl lg:text-2xl py-4'>You may also Like...</h1>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {randomStp.map(stp => (
            <Link key={stp.id} to={`/dashboard/stamp/${stp.id}`}>
              <StampCard stp={stp} />
            </Link>
          ))}
        </div>
      </div>

      {/* Comments */}
      <div className='px-4 mb-8 w-full'>
        <hr />
        <h1 className='font-bold text-xl lg:text-2xl py-4'>Comments</h1>
        <div>
          {comments.map(cmt => (
            <CommentsCard key={cmt.id} name={cmt.name} comment={cmt.comment} />
          ))}
        </div>
      </div>

      <Footer />
    </div >
  );
};

export default StampDetail;
