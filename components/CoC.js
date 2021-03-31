export default function CoC() {
  return (
    <div>
      <section class="text-gray-700 body-font">
        <div class="container px-8 mx-auto pt-6 lg:px-4">
          <div class="flex flex-col w-full mb-12 text-left lg:text-center">
            <h1 class="mb-6 mx-auto underline text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
              Recent Posts
              <br class="" />
            </h1>
            <div className="flex flex-wrap mb-20 justify-evenly">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6776176767473369088"
                height="540"
                // width="50%"
                style={{boxShadow:"1px 1px 1px 2px"}}
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
                className="mt-6 flex w-full md:w-1/4"
              ></iframe>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6772123843155902464"
                height="540"
                // width="50%"
                style={{boxShadow:"1px 1px 1px 2px"}}
                frameborder="0"
                allowfullscreen=""
                title="Embedded post"
                className="mt-6 w-full md:w-1/4"
              ></iframe>
            </div>

            <div class="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-black bg-gray-200 rounded-full">
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="34"
                height="24"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M5.68 7.314l-1.82 5.914L12 19.442l8.14-6.214-1.82-5.914L16.643 11H7.356L5.681 7.314zM15.357 9l2.888-6.354a.4.4 0 0 1 .747.048l3.367 10.945a.5.5 0 0 1-.174.544L12 21.958 1.816 14.183a.5.5 0 0 1-.174-.544L5.009 2.694a.4.4 0 0 1 .747-.048L8.644 9h6.712z" />
              </svg>
            </div>

            <h1 class="mb-6 mx-auto underline text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
              Code Of Conduct
              <br class="" />
            </h1>
            <p class="mx-auto text-lg font-medium leading-relaxed text-gray-700 lg:w-2/3">
              In FORCE we maintain a high level of respect towards everyone and
              we aspect everyone to follow our Code Of Conduct
            </p>
          </div>
          {/* coc */}
          <ul className="list-disc text-base font-medium leading-relaxed text-gray-700 w-2/3 mx-auto">
            <li className="py-2 text-sm">Be friendly and welcoming</li>
            <li className="py-2 text-sm">
              Be patient Remember that people have varying communication styles
              and that not everyone is using their native language. (Meaning and
              tone can be lost in translation.)
            </li>
            <li className="py-2 text-sm">
              Be thoughtful Productive communication requires effort. Think
              about how your words will be interpreted.
            </li>
            <li className="py-2 text-sm">
              Remember that sometimes it is best to refrain entirely from
              commenting.
            </li>
            <li className="py-2 text-sm">
              Be respectful In particular, respect differences of opinion.
            </li>
            <li className="py-2 text-sm">
              Be charitable Interpret the arguments of others in good faith, do
              not seek to disagree.
            </li>
            <li className="py-2 text-sm">
              When we do disagree, try to understand why.
            </li>
            <li className="py-2 text-sm">
              Avoid destructive behavior: Derailing: stay on topic; if you want
              to talk about something else, start a new conversation.
            </li>
            <li className="py-2 text-sm">
              Unconstructive criticism: don’t merely decry the current state of
              affairs; offer—or at least solicit—suggestions as to how things
              may be improved.
            </li>
            <li className="py-2 text-sm">
              Snarking (pithy, unproductive, sniping comments)
            </li>
            <li className="py-2 text-sm">
              Discussing potentially offensive or sensitive issues; this all too
              often leads to unnecessary conflict.
            </li>
            <li className="py-2 text-sm">
              Microaggressions: brief and commonplace verbal, behavioral and
              environmental indignities that communicate hostile, derogatory or
              negative slights and insults to a person or grou
            </li>
            <li className="py-2 text-sm">
              Be mindful of your language. Any of the following behavior is
              unacceptable
            </li>
            <li className="py-2 text-sm">
              Offensive comments related to gender identity and expression,
              sexual orientation, race, ethnicity, language, neuro-type, size,
              ability, class, religion, culture, subculture, political opinion,
              age, skill level, occupation, or background
            </li>
            <li className="py-2 text-sm">Threats of violence</li>
            <li className="py-2 text-sm">Deliberate intimidation.</li>
            <li className="py-2 text-sm">
              Sexually explicit or violent material
            </li>
            <li className="py-2 text-sm">Unwelcome sexual attention</li>
            <li className="py-2 text-sm">Stalking or following</li>
            <li className="py-2 text-sm">Or any other kinds of harassment</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
