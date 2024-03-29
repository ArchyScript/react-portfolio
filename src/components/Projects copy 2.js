import React, { useEffect } from 'react'
import { useState } from 'react'
import { projects, techs } from '../db/db'
import { Link } from 'react-router-dom'

const Projects = () => {
  const [tech, setTech] = useState('All')
  const [at_least_a_project, setAtLeastSingleProjectBoolean] = useState(true)

  const [active_classname, setClassName] = useState('')
  const [filteredProjects, setFilteredProject] = useState(projects)
  const allLanguageAndFrameworks = 5

  const setClassNameFunction = () => {
    techs.forEach((tech) => {})
  }

  useEffect(() => {
    if (tech === 'All') return setFilteredProject(projects)

    const displayProjects = []

    for (
      let all_project_index = 0;
      all_project_index < projects.length;
      all_project_index++
    ) {
      let techs = projects[all_project_index].techs
      for (
        let all_tech_per_project_index = 0;
        all_tech_per_project_index < techs.length;
        all_tech_per_project_index++
      ) {
        if (techs[all_tech_per_project_index] == tech) {
          displayProjects.push(projects[all_project_index])
        }
      }
    }
    setFilteredProject(displayProjects)

    if (displayProjects.length >= 1) {
      setAtLeastSingleProjectBoolean(true)
    } else {
      setAtLeastSingleProjectBoolean(false)
    }
    // if (displayProjects !== []) {
    // } else {
    //   setFilteredProject(null)
    // }
  }, [tech])

  const filterTechs = (tech_title) => {
    setTech(tech_title)
  }

  return (
    <section id="projects" className="bg-white py-32 shadow-md">
      <div className="flex flex-col justify-center lg:text-5xl mb-16 container">
        <div className="flex justify-center  mb-6 md:mb-8">
          <h1 className=" relative w-auto text-4xl tracking-tight font-bold sm:font-extrabold text-gray-900 lg:text-5xl ">
            <span className="block text-indigo-600  pt-2 sm:pt-4 ">
              Projects
            </span>
            <span className="absolute w-2/5 left-0 top-0 h-1 sm:h-2  rounded-xl bg-indigo-600 "></span>
          </h1>
        </div>

        {/* // className={active_classname} */}
        {/* <div className="flex items-baseline justify-center flex-wrap  space-x-1 sm:space-x-2 lg:space-x-3 space-y-1  sm:space-y-2">
          {techs.map((tech, index) => (
            <span
              key={index}
              onClick={() => filterTechs(tech.title)}
              className="cursor-pointer select-none bg-gray-50 text-gray-700 px-5 py-2 rounded-md text-sm font-medium shadow-sm"
            >
              {tech.title}
            </span>
          ))}
        </div> */}
      </div>

      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 container rounded-xl px-4 sm:px-10">
        {filteredProjects.map((project, index) =>
          filteredProjects.length >= 0 ? (
            <div
              key={`${project}_${index}`}
              className="relative border-none shadow-md pb-12 shadow-indigo-400 hover:shadow-lg hover:shadow-indigo-600 flex flex-col rounded-xl"
            >
              <div className="h-60 sm:h-72 md:h-64 w-full rounded-tl-xl rounded-tr-xl">
                <img
                  src={project.image_details.title}
                  alt=""
                  className="bg-gray-300 h-full w-full rounded-tl-xl rounded-tr-xl"
                />
              </div>

              <div className="z-4 flex justify-center">
                <div className="w-14 sm:w-20 h-14 sm:h-20 -mt-6 sm:-mt-12 p-4 bg-white flex justify-center items-center cursor-pointer rounded-full">
                  <span className="fa fa-share-square bg-gray-50 p-2 sm:p-4 rounded-full text-indigo-600 text-2xl sm:text-3xl  shadow-md hover:shadow-indigo-600"></span>
                </div>
              </div>

              <div className="-mt-2">
                <div className="flex justify-center flex-col items-center font-semibold text-xl lg:text-2xl mb-8">
                  <h4 className="mt-8 mb-4 text-2xl sm:text-3xl text-gray-600 font-bold">
                    {project.title}
                  </h4>

                  <div className="flex items-baseline justify-center  flex-wrap px-6 space-x-1 space-y-1">
                    {project.techs.map((tech, index) => (
                      <span
                        key={`${tech}_${index}`}
                        className=" bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 w-full flex justify-between sm:justify-around items-center mt-8 bg-indigo-100 py-3 px-4 rounded-bl-xl rounded-br-xl">
                  <span className="font-semibold text-xl">
                    <a
                      href={project.links.github}
                      className="cursor-pointer text-gray-600 text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                    >
                      <span>Github</span>
                      <span className="fab fa-github ml-2"></span>
                    </a>
                  </span>

                  <span className="font-semibold text-xl">
                    <a
                      href={project.links.netlify}
                      className="cursor-pointer text-gray-600 text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                    >
                      <span>Preview</span>
                      <span className="fa fa-edit ml-2"></span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center text-center items-center font-bold text-2xl">
              <span className="block justify-center mb-8 text-4xl tracking-tight font-bold sm:font-extrabold  lg:text-5xl  text-indigo-600  pt-2 sm:pt-4 ">
                Oops 😥😥!
              </span>
              No Project created using this Framework or Language
            </div>
          ),
        )}{' '}
      </div>

      <div className="flex  justify-center lg:text-5xl mt-16 md:mt-28 container">
        <div className="rounded-md shadow">
          <Link
            to="/projects"
            className="w-full flex items-center justify-center px-8 py-3 sm:px-14 border border-transparent text-base sm:text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
