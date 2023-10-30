import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Header } from '../'

const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const [displayMessage, setMessageAndStatus] = useState({
    is_success: false,
    message: '',
  })
  const messageClass = {
    success:
      'px-4 text-center flex-wrap text-green-700 font-medium mb-6 text-sm sm:text-lg',
    error:
      'text-center px-4 flex-wrap text-red-600 text-sm font-medium  mb-6 text-sm sm:text-lg',
  }

  const form = useRef()

  const setErrorTimeout = (event) => {
    setTimeout(() => {
      setMessageAndStatus({
        is_success: false,
        message: '',
      })
    }, 4000)

    if (event === 'success') {
      setFullname('')
      setMessage('')
      setEmail('')
      // document.getElementById('fullname').value = ''
      // document.getElementById('email').value = ''
      // document.getElementById('message').value = ''
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (!fullname || !email || !message) {
      setMessageAndStatus({
        is_success: false,
        message: 'Kindly fill every field available',
      })

      return setErrorTimeout()
    }

    // if (!email.match(regexEmail)) {
    //   setMessageAndStatus({
    //     is_success: false,
    //     message: 'Email must be valid',
    //   })
    //   return setErrorTimeout()
    // }

    if (message.length <= 10) {
      setMessageAndStatus({
        is_success: false,
        message: 'Message must be more than 10 character',
      })
      return setErrorTimeout()
    }

    let SERVICE_ID = 'service_b6xxwsr'
    let TEMPLATE_ID = 'template_2zgwkid'
    let PUBLIC_KEY = 'user_fWc4DiIEXOB22gp3YINne'

    // let SERVICE_ID = process.env.SERVICE_ID
    // let TEMPLATE_ID = process.env.TEMPLATE_ID
    // let PUBLIC_KEY = process.env.PUBLIC_KEY

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setMessageAndStatus({
          is_success: true,
          message: 'Thanks for contacting me, I will reply as soon as possible',
        })

        return setErrorTimeout('success')
      },
      (error) => {
        setMessageAndStatus({
          is_success: false,
          message: 'Ooops! an error occured... Check your network connection',
        })

        return setErrorTimeout()
      },
    )
  }

  return (
    <section id="contact" className="bg-gray-50 py-32">
      <div className="flex justify-center lg:text-5xl mb-16 ">
        <Header text="Contact Me" />
      </div>

      <div className="grid  gap-6 lg:gap-12 grid-cols-2 container  px-4 sm:px-10 ">
        <div className="col-span-2 md:col-span-1 flex flex-1 rounded-xl bg-gray-50">
          <iframe
            title="My location on map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4780243331024!2d4.514757714131398!3d7.522723112828835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10383121b271345d%3A0x849b0d4f6592cedc!2sDepartment%20of%20Architecture%20OAU!5e0!3m2!1sen!2sng!4v1654473330142!5m2!1sen!2sng"
            loading="lazy"
            className="rounded-md h-auto sm:h-64 w-full md:h-auto"
          ></iframe>
        </div>

        <div className="  col-span-2 md:col-span-1 ">
          <form
            ref={ form }
            onSubmit={ sendEmail }
            className="w-full  flex justify-start flex-col"
          >
            <span
              className={
                displayMessage.is_success
                  ? messageClass.success
                  : messageClass.error
              }
            >
              { displayMessage.message }
            </span>

            <div className="p-1 mb-3">
              <label className="block mb-2 mx-2  text-base text-left  sm:text-lg font-semibold text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                className="block border border-gray-200 rounded-xl w-full py-4 px-6  outline-none"
                name="user_fullname"
                placeholder="Fullname"
                onInput={ (event) => setFullname(event.target.value) }
                required
              />
            </div>

            <div className="p-1 mb-3">
              <label className="block mb-2 mx-2  text-base text-left  sm:text-lg font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="block border border-gray-200 rounded-xl w-full py-4 px-6  outline-none"
                name="user_email"
                placeholder="Email"
                onInput={ (event) => setEmail(event.target.value) }
                required
              />
            </div>

            <div className="p-1 mb-3">
              <label className="block mb-2 mx-2  text-base text-left  sm:text-lg font-semibold text-gray-600">
                Message
              </label>
              <div className="h-full">
                <textarea
                  name="message"
                  className="block border border-gray-200 py-4 px-6  outline-none rounded-lg resize-none w-full h-full"
                  placeholder="Please send a message..."
                  onInput={ (event) => setMessage(event.target.value) }
                  required
                ></textarea>
              </div>
            </div>

            <div className="p-1">
              <button
                type="submit"
                className="text-base w-full overflow-hidden text-center py-4 rounded-xl bg-indigo-600 text-white hover:bg-green-dark focus:outline-none mt-6 "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
