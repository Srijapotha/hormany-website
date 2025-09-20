import Image from "next/image";
import { WhatWeDohappyImage } from "@/assets";

export default function IndividualContribution() {
  return (
    <section className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className=" mx-auto px-5 max-w-7xl">
        <div className="bg-[#F4F7FD] rounded-3xl grid grid-cols-1 lg:grid-cols-[1fr_450px] overflow-hidden shadow-lg relative mb-16 border-l-[5px] border-blue-500">

          <div className="max-w-3xl p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-blue-500 text-3xl font-bold mb-5">
              Charities
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              “Alone, we can do so little; together, we can do so much.”
            </p>
            <p className="italic text-gray-500 text-sm mb-7">
              - Helen Keller
            </p>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full  font-semibold text-sm hover:bg-emerald-600 hover:-translate-y-px transition-all self-start">
              Find Charity
            </button>

          </div>
          <div className="flex items-center justify-center p-2.5">
            <Image
              src={WhatWeDohappyImage}
              alt="Happy person"
              width={350}
              height={300}
              className="w-full h-full max-w-[650px] object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="text-start">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>Become a Partner Charity</h2>
          <p className="text-gray-600 text-bass leading-relaxed mb-8">
            You can apply here to use the Dashboard.
          </p>
        </div>
      </div>
    </section>

  )
}