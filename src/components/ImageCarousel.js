import React from 'react';
import Slider from 'react-slick';
import { Box, CardMedia, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import carouselImg1 from '../img/banner.jpg';
import carouselImg2 from '../img/banner2.png';

const images = [carouselImg1, carouselImg2];

const CustomArrow = ({ className, style, onClick, direction }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "gray ",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                zIndex: 1,
                ...(direction === "left" ? { left: "-30px" } : { right: "-30px" }),
            }}
            onClick={onClick}
        >
            {direction === "left" ? <ArrowBackIcon sx={{ color: "white", fontSize: "30px" }} /> : <ArrowForwardIcon sx={{ color: "white", fontSize: "50px" }} />}
        </div>
    );
};

// Configuración del carrusel
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
};

const ImageCarousel = () => {
    return (
        <Box sx={{ mb: 4, width: "85%", mx: "auto", textAlign: "center", position: 'relative', margin: "20px auto" }}>
            <Typography variant="h6" color="black" fontWeight="900" sx={{ mb: 3 }}>
                Ofertas y Promociones
            </Typography>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <CardMedia
                        key={index}
                        component="img"
                        alt={`Slide ${index + 1}`}
                        image={image}
                        sx={{ height: "auto", objectFit: "contain", borderRadius: "20px" }}
                    />
                ))}
            </Slider>
        </Box>
    );
};

export default ImageCarousel;
