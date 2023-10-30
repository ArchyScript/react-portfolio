import PropTypes from 'prop-types';
import React from "react";
import { FaGithub } from "react-icons/fa";
import { GiArmoredBoomerang } from "react-icons/gi";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { motion } from "framer-motion";
import { zoomIn } from "../../utils/motion"

const ProjectCard = ({ project }) => {
  return (
    <div
      className="relative border-none shadow-md pb-12 shadow-indigo-400 hover:shadow-lg hover:shadow-indigo-600 flex flex-col rounded-xl"
    >
      <div className="h-60 sm:h-72 md:h-64 w-full rounded-tl-xl rounded-tr-xl">
        <img
          src={ project.image_details.title }
          alt=""
          className="bg-gray-300 h-full w-full rounded-tl-xl rounded-tr-xl"
        />
      </div>
      <div className="z-4 flex justify-center">
        <a
          href={ project.links.netlify }
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 sm:w-20 h-14 sm:h-20 -mt-6 sm:-mt-12 p-2 bg-white flex justify-center items-center cursor-pointer rounded-full"
        >
          <GiArmoredBoomerang className='text-6xl p-1 text-indigo-600 rounded-full shadow-md hover:shadow-indigo-600' />
        </a>
      </div>

      <div className="-mt-2">
        <div className="flex justify-center flex-col items-center font-semibold text-xl lg:text-2xl mb-8">
          <h4 className="mt-8 mb-4 text-2xl sm:text-3xl text-gray-600 font-bold">
            { project.title }
          </h4>

          <div className="flex items-baseline justify-center  flex-wrap px-6 space-x-1 space-y-1">
            { project.techs.map((tech, index) => (
              <span
                key={ `${tech}_${index}` }
                className=" bg-gray-50 text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                { tech }
              </span>
            )) }
          </div>
        </div>

        { !project.is_client_project && (
          <div className="absolute bottom-0 w-full flex justify-between sm:justify-around items-center mt-8 bg-indigo-200 py-3 px-4 rounded-bl-xl rounded-br-xl">
            <span className="font-semibold text-xl">
              <a
                href={ project.links.github }
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-700 flex justify-center items-center text-base space-x-2 hover:text-black  px-3 py-2 rounded-md  font-medium"
              >
                <span> Github </span>
                <FaGithub className='text-lg text-black' />
              </a>
            </span>

            <span className="font-semibold text-xl">
              <a
                href={ project.links.netlify }
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-700 flex justify-center items-center text-base space-x-2  hover:text-black  px-3 py-2 rounded-md  font-medium"
              >
                <span>Preview</span>
                <MdOutlineRocketLaunch className='text-lg text-indigo-700' />
              </a>
            </span>
          </div>
        ) }

        { project.is_client_project && (
          <div className="absolute bottom-0 w-full flex justify-between sm:justify-around items-center mt-8 bg-indigo-200 py-3 px-4 rounded-bl-xl rounded-br-xl">
            <span className="font-semibold text-xl">
              <a
                href={ project.links.netlify }
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-700 flex justify-center items-center text-base space-x-2  hover:text-black  px-3 py-2 rounded-md  font-medium"
              >
                <span>Preview</span>
                <MdOutlineRocketLaunch className='text-lg text-indigo-700' />
              </a>
            </span>
          </div>
        ) }
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object
};

export default ProjectCard;