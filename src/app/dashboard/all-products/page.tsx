import DashboardNav from '@/custom/ui/Navbar/DashboardNav';
import IFlashSale from '@/interfaces/flashsale';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllProducts = async () => {
    if (!process.env.BASE_API_URL) {
        return null;
    }
    const res = await fetch(`${process.env.BASE_API_URL}/api/all-products`, {
        cache: 'no-store'
    });
    const data: IFlashSale[] = await res.json();
    return (
        <>
            <DashboardNav />
            <div className='grid lg:grid-cols-12 grid-cols-1  '>
                <div className='col-span-2 bg-[#D9D9D9] lg:min-h-[calc(100dvh-100px)] min-h-full'>
                    <ul>
                        <li className='py-2 px-4 hover:bg-gray-200 cursor-pointer bg-slate-500 mx-5'>All Products</li>
                        <Link href={'/'}>          <li className='py-2 px-4 mx-5 hover:bg-gray-200 cursor-pointer'>Home</li></Link>


                    </ul>
                </div>
                <div className='col-span-10'>
                    <div className="container p-2 mx-auto sm:p-4 text-gray-800">
                        <h2 className="mb-4 text-2xl font-semibold leading-tight">All Products</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-xs">
                                <colgroup>
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col />
                                    <col className="w-24" />
                                </colgroup>
                                <thead className="bg-gray-300">
                                    <tr className="text-left">
                                        <th className="p-3">Serial #</th>
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Category</th>
                                        <th className="p-3">Brands</th>
                                        <th className="p-3 text-right">Rating</th>
                                        <th className="p-3">Reviews</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => (
                                            <tr key={item.id} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                                <td className="p-3">
                                                    <p>{item.id}</p>
                                                </td>
                                                <td className="p-3">

                                                    <p>{item.name}</p>
                                                </td>
                                                <td className="p-3">
                                                    <Image src={item.image_url} alt='product-image' width={80} height={80} />
                                                </td>
                                                <td className="p-3">
                                                    <p className='uppercase'>{item.category.split('-').join(' ')}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item.brand}</p>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <p>{item.rating}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item.reviews}</p>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AllProducts;