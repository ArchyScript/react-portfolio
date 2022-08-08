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
                        className="cursor-pointer text-gray-700 flex justify-center items-center text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                      >
                        <span>Github</span>
                        <svg
                          className="ml-2 h-4 sm:h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                        >
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>{' '}
                      </a>
                    </span>

                    <span className="font-semibold text-xl">
                      <a
                        href={project.links.netlify}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-gray-700 flex justify-center items-center text-base hover:text-black  px-3 py-2 rounded-md  font-medium"
                      >
                        <span>Preview</span>
                        <svg
                          className="ml-2 h-3 sm:h-4 fill-indigo-700"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z" />
                        </svg>
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
