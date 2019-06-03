import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = props => (
    <header>
        <nav>
            <ul className="header-links">
                <NavLink to="/" activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to="/new-question" activeClassName='active'>
                    New Question
                </NavLink>
                <NavLink to="/leaderboard">
                    Leader Board
                </NavLink>
                {
                    props.user ?
                        <div>
                            <img width="30px" alt="Remy Sharp" src={props.user.avatarURL} />
                            <span>
                                {props.user.name} |
                            </span>
                        </div>
                        : ''

                }
                <a href="/">
                    Sair
                </a>
            </ul>
        </nav>
    </header>
);

export default Header;