import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from '@mui/material/Button';
import banner1 from '../../../images/banner/banner1.jfif';
import banner2 from '../../../images/banner/banner2.jfif';
import banner3 from '../../../images/banner/banner3.jfif';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel className="banner">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Wellcome Oculus Sunglass</h3>
      <p>Sunglasses Online,Less Than Retail. Quality Custom Made Lenses.. Try On the Glasses Virtually | Free Shipping and Returns</p>
      <Link style={{textDecoration: 'none'}} to="/allproducts"><Button sx={{color: "white", fontSize: 20}} variant="text">EXPLORE</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Wellcome Oculus Sunglass</h3>
      <p>Sunglasses Online,Less Than Retail. Quality Custom Made Lenses.. Try On the Glasses Virtually | Free Shipping and Returns</p>
      <Link style={{textDecoration: 'none'}} to="/allproducts"><Button sx={{color: "white", fontSize: 20}} variant="text">EXPLORE</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Wellcome Oculus Sunglass</h3>
      <p>Sunglasses Online,Less Than Retail. Quality Custom Made Lenses.. Try On the Glasses Virtually | Free Shipping and Returns</p>
      <Link style={{textDecoration: 'none'}} to="/allproducts"><Button sx={{color: "white", fontSize: 20}} variant="text">EXPLORE</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;