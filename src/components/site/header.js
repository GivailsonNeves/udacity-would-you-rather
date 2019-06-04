import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = props => (
    <header>
        <nav>
            <ul className="header-links">
                <NavLink to="/" exact activeClassName='active'>
                    Home
                </NavLink>
                <NavLink to="/add" activeClassName='active'>
                    New Question
                </NavLink>
                <NavLink to="/leaderboard">
                    Leader Board
                </NavLink>
                <div className="user-place">
                    {
                        props.user ?
                            <div>
                                <img width="30px" alt="Remy Sharp" src={props.user.avatarURL} />
                                <span>
                                    {props.user.name}
                                </span>
                            </div>
                            : ''

                    }
                    <button onClick={props.logOut}>
                        logout
                    </button>
                </div>
            </ul>
        </nav>
    </header>
);

export default Header;