import React from "react";

function CategoryButtons({ category, handleCategoryChange }) {
    const categories = [
        { name: "", label: "All" },
        { name: "business", label: "Business" },
        { name: "entertainment", label: "Entertainment" },
        { name: "health", label: "Health" },
        { name: "science", label: "Science" },
        { name: "sports", label: "Sports" },
        { name: "technology", label: "Technology" },
    ];

    return (
        <div className="flex flex-wrap justify-center mb-8">
            {categories.map(({ name, label }) => (
                <button
                    key={name}
                    className={`mx-2 my-1 py-1 px-2 rounded-lg
                     ${category === name ?
                            "bg-gray-800 text-white" :
                            "bg-gray-200 text-gray-700"
                        }`}
                    onClick={() => handleCategoryChange(name)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default CategoryButtons