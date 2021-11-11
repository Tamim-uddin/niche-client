import { Alert, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';

const Makeadmin = () => {
    const [email, setemail] = useState('');
    const [success, setsuccess] = useState(false);
    const {token} = useAuth();
    
    const handleonBlur = e => {
        setemail(e.target.value);
    }

    const handleonSubmit = e => {
        
        const user = {email};
        fetch('https://evening-harbor-90640.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setsuccess(true);
              
            }
            console.log(data);
            
        })
        e.preventDefault();
    }

    return (
        <Box>
            <form onSubmit={handleonSubmit}>
            <TextField 
            sx={{my: 2, width: '50%'}}
             label="Email" 
             type="email"
             onBlur={handleonBlur}
             variant="standard" /> <br />
             <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Make Admin Successfully</Alert>}
        </Box>
    );
};

export default Makeadmin;