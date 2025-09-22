import React from "react";
import Image from "next/image";
import { WhatWeDoFindACharity } from "@/assets";

const AdvisoryComponent: React.FC = () => {
  return (
    <div className="p-[40px_10px_40px_10px] md:p-[6%]">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1 leading-[35px] sm:leading-[45px] md:leading-[50px]" style={{ fontFamily: "Unbounded" }}>
          Would you happen to know how our
          <br />
          Advisory works?
        </h1>
      </div>

      {/* Main Content Grid */}
      <div className="md:px-16 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div>
            <div className="flex items-start mb-4">
              <span className="text-yellow-400 mr-2">✦</span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Magnitude inspires us
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed ml-6">
              <p>
                Magnitude is essential to bringing about substantial change, in
                our opinion. Our main objective is to utilise impactful thinking
                and models in a corporate setting.
              </p>
              <p>
                We assist companies in achieving the social and environmental
                goals that underpin their operations, which benefits them, their
                clients, and their staff significantly.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src={WhatWeDoFindACharity}
              alt="Volunteer"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
          <div>
            <div className="flex items-start mb-4">
              <span className="text-yellow-400 mr-2">✦</span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                We function judiciously
              </h3>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed ml-6">
              <p className="mb-3">
                Maulee Foundation has enabled global philanthropy and social
                impact.
              </p>
              <p>
                {`We strive to disseminate knowledge, research significant trends,
                and original tales. These provide food for thought and guide our
                advisory work, enabling our clients to have an immense
                influence. As charities, we know what charities need and how
                best to support them. It's what sets us apart.`}
              </p>
            </div>
          </div>

          {/* We're your partner */}
          <div>
            <div className="flex items-start">
              <span className="text-yellow-400 mr-2">✦</span>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {`We’re your partner in this venture`}
              </h3>
            </div>
            <div className="text-gray-600 text-sm leading-relaxed ml-6">
              <p className="mb-3">
                {` We are fully aware that collaboration produces the best results.
                As a charity and an advisory firm, we offer unbiased, moral
                guidance. We will take your intention and turn it into a
                workable plan.`}
              </p>
              <p>
                {`Our robust charity verification and due diligence processes
                ensure your donations reach their intended causes safely and
                securely. We serve as friends and mentors. We’d like you to have
                the appropriate conversations, break down complex ideas, and
                implement suggestions.`}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 mb-8 ">
        <div className="bg-[#F4F7FD] max-w-4xl mx-auto rounded-xl p-8 text-center relative overflow-hidden shadow">
          {/* Decorative triangles */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <div className="space-y-1">
              <div
                className="w-4 h-4 bg-green-500 transform rotate-180"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
              <div
                className="w-4 h-4 bg-yellow-400 transform"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
              <div
                className="w-4 h-4 bg-green-500 transform"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
            </div>
          </div>

          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="space-y-1">
              <div
                className="w-4 h-4 bg-green-500 transform"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
              <div
                className="w-4 h-4 bg-yellow-400 transform"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
              <div
                className="w-4 h-4 bg-green-500 transform"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <h3 className="text-[18px] font-semibold text-blue-600 mb-3">
              Resources to make your Donations Effective
            </h3>
            <p className="text-[#64748B] text-[16px] mb-4">
              Resources to help inspire and inform your corporate contribution.
            </p>
            <a
              href="#"
              className="text-[#64748B] underline text-[16px] font-medium"
            >
              Talk to us about the ways we can boost your giving
            </a>
          </div>
        </div>

      </div>


    </div>
  );
};

export default AdvisoryComponent;
