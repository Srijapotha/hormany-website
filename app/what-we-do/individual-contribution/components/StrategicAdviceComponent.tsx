import { GetStrategicAdviceUser, Poorva_Deshmukh } from "@/assets";
import Image from "next/image";

export default function StrategicAdvicePage() {
  return (
    <section className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1 leading-[40px] sm:leading-[50px] md:leading-[60px]" >{`Get Strategic advice`}</h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-12 lg:mb-16 max-w-5xl">
          {` We'll be able to help you define the impact by working closely to identify your giving goals, and we hope to create
          and develop a strategy to achieve them. This will involve researching specific causes, identifying relevant
          charities, or designing an impact framework to measure the impact of your giving.`}
        </p>

        <div className="flex flex-col items-center lg:flex-row gap-8 md:gap-10 lg:gap-12 items-start lg:max-h-[1110px]">
          {/* Left side - Image (30% width) */}
          <div className="w-full max-w-[450px] max-h-[510px] lg:w-[30%] h-full">
            <Image
              src={Poorva_Deshmukh}
              alt="Get Strategic advice"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content (70% width) */}
          <div className="w-full lg:w-[70%] space-y-6 md:space-y-8 mt-8 lg:mt-0">
            <div>
              <h3 className="text-blue-500 text-lg md:text-xl font-semibold mb-2">{`Professional Advisory`}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {`By collaborating with us, you can empower your clients with access to charities in the 
                UK (United Kingdom) and across the globe, a flexible insight-led approach, and 
                governance expertise. Your clients can be reassured that they are getting the best 
                possible service and making a measurable difference to the causes they care about.`}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {`Our specialists cover all areas of giving and will support them in giving resources 
                effectively. We can also work with you to tailor solutions where required, whether its 
                making a one-off donation, setting up long-term giving, or charting a new 
                philanthropic journey. Together, we'll deliver an approach to maximising your clients
                impact in the global communities that mean the most to them.`}
              </p>
            </div>

            <div>
              <h3 className="text-blue-500 text-lg md:text-xl font-semibold mb-2">{`Resources to make your Donations Effective`}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {`We offer seamless support and expertise to strengthen your own. A trusted
                philanthropy partner to help your clients make a measurable difference to the causes
                they care about.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}