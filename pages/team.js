import MemberCard from "@components/MemberCard";
import office from "../data/office.json";
import mentors from "../data/mentors.json";
import executives from "../data/executives.json";
import coordinators from "../data/coordinators.json";
import vollunteers from "../data/vollunteers.json";

export default function TeamPage() {
  return (
    <div>
      <section class="text-gray-700 body-font">
        <div class="container px-8 mx-auto py-6 lg:px-4">
          <div class="flex flex-col w-full mb-12 text-left lg:text-center">
            <h1 class="mb-6 mx-auto underline text-2xl font-semibold tracking-tighter text-black sm:text-6xl title-font">
              Meet The Team.
              <br class="" />
            </h1>
          </div>
        </div>
      </section>
      <h2 class="mb-4 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Faculty Coordinators
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
        <MemberCard
          name="Dr. S. SelvaKumar"
          position="Director - IIIT Una"
          img="/images/director.jpg"
        />
        <MemberCard
          name="Dr. Vikram Kumar"
          position="Faculty Coordinator"
          img="/images/vikram.jpg"
        />
        <MemberCard
          name="Ms. Ishita Vaidya"
          position="Faculty Coordinator"
          img="/images/ishitavaidya.jpg"
        />
      </div>
      <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Office Bearers
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-4">
        {office.map((m, i) => (
          <MemberCard {...m} key={`${m.name}-${i}`} />
        ))}
      </div> 
      <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Mentors
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {mentors.map((m, i) => (
          <MemberCard {...m} key={`${m.name}-${i}`} />
        ))}
      </div>
      <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Coordinators
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {coordinators.map((m, i) => (
          <MemberCard {...m} key={`${m.name}-${i}`} />
        ))}
      </div>
      <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Executive Members
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {executives.map((m, i) => (
          <MemberCard {...m} key={`${m.name}-${i}`} />
        ))}
      </div>
      {/* <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Volunteers
      </h2> */}
      {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {vollunteers.map((m, i) => (
          <MemberCard {...m} key={`${m.name}-${i}`} />
        ))}
      </div> */}
    </div>
  );
}
