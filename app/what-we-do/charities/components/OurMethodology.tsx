import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { WhatWeDoMethodImage1, WhatWeDoMethodImage2 , WhatWeDoMethodImage3} from "@/assets";

export default function OurMethodology() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <h2 className="text-2xl md:text-[34px] font-bold text-center text-gray-900 mb-12 md:mb-16" style={{ fontFamily: "Unbounded" }}>
          Our Methodology
        </h2>

        {/* First Section - Meticulous organizing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start md:items-center mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <ArrowRight className="text-orange-500 mt-0.5 flex-shrink-0" size={16} />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Meticulous organizing
              </h3>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We assist in transforming concepts into strategies that yield sustained outcomes. We will investigate your options, carry out the planned actions, and share impactful case studies.
            </p>
            
            <div className="space-y-3">
              <p className="text-gray-600 font-medium text-sm md:text-base">We gain this outcome by:</p>
              <ul className="space-y-1.5 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Formulating a Change Theory
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Examining both external and internal stakeholders
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Comparing and contrasting
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Establishing objectives and developing strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Developing frameworks for impacts
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Observation and assessment
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-first lg:order-last">
              <Image 
                src={WhatWeDoMethodImage1} 
                alt="Meticulous organizing"
                className="w-full h-auto object-cover"
              />
          </div>
        </div>

        {/* Second Section - Fundraising */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start md:items-center">
          {/* Left Image */}
          <div>
              <Image 
                src={WhatWeDoMethodImage2} 
                alt="Fundraising"
                className="w-full h-auto object-cover"
              />
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <ArrowRight className="text-orange-500 mt-0.5 flex-shrink-0" size={16} />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Fundraising
              </h3>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We provide advisory services to help develop the most effective fundraising strategies. This will help you gain unwavering funding from all potential and substantial sources.
            </p>
            
            <ul className="space-y-1.5 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                We guide you with fundraising strategies and techniques
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                We help you map a proposition
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                We assist in developing a case/project to be presented
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                We provide an easy-to-use and comprehensive platform for educating potential donors and volunteers
              </li>
            </ul>
          </div>
        </div>

        {/* Third Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start md:items-center mt-16 lg:mt-20">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <ArrowRight className="text-orange-500 mt-0.5 flex-shrink-0" size={16} />
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Charity governance
              </h3>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We believe the true strength of any organisation lies in its Team! We help you find the best of the best to structure your board. We will also review all the compliance and governance requirements to ensure your function is at its best. 
            </p>
            
            <div className="space-y-3">
              <ul className="space-y-1.5 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                 We conduct thorough audits to review skills. 
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Our stringent due diligence policies ensure efficient functioning and performance. 
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  Our platform ensures hassle-free data at your fingertips.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-first lg:order-last">
              <Image 
                src={WhatWeDoMethodImage3} 
                alt="Meticulous organizing"
                className="w-full h-auto object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
}