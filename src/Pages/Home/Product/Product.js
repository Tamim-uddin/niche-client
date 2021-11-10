import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import BookingModal from '../../Shared/BookingModal/BookingModal';

const Product = ({product}) => {
  const [openBookingModal, setOpenBokkingModal] = React.useState(false);
    const handleOpen = () => setOpenBokkingModal(true);
    const handleClose = () => setOpenBokkingModal(false);
    const {id, name, des, price, img} = product;
    return (

        <>
          <Grid item xs={12} md={4}>
                <Container >
                    <Card sx={{ minWidth: 275, p: 2 }}>
                        <CardContent>
                        <img style={{width: '98%', height: '200px'}} src= {img} alt="" />
                        <Typography variant="h5" component="div">
                         {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          ${price}
                        </Typography>
                        <Typography variant="body2">
                          {des}                        
                        </Typography>
                        </CardContent>
                        <Button onClick={handleOpen} variant="contained">Add to Cart</Button>                    
                    </Card>
            </Container>
        </Grid>
        <BookingModal 
         openBookingModal={openBookingModal}
         handleOpen={handleOpen}
         handleClose={handleClose}
         product={product}
        ></BookingModal>
        </>
        
    );
};

export default Product;