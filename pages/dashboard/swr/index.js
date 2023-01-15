import React from 'react';
import useSWR from 'swr'

const SWR = () => {
    const fetcher = async () => {
        const response = await fetch('http://localhost:5000/dashboard');
        const data = await response.json();
        return data
    }
    const { data, error, isLoading } = useSWR('dashboard', fetcher);
    let content = '';
    if (error) {
        return (
            content =
            <>
                <p>There is an error on while getting data</p>
            </>
        )
    } else if (isLoading) {
        return (
            content =
            <>
                <p>Loading...</p>
            </>
        )
    } else {
        content =
            <>
                <p>Total posts: {data.posts}</p>
                <p>Total likes count: {data.likes}</p>
                <p>Total followers: {data.followers}</p>
                <p>Total following: {data.following}</p>
            </>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default SWR;