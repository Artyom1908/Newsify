import React from 'react';
import { useParams } from 'react-router-dom';
import SearchResults from './SearchResults';

function SearchPage() {
    const { query } = useParams();

    return (
        <div>
            <SearchResults query={query} />
        </div>
    );
}

export default SearchPage;
