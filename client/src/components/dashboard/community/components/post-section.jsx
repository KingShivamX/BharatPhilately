import React from 'react'
import CreatePost from './create-post'
import Posts from '@/config/post-data'
import PostCard from './post'



const PostSection = () => {
  return (
    <div className='w-full '>
      <div className='flex shadow-md rounded-md items-center justify-center flex-col'>
        <CreatePost />
      </div>
      <div className='border-b my-4'></div>
      <div className='overflow-y-auto'>
        {
          Posts.map((post) => (
            <PostCard id={post.id} post={post} />
          ))
        }
      </div>
    </div>
  )
}

export default PostSection