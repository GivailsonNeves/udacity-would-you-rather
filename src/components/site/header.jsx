import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const Header = () => (
    <AppBar position="fixed" color="primary">
        <Toolbar>
            <ul className="header-links">
                <Link color="inherit">
                    Home
                </Link>
                <Link color="inherit">
                    New Question
                </Link>
                <Link color="inherit">
                    Leader Board
                </Link>
                    <Avatar alt="Remy Sharp" src="https://www.rbsdirect.com.br/imagesrc/24945082.jpg?w=700" />
                <span>
                    Eva Green |
                </span>
                <Link color="inherit">
                    Sair
                </Link>
            </ul>
        </Toolbar>
    </AppBar>
);

export default Header;