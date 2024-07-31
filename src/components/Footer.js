import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    Your Website {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
