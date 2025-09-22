import Image from "next/image";
import { WhatWeDohappyImage } from "@/assets";

export default function IndividualContribution() {
  return (
<section className="p-[40px_10px] md:p-[6%]">
  <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
    <div className="bg-[#F4F7FD] rounded-3xl grid grid-cols-1 lg:grid-cols-[1fr_350px] overflow-hidden shadow-lg relative mb-16 border-l-[5px] border-blue-500">
      
      {/* Text Section */}
      <div className="max-w-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
        <h2 className="text-blue-500 text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
          Individual Contributions
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
          &quot;It&apos;s easier to take than to give, but a master to give than to take. 
          The thrill of taking lasts a day, The thrill of giving lasts a lifetime.&quot;
        </p>
        <p className="italic text-gray-500 text-xs sm:text-sm mb-7">
          - Joan Marques
        </p>
        {/* <button className="bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-emerald-600 hover:-translate-y-px transition-all self-start">
          Find Charity
        </button> */}
      </div>
      
      {/* Image Section */}
      <div className="flex items-center justify-center p-2.5">
        <Image
          src={WhatWeDohappyImage}
          alt="Happy person"
          width={350}
          height={300}
          className="w-full h-auto max-w-[500px] sm:max-w-[650px] object-cover rounded-lg"
        />
      </div>
    </div>

    {/* Bottom Text */}
    <div className="text-center text-gray-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed relative px-3 sm:px-0">
      <p className="font-poppins font-semibold text-[15px] sm:text-[17px] leading-[28px] sm:leading-[38px] tracking-normal text-gray-600">
        {`We collaborate to support you in realizing your giving goals, whether they involve one-time gifts, ongoing contributions, or creating your supportive philanthropic strategy.`}
      </p>
      <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-40 sm:w-50 h-1 bg-gray-300 rounded-sm"></div>
    </div>
  </div>
</section>


  )
}