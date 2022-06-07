import React from 'react'

const Contact = () => {
  const sendMessage = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="bg-gray-50 py-32">
      <div className="flex justify-center lg:text-5xl mb-16 ">
        <h1 className=" relative w-auto text-4xl tracking-tight font-bold sm:font-extrabold text-gray-900 lg:text-5xl ">
          <span className="block text-indigo-600  pt-2 sm:pt-4 ">
            Contact Me
          </span>
          <span className="absolute w-2/5 left-0 top-0 h-1 sm:h-2  rounded-xl bg-indigo-600 "></span>
        </h1>
      </div>

      <div className="grid  gap-6 lg:gap-12 grid-cols-2 container  px-4 sm:px-10 ">
        <div className="col-span-2 md:col-span-1 flex flex-1 rounded-xl">
          <iframe
            title="My location on map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.4780243331024!2d4.514757714131398!3d7.522723112828835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10383121b271345d%3A0x849b0d4f6592cedc!2sDepartment%20of%20Architecture%20OAU!5e0!3m2!1sen!2sng!4v1654473330142!5m2!1sen!2sng"
            loading="lazy"
            className="rounded-md h-auto sm:h-64 w-full md:h-auto"
          ></iframe>
        </div>

        <div className="bg-r ed-500 col-span-2 md:col-span-1 ">
          <form
            onSubmit={sendMessage}
            className="w-full  flex justify-start flex-col"
          >
            <div className="p-1 mb-3">
              <label className="block mb-2 mx-2  text-base text-left  sm:text-lg font-semibold text-gray-600">
                Fullname{' '}
              </label>
              <input
                type="text"
                className="block border border-gray-200 rounded-xl w-full py-4 px-6  outline-none"
                name="text"
                placeholder="Fullname"
              />
            </div>

            <div className="p-1 mb-3">
              <label className="block mb-2 mx-2  text-base text-left  sm:text-lg font-semibold text-gray-600">
                Email{' '}
              </label>
              <input
                type="email"
                className="block border border-gray-200 rounded-xl w-full py-4 px-6  outline-none"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="p-1 mb-3">
              <label className="block mb-2 mx-2  text-base text-left  sm:text-lg font-semibold text-gray-600">
                Message
              </label>
              <div className="h-full">
                <textarea
                  className="block border border-gray-200 py-4 px-6  outline-none rounded-lg resize-none w-full h-full"
                  placeholder="Please send a message..."
                ></textarea>
              </div>
            </div>

            <div className="p-1">
              <button
                type="submit"
                className="text-base w-full overflow-hidden text-center py-4 rounded-xl bg-indigo-600 text-white hover:bg-green-dark focus:outline-none mt-6 "
              >
                Send Message
                {/* <span className="far fa-comments"></span> */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
