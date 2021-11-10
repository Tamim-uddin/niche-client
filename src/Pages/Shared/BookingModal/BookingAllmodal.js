import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingAllmodal = ({openBookingModal, handleClose,allproduct}) => {
    const {name, price} = allproduct;
    const {user} = useAuth();
    const initialinfo = {email: user.email, clientName: user.displayName};
    const [bookinginfo, setbookinginfo] = useState(initialinfo);


    const handleonBlur= e => {
        const field = e.target.name;
        const value = e.target.value;
        const newbookinginfo = {...bookinginfo};
        newbookinginfo[field] = value;
        console.log(field, value);
        setbookinginfo(newbookinginfo);
    }

    const handleonSubmit = e => {
        e.preventDefault();
        const booking = {
            ...bookinginfo,
            productName: name,
            price
        }
 
         fetch('http://localhost:5000/bookings', {
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(booking)
         })
         .then(res => res.json())
         .then(data => {
             console.log(data);
         })
 
         handleClose();
    }

    return (
        <div>
     
      <Modal
        open={openBookingModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {allproduct.name}
          </Typography>
          <form onSubmit={handleonSubmit}>
          <TextField 
          sx={{my:2}}
          label="Name"
          defaultValue={user.displayName}
          name="clientName"
          onBlur={handleonBlur}
          variant="standard" />
          <TextField 
          sx={{my:2}} 
          label="email"
          defaultValue={user.email} 
          name="email"
          onBlur={handleonBlur}
          variant="standard" />
          <TextField 
          sx={{my:2}}
          disabled
          label="price"
          defaultValue={allproduct.price} 
          variant="standard" /> <br /> 
          <Button type="submit" variant="contained">Send</Button>
          </form>
          
        </Box>
      </Modal>
    </div>
    );
};

export default BookingAllmodal;