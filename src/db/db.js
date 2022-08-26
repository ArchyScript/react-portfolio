// Technologies images
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

// projects images
import architecture_hub from '../assets/project_images/architecture_hub.png'
import react_portfolio from '../assets/project_images/react_portfolio.png'
import vuetify_portfolio from '../assets/project_images/vuetify_portfolio.png'
import klienty from '../assets/project_images/klienty.png'
import netrepeneurs from '../assets/project_images/netrepeneurs.png'
import castng from '../assets/project_images/castng.png'
import stranerd from '../assets/project_images/stranerd.png'
import cowrywise_clone from '../assets/project_images/cowrywise_clone.png'
import tic_tac_toe from '../assets/project_images/tic_tac_toe.png'
import typing_game from '../assets/project_images/typing_game.png'
import quote_generator from '../assets/project_images/quote_generator.png'
import promise_card from '../assets/project_images/promise_card.png'
import matrix_calculator from '../assets/project_images/matrix_calculator.png'
import responsive_dashboard from '../assets/project_images/responsive_dashboard.png'
import simple_calculator from '../assets/project_images/simple_calculator.png'
import simple_store from '../assets/project_images/simple_store.png'
import virtual_keyboard from '../assets/project_images/virtual_keyboard.png'
import length_converter from '../assets/project_images/length_converter.png'

// backend api
export const projects_api =
  'https://archyscript-portfolio-api.herokuapp.com/api/projects'

export const techs = [
  { title: 'All' },
  { title: 'Vue JS' },
  { title: 'React JS' },
  // { title: 'HTML' },
  // { title: 'CSS' },
  { title: 'Javascript' },
  { title: 'Typescript' },
  { title: 'Nuxt JS' },
  { title: 'Node JS' },
  { title: 'Vuetify' },
  { title: 'Tailwind' },
  { title: 'Bootstrap' },
]

export const languagesAndFrameworks = [
  {
    image_link: js,
    title: 'Javascript',
    rating: 5,
  },
  {
    image_link: vue,
    title: 'Vue JS',
    rating: 5,
  },
  {
    image_link: react,
    title: 'React JS',
    rating: 4,
  },
  {
    image_link: html,
    title: 'HTML',
    rating: 5,
  },
  {
    image_link: css,
    title: 'CSS',
    rating: 5,
  },
  {
    image_link: tailwind,
    title: 'Tailwind',
    rating: 5,
  },
  {
    image_link: ts,
    title: 'Typescript',
    rating: 4,
  },
  {
    image_link: bootstrap,
    title: 'Bootstrap',
    rating: 5,
  },
  {
    image_link: vuetify,
    title: 'Vuetify',
    rating: 5,
  },
  {
    image_link: node,
    title: 'Node JS',
    rating: 4,
  },
  {
    image_link: mongodb,
    title: 'Mongodb',
    rating: 5,
  },
  {
    image_link: express,
    title: 'Express',
    rating: 4,
  },
]

export const projects = [
  {
    title: 'Architecture Hub',
    description: `A fullstack website to connect architecture student across the globe, share latest update and be creative as a team`,
    image_details: {
      title: architecture_hub,
    },
    techs: [
      'Vue JS',
      'VueX',
      'Typescript',
      'Tailwind',
      'Node JS',
      'MongoDB',
      'Express',
      'Cloudinary',
    ],
    links: {
      github: 'https://github.com/ArchyScript/Architecture-Hub',
      netlify: 'https://architecture-hub.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Portfolio Project',
    description: `A Portfolio project that`,
    image_details: {
      title: react_portfolio,
    },
    techs: ['React JS', 'Tailwind'],
    links: {
      github: 'https://github.com/ArchyScript/react-portfolio',
      netlify: 'https://archyscript.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Netrepeneurs',
    description: `A platform to groom young enterpreneurs and provide unlimited access to materials to them`,
    image_details: {
      title: netrepeneurs,
    },
    techs: ['Nuxt JS', 'Typescript', 'Vue JS'],
    links: {
      github: '',
      netlify: 'https://netrepeneurs.com/',
    },
    is_client_project: true,
    is_active: true,
  },
  {
    title: 'Klienty',
    description: `Klienty is a platform for selling services and digital skills online. It tracks all customers information, contact details and past orders, give your clients one login to manage their orders, access invoices and download deliverables or report etc.`,
    image_details: {
      title: klienty,
    },
    techs: ['Vue JS', 'Vuetify', 'Bootstrap'],
    links: {
      github: '',
      netlify: 'https://klienty.co/',
    },
    is_client_project: true,
    is_active: true,
  },
  {
    title: 'Portfolio (Vuetify)',
    description: `A Portfolio project that`,
    image_details: {
      title: vuetify_portfolio,
    },
    techs: ['Vue JS', 'Vuetify'],
    links: {
      github: 'https://github.com/ArchyScript/portfolio',
      netlify: 'https://archyscript-portfolio.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  // {
  //   title: 'Architecture Hub',
  //   description: `A website to connect all architecture students, allows them share projects together, work on team projects as a team and do other interesting things together.`,
  //   image_details: {
  //     title:
  //       'https://unbounce.com/photos/1.2_Marketingfunnel-scaled-1.webp' || '',
  //   },
  //   techs: ['Vue JS',  'Typescript', 'Tailwind'],
  //   links: {
  //     github: 'https://github.com/ArchyScript/Architecture-Hub',
  //     netlify: 'https://architecture-hub.netlify.app/auth/login',
  //   },
  //   is_client_project: false,
  //   is_active: true,
  // },
  {
    title: 'Stranerd Study Page',
    description: `An EduTech startup in Nigeria with the aim of making learning easy, convenient and accessible.`,
    image_details: {
      title: stranerd,
    },
    techs: ['Vue JS', 'Tailwind'],
    links: {
      github:
        'https://github.com/ArchyScript/stranerd-landing-page/tree/master',
      netlify: 'https://archyscript-stranerd-lading-page.netlify.app/study',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Cowrywise Clone',
    description: `Cowrywise is a savings and investment platform developed to equip individuals with the required tools to make personal financial management a lifestyle. `,
    image_details: {
      title: cowrywise_clone,
    },
    techs: ['Nuxt JS', 'Tailwind'],
    links: {
      github: 'https://github.com/ArchyScript/cowrywise-clone.git',
      netlify: 'https://cowrywise-clone.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Responsive Dashboard',
    description: `A simple responsive dashboard design`,
    image_details: {
      title: responsive_dashboard,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/simple_responsive_dashboard',
      netlify: 'https://simple-responsive-dashboard.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Cast NG',
    description: ` `,
    image_details: {
      title: castng,
    },
    techs: ['HTML', 'CSS', 'Javascript', 'Tailwind'],
    links: {
      github: 'https://github.com/ArchyScript/CastNG',
      netlify: 'https://archyscript-castng-clone.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  // {
  //   title: 'Ludo Game',
  //   description: `Just a Ludo Game`,
  //   image_details: {
  //     title: '',
  //   },
  //   techs: ['HTML', 'CSS', 'Javascript'],
  //   links: {
  //     github: 'https://github.com/ArchyScript/ludo-game',
  //     netlify: 'https://archyscript-ludo-game.netlify.app/',
  //   },
  //   is_client_project: false,
  //   is_active: true,
  // },
  {
    title: 'Tic Tac Toe Game',
    description: `A TIC TAC TOE game that allows it users set player names, keep track of players score, detects if a particular game is a tie and reset players score`,
    image_details: {
      title: tic_tac_toe,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/tic-tac-toe-game',
      netlify: 'https://archyscript-tic-tac-toe-game.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Typing Game',
    description: `A typing game that helps it's users improve their typing skills... A point is giving for each successfully typed word and a countdown timer is set... The user can has the option to selectselect different level and each of this levels have varying countdown timer`,
    image_details: {
      title: typing_game,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/typing_game',
      netlify: 'https://archyscript-typing-game.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Simple Calculator',
    description: `A simple calculator that can perform all basic arithmetic operations.`,
    image_details: {
      title: simple_calculator,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/simple_calculator',
      netlify: 'https://archyscript-simple-calculator.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Simple Store',
    description: `A simple store that allows it users... create a PRODUCER account and login with the details to add product to the store ... add available product in store to CART and purchase them... This store demo doesn't use a backend or any database technology to store data, rather, it uses the inbuilt browsers LocalStorage (NOT A REAlTIME DATABASE) to store data temporarily`,
    image_details: {
      title: simple_store,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/simple_store',
      netlify: 'https://archyscript-simple-store.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Virtual Keyboard',
    description: `A virtual keyboard that allows user type words and displays output for the user... User can change keyboard colour, height, fonts etc.`,
    image_details: {
      title: virtual_keyboard,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/virtual_keyboard',
      netlify: 'https://archyscript-virtual-keyboard.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Lenght Converter',
    description: `An app that can perform some basic unnit conversion... Also allows user select a unit as reference and base scale for other units...v User can also switch convertion scale`,
    image_details: {
      title: length_converter,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/length_converter',
      netlify: 'https://archyscript-lenght-converter.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Matrix Calculator',
    description: `An simple app that is capable of solving only basic 3x3 matrix problems... Ranging from the determinant, transpose, adjoint to the inverse of that matrix.`,
    image_details: {
      title: matrix_calculator,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/matrix_calculator',
      netlify: 'https://archyscript-matrix-calculator.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Promise Card',
    description: `A simple promise card design which allows user change background colour`,
    image_details: {
      title: promise_card,
    },
    techs: ['HTML', 'CSS'],
    links: {
      github: 'https://github.com/ArchyScript/promise_card',
      netlify: 'https://archyscript-promise-card.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  {
    title: 'Random Quote Generator',
    description: `Genarates random quote for users`,
    image_details: {
      title: quote_generator,
    },
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      github: 'https://github.com/ArchyScript/random_quote_generator',
      netlify: 'https://archyscript-quote-generator.netlify.app/',
    },
    is_client_project: false,
    is_active: true,
  },
  //   {
  //     title: 'js',
  //     description: `Javascript`,
  //     image_details: {
  //       title: '',
  //     },
  //     techs: ['', '', '', ''],
  //     links: {
  //       github: '',
  //       netlify: '',
  //     },
  //     is_client_project: false,
  //     is_active: true,
  //   },
  //   {
  //     title: 'js',
  //     description: `Javascript`,
  //     image_details: {
  //       title: '',
  //     },
  //     techs: ['', '', '', ''],
  //     links: {
  //       github: '',
  //       netlify: '',
  //     },
  //     is_client_project: false,
  //     is_active: true,
  //   },
]

// module.exports = { languagesAndFrameworks, projects }
