import Header from "./_components/Header";
import HomeAbout from "./_components/HomeAbout";
import HomeHero from "./_components/HomeHero";

export default function Home() {
  return (
    <div className="">
      <div className="relative">
        <section className="hero bg-cover min-h-screen bg-center bg-fixed pb-[100px]">
          <Header />
          <HomeHero />
        </section>
      </div>
      <HomeAbout />
      
    </div>
  );
}
