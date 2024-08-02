import React from 'react';
import { Box, Typography, TextField, Grid, Link, IconButton } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FooterWithReversedWave = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="220px"
        viewBox="0 0 1440 194"
        fill="none"
        preserveAspectRatio="none"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        <mask id="mask0_36_429" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="194">
          <rect width="1440" height="194" fill="#FFD300"></rect>
        </mask>
        <g mask="url(#mask0_36_429)">
          <path
            opacity="0.9"
            d="M237.354 501.398C237.354 501.398 56.1472 444.163 185.762 192.369C315.376 -59.4248 480.759 193.424 715.107 151.483C949.456 109.541 1202.82 -53.7721 1394.75 41.4802C1593.61 140.17 1478.85 448.317 1478.85 448.317L1484.46 478.486C1336.23 549.121 1234.54 578.788 1066.31 587.499C951.643 593.437 816.503 581.949 699.458 521.214C591.362 465.121 286.739 469.234 237.354 501.398Z"
            fill="#0347B6"
          ></path>
          <path
            d="M0 514V65.8777C180 -8.51191 411.946 101.585 641.477 165.262C834.112 218.704 980.336 172.403 1177.25 125.984C1334.78 88.8491 1418.05 131.935 1440 158.121V514H0Z"
            fill="url(#paint0_linear_36_429)"
          ></path>
        </g>
        <defs>
          <linearGradient id="paint0_linear_36_429" x1="720" y1="41" x2="720" y2="514" gradientUnits="userSpaceOnUse">
            <stop offset="100%" stopColor="#FFD300"></stop>
            <stop offset="100%" stopColor="#0347B6"></stop>
          </linearGradient>
        </defs>
      </Box>
      <Box
        sx={{
          height: '350px',
          bgcolor: '#FFD300',
          position: 'relative',
          marginTop: '-10px',
          left: 0,
          width: '100%',
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'absolute', top: '100px', left: 0, right: 0, zIndex: 2, color: '#0347B6', padding: '40px', marginLeft: '25px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ textAlign: 'left', mt: 5 }}>
            <Typography variant="h8" fontWeight="800" gutterBottom sx={{ color: '#0242A4' }} >
              OFERTAS Y PROMOCIONES
            </Typography>
            <Typography marginTop={"20px"} variant="h3" fontWeight="800" gutterBottom sx={{ color: '#2B3445' }}>
              No te pierdas
            </Typography>
            <Typography marginTop={"-20px"} variant="h3" fontWeight="800" gutterBottom sx={{ color: '#2B3445' }}>
              nuestras ofertas!
            </Typography>
            <TextField
              variant="standard"
              fullWidth
              placeholder="Tu dirección de correo electrónico"
              sx={{ my: 2 }}
              InputProps={{
                endAdornment: (
                  <IconButton color="primary" style={{ transform: 'scale(2.5)' }} >
                    <TelegramIcon />
                  </IconButton>
                ),
              }}
            />
            <Grid container alignItems="center" sx={{ mt: 3 }}>
              <Grid
                item
                xs={12}
                md={3}
                sx={{
                  backgroundColor: '#0242A4',
                  borderRadius: '14px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '55px'
                }}
              >
                <img
                  src="https://macropay.mx/wp-content/uploads/2022/10/Logotipo-Macropay.svg"
                  alt="Macropay Logo"
                  style={{ height: '38px' }}
                />
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} marginLeft={"50px"}>
                    <Link href="#" color="inherit" sx={{ display: 'block', color: '#333' }}>
                      Envíos y devoluciones
                    </Link>
                    <Link href="#" color="inherit" sx={{ display: 'block', color: '#333' }}>
                      Aviso de privacidad
                    </Link>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Link href="#" color="inherit" sx={{ display: 'block', color: '#333' }}>
                      Preguntas Frecuentes
                    </Link>
                    <Link href="#" color="inherit" sx={{ display: 'block', color: '#333' }}>
                      Términos y condiciones
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center', justifyContent: 'left', mt: 19 }}>
            <Typography variant="h3" fontWeight="800" gutterBottom sx={{ color: '#333' }}>
              ¡Conversemos!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#333', fontSize: '17px', fontWeight: '500' }}>
              Lorem ipsum dolor sit amet
            </Typography>
            <IconButton color="black" sx={{ transform: 'scale(2.2)', mx: 2 }}>
              <FacebookIcon />
            </IconButton>
            <IconButton color="#333333" sx={{ transform: 'scale(2.2)', mx: 2 }}>
              <InstagramIcon />
            </IconButton>
            <IconButton color="#333333" sx={{ transform: 'scale(2.2)', mx: 2 }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton color="#333333" sx={{ transform: 'scale(2.2)', mx: 2 }}>
              <WhatsAppIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 4, textAlign: 'left   ', color: '#333' }}>
          Todos los derechos reservados - © Macropay 2022
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterWithReversedWave;
