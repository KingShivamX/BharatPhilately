import React from 'react'

const StampCard = (prop) => {
  const stp = prop.stp
  return (
    <div className="h-[20rem] w-full rounded-xl shadow-md overflow-hidden relative border hover:bg-slate-100 transition">
        <div className='w-full h-[50%] flex justify-center px-4 pt-2'>
            <img className='h-full rounded-sm' src={stp.imageUrl} alt="Stamp" />
        </div>

        <div className='px-4 pt-2 font-medium text-lg hover:underline decoration-[#2f667f6d]'>
            {stp.title}
        </div>

        <div className='px-4 py-1  text-sm  line-clamp-3'>
            {stp.description}
        </div>

        <div className=" w-full h-[3.5rem] flex flex-row justify-between items-center px-4 bottom-0 absolute">
            <div className='text-black py-1 font-medium'>
                Circle: {stp.PostalCircle}
            </div>
            <div className='bg-[#2F667F] hover:bg-[#132d38] transition px-4 py-1 font-medium rounded-full text-white'>
                Rs: {stp.value}
            </div>
        </div>

        
    </div>
  )
}

export default StampCard
