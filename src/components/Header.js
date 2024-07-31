import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar style={{backgroundColor: '#0347B6'}}>
                <Typography style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <img
                        src="https://macropay.mx/wp-content/uploads/2022/10/Logotipo-Macropay.svg"
                        alt="Macropay Logo"
                        style={{ height: '40px' }} 
                    />
                </Typography>
                <Button 
                    color="inherit" 
                    style={{ backgroundColor: '#FFE800', color: '#0347B6', margin: '0 8px' }}
                >
                    Crea Tu Cuenta
                </Button>
                <Button 
                    color="inherit" 
                    style={{ color: 'yellow', border: 'None', margin: '0 8px' }}
                >
                    Iniciar Sesion
                </Button>
                <IconButton color="inherit">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
