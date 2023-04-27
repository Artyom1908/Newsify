import React from "react";

function CountryButtons({ country, handleCountryChange }) {
    const countries = [
        { name: "us", label: "US" },
        { name: "ca", label: "Canada" },
        { name: "gb", label: "UK" },
        { name: "au", label: "Australia" },
        { name: "in", label: "India" },
    ];

    return (
        <div className="flex flex-wrap justify-center mb-8">
            {countries.map(({ name, label }) => (
                <button
                    key={name}
                    className={`mx-2 my-1 py-1 px-2 rounded-lg
                     ${country === name ?
                            "bg-gray-800 text-white"
                            : "bg-gray-300 text-gray-600"
                        }`}
                    onClick={() => handleCountryChange(name)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}

export default CountryButtons