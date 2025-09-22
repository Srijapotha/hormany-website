import { WhatWeDoCorporateImage3 } from "@/assets";
import Image from "next/image";

export default function StrategicAdvicePage() {
  return (
    <section className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-8 md:gap-10 lg:gap-12 lg:max-h-[1110px]">
          {/* Left side - Image (40% width) */}
          <div className="w-full max-w-[500px] max-h-[590px] lg:w-[40%] h-full">
            <Image
              src={WhatWeDoCorporateImage3}
              alt="Get Strategic advice"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content (70% width) */}
          <div className="w-full lg:w-[60%] space-y-6 md:space-y-8 mt-8 lg:mt-0">
            <div>
              <h2 className="text-start text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A]  leading-[40px] sm:leading-[50px] md:leading-[60px]" >
                {`Get Strategic advice`}
              </h2>
            </div>
            <div>
              <h3 className="text-blue-500 text-[20px] font-semibold mb-2">
                {`Impact advisory`}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {`Working with your team, we'll be able to identify the desired impact and set up a plan. This may involve investigating issues, involving stakeholders from across your company, recommending charities, or creating an impact framework.`}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {`You’re the experts in your field. We are the leaders in impactful giving.`}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {`We value your company’s Vision. We can help you translate your vision into an effective strategy.`}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {`We offer tailored information and guidance to companies like yours. We help you identify causes that share your corporation's values and the most effective ways to donate to effect real change.`}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {`Our customised approach is based on strategy development, impact measurement and enhancement tools, research and analysis, and direct internal and external engagement.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}