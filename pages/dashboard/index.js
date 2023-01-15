import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dashData, setDashData] = useState(null);
    useEffect( () => {
        ( async () => {
            const response = await fetch('http://localhost:5000/dashboard');
            const data = await response.json();
            setDashData(data)
            setIsLoading(false)
        })()
    }, [])
    // console.log(dashData)
    let content = ''
    if(isLoading) {
        return (
            content = <h1>Loading</h1>
        )
    }else{
        content = <>
        <p>Total posts: {dashData.posts}</p>
        <p>Total likes count: {dashData.likes}</p>
        <p>Total followers: {dashData.followers}</p>
        <p>Total following: {dashData.following}</p>
        </>
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Dashboard;