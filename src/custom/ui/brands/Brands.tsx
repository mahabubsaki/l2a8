import Image from 'next/image';
import React from 'react';


const Brands = () => {
    return (
        <div className='bg-[#6666661A] mt-[160px] px-[100px] py-[50px] flex flex-wrap justify-center gap-[100px]'>
            <div className='relative aspect-video h-12'>
                <Image src={'/assets/company-1.png'} alt='company-logo' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
            <div className='relative aspect-video h-12'>
                <Image src={'/assets/company-2.png'} alt='company-logo' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
            <div className='relative aspect-video h-12'>
                <Image src={'/assets/company-3.png'} alt='company-logo' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
            <div className='relative aspect-video h-12'>
                <Image src={'/assets/company-4.png'} alt='company-logo' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
            <div className='relative aspect-video h-12'>
                <Image src={'/assets/company-1.png'} alt='company-logo' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
            <div className='relative aspect-video h-12'>
                <Image src={'/assets/company-2.png'} alt='company-logo' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
            <div className='relative aspect-video h-12'>
                <Image src={'/assets/company-3.png'} alt='company-logo' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
            <div className='relative aspect-video h-12'>
                <Image src={'/assets/company-4.png'} alt='company-logo' fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
            </div>
        </div>
    );
};

export default Brands;