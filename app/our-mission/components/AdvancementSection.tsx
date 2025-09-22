import Image from "next/image";
import { MissionAdvantageMission1, MissionAdvantageMission2, MissionAdvantageMission3, MissionAdvantageMission4 } from "@/assets";

export default function AdvancementSection() {
  const advanceSectionData = [
    {
      title: `Support for Victims`,
      description: `Supporting victims of hate crime, prejudice, or discrimination through advice, advocacy, or referral services.`,
      image: MissionAdvantageMission1,
      alt: `Voice for Victims protest sign`,
    },
    {
      title: `Awareness & Inclusion`,
      description: `Raising public awareness of intolerance and discrimination, encouraging inclusive and sustainable practices within communities.`,
      image: MissionAdvantageMission2,
      alt: `Close-up of human eye`,
    },
    {
      title: `Mutual Respect`,
      description: `Promoting mutual respect and understanding between individuals of all faiths, ethnicities, and communities, thereby strengthening social cohesion.`,
      image: MissionAdvantageMission3,
      alt: `Business handshake`,
    },
    {
      title: `Collaboration`,
      description: `Collaborating with charities, statutory bodies, and community groups to embed equality and human rights in civic life.`,
      image: MissionAdvantageMission4,
      alt: `Collaboration meeting`,
    },
  ];  

  return (
    <section className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[35px] sm:leading-[45px] md:leading-[50px]">
            {`Advancement of Human Rights, Equality`}
            <br />
            {`and Diversity`}
          </h2>
          <p className="text-center text-[#64748B] text-base font-normal leading-relaxed md:-mt-10 -mt-5">
            {`To advance human rights, equality, and diversity for the public benefit by`}
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          {advanceSectionData.map((item, index) => (
            <li
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-purple-600 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}