import AdvancementSection from "./components/AdvancementSection";
import HarmonySection from "./components/HarmonySection";
import ReliefSection from "./components/ReliefSection";
import EducationSection from "./components/EducationSection";
import CitizenshipSection from "./components/CitizenshipSection";
import { MissionHeroBanner } from "@/assets";

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[55vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] p-[40px_10px_40px_10px] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${MissionHeroBanner.src})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-1"></div>
        <div className="relative z-10 max-w-4xl px-5 animate-fade-in-up flex flex-col items-center ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[70px]" style={{ fontFamily: "Unbounded" }}>
            Over Mission & Global Presence
          </h1>
          <p className="text-lg md:text-xl mt-4">
            HarmonyOverHate is committed to building a world where diversity is
            celebrated, rights are protected, and communities thrive together.
          </p>
        </div>
      </section>

      {/* Advancement Section */}
      <AdvancementSection />
      
      {/* Harmony Section */}
      <HarmonySection />

      {/* Relief Section */}
      <ReliefSection />

      {/* Education Section */}
      <EducationSection />

      {/* Citizenship Section */}
      <CitizenshipSection/>
    </div>
  );
}
