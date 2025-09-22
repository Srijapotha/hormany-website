import { WhatWeDoCorporateImage4 } from '@/assets';
import React from 'react';
import Image from 'next/image';

const CorporateContributionsComponent: React.FC = () => {
  return (
    <div className="bg-[#F4F7FD] p-6 md:p-[6%]">
      {/* Top Image */}
      <div className="flex justify-center pb-6">
        <Image
          src={WhatWeDoCorporateImage4}
          alt="Image"
          width={400}
          height={300}
          className="w-full max-w-[855px] max-h-[280px] md:max-h-[468px] mb-6 shadow-lg object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-4">
          <h2 className="text-[18px] md:text-[20px] font-bold text-blue-600 mb-4 uppercase tracking-wide">
            {`Find Your Purpose With Us`}
          </h2>
          <div className="space-y-4 text-[#64748B] leading-relaxed text-base md:text-[17px]">
            <p>
              {`With the Maulee Foundation, we'll assist you in identifying the humanitarian causes among our global network of NGOs. Our comprehensive industry knowledge, well-established governance support, and adaptable solutions will work together to maximize the positive effects of your business's (and your employee's) charitable giving.`}
            </p>
            <p>
              {`Working together can make a substantial and fruitful shift in the global communities that are most vital to your company and its affiliates. When we work together, we contribute more.`}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-[18px] md:text-[20px] font-bold text-blue-600 mb-4">
              {`Get a Corporate Contributions Account`}
            </h2>
            <div className="space-y-4 text-[#64748B] leading-relaxed text-base md:text-[17px]">
              <p>
                {`From aspiration to action, planning to outcomes, we are a partner for companies that wish to contribute and leave their mark on the globe.`}
              </p>
              {/* <p>{`Here's how we help you do it...`}</p>
              <p>
                <span className="text-orange-500 font-semibold">{`Register Now`}</span>
                {` on our Platform, where we Contribute and Amplify the Greatness.`}
              </p> */}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] md:text-[20px] font-bold text-blue-600 mb-4">
              {`You'll be able to learn more about Philanthropic enterprise`}
            </h3>
            <p className="text-[#64748B] leading-relaxed text-base md:text-[17px]">
              {`With our company account, you can manage all your giving online from one place. We manage risk, reputation exposure, and administration to make your giving secure and effective.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateContributionsComponent;