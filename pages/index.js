import Hero from "@components/Hero";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Hero />
    </div>
  );
}
