export default function Welcome() {
  return (
    <div
      id="#welcome"
      className="relative   items-center bg-white overflow-hidden"
    >
      <div className="relative max-w-7xl z-10 pb-8 h-full bg-white 00 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main className="flex flex-col justify-center sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Data to enrich your</span>{' '}
            <span className="block text-indigo-600 xl:inline">
              online business
            </span>
          </h1>

          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            My name is Dasaolu Daniel and I'm a Front End Developer I'm a web
            developer with a focus on the MERN stack, but still exploring other
            technologies and frameworks that catch my interest! if you're
            looking for a developer to add to your team, I'd love to hear from
            you!
            <p>
              Coming from a background in design, I love creating pages where
              I’m able to actually create enjoyable interactions and experiences
              for everyone! And with Juno’s education and support, I’m now able
              to truly call myself a Front-End Developer who is currently
              working at Indigo!
            </p>
            I am a Front End Developer, experienced in building and maintaining
            responsive websites. Proficient in HTML, CSS, JavaScript, Vue JS,
            Nuxt JS, Vuetify, Tailwind CSS, Bootstrap and other modern libraries
            and frameworks. I am very versatile with different technologies and
            I am able to adapt to new environment quickly.
          </p>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Contact Now
              </a>
            </div>
          </div>
        </main>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {/* <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        /> */}
      </div>
    </div>
  )
}
