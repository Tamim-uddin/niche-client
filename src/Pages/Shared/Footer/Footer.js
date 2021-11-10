import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{backgroundColor: '#F5F5F5', p: 10}}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5" gutterBottom component="div">
                        LONDON
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        One Euston Square <br />
                        40 Melton Street <br />
                        London <br />
                        NW1 2FD <br />
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5" gutterBottom component="div">
                        NEWYORK
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                        810 Broadway <br />
                        Bowwow Factory <br />
                        New York <br />
                        NY 10012 <br />
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5" gutterBottom component="div">
                        TORONTO
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                         2610 Buffalo <br />
                        Benagil Street <br />
                        Toronto <br /> 
                        TR 94103 <br />
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="h5" gutterBottom component="div">
                        Newsletter
                    </Typography>
                    <Typography variant="overline" display="block" gutterBottom>
                    <TextField id="standard-basic" placeholder="Your Email"  variant="standard" />
                    </Typography> <br />
                    <Button sx={{backgroundColor: '#00897B'}} variant="contained">Subscribed</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;