import React from "react";

function Loader() {
    return (
        <div className="flex justify-center items-center mt-4">
            <div className="w-6 h-6 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    );
}

export default Loader;