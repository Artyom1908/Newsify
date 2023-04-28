import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addArticle } from "../../Store/slices/SavedArticles";

function ArticleList({ articles, handleArticleClick }) {
    const dispatch = useDispatch();

    const AddArticle = (article) => {
        dispatch(addArticle(article))
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
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
                            <FontAwesomeIcon onClick={() => AddArticle(article)} icon={faBookmark} />
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

        </div>
    );
}

export default ArticleList;
