import React from 'react'

const About = () => {
  return (
    <section className="mb-16">
      <div className="bg-white py-14 lg:py-20">
        <div className="flex justify-center lg:text-5xl mb-14 ">
          <h1 className=" relative w-auto text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl ">
            <span className="block text-indigo-600  pt-4 ">About Me</span>
            <span className="absolute w-2/5 left-0 top-0 h-2  rounded-xl bg-indigo-600 "></span>
          </h1>
        </div>

        <div className="hidden md:grid gap-12 grid-cols-2  container">
          <div
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/photos/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156?k=20&m=1344688156&s=612x612&w=0&h=KXhmbh-u9uw_HLDUTiDTT36_75qkwnpjGN725w58IvU=')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className="col-span-2 md:col-span-1 flex flex-1 rounded-xl"
          >
            {/* <img
              className="flex justify-center items-center mx-auto p-2"
              src="https://media.istockphoto.com/photos/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156?k=20&m=1344688156&s=612x612&w=0&h=KXhmbh-u9uw_HLDUTiDTT36_75qkwnpjGN725w58IvU="
              alt=""
            /> */}
          </div>

          <main className=" mx-auto  col-span-2 md:col-span-1  px-4  sm:px-6  lg:px-8 ">
            <div className="text-left">
              {/* <h1 className=" relative text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl">
                <span className="block text-indigo-600  pt-4 ">About Me</span>
                <span className="absolute w-1/4 left-0 top-0 h-2  rounded-xl bg-indigo-600 "></span>
              </h1> */}

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:text-2xl lg:mx-0">
                Hello there, I'm <strong>Dasaolu Daniel</strong>.
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:text-2xl lg:mx-0">
                I am a Front End Developer, experienced in building, maintaining
                responsive websites and passionate about coding, open source,
                and the web space ❤️
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:text-2xl lg:mx-0">
                I'm a web developer focused on both MEVN and MERN stack, but
                still exploring other technologies and frameworks that catch my
                interest!
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:text-2xl lg:mx-0">
                I love creating pages where I’m able to actually create
                enjoyable interactions and experiences for everyone!
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:text-2xl lg:mx-0">
                I'd love to your team and help bring your ideas to life!
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:text-2xl lg:mx-0">
                Thanks 😃{' '}
              </p>
              {/* <div className="mt-5 sm:mt-8 sm:flex justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                  >
                    Contact Now
                  </a>
                </div>
              </div> */}
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default About
