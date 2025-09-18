import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { WhatWeDoFindACharity } from '@/assets';

const IndividualContribution = () => {
  return (
    <div className="bg-[#F4F7FD]">
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] items-stretch">
        {/* Left image - 30% width */}
        <div className="w-full">
          <Image
            src={WhatWeDoFindACharity}
            alt="Find a Charity"
            width={900}
            height={720}
            className="w-full h-full object-cover max-h-[720px]"
          />
        </div>
        
        {/* Right content - 70% width */}
        <div className="w-full py-4 px-10 md:py-6 md:px-14 flex flex-col justify-center">
          <h3 className="text-blue-600 font-semibold text-[20px] mb-1">
            Find a Charity
          </h3>
          <p className="text-gray-600 mb-5">
            Please search our database of charities and donate to the
            organisation that means the most to you.
          </p>
          
          <h4 className="font-semibold text-gray-800 mb-1">
            Contributions Simplified
          </h4>
          <p className="text-gray-600 mb-5">
            You can use our charitable database to identify and donate to
            the causes you hold dear to your heart.
          </p>
          
          <Card className="bg-white rounded-lg border-l-4 border-blue-600 mb-8 shadow-sm">
            <CardContent className="p-5">
              <h5 className="font-semibold text-gray-800 mb-2">
                Make your Donations Effective
              </h5>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover the best ways to contribute that match your
                aspirations. We match our strategic, insight-led approach with
                your giving ambitions so you can give in the way you want, to
                the causes you want, at the right time for you. We offer you
                a strategy and insight-led approach to giving so you can make
                your choices according to your strategy and give to the
                causes that matter to you at the time that suits you. Choose
                the causes you care about most, and we&apos;ll help you support
                them in the best possible way. Because there&apos;s more than one
                way to give.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <a
                                href="#"
                                className="bg-blue-600 text-white text-center py-4 rounded-lg shadow hover:bg-blue-700 transition"
                            >
                                <span className="block font-semibold">
                                    Get a Donor Account
                                </span>
                                <span className="text-sm">
                                    Get a Donor Account to Contribute financially to Charities/
                                    Projects.
                                </span>
                            </a>
                            <a
                                href="#"
                                className="bg-blue-600 text-white text-center py-4 rounded-lg shadow hover:bg-blue-700 transition"
                            >
                                <span className="block font-semibold">
                                    Register as a Volunteer
                                </span>
                                <span className="text-sm">
                                    Register with us to contribute your time to the welfare of
                                    living forms.
                                </span>
                            </a>
                        </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualContribution;