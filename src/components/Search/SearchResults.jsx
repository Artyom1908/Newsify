import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleList from "./ArticleList";
import ArticlePopup from "./ArticlePopup";
import Loader from "./Loader";
import Pagination from "./Pagination";

function SearchResults({ query }) {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalResults, setTotalResults] = useState(0);
    const API_KEY = '5cc1fc2e234843e2ac5471ada9d3f2c7';
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
            );
            setArticles(response.data.articles);
            setTotalResults(response.data.totalResults);

            setLoading(false);
        };
        fetchData();
    }, [query, page, pageSize, API_KEY]);

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    const handleClosePopup = () => {
        setSelectedArticle(null);
    };
    const handlePageChange = (page) => {
        setPage(page);
    };


    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Search Results | {query}</h1>

            {loading ? (
                <Loader />
            ) : (
                <div>
                    <ArticleList
                        articles={articles}
                        handleArticleClick={handleArticleClick}
                    />
                    <Pagination
                        currentPage={page}
                        totalPages={Math.ceil(totalResults / pageSize)}
                        onPageChange={handlePageChange}
                    />
                </div>

            )}
            {selectedArticle && (
                <ArticlePopup article={selectedArticle} onClose={handleClosePopup} />
            )}
        </div>
    );
}

export default SearchResults;
