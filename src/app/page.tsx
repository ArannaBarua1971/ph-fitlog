import Image from "next/image";
import HeroBanner from "./components/HeroSection/HeroBanner";
import Workout from "./components/WorkoutSection/Workout";

export default function Home() {
  return (
    <>
      {/*hero section  */}
      <HeroBanner/>

      {/* workout section */}
      <Workout/>
    </>
  );
}
