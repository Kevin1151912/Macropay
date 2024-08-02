import React from 'react';
import Slider from 'react-slick';
import { Box, CardMedia, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imágenes del carrusel
import carouselImg1 from '../img/banner.jpg';
import carouselImg2 from '../img/banner2.png';

const images = [carouselImg1, carouselImg2];

const CustomArrow = (props) => {
    const { className, style, onClick, direction } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "black",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                zIndex: 2,
                ...(direction === "left" ? { left: "-50px" } : { right: "-50px" }),
            }}
            onClick={onClick}
        />
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
