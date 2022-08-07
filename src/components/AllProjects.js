import React, { useEffect } from 'react'
import { useState } from 'react'
import { projects, techs } from '../db/db'

const Projects = () => {
  const [current_tech, setTech] = useState('All')
  const [filteredProjects, setFilteredProject] = useState(projects)
  const [techClasses, setActiveClass] = useState({
    active:
      'cursor-pointer select-none bg-gray-600 text-gray-50 px-3 py-1 sm:py-2 rounded-md text-sm font-medium shadow-sm',
    inactive:
      'cursor-pointer select-none bg-gray-50 text-gray-700 px-3 py-1 sm:py-2 rounded-md text-sm font-medium shadow-sm sm:shadow-md',
  })

  useEffect(() => {
    const filterProject = () => {
      if (current_tech === 'All') return setFilteredProject(projects)
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
          if (techs[all_tech_per_project_index] === current_tech) {
            displayProjects.push(projects[all_project_index])
          }
        }
      }
      setFilteredProject(displayProjects)
    }

    filterProject()
    setActiveClass(techClasses)
  }, [current_tech, techClasses])

  return (
    <section className="bg-white py-32 pb -80 shadow-md">
      <div className="flex flex-col justify-center lg:text-5xl mb-16 container">
        <div className="flex justify-center  mb-6 md:mb-8">
          <h1 className=" relative w-auto text-4xl tracking-tight font-bold sm:font-extrabold text-gray-900 lg:text-5xl ">
            <span className="block text-indigo-600  pt-2 sm:pt-4 ">
              Projects
            </span>
            <span className="absolute w-2/5 left-0 top-0 h-1 sm:h-2  rounded-xl bg-indigo-600 "></span>
          </h1>
        </div>

        <div className="flex items-baseline justify-center flex-wrap  space-x-1 sm:space-x-2 lg:space-x-3 space-y-1 px-4 sm:px-8 sm:space-y-2">
          {techs.map((eachTech, index) => (
            <span
              key={index}
              onClick={() => {
                setTech(eachTech.title)
              }}
              className={
                current_tech === eachTech.title
                  ? techClasses.active
                  : techClasses.inactive
              }
            >
              {eachTech.title}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 xl:gr id-cols-3 container rounded-xl px-4 sm:px-10">
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
                <a
                  href={project.links.netlify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 sm:w-20 h-14 sm:h-20 -mt-6 sm:-mt-12 p-2 bg-white flex justify-center items-center cursor-pointer rounded-full"
                >
                  <svg
                    className="fill-indigo-600 p-2  rounded-full shadow-md hover:shadow-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M568.9 143.5l-150.9-138.2C404.8-6.773 384 3.039 384 21.84V96C241.2 97.63 128 126.1 128 260.6c0 54.3 35.2 108.1 74.08 136.2c12.14 8.781 29.42-2.238 24.94-16.46C186.7 252.2 256 224 384 223.1v74.2c0 18.82 20.84 28.59 34.02 16.51l150.9-138.2C578.4 167.8 578.4 152.2 568.9 143.5zM416 384c-17.67 0-32 14.33-32 32v31.1l-320-.0013V128h32c17.67 0 32-14.32 32-32S113.7 64 96 64H64C28.65 64 0 92.65 0 128v319.1c0 35.34 28.65 64 64 64l320-.0013c35.35 0 64-28.66 64-64V416C448 398.3 433.7 384 416 384z" />
                  </svg>
                </a>
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

                {!project.is_client_project && (
                  <div className="absolute bottom-0 w-full flex justify-between sm:justify-around items-center mt-8 bg-indigo-200 py-3 px-4 rounded-bl-xl rounded-br-xl">
                    <span className="font-semibold text-xl">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-gray-700 text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                      >
                        <span>Github</span>
                        <span className="fab fa-github ml-2"></span>
                      </a>
                    </span>

                    <span className="font-semibold text-xl">
                      <a
                        href={project.links.netlify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-gray-700 text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                      >
                        <span>Preview</span>
                        <span className="fa fa-edit ml-2"></span>
                      </a>
                    </span>
                  </div>
                )}

                {project.is_client_project && (
                  <div className="absolute bottom-0 w-full flex justify-between sm:justify-around items-center mt-8 bg-indigo-200 py-3 px-4 rounded-bl-xl rounded-br-xl">
                    <span className="font-semibold text-xl">
                      <a
                        href={project.links.netlify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-gray-700 text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                      >
                        <span>Preview</span>
                        <span className="fa fa-edit ml-2"></span>
                      </a>
                    </span>
                  </div>
                )}
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
    </section>
  )
}

export default Projects
