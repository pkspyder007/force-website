export default function InfoLeft({ title, desc, list, imgUrl }) {
  return (
    <div id="about-1">
      <section class="text-gray-700 body-font">
        <div class="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
          <div class="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 lg:mr-20 md:items-start md:text-left md:mb-0 lg:text-center">
            <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-black lg:text-left lg:text-2xl title-font">
              {title}
            </h1>
            <p class="mb-8 text-base leading-relaxed text-left text-gray-700 lg:text-left lg:text-1xl">
              {desc}
            </p>
            {list.map((ele, i) => (
              <p key={i} class="flex items-center mb-2 text-gray-600">
                <span class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </span>
                {ele}
              </p>
            ))}
          </div>
          <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              class="object-cover object-center rounded-lg "
              alt="hero"
              src={
                imgUrl ??
                "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
