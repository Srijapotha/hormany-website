import { WhatWeDoCharityImage } from "@/assets";
import Image from "next/image";

export default function StrategicAdvicePage() {
  return (
    <section className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className="container mx-auto px-5 max-w-6xl">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-8 md:gap-10 lg:gap-12 lg:max-h-[1110px]">
          {/* Left side - Image (40% width) */}
          <div className="w-full max-w-[500px] max-h-[590px] lg:w-[40%] h-full">
            <Image 
              src={WhatWeDoCharityImage} 
              alt="Get Strategic advice" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right side - Content (70% width) */}
          <div className="w-full lg:w-[60%] space-y-6 md:space-y-8 mt-8 lg:mt-0">
            <div>
              <h3 className="text-blue-500 text-[22px] font-semibold mb-2">
                {`Grant Application`}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {`We'll help you design, deliver and learn to provide a meaningful and impactful grant 
                making programme.`}
              </p>
            </div>
           
            <div>
              <h3 className="text-black text-[18px] font-semibold mb-2">
                {`What is Grantmaking?`}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                {`We help you determine the desired impact of your donations and ensure that the 
                planning process considers these objectives. This covers the structural components 
                like the frequency and size of grants, the geographic scope, and the evaluation 
                standards.`}
                standards.`}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {`This resonates with charities with similar goals applying via our online platform, and 
                this helps you and your staff determine which charities best fit the priorities of your 
                program. We are also capable of handling all aspects of the program, including 
                contracting, and most importantly—impact reporting.`}
                contracting, and most importantly—impact reporting.`}
              </p>
            </div>

            <div>
              <h3 className="text-blue-500 text-[22px] font-semibold mb-2">
                {`How our grant-making program operates:`}
              </h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gray-800">
                    <span className="text-[#FF4400]">{`1.`}</span> {`Design -`}
                  </span>
                  <span className="text-gray-600 text-sm md:text-base">
                    {` To create best-in-class programs that achieve that impact, we use our extensive experience, industry knowledge, and research to establish goals and develop frameworks to measure them.`}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    <span className="text-[#FF4400]">{`2.`}</span> {`Provide -`}
                  </span>
                  <span className="text-gray-600 text-sm md:text-base">
                    {` We work with your team to deliver programs that effectively meet their goals and aspirations by collaborating with them to provide expert support.`}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    <span className="text-[#FF4400]">{`3.`}</span> {`Acquire knowledge -`}
                  </span>
                  <span className="text-gray-600 text-sm md:text-base">
                    {` With an emphasis on insight and impact, we document the societal effects of contributions and share lessons learned and evaluations in funder reports to enhance subsequent efforts.`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}