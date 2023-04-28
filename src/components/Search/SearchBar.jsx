import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
        if (query === '') return
        navigate(`/search/${query}`);
        setQuery('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Search articles"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-gray-200 rounded-full py-2 px-4 w-full sm:w-80 text-sm sm:text-base focus:outline-none"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-0 mt-2 mr-2 text-gray-800"
                >
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                </button>
            </div>
        </form>
    );
}

export default SearchBar;