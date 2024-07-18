// JSX Component
import ClubIntroCardData from "@/components/ClubInto";
import HeroSection from "@/components/HeroSection";
import TeamIntro from "@/components/TeamIntro";


const Home = () => {
  return (
    <>
        <HeroSection />
        <TeamIntro/>
        <ClubIntroCardData />
    </>
  );
};

export default Home;
