import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function CharityAdvisory() {
  return (
    <div className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Main Content */}
        <div className="space-y-8 bg-[#F4F7FD] p-10 rounded-2xl">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {`Charity Advisory`}
            </h3>

            <div className="space-y-3 text-gray-600 text-[17px] leading-relaxed">
              <p>
                {`Access expert consultancy to support your organisational
                development.`}
              </p>

              <p className="font-medium text-gray-700">
                {`Paving the road to your Charity's success`}
              </p>

              <p>
                {`We offer our advisory services with an evidence-based approach
                by fusing our expertise, experience, and in-depth research.`}
              </p>

              <p>
                {`We are here to offer as much or as little support as you
                require, whether planning a transformational culture or just
                needing aid with a specific project.`}
                needing aid with a specific project.`}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Cards Grid */}
        <div className="grid grid-rows-2 gap-4">
          {/* First Row - Two Cards */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex justify-center items-center text-center bg-white rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {`We are prepared to support you by:`}
              </h2>
            </div>
            <Card className="bg-[#0F172A] border-[#0F172A] h-full justify-center">
              <CardContent className="p-6 flex items-center">
                <p className="text-white text-sm leading-relaxed">
                  {`Being a valuable critic to test ideas and create new plans`}
                  {`Being a valuable critic to test ideas and create new plans`}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Second Row - Two Cards */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <Card className="bg-[#0F172A] border-[#0F172A] h-full justify-center">
              <CardContent className="p-6 flex items-center">
                <p className="text-white text-sm leading-relaxed">
                  {`Arranging focus groups, interviews, or workshops to examine
                  possibilities and challenges and generate possible solutions`}
                  {`Arranging focus groups, interviews, or workshops to examine
                  possibilities and challenges and generate possible solutions`}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#F26D4A] border-[#F26D4A] h-full justify-center">
              <CardContent className="p-6 flex items-center">
                <p className="text-white text-sm leading-relaxed">
                  {`Perform competitor analysis and research to gain the necessary
                  knowledge to make decisions.`}
                  {`Perform competitor analysis and research to gain the necessary
                  knowledge to make decisions.`}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};