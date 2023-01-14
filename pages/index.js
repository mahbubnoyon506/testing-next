import User from '@/components/user';
import Link from 'next/link';
import React, { user } from 'react';

const Home = ({ users }) => {
    return (
        <div>
            <div className='flex justify-center items-center py-5'>
                <Link className='px-2 underline text-xl' href='/about'>About</Link>
                <Link className='px-2 underline text-xl' href='/blogs'>Blogs</Link>
                <Link className='px-2 underline text-xl' href='/products'>Products</Link>
            </div>
            <h1 className=''>This is home</h1>
            <div className=''>
                <h2>Getting user data</h2>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10'>
                    {
                        users.map((user) =>
                            <>
                                <User user={user} />
                            </>
                        )
                    }
                </div>
            </div>
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