import React from 'react';

const User = ({ user }) => {
    console.log(user)
    return (
        <div className=''>
            <div className='border p-5'>
                <p>{user.name}</p>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.website}</p>
            </div>
        </div>
    );
};

export default User;