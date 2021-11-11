import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Myorder from '../Myorder/Myorder';

const Myorders = () => {
    const [bookings, setbookings] = useState([]);
    const {user} = useAuth();
    useEffect( () => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setbookings(data))
    } , [])
    return (
        <div>
            <h2>My Orders{bookings.length}</h2>

            <Grid container spacing={2}>
            {
                bookings.map(booking => <Myorder key={booking._id} booking={booking} setbookings={setbookings} bookings={bookings}></Myorder>)
            } 
            </Grid>          
        </div>
    );
};

export default Myorders;