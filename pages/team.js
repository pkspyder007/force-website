import MemberCard from "@components/MemberCard";

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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-2 gap-4">
        <MemberCard />
        <MemberCard />
      </div>
      <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Office Bearers
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
      <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Mentors
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
      <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Coordinators
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
      <h2 class="my-12 text-sm text-center font-semibold tracking-widest text-blue-600 uppercase title-font">
        Executive Members
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>
  );
}
