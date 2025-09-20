import Image from "next/image";
import { WhatWeDoCorporateImage1 } from "@/assets";

export default function IndividualContribution() {
  return (
    <section className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className=" mx-auto px-5 max-w-7xl">
        <div className="bg-[#F4F7FD] rounded-3xl grid grid-cols-1 lg:grid-cols-[1fr_550px] overflow-hidden shadow-lg relative mb-16 border-l-[5px] border-blue-500">

          <div className="max-w-3xl p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-blue-500 text-3xl font-bold mb-5">
              Corporate Contributions
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              You have the vision. We will give you the directions. Considering your goals, we help determine how to contribute.
            </p>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full  font-semibold text-sm hover:bg-emerald-600 hover:-translate-y-px transition-all self-start">
              Learn more
            </button>

          </div>
          <div className="flex items-center justify-center p-2.5">
            <Image
              src={WhatWeDoCorporateImage1}
              alt="Happy person"
              width={350}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="text-center text-gray-600 text-base max-w-3xl mx-auto leading-relaxed relative">
          <p className="font-poppins font-semibold text-[17px] leading-[38px] tracking-normal text-gray-600">
            We collaborate to support you in realizing your giving goals, whether they involve one-time gifts, ongoing contributions, or creating your supportive philanthropic strategy.
          </p>
        </div>
      </div>
    </section>

  )
}