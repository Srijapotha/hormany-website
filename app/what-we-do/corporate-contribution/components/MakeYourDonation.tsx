import React from 'react';
import Image from 'next/image';
import { WhatWeDoCorporateImage2 } from '@/assets';

const MakeYourDonations = () => {
  return (
    <div className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%]  bg-[#0F172A] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left image - 30% width */}
        <div className="w-full py-4 px-10 md:py-6 md:px-14 flex flex-col justify-center">
          <h3 className="text-blue-600 font-semibold text-[24px] mb-3">
            Make your Donations Effective
          </h3>
          <p className="text-white mb-5 leading-relaxed">
            {`Make your donations effective by deploying transparency in our operations so that every donation directly benefits the intended recipients. Our esteemed corporate partner, Baseel Group, covers all operational and logistic expenses. This commitment means that every penny donated goes directly to those in need, underscoring our dedication to openness and accountability.`}
          </p>
          <p className="text-white mb-5 leading-relaxed">
            {`Our platform provides a complete life cycle to help you with your contributions. Our due diligence steps ensure that 100% of your donation reaches those in need, ensuring transparency to witness the tangible results of their support and producing measurable impact.`}
          </p>
          <p className="text-white mb-5 leading-relaxed">
            {`There may not be a standard, impactful way to donate that works for everyone. Our work is personalised and powered by the goals of your company. Research and analysis, planning and implementation, impact quantification and augmentation tools, practical internal and external engagement, and delivery through customized grantmaking and social investment initiatives are all included.`}
          </p>
          <p className="text-white mb-5 font-extrabold leading-relaxed">
            {`Donate more effectively by aligning your company’s contribution aims with the requirements of the charities.
`}
          </p>
        </div>


        {/* Right content - 70% width */}
        <div className="w-full">
          <Image
            src={WhatWeDoCorporateImage2}
            alt="Find a Charity"
            width={900}
            height={720}
            className="w-full h-full object-cover max-h-[720px]"
          />
        </div>

      </div>
    </div>
  );
};

export default MakeYourDonations;