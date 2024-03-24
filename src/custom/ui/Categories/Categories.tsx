import React from 'react';


// Degreaser
// Antibacterial kitchen cleaner
// Stainless steel cleaner
// Oven cleaner
// Glass cleaner (for kitchen windows or glass cookware)
// Dish soap (often used for handwashing dishes but can also be used to clean kitchen surfaces)
// Granite or stone cleaner (for countertops)
// Wood surface cleaner (for wooden cutting boards or cabinets)
// Tile and grout cleaner
const catgories = ['General Cleaner',
    'Surface Cleaner',
    'Specialized Cleaner',
    'Wipes'
];
const images = [''];
const Categories = () => {
    return (
        <div id='categories' className='mt-[170px]'>
            <div className='max-w-[600px] mx-auto text-center mb-[70px] px-5 sm:px-0'>
                <h2 className='mb-3 text-3xl font-semibold'>Top Categories</h2>
                <p className='text-[#666666]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                {catgories.map((item, index) => (
                    <div key={index} className='p-1'>
                        <div className={`aspect-video bg-gradient-to-tl from-slate-400 via-blue-300 to-green-200  rounded-2xl relative overflow-hidden flex justify-center items-center`}>
                            <p className='text-2xl text-center text-black'>{item}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;