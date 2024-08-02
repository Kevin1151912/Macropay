import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button>
                    <ListItemText primary="Crea Tu Cuenta" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Iniciar Sesión" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="static">
            <Toolbar style={{ backgroundColor: '#0347B6', display: 'flex', justifyContent: 'space-between' }}>
                <Typography style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <img
                        src="https://macropay.mx/wp-content/uploads/2022/10/Logotipo-Macropay.svg"
                        alt="Macropay Logo"
                        style={{ height: '40px' }} 
                    />
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {isMobile ? (
                        <>
                            <IconButton color="inherit" onClick={toggleDrawer(true)} sx={{ color: "white" }}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                                {drawerList}
                            </Drawer>
                        </>
                    ) : (
                        <>
                            <Button 
                                color="inherit" 
                                style={{ backgroundColor: '#FFD300', color: '#0347B6', margin: '0 8px' }}
                            >
                                Crea Tu Cuenta
                            </Button>
                            <Button 
                                color="inherit" 
                                style={{ color: '#FFD300', border: 'None', margin: '0 8px' }}
                            >
                                Iniciar Sesión
                            </Button>
                        </>
                    )}
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
