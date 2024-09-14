import React from 'react'
import { MdOutlineVerified } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import { BsCreditCard2Front } from "react-icons/bs";



const ProfilePage = () => {
    const user = {
        name: "Narendra Modi",
        username: "@narendra_modi",
        isRegsiteredforNPDA: true,
        profession: 'Student',
        Address: {
            city: "Pune",
            Country: "India"
        },
        NPDA: {
            registeredPostalCircle: "Maharashtra Postal Circle",
            balance: 108.9,
            accountNo: "MH-SX-AX2301"
        }
    }

    return (
        <div className='w-full bg-[#F6F6F6] flex justify-start'>
            <div className='px-20 py-10 w-full  rounded-md shadow-sm bg-white'>
                <div className='pb-2 border-b flex justify-between mb-3'>
                    <div className=''>My Profile</div>
                    <div className=''>edit</div>
                </div>

                {/* section 1 */}

                <div className='w-full flex px-5 py-3  rounded-[12px] items-center justify-between'>
                    <div className='flex gap-4 items-center'>
                        <div className='h-[70px] w-[70px] bg-primary flex justify-center items-center rounded-full '>
                            {user?.name[0].toUpperCase()}
                        </div>
                        <div>
                            <div className='text-[16px] flex items-center  font-[500]'>
                                {user.name}
                                {
                                    user.isRegsiteredforNPDA
                                        ?
                                        <div className='pl-2 -translate-y-1 text-green-500 font-[600]  text-[12px] flex items-center'>
                                            <span className='ml-1'><MdOutlineVerified className="font-[600] size-5" /></span>
                                            <span>Verified</span>
                                        </div>
                                        : ''
                                }
                            </div>
                            <div className='text-start text-[13px] font-[300]'>{user.username}</div>
                            <div className='flex gap-2 font-[600] text-[12px]'>
                                <div>{user.profession}, </div>
                                <div>{user.Address.city}, </div>
                                <div>{user.Address.Country}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full my-3  flex gap-3 items-center  text-[12px] font-[300]'>
                    <div className='flex items-center gap-1'>
                        <div><BsCalendar4Week className='-translate-y-[1px]' /></div>
                        <div>Joined Aug 2024</div>
                    </div>
                    <div className='border  bg-slate-50 rounded-sm px-[6px] py-[1px] font-[600]'>{user.NPDA.registeredPostalCircle}</div>
                </div>

                {/* section 2 */}

                <div className='my-3 mt-4  '>

                    <h1 className='uppercase pb-3 font-[600] text-[18px] mt-3 border-b mb-5'>national philatelic deposit accout</h1>
                    {/* card */}
                    <div className='w-full flex justify-between '>
                    <div className='max-w-[30vw] min-w-[30vw] px-2 h-[200px] shadow-md relative bg-gradient-to-tr text-white from-teal-500 to-cyan-400 rounded-lg '>
                        <div className='flex justify-between items-center'>
                            <div className=' '>
                                <h3 className='pl-4 text-[18px] translate-y-3'>Balance:</h3>
                                <h1 className='  pl-4 text-[3vw]   font-[800]'>₹ {user.NPDA.balance}</h1>
                            </div>
                            <div className='text-[13px] capitalize -translate-y-5 border rounded-full px-3 py-[2px]'>recharge</div>
                        </div>
                        <div className='absolute bottom-3'>
                        <div>
                            <div className='uppercase tracking-[3px] pl-4 mt-4'>{user.name}</div>
                            <div className='uppercase tracking-[3px] font-[800] pl-4'>{user.NPDA.accountNo}</div>
                        </div>
                        </div>
                        
                    </div>
                    <div className='min-w-[30vw] px-8  h-[200px]  relative border shadow-sm rounded-lg' >
                        <div className='w-full h-full flex justify-center items-center text-center'>
                            This is Your NPDA registered to  <br/> {user.NPDA.registeredPostalCircle}
                        </div>
                    </div>
                    </div>
                </div>
                

                {/* section 3 */}
                <div>
                    <div className='w-full bg-slate-500 py-2 px-3'>
                        sdk
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProfilePage
// git checkout  profile/register-npda 