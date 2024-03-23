import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const images = ['/assets/product-1.webp', '/assets/product-2.webp', '/assets/product-3.webp', '/assets/product-4.webp', '/assets/product-5.webp'];

const ProductSlider = () => {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full"
        >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex relative aspect-video items-center justify-center p-6 rounded-2xl overflow-hidden">
                                    <Image src={images[index]} fill alt='product-image-1' />
                                    <div className='absolute z-10 aspect-video h-8 top-5 left-5 rounded-3xl flex justify-center text-white items-center py-2 bg-black'>
                                        -15%
                                    </div>
                                </CardContent>
                            </Card>
                            <div className='mt-3 px-4 text-white opacity-85 mb-2'>
                                <p className='text-xl text-center'>Double Bed & Side Tables</p>
                                <div className='flex justify-between'>
                                    <div className='flex gap-1 items-center'>
                                        <span className='  line-through opacity-50'>$220.00</span>
                                        <span>$200.00</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clock-10"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 8 10" /></svg>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default ProductSlider;