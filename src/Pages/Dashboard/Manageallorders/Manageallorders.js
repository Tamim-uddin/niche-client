import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Manageallorder from '../Manageallorder/Manageallorder';

const Manageallorders = () => {
    const [manageorders, setmanageorders] = useState([]);
    useEffect( () => {
        fetch('https://evening-harbor-90640.herokuapp.com/bookings/admin')
        .then(res => res.json())
        .then(data => setmanageorders(data))
    } , [])
    return (
        <div>
            <h2>Manage Orders {manageorders.length}</h2>
            <Grid container spacing={2}>
                {
                    manageorders.map(manageorder => <Manageallorder key={manageorder._id} manageorder={manageorder} manageorders={manageorders} setmanageorders={setmanageorders}></Manageallorder>)
                }
            </Grid>            
       </div>
    );
};

export default Manageallorders;