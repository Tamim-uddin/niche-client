import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setproducts(data))
    } , [])
    return (
        <div>
            <Typography sx={{backgroundColor: '#B2DFDB', py: 10, color: '#004D40'}} variant="h3" gutterBottom component="div">
                Our Special Products
            </Typography>

            <Grid container spacing={2}>
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }  
            </Grid>

            
        </div>
    );
};

export default Products;