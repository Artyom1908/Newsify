import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ArticlePopup from "../Article/ArticlePopup";
import { removeArticle } from "../../Store/slices/SavedArticles";

function SavedArticles() {
    const savedArticles = useSelector((store) => store.savedArticles.savedArticles);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const dispatch = useDispatch();
    console.log(savedArticles);
    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };
    const handleClosePopup = () => {
        setSelectedArticle(null);
    };

    const RemoveArticle = (article) => {
        dispatch(removeArticle(article))

    }
    if (savedArticles.length === 0) {
        return (<div className="flex items-center justify-center h">
            <h2 className="text-6xl text-gray-800">There is nothing saved</h2>
        </div>)
    }
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Saved Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedArticles.map((article, i) => (
                    <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4">
                        <img
                            src={
                                article.urlToImage ||
                                "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                            }
                            alt={article.title}
                            className="rounded-t-lg object-cover w-full h-48"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{article.title}</div>
                            <p className="text-gray-700 text-base">{article.description}</p>
                            <Link to="#" className="block text-right mt-4" onClick={() => handleArticleClick(article)}>
                                Read More
                            </Link>
                        </div>

                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {article.source.name}
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <FontAwesomeIcon icon={faTimes} onClick={() => RemoveArticle(article)} />
                            </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <FontAwesomeIcon
                                    icon={faShareAlt}
                                    onClick={() => {
                                        navigator.share({
                                            title: article.title,
                                            text: article.description,
                                            url: article.url,
                                        });
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                ))}
                {selectedArticle && (
                    <ArticlePopup article={selectedArticle} onClose={handleClosePopup} />
                )}
            </div>
        </div>
    );
}


export default SavedArticles;
