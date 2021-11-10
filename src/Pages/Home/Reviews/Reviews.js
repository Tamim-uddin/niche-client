import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setreviews(data))
    } , [])
    return (
        <div>
            <Typography sx={{backgroundColor: '#B2DFDB', py: 10, color: '#004D40'}}  variant="h3" gutterBottom component="div">
                Testimonials {reviews.length}
             </Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review key={review.name} review={review}></Review>)
                }
            </Grid>
        </div>
        
    );
};

export default Reviews;