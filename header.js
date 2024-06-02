import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }} className="Header">
            <AppBar position="static">
                <Toolbar className="MuiToolbar-root">
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className="MuiIconButton-root"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" className="MuiTypography-root">
                        Gerenciamento de Projetos
                    </Typography>
                    <Button color="inherit" className="MuiButton-root">Login</Button>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account"
                        className="MuiIconButton-root"
                    >
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
