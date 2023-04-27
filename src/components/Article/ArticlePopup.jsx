import React from "react";
function ArticlePopup({ article, onClose }) {
    const { title, description, url, urlToImage } = article;

    return (
        <div className="fixed z-50 top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900 opacity-75" onClick={onClose}></div>
            <div className="z-50 w-full max-w-md p-6 mx-2 bg-white rounded-lg shadow-xl">
                <button className="absolute top-0 right-0 m-4 text-gray-700 hover:text-gray-900" onClick={onClose}>
                    <span className="sr-only">Close</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <div className="mb-4">
                    <img src={urlToImage} alt={title} className="w-full h-64 object-cover rounded-lg" />
                </div>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="text-center">
                    <a href={url} target="blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ArticlePopup