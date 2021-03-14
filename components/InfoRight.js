export default function InfoRight() {
  return (
    <div>
      <section class="flex flex-wrap items-center h-screen md">
        <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600/F3F4F7/8693ac"
          />
        </div>
        <div class="container w-full h-screen bg-white md:w-1/2">
          <div class="mx-5 lg:mx-32 ">
            <a class="flex items-center w-48 mt-32 mb-4 font-medium text-gray-900 title-font md:mb-0 lg:mt-16">
              <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
              <h2 class="font-semibold tracking-tighter uppercase transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold lg:mr-8"></h2>
            </a>
            <div class="flex mt-16 font-light text-gray-500">
              <div class="pr-4">
                <h1 class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
                  What We Do?
                </h1>
              </div>
            </div>
            <div class="w-full mt-16 text-base font-medium text-gray-700 sm:md:w-3/3 mb-8leading-relaxed">
              FORCE is the association of computer science enthusiasts of
              IIITU,aimed at lending a helping hand to all the beginners in the
              world of programming.We have BITERATION,a student chapter on
              codechef of IIIT Una to provide students a platform to compete
              against the best of minds.Our other events inclue short and long
              challenges,a technical fest MERAKI and a yearly hackathon.
            </div>
            {/* <div class="flex mt-12">
              <button class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                Action
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
