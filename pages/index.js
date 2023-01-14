import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center py-5'>
                <Link className='px-2 underline text-xl' href='/about'>About</Link>
                <Link className='px-2 underline text-xl' href='/blogs'>Blogs</Link>
                <Link className='px-2 underline text-xl' href='/products'>Products</Link>
            </div>
            <h1 className=''>This is home</h1>
        </div>
    );
};

export default Home;