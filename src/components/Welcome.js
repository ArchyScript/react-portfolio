import React from 'react'

const Welcome = () => {
  return (
    <section>
      {/* mobile view */}
      <div
        className="block md:hidden bg-opacity-50"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <main className=" w-full bg-gray-50 opacity-90  h-full mx-auto  col-span-2 md:col-span-1  py-24  sm:py-28">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-900 ">
              <span className="blocktext-gray-700">Hello there 😃!</span>{' '}
              <span className="block text-indigo-600 ">Dasaolu Daniel</span>
            </h1>

            <p className=" text-base text-gray-700 mt-4 sm:mt-5 w-5/6  sm:max-w-xl mx-auto">
              I'm a Front End Developer I'm a web developer with a focus on the
              MERN and MEVN stack, but still exploring other technologies and
              frameworks that catch my interest! if you're looking for a
              developer to add to your team, I'd love to hear from you!
            </p>

            <div className="mt-5 sm:mt-8 flex justify-center">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* medium size and desktop mode */}
      <div className="bg-gray-50 py-32 hidden md:block ">
        <div className="grid gap-12 grid-cols-2 container">
          <main className=" mx-auto  col-span-2 md:col-span-1  px-4  sm:px-6  lg:px-8 ">
            <div className="text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl">
                <span className="block xl:inline">Hello there 😃!</span>{' '}
                <span className="block text-indigo-600 xl:inline">
                  Dasaolu Daniel
                </span>
              </h1>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:text-2xl lg:mx-0">
                I'm a Front End Developer I'm a web developer with a focus on
                the MERN stack, but still exploring other technologies and
                frameworks that catch my interest! if you're looking for a
                developer to add to your team, I'd love to hear from you!
              </p>

              <div className="mt-5 sm:mt-8 sm:flex justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 "
                  >
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </main>

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
        </div>
      </div>
    </section>
  )
}

export default Welcome
