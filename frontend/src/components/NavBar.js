import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div>
                <div>
                    <h1>GlobalTalk</h1>
                    <Link to='/'>home</Link>
                    <Link>course</Link>
                </div>
                <div>
                    <Link to='/sign-in'>sign in</Link>
                    <Link>sign up</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;