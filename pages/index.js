import CoC from "@components/CoC";
import Hero from "@components/Hero";
import InfoLeft from "@components/InfoLeft";
import InfoRight from "@components/InfoRight";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Hero />
      <InfoLeft />
      <InfoRight />
      <CoC />
    </div>
  );
}
