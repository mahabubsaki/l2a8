import Image from 'next/image';
import React from 'react';

const DashboardNav = () => {
    return (
        <div className='flex justify-between bg-[#D9D9D9] h-[100px] px-5'>
            <div className='h-full flex items-center '>
                <Image src={'/assets/logo.png'} width={200} height={100} alt='logo' />
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex flex-col items-end'>
                    <p>Mahabub Saki</p>
                    <p>Admin</p>
                </div>
                <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                    <div className="w-8 h-8 relative overflow-hidden border-2 border-gray-400 rounded-full">
                        <Image src={'/assets/profile.jpg'} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill alt='profile-picture' />
                    </div>

                    <h3 className="mx-2 text-gray-700  lg:hidden">Mahabub Saki</h3>
                </button>
            </div>
        </div>
    );
};

export default DashboardNav;