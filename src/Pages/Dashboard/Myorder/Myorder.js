import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Myorder = ({booking, setbookings, bookings}) => {
    const {_id, email, clientName, price, productName} = booking;

    const handleDelete = id => {
        const url = `https://evening-harbor-90640.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Succesfully');
                const remainingbooking = bookings.filter(booking => booking._id !== id)
                setbookings(remainingbooking);
            }
        })
    }
    return (
        <Container>
            <Grid item xs={6} md={12}>
                <Card sx={{ minWidth: 250, backgroundColor: '#F5F5F5', my: 2}}>
                        <CardContent>
                            
                            <Typography variant="h5" component="div">
                                {clientName}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {email}
                            </Typography>
                            <Typography variant="body2">
                                {productName}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                ${price}
                            </Typography>
                        </CardContent>
                        
                            <Button onClick={() => handleDelete(_id)} sx={{backgroundColor: 'goldenrod', color: 'white', mb:2}} size="small">Delete</Button>
                        
                </Card>
            </Grid>
        </Container>
    );
};

export default Myorder;