import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
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

const BookingModal = ({openBookingModal, handleClose, product}) => {

    const handleonBlur= e => {
        const field = e.target.name;
        const value = e.target.value;
    }

    const handleonSubmit = e => {
        e.preventDefault()
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
            {product.name}
          </Typography>
          <form onSubmit={handleonSubmit}>
          <TextField 
          id="standard-basic" 
          label="Standard"
          defaultValue=""
          name="clientName"
          onBlur={handleonBlur}
          variant="standard" />
          <TextField 
          id="standard-basic" 
          label="Standard"
          defaultValue="" 
          name="email"
          onBlur={handleonBlur}
          variant="standard" />
          <TextField 
          disabled
          label="Standard"
          defaultValue={product.price} 
          variant="standard" /> <br />
          <Button type="submit" variant="contained">Send</Button>
          </form>
        </Box>
      </Modal>
      
    </div>
    );
};

export default BookingModal;