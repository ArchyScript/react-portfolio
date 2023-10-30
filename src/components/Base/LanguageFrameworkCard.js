import React from 'react'

const LanguageFrameworkCard = ({ stack }) => {
    return (
        <div
            className="bg-gray-100 shadow-md rounded-md py-3 px-3 flex flex-row  items-center justify-center gap-2"
        >
            <div className="image md:self-start lg:self-auto h-10 sm:h-14 w-10 sm:w-14 shadow-md border-gray-200 border-solid rounded-full mr-2">
                <img
                    src={ stack.image_link }
                    alt="Javascript"
                    className="rounded-full h-full w-full object-cover"
                />
            </div>

            <div className="flex-1 md:self-start lg:flex-1 space-y-2">
                <p className="text-sm sm:text-lg lg:text-xl font-bold text-gray-700">
                    { stack.title }
                </p>

                <p className="flex items-center space-x-1">
                    { [...Array(stack.rating)].map(
                        (elementInArray, index) => (
                            <span key={ `${elementInArray}_${index}` }>
                                <svg
                                    className="h-3 md:h-4 fill-amber-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                >
                                    <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                                </svg>
                            </span>
                        ),
                    ) }
                </p>
            </div>
        </div>
    )
}

export default LanguageFrameworkCard