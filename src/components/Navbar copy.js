import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'

function Navbar() {
  var [isOpen, setIsOpen] = useState(false)
  var [currentActive, setActiveNavLink] = useState('')
  // var [scrollShadowBoolean, handleScroll] = useState(false)
  var scrollShadowBoolean = true
  var navbarTogglerIsOpenBoolean = false

  window.addEventListener('scroll', () => handleScroll())

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      // user is scrolled
      if (scrollShadowBoolean) return (scrollShadowBoolean = false)
    } else {
      // user is at top of page
      if (!scrollShadowBoolean) scrollShadowBoolean = true
    }
  }

  const nav_links = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ]

  return (
    <nav
      className={
        '' + scrollShadowBoolean
          ? 'fixed z-50 top-0 w-full bg-gray-800 shadow-xl'
          : 'fixed z-50 top-0 w-full bg-gray-800 shadow-sm'
      }
    >
      <div className="container w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center   justify-between h-16">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center  mb-0">
                <img
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  className="mr-3 h-8 App-logo"
                  alt="Flowbite Logo"
                />
                <span className="hidden sm:inline self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  ArchyScript
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#welcome"
                  className={
                    'cursor-pointer hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium' +
                      currentActive !==
                    'dashboard'
                      ? 'text-white'
                      : 'text-blue-500'
                  }
                  onClick={() => setActiveNavLink('dashboard')}
                >
                  Dashboard
                </a>

                <a
                  href="#about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setActiveNavLink('projects')}
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex  md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700
                  hover:text-white block px-3 py-2 rounded-md text-base
                  font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  )
}

export default Navbar
