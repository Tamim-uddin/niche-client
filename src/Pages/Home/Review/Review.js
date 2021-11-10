import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Review = ({review}) => {
    const {name, email, des} = review;
    return (
        <div>
            <Grid item xs={12} md={4}>
                <Container sx={{ml: 6, py: 3, mb: 10}}>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                          {name}
                        </Typography>
                        <Typography sx={{my: 1.5}} variant="body2">
                          {email}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                           {des}
                        </Typography>   
                    </CardContent>                   
                    </Card>
                </Container>
            </Grid> 
        </div>
    );
};

export default Review;