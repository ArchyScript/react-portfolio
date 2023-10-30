import React from "react"

const Button = ({ text, ...others }) => {
    return (
        <button
        >
            {/* <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
                Contact Now
            </a> */}
            { text }
        </button>
    );
};

export default Button;