import Link from 'next/link';
import React from 'react';

const Posts = ({ posts }) => {
    console.log(posts)
    return (
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10'>
            {
                posts.map((post) =>
                    <>
                        <div className='border p-5'>
                            <p className='capitalize'>{post.title}</p>
                            <Link href={`/posts/${post.id}`}><button className='border py-1 px-3 mt-3'>Dtails</button></Link>
                        </div>
                    </>)
            }
        </div>
    );
};

export default Posts;
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    // console.log(data)
    return {
        props: {
            posts: data.slice(0, 9)
        }
    }
}
