import Footer from '@/custom/ui/Footer/Footer';
import Navbar from '@/custom/ui/Navbar/Navbar';
import Brands from '@/custom/ui/brands/Brands';
import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&apos;s talk!</h2>
                        <div className="text-gray-600">Vivamus in nisl metus? Phasellus.</div>
                    </div>
                    <img src="https://mambaui.com/assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100 border border-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-gray-100 border border-gray-300" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" rows={3} className="w-full p-3 rounded bg-gray-100 border border-gray-300"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50">Send Message</button>
                </form>
            </div>
            <Brands />
            <Footer />
        </>
    );
};

export default ContactUs;