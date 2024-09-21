import React from 'react';
import { MdOutlineVerified } from "react-icons/md";
import { BsCalendar4Week } from "react-icons/bs";
import { Avatar, Button } from "antd";
import { Pencil } from 'lucide-react';

const ProfilePage = () => {
    const user = {
        name: "Krish Mungase",
        username: "@krish_mungase",
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
        <div className='w-full flex justify-center px-4 md:px-10 py-10'>
            <div className='w-full max-w-4xl bg-white rounded-md shadow-sm'>
                <div className='pb-2 border-b flex justify-between items-center px-4'>
                    <h1 className='text-lg font-semibold'>My Profile</h1>
                    <Button className='font-semibold'>
                        <Pencil className="w-3 h-3" />
                        <span>Edit</span>
                    </Button>
                </div>

                {/* Profile section */}
                <div className='flex flex-col md:flex-row items-center md:items-start justify-between px-4 py-5'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="bg-primary" size={60}>
                            {user?.name[0].toUpperCase()}
                        </Avatar>
                        <div>
                            <div className='text-lg font-medium flex items-center'>
                                {user.name}
                                {user.isRegisteredforNPDA && (
                                    <div className='pl-2 text-green-500 text-sm flex items-center'>
                                        <MdOutlineVerified className='mr-1' />
                                        <span>Verified</span>
                                    </div>
                                )}
                            </div>
                            <div className='text-gray-600'>{user.username}</div>
                            <div className='text-sm text-gray-500'>
                                {user.profession}, {user.Address.city}, {user.Address.Country}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional info */}
                <div className='flex gap-4 text-sm text-gray-500 px-4'>
                    <div className='flex items-center gap-1'>
                        <BsCalendar4Week />
                        <span>Joined Aug 2024</span>
                    </div>
                    <div className='border px-2 py-1 rounded-md text-xs font-semibold bg-slate-100'>
                        {user.NPDA.registeredPostalCircle}
                    </div>
                </div>

                {/* NPDA Section */}
                <div className='px-4 py-5'>
                    <h2 className='uppercase text-lg font-semibold mb-4'>National Philatelic Deposit Account</h2>
                    <div className='flex flex-col md:flex-row gap-4'>
                        {/* Card */}
                        <div className='w-full md:max-w-xs bg-gradient-to-tr from-teal-500 to-cyan-400 text-white p-4 rounded-lg shadow-lg'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <h3 className='text-sm'>Balance:</h3>
                                    <h1 className='text-4xl font-bold'>₹ {user.NPDA.balance}</h1>
                                </div>
                                <button className='text-xs border rounded-full px-3 py-1'>Recharge</button>
                            </div>
                            <div className='mt-6'>
                                <div className='uppercase tracking-wide text-sm'>{user.name}</div>
                                <div className='uppercase tracking-wide text-xs font-bold'>{user.NPDA.accountNo}</div>
                            </div>
                        </div>

                        {/* Information Box */}
                        <div className='w-full bg-white border rounded-lg p-4 shadow-sm'>
                            <p className='text-center text-gray-600'>
                                This is Your NPDA registered to <br />
                                <strong>{user.NPDA.registeredPostalCircle}</strong>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Extra Section */}
                <div className='bg-slate-500 text-white py-4 px-5 mt-5 rounded-lg shadow-lg'>
                    <h3 className='text-xl font-bold mb-2'>Achievements</h3>
                    <p className='mb-4'>User has achieved the following rewards and badges in philately:</p>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='flex flex-col items-center'>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzCKqTkn9KO-n6BE09lNG9yWcw7Y_Ll4OwA&s'
                                alt='First Stamp Collector Badge'
                                className='w-16 h-16 mb-2 rounded-full border-2 border-white'
                            />
                            <span className='text-center'>First Stamp Collector Badge</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc1QZ7u9xTrUd46o8wVOHM-OkI56iNpr66rg&s'
                                alt='Rare Stamps Expert Badge'
                                className='w-16 h-16 mb-2 rounded-full border-2 border-white'
                            />
                            <span className='text-center'>Rare Stamps Expert Badge</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvab17mPG_nMUsIrG-Xa9a9ZF8RtQ327CNsg&s'
                                alt='Philatelic Community Leader Badge'
                                className='w-16 h-16 mb-2 rounded-full border-2 border-white'
                            />
                            <span className='text-center'>Philatelic Community Leader Badge</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
