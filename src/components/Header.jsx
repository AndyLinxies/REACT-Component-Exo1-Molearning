import React from 'react';
import Nav from './Nav'
import Search from './SearchBar'
const Header = () => {
    return (
        <div className='heading'>
            <Nav />
            <Search />
        </div>
    );
};

export default Header;