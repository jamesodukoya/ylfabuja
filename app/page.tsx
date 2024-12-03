"use client"
import { useEffect, useState } from "react";
import Header from "./_components/Header";
import HomeAbout from "./_components/HomeAbout";
import HomeChairman from "./_components/HomeChairman";
import HomeHero from "./_components/HomeHero";

export default function Home() {

  const images = [
    "/ylf-abuja-home-hero.webp",
    "/nba-ylf-abuja-chairman.webp",
    "/ylf-abuja-home-hero-1.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeIn(true);
      }, 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="relative">
        <section className={`fixed_bg hero min-h-screen pb-[100px] transition-all duration-[1500ms] ${fadeIn ? "bg-opacity-100" : "bg-opacity-0"
          }`} style={{
            backgroundImage: `url(${images[currentIndex]})`
          }}>
          <Header />
          <HomeHero />
        </section>
      </div>
      <HomeAbout />
      <HomeChairman />

    </div>
  );
}
