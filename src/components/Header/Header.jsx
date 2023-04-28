import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../Search/SearchBar';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <NavLink to="/">
                    <span className="font-semibold text-xl tracking-tight ml-2">Newsify</span>
                </NavLink>
            </div>
            <SearchBar onSearch={handleSearch} />
            <NavLink to="/saved-articles" className="ml-4 text-white hover:text-gray-400">
                <FontAwesomeIcon icon={faBookmark} size="lg" />
            </NavLink>
        </nav>
    );
}


export default Header;
