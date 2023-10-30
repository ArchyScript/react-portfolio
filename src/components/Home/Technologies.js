import React, { useEffect, useState } from 'react'
import { Header, Tabs, LanguageFrameworkCard } from '../'
import { languagesAndFrameworks, librariesAndFrameworks } from '../../db'

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [filteredTools, setFilteredTools] = useState(languagesAndFrameworks)

  useEffect(() => {
    const filterProject = () => {
      if (activeTab === 'All') return setFilteredTools(languagesAndFrameworks)
      const displayTools = []

      languagesAndFrameworks.forEach((tool) => {
        let category = tool.category
        if (category === activeTab) displayTools.push(tool)
      })

      setFilteredTools(displayTools)
    }

    filterProject()
  }, [activeTab])

  return (
    <section className="bg-gray-50 py-32 shadow-md">
      <div className="flex flex-col justify-center lg:text-5xl mb-16 container">
        <div className="flex justify-center mb-6 ">
          <Header text="Languages and Frameworks" />
        </div>

        <Tabs tabs={ librariesAndFrameworks } onSelectActiveTab={ (active_tab) => setActiveTab(active_tab) } />

        <div className="w-full md:w-3/4  mx-auto flex flex-col space-y-2 my-8">
          <p className=" text-base text-center text-gray-700 sm:text-xl  sm:mx-auto  md:text-xl lg:text-2xl lg:mx-0 font-normal">
            I bring extensive expertise in web technologies and frameworks, prioritizing exceptional user experiences. I excel in JavaScript, Vue.js, and React.js, while Nuxt.js, Vuetify, Tailwind CSS, and Bootstrap are my trusted allies. TypeScript enhances my code quality, and I'm highly proficient in HTML and CSS. MongoDB is my strong suit for data solutions, and I harness the power of Node.js and Express.js for robust server-side development. I ensure seamless collaboration and deployment through Git, GitHub, Netlify, Vercel, and GitLab.
            {/* I possess extensive expertise in a diverse array of web technologies and frameworks, with a strong focus on delivering exceptional user experiences. I'm exceptionally skilled in JavaScript and its various libraries, including Vue.js and React.js, showcasing my mastery for dynamic capabilities. Nuxt.js, Vuetify, Tailwind CSS, and Bootstrap are my trusted allies in crafting top-notch designs and functionality, consistently earning acclaim for their contributions to outstanding projects. With an emphasis on quality and performance, I also work with TypeScript, which complements my skill set with its strong typing and code maintainability. In addition, I'm highly proficient in HTML and CSS, the building blocks of the web, ensuring that every pixel is perfectly placed. My database skills include MongoDB, where my expertise shines brightly, offering robust data solutions. I leverage Node.js and Express.js for powerful server-side development, utilizing their capabilities to streamline applications effectively. To ensure seamless collaboration and deployment, I rely on Git, GitHub, Netlify, Vercel, and GitLab, with each platform adding significant value to my development process. */ }
          </p>

          {/* <p className=" text-base text-center text-gray-700  sm:text-xl  sm:mx-auto  md:text-xl lg:text-2xl lg:mx-0">
            I am very versatile with different technologies and I am able to
            adapt to new environment quickly.
          </p> */}
        </div>
      </div>

      <div className="grid gap-x-4 gap-y-2 sm:gap-y-4 lg:gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container px-4 sm:px-10">
        { filteredTools.map((languagesAndFramework, index) => (
          <LanguageFrameworkCard stack={ languagesAndFramework } key={ `${languagesAndFramework}_${index}` } />
        )) }
      </div>
    </section>
  )
}

export default Technologies

/* 
do it in tabs like the project filter  

Languages & Databases
Java PHP JavaScript Python MySQL
Frameworks & Technologies
Android   React   Nodejs
Tools & Platforms
Vercel git github netlify heroku 

Frontend Developer with expertise in Java, PHP, JavaScript, and Python, working with databases like MySQL. Proficient in building user interfaces using frameworks and technologies such as Android, React, and Node.js. Experienced in deploying and hosting applications on platforms like Vercel, Git, GitHub, Netlify, and Heroku.
*/
