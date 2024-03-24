import { Button } from '@/components/ui/button';
import IFlashSale from '@/interfaces/flashsale';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FlashCards = async () => {
    const data = await fetch('http://localhost:3000/api/flashsale', {
        next: {
            revalidate: 30,
            tags: ['flashsale', 'recent']
        },

    });
    const products: IFlashSale[] = await data.json();
    return (
        <section className='pt-[100px]'>
            <div className='flex justify-between items-center mb-9'>
                <p className='text-xl'>Flash Sale</p>
                <Link href={'/flash-sale'}>
                    <Button className='flex items-center gap-2  py-4 rounded-2xl px-6'><span>View All</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></Button></Link>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {products.map((item, index) => (
                    <Link href={'/kitchen-cleaners/' + item.id} key={item.id}>
                        <div className='p-1'>
                            <div className='aspect-video bg-gray-600 rounded-2xl relative overflow-hidden'>
                                <Image src={item.image_url} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fetchPriority='high' alt={`product-image-${index}`} />
                                <div className='absolute w-[70px] h-[25px] bg-white text-black rounded-full top-5 left-5 flex font-bold justify-center items-center'>
                                    <p className='text-center text-xs'>-{(((item.price - item.discounted_price) / item.price) * 100).toFixed(2)}%</p>
                                </div>
                            </div>
                            <div className='mt-3 px-4 text-black opacity-85 mb-2'>
                                <p className='text-xl text-center'>{item.name}</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-1 items-center'>
                                        <span className='  line-through opacity-50'>${item.price}</span>
                                        <span>${item.discounted_price}</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-10"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 8 10" /></svg>
                                </div>
                            </div>
                        </div></Link>
                ))}

            </div>
        </section>
    );
};

export default FlashCards;