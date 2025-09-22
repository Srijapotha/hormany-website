import Image from "next/image";
import { WhatWeDohappyImage } from "@/assets";

export default function IndividualContribution() {
  return (
   <section className="p-10 md:p-[6%]">
  <div className="mx-auto md:px-5 max-w-7xl">
    <div className="bg-[#F4F7FD] rounded-3xl grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-6 overflow-hidden shadow-lg relative mb-16 border-l-4 border-blue-500">
      
      {/* Left Text */}
      <div className="max-w-3xl p-6 md:p-12 flex flex-col justify-center">
        <h2 className="text-blue-500 text-3xl md:text-4xl font-bold mb-4 md:mb-5">
          Charities
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-2">
          {`“Alone, we can do so little; together, we can do so much.”`}
        </p>
        <p className="italic text-gray-500 text-sm md:text-base mb-7">
          - Helen Keller
        </p>
        {/* Optional Button */}
        {/* <button className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-emerald-600 hover:-translate-y-1 transition-all self-start">
          Find Charity
        </button> */}
      </div>

      {/* Right Image */}
      <div className="flex items-center justify-center p-2.5">
        <Image
          src={WhatWeDohappyImage}
          alt="Happy person"
          width={350}
          height={300}
          className="w-full h-auto max-w-[450px] md:max-w-[650px] object-cover rounded-lg"
        />
      </div>
    </div>

    {/* Partner Section */}
    <div className="text-start">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-2 sm:mb-3 leading-snug sm:leading-tight md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
        Become a Partner Charity
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
        {`You can apply here to use the Dashboard.`}
      </p>
    </div>
  </div>
</section>

  )
}