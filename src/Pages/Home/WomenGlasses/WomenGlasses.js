import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import women2 from '../../../images/women/women3.jfif';
import men1 from '../../../images/women/men1.jfif';
import Button from '@mui/material/Button';
import { Box, margin } from '@mui/system';

const WomenGlasses = () => {
    return (
        <Box sx={{backgroundColor: '#ECEFF1', mt: 10}}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography sx={{mt: 20}} variant="h2" gutterBottom component="div">
                WOMEN'S SUNGLASSES
                <Button sx={{fontWeight: 400, fontSize: 20, color: '#231F23'}}  variant="text">Shop Now</Button>
            </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={women2} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={men1} alt=""/>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography sx={{mt: 15}} variant="h2" gutterBottom component="div">
                MEN'S SUNGLASSES <br />
                <Button sx={{fontWeight: 400, fontSize: 20, color: '#231F23'}} variant="text">Shop Now</Button>
            </Typography>
            </Grid>
            </Grid>
        </Box>
    );
};

export default WomenGlasses;