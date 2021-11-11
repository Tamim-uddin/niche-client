import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [allproducts, setallproducts] = useState([]);
    useEffect( () => {
        fetch('https://evening-harbor-90640.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setallproducts(data))
    } , [])
    return (
        <div>
            <Typography sx={{backgroundColor: '#B2DFDB', py: 10, color: '#004D40'}} variant="h3" gutterBottom component="div">
                Our All Products
            </Typography>

            <Grid container spacing={2}>
                {
                   allproducts.map(allproduct => <AllProduct key={allproduct.id} allproduct={allproduct}></AllProduct>) 
                }  
            </Grid>

        </div>
    );
};

export default AllProducts;