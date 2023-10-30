import React, { useEffect, useState } from 'react'
import { projects, techs } from '../../db'
import { Header, ProjectCard, Tabs } from '../'
import { motion } from "framer-motion";

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [filteredProjects, setFilteredProject] = useState(projects)

    useEffect(() => {
        const filterProject = () => {
            if (activeTab === 'All') return setFilteredProject(projects)
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
                    if (techs[all_tech_per_project_index] === activeTab) {
                        displayProjects.push(projects[all_project_index])
                    }
                }
            }
            setFilteredProject(displayProjects)
        }

        filterProject()
    }, [activeTab])

    return (
        <section className="bg-white py-32 pb -80 shadow-md">
            <div className="flex flex-col justify-center lg:text-5xl mb-16 container">
                <div className="flex justify-center  mb-6 md:mb-8">
                    <Header text="Projects" />
                </div>

                <Tabs tabs={ techs } onSelectActiveTab={ (active_tab) => setActiveTab(active_tab) } />

                {/* <div className="flex items-baseline justify-center flex-wrap  space-x-1 sm:space-x-2 lg:space-x-3 space-y-1 px-4 sm:px-8 sm:space-y-2">
                    { techs.map((eachTech, index) => (
                        <span
                            key={ index }
                            onClick={ () => {
                                setTech(eachTech.title)
                            } }
                            className={
                                current_tech === eachTech.title
                                    ? techClasses.active
                                    : techClasses.inactive
                            }
                        >
                            { eachTech.title }
                        </span>
                    )) }
                </div> */}
            </div>

            <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 xl:gr id-cols-3 container rounded-xl px-4 sm:px-10">
                { filteredProjects.map((project, index) =>
                    filteredProjects.length >= 0 ? (
                        <ProjectCard key={ `${project}_${index}` } project={ project } />
                    ) : (
                        <div className="flex flex-col justify-center text-center items-center font-bold text-2xl">
                            <span className="block justify-center mb-8 text-4xl tracking-tight font-bold sm:font-extrabold  lg:text-5xl  text-indigo-600  pt-2 sm:pt-4 ">
                                Oops 😥😥!
                            </span>
                            No Project created using this Framework or Language yet
                        </div>
                    ),
                ) }{ ' ' }
            </div>
        </section>
    )
}

export default Projects
