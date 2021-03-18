import CoC from "@components/CoC";
import Hero from "@components/Hero";
import InfoLeft from "@components/InfoLeft";
import InfoRight from "@components/InfoRight";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Hero />
      <InfoLeft
        title="WHY YOU SHOULD JOIN OUR COMMUNITY"
        desc=""
        imgUrl="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        list={[
          "To improve your coding skills",
          "To become full stack developer.",
          "To excel at graphic designing.",
          "To improve your speaking skills.",
          "To learn teamwork",
        ]}
      />
      <InfoRight />
      <CoC />
    </div>
  );
}
