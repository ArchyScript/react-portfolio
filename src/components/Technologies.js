import React from 'react'
import ts from '../assets/ts.png'
import { languagesAndFrameworks } from '../db/db'

const Technologies = () => {
  return (
    <section className="bg-gray-50 pt-20 pb-32 shadow-md">
      <div className="flex flex-col justify-center lg:text-5xl mb-16 container">
        <div className="flex justify-center ">
          <h1 className=" relative flex justify-center w-auto text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl ">
            <span className="block text-indigo-600  pt-6 ">
              Languages an Frameworks
            </span>
            <span className="absolute w-1/4 top-0 left-0 h-2  rounded-xl bg-indigo-600 "></span>
          </h1>
        </div>

        <div className="w-full md:w-3/4  mx-auto flex flex-col space-y-2 my-8">
          <p className=" text-base text-center text-gray-700 sm:text-lg  sm:mx-auto  md:text-xl lg:text-2xl lg:mx-0">
            I'm <strong>proficient</strong> in HTML, CSS, JavaScript, Vue JS,
            React JS Nuxt JS, Vuetify, Tailwind CSS, Bootstrap and other modern
            libraries and frameworks
          </p>

          <p className=" text-base text-center text-gray-700  sm:text-lg  sm:mx-auto  md:text-xl lg:text-2xl lg:mx-0">
            I am very versatile with different technologies and I am able to
            adapt to new environment quickly.
          </p>
        </div>
      </div>

      <div className="grid gap-x-4 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container">
        {languagesAndFrameworks.map((languagesAndFramework) => (
          <div className="border shadow-sm rounded-md p-2 flex flex-row  items-center justify-center gap-2">
            <div className="image md:self-start lg:self-auto h-14 w-14 border border-gray-200 border-solid rounded-full mr-2">
              <img
                src={languagesAndFramework.image_link}
                alt="Javascript"
                className="rounded-full h-full w-full object-cover"
              />
            </div>

            <div className="flex-1 md:self-start lg:flex-1 space-y-2">
              <p className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-800">
                {languagesAndFramework.title}
              </p>

              <p className="flex items-center space-x-1">
                {[...Array(languagesAndFramework.rating)].map(
                  (elementInArray, index) => (
                    <span className="text-amber-400 fas fa-star"></span>
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
