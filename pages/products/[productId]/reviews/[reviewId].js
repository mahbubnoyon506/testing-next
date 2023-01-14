import { useRouter } from 'next/router';
import React from 'react';

const ReviewId = () => {
    const router = useRouter();
    const reviewId = router.query.reviewId;
    return (
        <div>
            <h1>This is review page of Id {reviewId}</h1>
        </div>
    );
};

export default ReviewId;