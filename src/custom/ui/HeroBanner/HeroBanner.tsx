
import React from 'react';
import Navbar from '../Navbar/Navbar';

const HeroBanner = () => {
    return (
        <section className={`bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url(/assets/banner-mobile.png)] sm:bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url(/assets/banner-tablet.png)] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url(/assets/banner.jpg)] min-h-[100dvh]  bg-cover  bg-no-repeat`}>
            <Navbar />
            <div className='w-full lg:w-4/5 mx-auto px-5 pt-[90px]'>
                <div className='max-w-[900px] mx-auto text-center'>
                    <h2 className='font-bold text-2xl sm:text-[calc(24px+24*((100vw-640px)/(1024-640)))] lg:text-5xl   mb-9 text-white sm:leading-[2.5rem] '>Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!</h2>
                    <p className='text-[#CECCCC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat</p>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;