import Footer from '@/custom/ui/Footer/Footer';
import Navbar from '@/custom/ui/Navbar/Navbar';
import Brands from '@/custom/ui/brands/Brands';
import IFlashSale from '@/interfaces/flashsale';
import Image from 'next/image';
import React from 'react';

export const generateStaticParams = async () => {

    return [
        { productID: "1" },
        { productID: "2" },
        { productID: "3" },
        { productID: "4" },
        { productID: "5" },
        { productID: "6" },
        { productID: "7" },
        { productID: "8" },
        { productID: "9" },
        { productID: "10" }
    ];
};

const SingleProduct = async ({ params = { productID: '1' } }: { params: { productID: string; }; }) => {
    if (!process.env.BASE_API_URL) {
        return null;
    }
    const res = await fetch(`${process.env.BASE_API_URL}/api/single-product/${params.productID}`, {
        cache: 'no-cache',
    });
    const data: IFlashSale = await res.json();
    const { brand, category, description, discounted_price, id, image_url, ingredients, name, price, rating, reviews, scent, size } = data;
    return (
        <>
            <div className='bg-black'>
                <Navbar />
            </div>
            <div>
                {!name ? <div className='text-center min-h-screen flex justify-center items-center text-2xl font-black'>Invalid ID</div> : <div className='max-w-screen-xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='relative aspect-video'>
                            <Image src={image_url} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fetchPriority='high' alt={`product-image-${id}`} />
                        </div>
                        <div className="p-4">
                            <h1 className="text-3xl font-bold mb-2">{name}</h1>
                            <p className="text-gray-600 text-lg mb-4">{description}</p>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Category:</p>
                                <p>{category}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Brand:</p>
                                <p>{brand}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Size:</p>
                                <p>{size}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Scent:</p>
                                <p>{scent}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Ingredients:</p>
                                <p>{ingredients}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Rating:</p>
                                <p>{rating}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Reviews:</p>
                                <p>{reviews}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Price:</p>
                                <p className="text-xl font-bold  line-through">{price}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-semibold">Discounted Price:</p>
                                <p className="text-xl font-bold text-green-600">{discounted_price}</p>
                            </div>
                        </div>
                    </div>
                </div>}


            </div>
            <Brands />
            <Footer />
        </>
    );
};

export default SingleProduct;