import InfoLeft from "@components/InfoLeft";

export default function WallOfFame() {
  return (
    <div>
      <section class="text-gray-700 body-font">
        <div class="container px-8 py-6 mx-auto lg:px-4">
          <div class="flex flex-col w-full mb-1 text-left lg:text-center">
            <h1 class="mb-6 underline text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font">
              HONORS AND ACHIEVMENTS
            </h1>
            <p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
              The members of FORCE have achieved some great achievments around
              the country.
            </p>
          </div>
        </div>
        <InfoLeft
          title="Smart India Hackathon"
          desc="Team 1"
          list={[
            " Shubham Kamboj",
            "Arpana Mehta",
            "Mratyunjay Soni",
            "Anurag Chandel",
            "Devesh Singh",
            "Abhijeet Rai",
          ]}
        />

        <InfoLeft
          title="Smart India Hackathon"
          desc="Team 2"
          list={[
            "Priyank Kumar Gupta",
            "Pradeep Kumar",
            "Kritagya Khandewal",
            "Kaish Ansari",
            "Anshu Akansha",
            "Ayushi Agrawal",
          ]}
        />
        <InfoLeft
          title="ACM-ICPC"
          desc="Team 1"
          list={["Amit Yadav", "Udit Gulati", "Anurag Bansal"]}
        />
        <InfoLeft
          title="ACM-ICPC"
          desc="Team 2"
          list={["Jatin Nagpal", "Anany Sharma", "Anant Kumar"]}
        />
        <InfoLeft
          title="GSOC"
          desc="These students were selected for the Google Summer of Code."
          list={["Shivam Tripathi", "Udit Gulati"]}
        />
      </section>
    </div>
  );
}
