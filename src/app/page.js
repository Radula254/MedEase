import Banner from "@/components/layout/Banner/Banner";
import Hero from "@/components/layout/Hero/Hero";
import NewsLetter from "@/components/layout/NewsLetter/NewsLetter";
import Partners from "@/components/layout/Partners/Partners";
import Team from "@/components/layout/Team/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Banner />
      <Partners />
      <NewsLetter />
    </>
  );
}
