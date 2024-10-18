import Header from "./_components/Header";
import HomeAbout from "./_components/HomeAbout";
import HomeHero from "./_components/HomeHero";

export default function Home() {
  return (
    <div className="">
      <section className="hero min-h-screen bg-cover bg-center bg-fixed pb-[50px]">
        <Header />
        <HomeHero />
      </section>
      <HomeAbout />
      
    </div>
  );
}
