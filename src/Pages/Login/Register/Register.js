import React, { useState } from 'react';
import { Container, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setloginData] = useState({});

    const handleonBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = {...loginData};
        newloginData[field] = value;
        console.log(newloginData, field, value);
        setloginData(newloginData);
    }

    const handleonSubmit = e => {
        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant="h5" gutterBottom component="div">
                Please Register
            </Typography>
            <form onSubmit={handleonSubmit}>
            <TextField
             sx={{width: '50%', mb: 2}}
             label="Your Name"
             name="name"
             onBlur={handleonBlur}
             variant="standard" /> <br />
            <TextField
             sx={{width: '50%', mb: 2}}
             label="Your Email"
             type="email" 
             name="email"
             onBlur={handleonBlur}
             variant="standard" /> <br />
            <TextField
             sx={{width: '50%', mb: 2}} 
             label="Your Password"
             type="password" 
             name="password"
             onBlur={handleonBlur}
             variant="standard" /> <br />
            <TextField
             sx={{width: '50%', mb: 2}} 
             label="Retype Your Password"
             type="password" 
             name="password2"
             onBlur={handleonBlur}
             variant="standard" /> <br />
             <Button type="submit" variant="contained">Register</Button>
            </form>
            <Link to="/login"><Button variant="text">Already register?Please Login</Button></Link>
        </Container>
    );
};

export default Register;