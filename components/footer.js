export default function Footer() {
  return (
    <>
      <section className="">
        {/* <div className="container w-full p-20 m-4 mx-auto my-8 text-center bg-white border-2 border-dashed h-60 border-blueGray-300 rounded-xl">
          <p className="mt-20 italic tracking-tighter text-md text-blueGray-500 title-font">
            -- Content goes here --
          </p>
        </div> */}
      </section>
      <footer className="text-gray-700 border-t body-font">
        <div className="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
          {/* <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left lg:w-1/4 md:w-1/2">
            <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start ">
              <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 className="text-2xl font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400">
                FORCE
              </h2>
            </a>
          </div> */}
          {/* <div className="w-full px-4 lg:w-1/3 md:w-1/2"></div> */}
          <div className="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 ">
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 className="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                Events
              </h1>
              <span className="text-sm text-gray-600 hover:text-gray-800">
               No Events Yet
              </span>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 className="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                Links
              </h1>
              <nav className="mb-10 list-none">
                <li>
                  <a
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/#about-1"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="/walloffame"
                    className="text-sm text-gray-600 hover:text-gray-800"
                  >
                    Wall Of Fame
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h1 className="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font">
                About Force
              </h1>
              <nav className="mb-10 list-none">
                <li>
                  <a className="text-sm text-gray-600 hover:text-gray-800">
                    FORCE is the association of computer science in IIIT Una.
                    Our main objective is to encourage open source
                    software,improving coding culture,project building and
                    introducing new platforms to work on
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
            <p className="text-sm text-center text-gray-200 sm:text-left ">
              © 2021 <strong> Force</strong>
            </p>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className="text-white hover:text-blue-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-white hover:text-blue-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-white hover:text-blue-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
