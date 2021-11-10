import React, { useState } from 'react';
import { Alert, CircularProgress, Container, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setloginData] = useState({});
    const {registerUser, isloading, autherror, user} = useAuth();

    const history = useHistory()

    if(isloading){
        return <CircularProgress />
    }


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
        registerUser(loginData.email, loginData.password, loginData.name, history);
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
            {user.email && <Alert severity="success">login successfully</Alert>}
            {autherror && <Alert severity="error">{autherror}</Alert>}
        </Container>
    );
};

export default Register;