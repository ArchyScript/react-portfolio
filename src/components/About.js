import React from 'react'
import web from '../assets/web.png'
import archyscript from '../assets/archyscript.jpg'
import ts from '../assets/ts.png'
import js from '../assets/js.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import express from '../assets/expressjs.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import vue from '../assets/vue.png'
import vuetify from '../assets/vuetify.svg'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.jpeg'
import mongodb from '../assets/mongodb.png'

const About = () => {
  return (
    <section id="about" className="">
      <div className="bg-white py-20 lg:py-32">
        <div className="flex justify-center lg:text-5xl mb-14 ">
          <h1 className=" relative w-auto text-4xl tracking-tight font-bold sm:font-extrabold text-gray-900 lg:text-5xl ">
            <span className="block text-indigo-600  pt-2 sm:pt-4 ">
              About Me
            </span>
            <span className="absolute w-2/5 left-0 top-0 h-1 sm:h-2  rounded-xl bg-indigo-600 "></span>
          </h1>
        </div>

        <div className="grid gap-6 lg:gap-12 grid-cols-2  container px-4 sm:px-10">
          <div
            style={{
              backgroundImage: `url(${web})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className="relative col-span-2  bg-opacity-50 md:col-span-1 h-52 sm:h-72 md:h-auto flex flex-1 rounded-xl"
          >
            <span
              style={{ backgroundImage: `url(${archyscript})` }}
              className="absolute bg-cover animate-pulse bottom-0 left-0 h-24 w-24 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${react})` }}
              className="absolute bg-cover animate-pulse animate-spin top-1/4 right-1/3 h-16 w-16 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${css})` }}
              className="absolute bg-cover animate-ping top-0 left-1/2 h-16 w-16 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${tailwind})` }}
              className="absolute bg-cover animate-spin top-1/2 left-1/12 h-20 w-20 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${node})` }}
              className="absolute bg-cover animate-spin top-3/4 right-1/4 h-16 w-16 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${express})` }}
              className="absolute bg-cover  animate-bounce  top-1/4 right-2/3 h-10 w-10 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${vue})` }}
              className="absolute bg-cover animate-pulse top-1/3 left-1/3 h-44 w-44 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${ts})` }}
              className="absolute bg-cover animate-pulse top-0 right-0 h-24 w-24 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${js})` }}
              className="absolute bg-cover  animate-pulse top-1/2 right-0 h-28 w-28 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${vuetify})` }}
              className="absolute bg-cover animate-pulse  top-3/4 left-1/4  h-14 w-14 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${html})` }}
              className="absolute bg-cover animate-pulse top-0 left-0 h-24 w-24 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${mongodb})` }}
              className="absolute bg-cover animate-bounce top-2/3 left-1/3 h-14 w-14 rounded-full"
            ></span>
            <span
              style={{ backgroundImage: `url(${bootstrap})` }}
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
