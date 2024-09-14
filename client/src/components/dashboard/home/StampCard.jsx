import { Button } from 'antd'
import React from 'react'

const StampCard = ({ stp }) => {

    return (
        <div className="h-[20rem] w-full rounded-md cursor-pointer shadow-md overflow-hidden relative border transition-all duration-300 ease-in-out hover:scale-105">
            <div className='w-full h-[50%] flex justify-center px-4 pt-2'>
                <img className='h-full rounded-sm object-contain' src={stp.imageUrl} alt="Stamp" />
            </div>

            <p className='px-4 pt-2 font-medium text-md'>
                {stp.title}
            </p>

            <p className='px-4 py-1 text-sm line-clamp-3'>
                {stp.description}
            </p>

            <div className=" w-full h-[3.5rem] flex flex-row justify-between items-center px-4 bottom-0 absolute">
                <div className='text-primary py-1 font-medium'>
                    Circle: {stp.PostalCircle}
                </div>
                <Button className="bg-primary text-white py-[0.15rem] px-5 hover:bg-[#3d7e9c] ring-0 rounded-full">
                    Rs: {stp.value}
                </Button>
            </div>
        </div>
    )
}

export default StampCard
