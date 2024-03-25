import Footer from '@/custom/ui/Footer/Footer';
import Navbar from '@/custom/ui/Navbar/Navbar';
import Brands from '@/custom/ui/brands/Brands';
import CountDown from '@/custom/ui/countdown/CountDown';
import IFlashSale from '@/interfaces/flashsale';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FlashSale = async () => {
    if (!process.env.BASE_API_URL) {
        return null;
    }
    const data = await fetch(`${process.env.BASE_API_URL}/api/all-flashsale`, {
        cache: 'no-store'
    });
    const products: IFlashSale[] = await data.json();
    return (
        <>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div className='max-w-screen-xl mx-auto'>

                <CountDown />
                <div className='my-10'>
                    <h2 className='text-[#3D3D3D] text-3xl mb-3'>Flash Sale</h2>
                    <p className='text-black opacity-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                    {products.map((item, index) => (
                        <Link href={'/kitchen-cleaners/' + item.id} key={item.id}>
                            <div key={index} className='p-1'>
                                <div className='aspect-video bg-gray-600 rounded-2xl relative overflow-hidden'>
                                    <Image src={item.image_url} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fetchPriority='high' alt={`product-image-${index}`} />
                                    <div className='absolute w-[70px] h-[25px] bg-white text-black rounded-full top-5 left-5 flex font-bold justify-center items-center'>
                                        <p className='text-center text-xs'>-{(((item.price - item.discounted_price) / item.price) * 100).toFixed(2)}%</p>
                                    </div>
                                </div>
                                <div className='mt-3 px-4 text-black opacity-85 mb-2'>
                                    <p className='text-xl text-center'>{item.name}</p>
                                    <p className='uppercase text-gray-500 my-2'>Category : {item.category.split('-').join(' ')}</p>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-1 items-center'>
                                            <span className='  line-through opacity-50'>${item.price}</span>
                                            <span>${item.discounted_price}</span>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-10"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 8 10" /></svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
            <Brands />
            <Footer />
        </>
    );
};

export default FlashSale;