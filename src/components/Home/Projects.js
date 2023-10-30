import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../db'
import { ProjectCard, Header } from '../'
//
const Projects = () => {
  return (
    <section id="projects" className="bg-white py-32 shadow-md">
      <div className="flex flex-col justify-center lg:text-5xl mb-16 container">
        <div className="flex justify-center  mb-6 md:mb-8">
          <Header text="Projects" />
        </div>
      </div>

      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 container rounded-xl px-4 sm:px-10">
        { projects.map(
          (project, index) =>
            index <= 3 && (
              <ProjectCard key={ `${project}_${index}` } project={ project } />
            ),
        ) }
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
