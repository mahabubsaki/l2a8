'use client';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import React from 'react';

const FilterProduct = ({ searchParams }) => {
    const navigation = useRouter();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 my-10'>
            <div>

                <Select defaultValue={searchParams.category || ''} onValueChange={(value) => {

                    let href = `?category=${value}`;
                    if (searchParams.price) {
                        href += `&price=${searchParams.price}`;
                    }
                    if (searchParams.rating) {
                        href += `&rating=${searchParams.rating}`;
                    }
                    navigation.push(href);
                }}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Filter By Category" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="specialized-cleaner">Specialized Cleaner</SelectItem>
                        <SelectItem value="general-cleaner">General Cleaner</SelectItem>
                        <SelectItem value="wipes">Wipes</SelectItem>
                        <SelectItem value="surface-cleaner">Surface Cleaner</SelectItem>
                    </SelectContent>
                </Select>

            </div>
            <div>


                <Select defaultValue={searchParams.price || ''} onValueChange={(value) => {

                    let href = `?price=${value}`;
                    if (searchParams.category) {
                        href += `&category=${searchParams.category}`;
                    }
                    if (searchParams.rating) {
                        href += `&rating=${searchParams.rating}`;
                    }
                    navigation.push(href);
                }}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Filter By Price" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="0-3">0$ - 3$</SelectItem>
                        <SelectItem value="3-6">3$ - 6$</SelectItem>
                        <SelectItem value="6-9">6$ - 9$</SelectItem>
                        <SelectItem value="9-12">9$ - 12$</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <h1></h1>

                <Select defaultValue={searchParams.rating || ''} onValueChange={(value) => {

                    let href = `?rating=${value}`;
                    if (searchParams.category) {
                        href += `&category=${searchParams.category}`;
                    }
                    if (searchParams.price) {
                        href += `&price=${searchParams.price}`;
                    }
                    navigation.push(href);
                }}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Filter By Rating" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">1 Star</SelectItem>
                        <SelectItem value="2">2 Star</SelectItem>
                        <SelectItem value="3">3 Star</SelectItem>
                        <SelectItem value="4">4 Star</SelectItem>
                        <SelectItem value="5">5 Star</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default FilterProduct;