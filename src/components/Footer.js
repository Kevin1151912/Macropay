import React from 'react';
import { Box } from '@mui/material';

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
          height: '400px', 
          bgcolor: '#FFD300', 
          position: 'relative', 
          marginTop: '-10px',
          left: 0, 
          width: '100%',
          zIndex: 0
        }}
      />
    </Box>
  );
};

export default FooterWithReversedWave;
