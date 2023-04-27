import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryButtons from "./CountryButtons";
import CategoryButtons from "./CategoryButtons";
import ArticleList from "./ArticleList";
import Loader from "./Loader";
import ArticlePopup from "./ArticlePopup";
import Pagination from "./Pagination";

function Home() {
    const [articles, setArticles] = useState([]);
    const [country, setCountry] = useState("us");
    const [category, setCategory] = useState("");
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const API_KEY = '5cc1fc2e234843e2ac5471ada9d3f2c7'

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await
                axios
                    .get(
                        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`
                    );

            setArticles(response.data.articles);
            setTotalResults(response.data.totalResults);
            setLoading(false);
        };
        fetchData();
    }, [country, category, page, pageSize]);


    const handleCountryChange = (country) => {
        setCountry(country);
    };

    const handleCategoryChange = (category) => {
        setCategory(category);
    };

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
            <h1 className="text-4xl font-bold mb-4">Top Headlines</h1>
            <div className="flex flex-wrap justify-center mb-2">
                <CountryButtons
                    country={country}
                    handleCountryChange={handleCountryChange}
                />
            </div>
            <div className="flex flex-wrap justify-center mb-6">
                <CategoryButtons
                    category={category}
                    handleCategoryChange={handleCategoryChange}
                />
            </div>

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
    )
}
export default Home;