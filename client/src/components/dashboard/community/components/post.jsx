import { ThumbsUp, MessageSquareText, Share2 } from 'lucide-react';
import React, { useState } from 'react'

const PostCard = ({ post }) => {
  const [expandedCommentId, setExpandedCommentId] = useState(null);

  // Function to toggle the visibility of the comment section
  const toggleCommentVisibility = (commentId) => {
    setExpandedCommentId(expandedCommentId === commentId ? null : commentId);
  };
  return (
    <div key={post.id} className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 mb-4">

      <div className="flex items-center mb-3">
        <img
          src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
          alt={post.author}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-sm font-semibold">{post.author}</p>
          <p className="text-xs text-gray-500">{post.timeAgo}</p>
        </div>
      </div>


      <p className="text-sm mb-3">{post.description}</p>

      {post.imageUrl && (
        <div className="relative w-full h-80 overflow-hidden rounded-lg mb-3 bg-slate-100 p-4">
          <img
            src={post.imageUrl}
            alt="Post visual"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </div>
      )}


      <p className="text-sm text-gray-700 mb-4">{post.content}</p>

      <div className="flex flex-wrap space-x-2 mb-3">
        {post.tags.map((tag, index) => (
          <span key={index} className="text-xs font-extrabold bg-blue-50 px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="border-t border-gray-200 pt-2 flex justify-around text-sm text-gray-500">
        <button className="flex items-center justify-center space-x-1 hover:text-green-600">
          <ThumbsUp size='16' />
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center justify-center space-x-1 hover:text-blue-600">
          <MessageSquareText size='16' />
          <span>Comments</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <Share2 size='16' />
          <span>Share</span>
        </button>
      </div>
    </div>
  )
}

export default PostCard