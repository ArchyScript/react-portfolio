import React from 'react'
import { languagesAndFrameworks } from '../db/db'

const Technologies = () => {
  return (
    <section className="bg-gray-50 py-32 shadow-md">
      <div className="flex flex-col justify-center lg:text-5xl mb-16 container">
        <div className="flex justify-center ">
          <h1 className=" relative flex justify-center w-auto text-4xl tracking-tight font-bold sm:font-extrabold text-gray-900 lg:text-5xl ">
            <span className="block text-indigo-600   pt-2 sm:pt-6 ">
              Languages and Frameworks
            </span>
            <span className="absolute w-1/4 top-0 left-0 h-1 sm:h-2  rounded-xl bg-indigo-600 "></span>
          </h1>
        </div>

        <div className="w-full md:w-3/4  mx-auto flex flex-col space-y-2 my-8">
          <p className=" text-base text-center text-gray-700 sm:text-xl  sm:mx-auto  md:text-xl lg:text-2xl lg:mx-0 font-normal">
            I'm proficient in HTML, CSS, JavaScript, Vue JS, React JS Nuxt JS,
            Vuetify, Tailwind CSS, Bootstrap and other modern libraries and
            frameworks
          </p>

          <p className=" text-base text-center text-gray-700  sm:text-xl  sm:mx-auto  md:text-xl lg:text-2xl lg:mx-0">
            I am very versatile with different technologies and I am able to
            adapt to new environment quickly.
          </p>
        </div>
      </div>

      <div className="grid gap-x-4 gap-y-2 sm:gap-y-4 lg:gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container px-4 sm:px-10">
        {languagesAndFrameworks.map((languagesAndFramework, index) => (
          <div
            key={`${languagesAndFramework}_${index}`}
            className="bg-gray-100 shadow-md rounded-md py-3 px-3 flex flex-row  items-center justify-center gap-2"
          >
            <div className="image md:self-start lg:self-auto h-10 sm:h-14 w-10 sm:w-14 shadow-md border-gray-200 border-solid rounded-full mr-2">
              <img
                src={languagesAndFramework.image_link}
                alt="Javascript"
                className="rounded-full h-full w-full  object-cover"
              />
            </div>

            <div className="flex-1 md:self-start lg:flex-1 space-y-2">
              <p className="text-sm sm:text-lg lg:text-xl font-bold text-gray-700">
                {languagesAndFramework.title}
              </p>

              <p className="flex items-center space-x-1">
                {[...Array(languagesAndFramework.rating)].map(
                  (elementInArray, index) => (
                    <span key={`${elementInArray}_${index}`}>
                      <svg
                        className="h-3 md:h-4 fill-amber-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        {' '}
                        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                      </svg>
                    </span>
                  ),
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
