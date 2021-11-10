import { Alert, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Makeadmin = () => {
    const [email, setemail] = useState('');
    const [success, setsuccess] = useState(false);
    
    const handleonBlur = e => {
        setemail(e.target.value);
    }

    const handleonSubmit = e => {
        
        const user = {email};
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
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