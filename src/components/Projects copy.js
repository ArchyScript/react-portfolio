import React, { useEffect } from 'react'
import { useState } from 'react'
import { languagesAndFrameworks, projects, techs } from '../db/db'

const Portfolio = () => {
  const [tech, setTech] = useState('all')
  const [filteredProjects, setFilteredProject] = useState('all')
  const allLanguageAndFrameworks = 5

  useEffect(() => {}, [tech])

  const filterTechs = (tech_title) => {
    setTech(tech_title)
  }

  return (
    <section className="bg-white pt-20 pb-32 shadow-md">
      <div className="flex flex-col justify-center lg:text-5xl mb-16 container">
        <div className="flex justify-center mb-8">
          <h1 className=" relative flex justify-center w-auto text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl ">
            <span className="block text-indigo-600 pt-4 ">Projects</span>
            <span className="absolute w-1/4 top-0 left-0 h-2  rounded-xl bg-indigo-600 "></span>
          </h1>
        </div>

        <div className="flex items-baseline justify-center  flex-wrap px-6 space-x-1 space-y-1">
          {techs.map((tech) => (
            <span
              onClick={() => filterTechs(tech.title)}
              className="cursor-pointer bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              {tech.title}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 container rounded-xl">
        {projects.map((project) => (
          <div className="border-none shadow-sm hover:shadow-lg flex flex-col  rounded-xl">
            <div className="h-64 w-full">
              <img
                src={project.image_details.title}
                alt=""
                className="bg-gray-300 h-full w-full rounded-tl-xl rounded-tr-xl"
              />
            </div>

            <div className="">
              <div className="flex justify-center flex-col items-center font-semibold text-xl lg:text-2xl mb-8">
                <h4 className="mt-8 mb-4  text-2xl text-gray-700 font-medium">
                  {project.title}
                </h4>

                <div className="flex items-baseline justify-center  flex-wrap px-6 space-x-1 space-y-1">
                  {project.techs.map((tech) => (
                    <span className="cursor-pointer bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between sm:justify-around items-center mt-8 bg-indigo-100 py-3 px-4 rounded-bl-xl rounded-br-xl">
                <span className="font-semibold text-xl">
                  <a
                    href={project.links.github}
                    className="cursor-pointer text-gray-600 text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                  >
                    <span className="fab fa-github mr-2"></span>
                    <span>Github</span>
                  </a>
                </span>

                <span className="font-semibold text-xl">
                  <a
                    href={project.links.netlify}
                    className="cursor-pointer text-gray-600 text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                  >
                    <span className="fa fa-edit mr-2"></span>
                    <span>Preview</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}{' '}
        {/* {[...Array(allLanguageAndFrameworks)].map((elementInArray, index) => (
          <div className="border-none shadow-sm hover:shadow-xl flex flex-col  rounded-xl">
            <div className="h-64 w-full">
              <img
                src="https://images.ctfassets.net/qz1k4i0kbshi/3nPlgAwM66GBSTOFcBbvwR/04357b2be0ce6af1d6e0afc7e5c030a6/Screen_Shot_2021-11-13_at_3.39.02_PM.png?w=600&h=317&q=50"
                alt=""
                className="bg-gray-300 h-full w-full rounded-tl-xl rounded-tr-xl"
              />
            </div>

            <div className="">
              <div className="flex justify-center flex-col items-center font-semibold text-xl lg:text-2xl mb-8">
                <h4 className="mt-8 mb-4">Project Title</h4>

                <div className="flex items-baseline justify-center  flex-wrap px-6 space-x-1 space-y-1">
                  {[...Array(techs)].map((elementInArray, index) => (
                    <span className="cursor-pointer bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                      Dashboard
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between sm:justify-around items-center mt-8 bg-indigo-100 py-2 px-4 rounded-bl-xl rounded-br-xl">
                <span className="font-semibold text-xl">Tst</span>
                <span className="font-semibold text-xl">Tst</span>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  )
}

export default Portfolio
