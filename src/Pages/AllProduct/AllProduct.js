import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AllProduct = ({allproduct}) => {
    const {id, name, des, price, img} = allproduct;
    return (
        <Grid item xs={12} md={4}>
                <Container >
                    <Card sx={{ minWidth: 275, p: 2 }}>
                        <CardContent>
                        <img style={{width: '98%', height: '200px'}} src= {img} alt="" />
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                         {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          ${price}
                        </Typography>
                        <Typography variant="body2">
                          {des}                        
                        </Typography>
                        </CardContent>
                        <Link to={`/product/${id}`}><Button variant="contained">Add to Cart</Button></Link>                        
                    </Card>
            </Container>
        </Grid>
    );
};

export default AllProduct;