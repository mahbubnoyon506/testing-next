import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Product = () => {
    const router = useRouter();
    const productId = router.query.productId;
    const handleSeen = () => {
        console.log('Product viewed')
        router.push('/')
    }
    return (
        <div>
            <h1>This is product {productId} details page.</h1>
            <button onClick={handleSeen} className='border px-5 py-2'>Confirm Seen</button>
        </div>
    );
};

export default Product;