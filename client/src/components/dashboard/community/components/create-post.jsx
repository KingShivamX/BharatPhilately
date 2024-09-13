import React from 'react'
import { Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'

const user = {
  fullName: 'Krishna'
}

const CreatePost = () => {
  const navigate = useNavigate();

  const NavigateToProfile = () => {
    navigate('/profile')
  }
  return (
    <div className='w-full flex items-center justify-start space-x-4 p-4 bg-white rounded-lg shadow-sm'>
      <Avatar className="bg-primary cursor-pointer h-12 w-12 text-lg font-bold flex items-center justify-center rounded-full" onClick={NavigateToProfile}>
        {user?.fullName[0].toUpperCase()}
      </Avatar>
      <div className="flex-1">
        <label htmlFor="file" className="block text-gray-700 text-lg font-semibold mb-2">
          Start a post
        </label>
        <input
          type="file"
          id='file'
          className="block w-full text-sm text-gray-500 cursor-pointer focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-gray-200 hover:file:bg-gray-300"
        />
      </div>
    </div>
  )
}

export default CreatePost