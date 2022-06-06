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
import node from '../assets/node.png'
import mongodb from '../assets/mongodb.png'

export const languagesAndFrameworks = [
  {
    image_link: js,
    title: 'Javascript',
    rating: 5,
  },
  {
    image_link: ts,
    title: 'Typescript',
    rating: 3,
  },
  {
    image_link: bootstrap,
    title: 'Bootstrap',
    rating: 5,
  },
  {
    image_link: css,
    title: 'CSS',
    rating: 5,
  },
  {
    image_link: react,
    title: 'React JS',
    rating: 3,
  },
  {
    image_link: node,
    title: 'Node JS',
    rating: 4,
  },
  {
    image_link: html,
    title: 'HTML',
    rating: 5,
  },
  {
    image_link: mongodb,
    title: 'Mongodb',
    rating: 5,
  },
  {
    image_link: tailwind,
    title: 'Tailwind',
    rating: 5,
  },
  {
    image_link: vue,
    title: 'Vue',
    rating: 5,
  },
  {
    image_link: express,
    title: 'Express',
    rating: 4,
  },
  {
    image_link: vuetify,
    title: 'Vuetify',
    rating: 5,
  },
]

export const projects = [
  {
    title: 'Portfolio',
    descriptions: `A Portfolio project that `,
    image_details: {
      title: 'https://archyscript-portfolio.netlify.app/img/home.2a85ebe0.png',
    },
    techs: ['Vue JS', 'Vuetify'],
    links: {
      github: 'https://github.com/ArchyScript',
      netlify: 'https://archyscript-portfolio.netlify.app/',
    },
    is_client_project: true,
    main_framework: {
      title: '',
    },
    is_active: true,
  },
  {
    title: 'Netrepeneurs',
    descriptions: `Javascript`,
    image_details: {
      title: 'https://netrepeneurs.com/_nuxt/img/logo.ca236d8.png',
    },
    techs: ['Nuxt JS', 'Typescript', 'Vue JS'],
    links: {
      github: '',
      netlify: '',
    },
    is_client_project: true,
    main_framework: {
      title: '',
    },
    is_active: true,
  },
  {
    title: 'Klienty',
    descriptions: `Klienty is a platform for selling services and digital skills online. It tracks all customers information, contact details and past orders, give your clients one login to manage their orders, access invoices and download deliverables or report etc.`,
    image_details: {
      title: 'https://klienty.co/imgs/logo_with_name.png',
    },
    techs: ['Vue JS', 'Vuetify', 'Bootstrap', 'Tailwind'],
    links: {
      github: '',
      netlify: '',
    },
    is_client_project: true,
    main_framework: {
      title: '',
    },
    is_active: true,
  },
  {
    title: 'Landing Pages',
    descriptions: `Javascript`,
    image_details: {
      title: 'https://unbounce.com/photos/1.2_Marketingfunnel-scaled-1.webp',
    },
    techs: ['Vue JS', 'Vuetify', 'Tailwind'],
    links: {
      github: 'https://github.com/ArchyScript',
      netlify: 'https://archyscript-landing-pages.netlify.app/',
    },
    is_client_project: true,
    main_framework: {
      title: '',
    },
    is_active: true,
  },
  //   {
  //     title: 'js',
  //     descriptions: `Javascript`,
  //     image_details: {
  //       title: '',
  //     },
  //     techs: ['', '', '', ''],
  //     links: {
  //       github: '',
  //       netlify: '',
  //     },
  //     is_client_project: true,
  //     main_framework: {
  //       title: '',
  //     },
  //     is_active: true,
  //   },
]

// module.exports = { languagesAndFrameworks, projects }
