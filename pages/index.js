
import Link from 'next/link';
import React from 'react';

const Home = ({ users }) => {
    return (
        <div>
            <div className='flex justify-center items-center py-5'>
                <Link className='px-2 underline text-xl' href='/about'>About</Link>
                <Link className='px-2 underline text-xl' href='/blogs'>Blogs</Link>
                <Link className='px-2 underline text-xl' href='/products'>Products</Link>
                <Link className='px-2 underline text-xl' href='/posts'>Posts</Link>
                <Link className='px-2 underline text-xl' href='/news'>News</Link>
                <Link className='px-2 underline text-xl' href='/dashboard'>Dashboard</Link>
            </div>
            <h1 className=''>This is home</h1>
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }
}