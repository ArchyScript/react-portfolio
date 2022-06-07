import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 sm:py-8 bg-gray-800 shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="md:flex md:items-center md:justify-between container md:px-6">
        <a
          href="#"
          className="flex justify-center md:justify-start items-center mb-6 sm:mb-8 md:mb-0 "
        >
          <img
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            className="mr-3 h-8 App-logo"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ArchyScript
          </span>
        </a>

        <ul className="flex flex-wrap items-center justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400 space-x-2 gap-y-4">
          <li>
            <a
              href="#"
              className="cursor-pointer hover:bg-gray-700 text-gray-400 text-base hover:text-white  px-3 py-2 rounded-md  font-medium"
            >
              <span className="fab fa-github mr-2"></span>
              <span>Github</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/oluwatoyin.dasaolu.9/?_rdc=1&_rdr"
              className="cursor-pointer hover:bg-gray-700 text-gray-400 text-base hover:text-white  px-3 py-2 rounded-md  font-medium"
            >
              <span className="fab fa-facebook mr-2"></span>
              <span>Facebook</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/archyscript/"
              className="cursor-pointer hover:bg-gray-700 text-gray-400 text-base hover:text-white px-3 py-2 rounded-md  font-medium"
            >
              <span className="fab fa-linkedin mr-2"></span>
              <span>LinkedIn</span>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/ArchyScript"
              className="cursor-pointer hover:bg-gray-700 text-gray-400 text-base hover:text-white px-3 py-2 rounded-md  font-medium"
            >
              <span className="fab fa-twitter mr-2"></span>
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <span className="block text-sm text-gray-500 text-center dark:text-gray-400 container  px-4 sm:px-10">
        <span className="text-base ">© 2022 </span>
        <a
          href="#"
          className="cursor-pointer text-gray-400 text-base hover:text-white   font-medium"
        >
          ArchyScript™
        </a>
        <span className="text-base ">. All Rights Reserved.</span>
      </span>
    </footer>
  )
}

export default Footer
