export default function InfoRight() {
  return (
    <div>
      <section class="text-gray-700 body-font">
        <div class="container flex flex-col items-center px-5 py-6 mx-auto lg:px-20 lg:py-24 md:flex-row">
          <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
          </div>
          <div class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
            <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-black lg:text-left lg:text-5xl title-font">
              What We Do?
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-gray-700 lg:text-left lg:text-1xl">
              FORCE is the association of computer science enthusiasts of
              IIITU,aimed at lending a helping hand to all the beginners in the
              world of programming.We have BITERATION,a student chapter on
              codechef of IIIT Una to provide students a platform to compete
              against the best of minds.Our other events inclue short and long
              challenges,a technical fest MERAKI and a yearly hackathon.
            </p>
            <p class="w-full mt-2 mb-8 text-sm text-left text-gray-600">
              Peanut butter jelly time, yeah.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
