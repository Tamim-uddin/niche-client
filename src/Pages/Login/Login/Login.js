import { Alert, CircularProgress, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setloginData] = useState({});
    const {loginUser, isloading, autherror, user} = useAuth();

    const location = useLocation();
    const history = useHistory();

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
        loginUser(loginData.email, loginData.password, location, history)
    }


    return (
        <Container>
            <Typography variant="h5" gutterBottom component="div">
                Please Login
            </Typography>
            <form onSubmit={handleonSubmit}>
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
             <Button type="submit" variant="contained">Login</Button>
            </form>
            <Link to="/register"><Button variant="text">New user?Please Register</Button></Link>
            {user.email && <Alert severity="success">login successfully</Alert>}
            {autherror && <Alert severity="error">{autherror}</Alert>}
        </Container>
    );
};

export default Login;