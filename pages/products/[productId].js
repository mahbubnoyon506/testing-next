import { useRouter } from 'next/router';
import React from 'react';

const Product = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h1>This is product {productId} details page.</h1>
        </div>
    );
};

export default Product;