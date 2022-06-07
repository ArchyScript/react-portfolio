import React from 'react'

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
              backgroundImage:
                "url('https://media.istockphoto.com/photos/portrait-of-a-man-using-a-computer-in-a-modern-office-picture-id1344688156?k=20&m=1344688156&s=612x612&w=0&h=KXhmbh-u9uw_HLDUTiDTT36_75qkwnpjGN725w58IvU=')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
            className="col-span-2 md:col-span-1 h-52 sm:h-72 md:h-auto flex flex-1 rounded-xl"
          ></div>

          <main className=" mx-auto  col-span-2 md:col-span-1 md:px-4 ">
            <div className="text-left">
              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-xl lg:text-2xl lg:mx-0">
                Hello there, I'm <strong>Dasaolu Daniel</strong>.
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-xl lg:text-2xl lg:mx-0">
                I am a Front End Developer, experienced in building, maintaining
                responsive websites and passionate about coding, open source,
                and the web space ❤️
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-xl lg:text-2xl lg:mx-0">
                I'm a web developer focused on both MEVN and MERN stack, but
                still exploring other technologies and frameworks that catch my
                interest!
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-xl lg:text-2xl lg:mx-0">
                I love creating pages where I’m able to actually create
                enjoyable interactions and experiences for everyone!
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-xl lg:text-2xl lg:mx-0">
                I'd love to your team and help bring your ideas to life!
              </p>

              <p className="mt-2 text-base text-gray-700 sm:mt-3 sm:text-xl lg:text-2xl lg:mx-0">
                Thanks 😃{' '}
              </p>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default About
