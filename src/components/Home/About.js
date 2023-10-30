import React from 'react'
import { ts, js, css, bootstrap, express, html, react, vue, vuetify, tailwind, node, mongodb } from "../../assets"
import { Header } from '../'

const About = () => {
  return (
    <section id="about" className="">
      <div className="bg-white py-20 lg:py-32">
        <div className="flex justify-center lg:text-5xl mb-14 ">
          <Header text="About Me" />
        </div>

        <div className="grid gap-6 lg:gap-12 grid-cols-2  container px-4 sm:px-10">
          <div
            style={ {
              backgroundImage: `url(${vue})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            } }
            className="relative col-span-2  bg-opacity-50 md:col-span-1 h-52 sm:h-72 md:h-auto flex flex-1 rounded-xl"
          >
            {/* <span  */ }
            <span
              style={ { backgroundImage: `url(${react})` } }
              className="absolute bg-cover animate-pulse animate-spin top-1/4 right-1/3 h-16 w-16 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${css})` } }
              className="absolute bg-cover animate-ping top-0 left-1/2 h-16 w-16 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${tailwind})` } }
              className="absolute bg-cover animate-spin top-1/2 left-1/12 h-20 w-20 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${node})` } }
              className="absolute bg-cover animate-spin top-3/4 right-1/4 h-16 w-16 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${express})` } }
              className="absolute bg-cover  animate-bounce  top-1/4 right-2/3 h-10 w-10 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${vue})` } }
              className="absolute bg-cover animate-pulse top-1/3 left-1/3 h-44 w-44 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${ts})` } }
              className="absolute bg-cover animate-pulse top-0 right-0 h-24 w-24 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${js})` } }
              className="absolute bg-cover  animate-pulse top-1/2 right-0 h-28 w-28 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${vuetify})` } }
              className="absolute bg-cover animate-pulse  top-3/4 left-1/4  h-14 w-14 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${html})` } }
              className="absolute bg-cover animate-pulse top-0 left-0 h-24 w-24 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${mongodb})` } }
              className="absolute bg-cover animate-bounce top-2/3 left-1/3 h-14 w-14 rounded-full"
            ></span>
            <span
              style={ { backgroundImage: `url(${bootstrap})` } }
              className="absolute bg-cover  animate-spin-slow bottom-0 right-0 h-20 w-20 rounded-full"
            ></span>
          </div>

          <main className=" mx-auto  col-span-2 md:col-span-1 md:px-4 ">
            <div className="text-left">
              <p className="mt-2 text-sm text-gray-700  sm:text-base lg:text-xl lg:mx-0">
                Hello there, I am <strong>Dasaolu Daniel</strong>.
              </p>

              <p className="mt-2 text-sm text-gray-700  sm:text-base lg:text-xl lg:mx-0">
                I am a Front End Developer, experienced in building and
                maintaining responsive websites.
              </p>

              <p className="mt-2 text-sm text-gray-700  sm:text-base lg:text-xl lg:mx-0">
                I am passionate about coding, open source, and the web space ❤️.
              </p>

              <p className="mt-2 text-sm text-gray-700  sm:text-base lg:text-xl lg:mx-0">
                I am a web developer focused on both MEVN and MERN stack, but
                still exploring other technologies and frameworks that is
                related to my field of interest.
              </p>

              <p className="mt-2 text-sm text-gray-700  sm:text-base lg:text-xl lg:mx-0">
                I love designing pages where I am able to create enjoyable,
                interactive interface and experience for everyone.
              </p>

              <p className="mt-2 text-sm text-gray-700  sm:text-base lg:text-xl lg:mx-0">
                I would love to work with your team and help bring ideas to
                reality.
              </p>
              {/* I specialize in Front End Development and possess extensive experience in creating and upkeeping responsive websites.

              My enthusiasm lies in coding, open-source projects, and the ever-evolving landscape of the web ❤️.

              I am a dedicated web developer with a strong focus on both MEVN and MERN stacks, while remaining open to exploring other technologies and frameworks relevant to my field of expertise.

              I take great pleasure in crafting web pages that offer a delightful and interactive user interface, ensuring a pleasant experience for all.

              I am eager to collaborate with your team and assist in bringing innovative ideas to life.

              Thank you for your consideration 😃. */}

              <p className="mt-2 text-sm text-gray-700  sm:text-base lg:text-xl lg:mx-0">
                Thank you 😃.
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default About


/* 
About Me

Hello, I'm [Your Name], a passionate and dedicated developer with a love for crafting exceptional digital experiences. My journey in the world of web development has been a thrilling adventure, and I thrive on creating innovative solutions using a variety of tools, frameworks, and languages. Let me take you on a tour of my digital arsenal:

JavaScript: JavaScript is my muse, the language that empowers me to bring interactivity and dynamism to the web. With a deep understanding of JavaScript, I enjoy building robust, client-side applications that engage and delight users.

Vue.js and React: As a frontend enthusiast, I'm well-versed in both Vue.js and React, two powerful JavaScript frameworks that enable me to build dynamic and responsive user interfaces. I leverage these frameworks to create engaging, single-page applications and interactive components that users can't get enough of.

TypeScript: TypeScript is my trusty sidekick when it comes to enhancing code quality and maintainability. I appreciate its static typing, which helps prevent bugs and makes collaboration with my fellow developers a breeze.

HTML and CSS: These are the building blocks of the web, and I'm a master craftsman in using them. I design elegant and visually appealing user interfaces, ensuring that every pixel is in its perfect place.

Tailwind CSS and Bootstrap: When it comes to styling, I'm equally comfortable using utility-first CSS frameworks like Tailwind CSS and versatile, time-tested frameworks like Bootstrap. They help me create polished, responsive, and visually stunning designs that captivate users.

Vuetify and Bootstrap: For even more polished and feature-rich applications, I turn to Vuetify and Bootstrap. These component libraries provide a wide range of pre-built elements that streamline the development process and enhance the user experience.

Node.js: When I venture into the world of backend development, Node.js is my go-to. It allows me to build high-performance server applications with JavaScript and take full advantage of the same language stack, ensuring a seamless integration between frontend and backend.

MongoDB: As a database solution, MongoDB serves as the bedrock of my data storage and management strategy. Its flexibility and scalability empower me to handle complex data requirements with ease.

Express.js: When creating web applications, I often choose Express.js to build robust, efficient APIs that power my frontend applications. Its simplicity and speed make it the ideal companion for Node.js.
 
I'm proud to have honed my skills with these tools and to have used them to create projects across various categories, from languages to frameworks and databases. My work reflects my commitment to delivering top-quality software and my love for the ever-evolving field of web development.

With a passion for learning and a strong desire to stay at the forefront of web technologies, I'm excited to tackle new challenges and create even more amazing digital experiences. If you're looking for a developer who combines technical expertise with creativity and a genuine enthusiasm for web development, I'm the one you've been searching for.

Let's collaborate and bring your ideas to life, powered by the tools, frameworks, and languages I've mastered. 
 */


/*  
About Me

Hello, I'm [Your Name], a passionate and dedicated developer with a love for crafting exceptional digital experiences. My journey in the world of web development has been a thrilling adventure, and I thrive on creating innovative solutions using a variety of tools, frameworks, languages, and platforms. Let me take you on a tour of my digital arsenal:

JavaScript: JavaScript is my muse, the language that empowers me to bring interactivity and dynamism to the web. With a deep understanding of JavaScript, I enjoy building robust, client-side applications that engage and delight users.

Vue.js and React: As a frontend enthusiast, I'm well-versed in both Vue.js and React, two powerful JavaScript frameworks that enable me to build dynamic and responsive user interfaces. I leverage these frameworks to create engaging, single-page applications and interactive components that users can't get enough of.

TypeScript: TypeScript is my trusty sidekick when it comes to enhancing code quality and maintainability. I appreciate its static typing, which helps prevent bugs and makes collaboration with my fellow developers a breeze.

HTML and CSS: These are the building blocks of the web, and I'm a master craftsman in using them. I design elegant and visually appealing user interfaces, ensuring that every pixel is in its perfect place.

Tailwind CSS and Bootstrap: When it comes to styling, I'm equally comfortable using utility-first CSS frameworks like Tailwind CSS and versatile, time-tested frameworks like Bootstrap. They help me create polished, responsive, and visually stunning designs that captivate users.

Vuetify and Bootstrap: For even more polished and feature-rich applications, I turn to Vuetify and Bootstrap. These component libraries provide a wide range of pre-built elements that streamline the development process and enhance the user experience.

Node.js: When I venture into the world of backend development, Node.js is my go-to. It allows me to build high-performance server applications with JavaScript and take full advantage of the same language stack, ensuring a seamless integration between frontend and backend.

MongoDB: As a database solution, MongoDB serves as the bedrock of my data storage and management strategy. Its flexibility and scalability empower me to handle complex data requirements with ease.

Express.js: When creating web applications, I often choose Express.js to build robust, efficient APIs that power my frontend applications. Its simplicity and speed make it the ideal companion for Node.js.

Git, GitHub, Netlify, Vercel, and GitLab: To manage version control, collaborate with teams, and deploy projects, I rely on Git and platforms like GitHub, GitLab, Netlify, and Vercel. These tools and platforms ensure efficient and seamless project development, from code writing to deployment, with powerful CI/CD pipelines, hosting, and version control.

I'm proud to have honed my skills with this comprehensive stack of tools, frameworks, languages, and platforms and to have used them to create projects across various categories, from languages to frameworks, databases, and deployment pipelines. My work reflects my commitment to delivering top-quality software and my love for the ever-evolving field of web development.

With a passion for learning and a strong desire to stay at the forefront of web technologies, I'm excited to tackle new challenges and create even more amazing digital experiences. If you're looking for a developer who combines technical expertise with creativity and a genuine enthusiasm for web development, I'm the one you've been searching for.

Let's collaborate and bring your ideas to life, powered by the tools, frameworks, languages, and platforms I've mastered.
*/

