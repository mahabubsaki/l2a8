import Footer from '@/custom/ui/Footer/Footer';
import Navbar from '@/custom/ui/Navbar/Navbar';
import Brands from '@/custom/ui/brands/Brands';
import React from 'react';

const Helpline = () => {
    return (
        <>
            <div className='bg-black'>
                <Navbar />
            </div>
            <section className="py-6 bg-violet-600 text-gray-50 min-h-[calc(100dvh-70px)]">
                <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                    <h1 className="text-5xl font-bold leading-none text-center">Need Help?</h1>
                    <p className="pt-2 pb-8 text-xl font-medium text-center">Eum omnis itaque harum at quae sequi unde similique alias asperiores totam. Ex cumque maxime harum doloremque, tempore nam fugiat aspernatur rerum ipsa unde est modi commodi molestias maiores eveniet eius esse asperiores neque dicta ea quisquam? Excepturi sapiente officiis explicabo ab?</p>
                    <button className="px-8 py-3 text-lg font-semibold rounded bg-gray-100 text-gray-900">Email US at shinemart@gfx.com</button>
                </div>
            </section>
            <Brands />
            <Footer />
        </>
    );
};

export default Helpline;