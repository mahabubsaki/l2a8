import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const FlashCards = () => {
    return (
        <section className='pt-[100px]'>
            <div className='flex justify-between items-center mb-9'>
                <p>Flash Sale</p>
                <Link href={'/flash-sale'}>
                    <Button className='flex items-center gap-2 py-4 rounded-2xl px-6'><span>View All</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></Button></Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className='p-1'>
                        <div className='aspect-video bg-gray-600 rounded-2xl'>

                        </div>
                        <div className='mt-3 px-4 text-black opacity-85 mb-2'>
                            <p className='text-xl text-center'>Double Bed & Side Tables</p>
                            <div className='flex justify-between'>
                                <div className='flex gap-1 items-center'>
                                    <span className='  line-through opacity-50'>$220.00</span>
                                    <span>$200.00</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-10"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 8 10" /></svg>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default FlashCards;