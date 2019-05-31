import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul className="header-links">
                <NavLink to="/" activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to="/new-question" activeClassName='active'>
                    New Question
                </NavLink>
                <a href="/">
                    Leader Board
                </a>
                    <img width="30px" alt="Remy Sharp" src="https://www.rbsdirect.com.br/imagesrc/24945082.jpg?w=700" />
                <span>
                    Eva Green |
                </span>
                <a href="/">
                    Sair
                </a>
            </ul>
        </nav>
    </header>
);

export default Header;