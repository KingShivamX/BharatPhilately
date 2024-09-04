import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const EmailVerificationPage = () => {
  const navigate = useNavigate();
  const backToSignIn = () => navigate('/auth/login');
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white flex items-center justify-center flex-col w-[300px] sm:w-[500px] rounded-lg border p-6">
        <span className="text-4xl font-bold text-[#2F667F]">
          BharatPhilately
        </span>
        <h1 className="text-xl font-medium text-[#2F667F] mt-3">
          Please check your email
        </h1>
        <div className="mt-2 flex items-center justify-center flex-col">
          <p className="text-center text-sm">We've sent a verification link </p>
          <span className="text-[#2F667F] text-sm">example@gmail.com</span>
        </div>

        <button
          onClick={backToSignIn}
          className="flex items-center justify-center space-x-1 text-sm mt-4 text-center text-[#539BBB] hover:text-[#539BBB]/80 hover:underline transition-all"
        >
          <MdKeyboardBackspace />
          <span>Back to sign in</span>
        </button>
      </div>
    </div>
  )
}

export default EmailVerificationPage;