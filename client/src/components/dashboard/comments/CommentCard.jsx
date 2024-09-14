import React from 'react';

const CommentsCard = ({ name, comment }) => {
  return (
    <div className='w-full h-fit p-4 mb-4 bg-white rounded-lg shadow-md'>
      <h3 className='font-semibold text-lg'>{name}</h3>
      <p className='text-gray-700 mt-2'>{comment}</p>
    </div>
  );
};

export default CommentsCard;
