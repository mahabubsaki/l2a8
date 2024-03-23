'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <nav className="relative bg-transparent shadow backdrop-blur-sm" x-data="{ isOpen: false }">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link href={'/'} prefetch={false}>

                            <div className="aspect-[70/15] relative h-6 sm:h-12">
                                <Image priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' src={'/assets/logo.png'} fill alt='website-log' />
                            </div>

                        </Link>



                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-slate-100  hover:text-slate-200 focus:text-slate-200  focus:outline-none  " aria-label="toggle menu">
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className={`absolute  inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out text-sm bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'}`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-6">
                            <Link href="/" className="px-3 py-2 mx-2 mt-2 text-gray-700  transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 lg:text-white lg:hover:bg-black ">Home</Link>
                            <Link href="/kitchen-cleaners" className="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 lg:text-white lg:hover:bg-black">Products</Link>
                            <Link href="/flash-sale" className="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 lg:text-white lg:hover:bg-black">Flash Sale</Link>
                            <Link href="/about-us" className="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 lg:text-white lg:hover:bg-black">About Us</Link>
                            <Link href="/contact-us" className="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 lg:text-white lg:hover:bg-black">Contact Us</Link>
                            <Link href="/helpline" className="px-3 py-2 mx-2 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 lg:text-white lg:hover:bg-black">Helpline</Link>
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <button className="hidden mx-4  transition-colors duration-300 transform lg:block   text-slate-100  hover:text-slate-200 focus:text-slate-200 focus:outline-none" aria-label="show notifications">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 relative overflow-hidden border-2 border-gray-400 rounded-full">
                                    <Image src={'/assets/profile.jpg'} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill alt='profile-picture' />
                                </div>

                                <h3 className="mx-2 text-gray-700  lg:hidden">Khatab wedaa</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;