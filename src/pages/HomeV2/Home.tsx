// JSX Component
import ClubIntroCardData from "@/components/ClubInto";
import HeroSection from "@/components/HeroSection";
import SignUpSection from "@/components/SignUp/SignUp";
import TeamIntro from "@/components/TeamIntro";


const Home = () => {
  return (
    <>
        <HeroSection />
        <TeamIntro/>
        <ClubIntroCardData />
        <SignUpSection />
    </>
  );
};

export default Home;
