// import React from 'react';
// import { Box, CardMedia, Typography, IconButton } from '@mui/material';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import carouselImg1 from '../img/banner.jpg';
// import carouselImg2 from '../img/banner2.png';

// const images = [carouselImg1, carouselImg2];

// const CustomPrevArrow = ({ onClick }) => (
//     <IconButton
//         onClick={onClick}
//         sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '10px',
//             transform: 'translateY(-50%)',
//             background: 'gray',
//             '&:hover': { background: 'darkgray' },
//             zIndex: 1
//         }}
//     >
//         <ArrowBackIcon sx={{ color: 'white', fontSize: '30px' }} />
//     </IconButton>
// );

// const CustomNextArrow = ({ onClick }) => (
//     <IconButton
//         onClick={onClick}
//         sx={{
//             position: 'absolute',
//             top: '50%',
//             right: '10px',
//             transform: 'translateY(-50%)',
//             background: 'gray',
//             '&:hover': { background: 'darkgray' },
//             zIndex: 1
//         }}
//     >
//         <ArrowForwardIcon sx={{ color: 'white', fontSize: '30px' }} />
//     </IconButton>
// );

// const ImageCarousel = () => {
//     return (
//         <Box sx={{ mb: 4, width: "85%", mx: "auto", textAlign: "center", position: 'relative', margin: "20px auto" }}>
//             <Typography variant="h6" color="black" fontWeight="900" sx={{ mb: 3 }}>
//                 Ofertas y Promociones
//             </Typography>
//             <Carousel
//                 showArrows={true}
//                 renderArrowPrev={(onClickHandler, hasPrev, label) =>
//                     hasPrev && <CustomPrevArrow onClick={onClickHandler} />
//                 }
//                 renderArrowNext={(onClickHandler, hasNext, label) =>
//                     hasNext && <CustomNextArrow onClick={onClickHandler} />
//                 }
//                 showThumbs={false}
//                 infiniteLoop={true}
//                 autoPlay={true}
//                 interval={3000}
//                 stopOnHover={true}
//                 showStatus={false}
//             >
//                 {images.map((image, index) => (
//                     <CardMedia
//                         key={index}
//                         component="img"
//                         alt={`Slide ${index + 1}`}
//                         image={image}
//                         sx={{ height: "auto", objectFit: "contain", borderRadius: "20px" }}
//                     />
//                 ))}
//             </Carousel>
//         </Box>
//     );
// };

// export default ImageCarousel;
