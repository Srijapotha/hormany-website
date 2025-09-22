import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function AmplifyYourImpact() {
  return (
    <section className="p-[40px_10px_40px_10px] md:p-[6%]">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1 leading-[40px] sm:leading-[50px] md:leading-[60px]">
          {`Amplify your impact`}
        </h2>
        <p className="text-center text-gray-500 text-lg max-w-6xl mx-auto mb-16 leading-relaxed">
          {`You can maximize the impact of your contribution by aligning its goals with the charities difficulties. From strategic 
          advice to grant making and social investment, we can work together to drive meaningful change.`}
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* First Card - Orange/Red Border */}
          <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-orange-500 border-t-0 border-r-0 border-b-0">
            <CardContent className="p-8 flex justify-center items-center md:min-h-[350px]">
              <p className="text-gray-600 text-base leading-relaxed">
                {`From helping to define your values and objectives to developing frameworks to measure impact, 
                we draw on our wealth of experience, sector knowledge, and research to help design best-in-class 
                strategies to fulfil that impact and aid in creating your donations.`}
                strategies to fulfil that impact and aid in creating your donations.`}
              </p>
            </CardContent>
          </Card>
          
          {/* Second Card Group - Teal and Yellow Cards */}
          <div>
            <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-teal-500 border-t-0 border-r-0 border-b-0">
              <CardContent className="p-8 flex justify-center items-center">
                <p className="text-gray-600 text-base leading-relaxed">
                  {`In collaboration with you, we provide expert support to deliver programmes that effectively meet 
                  your ambitions and impact goals.`}
                  {`In collaboration with you, we provide expert support to deliver programmes that effectively meet 
                  your ambitions and impact goals.`}
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-yellow-500 border-t-0 border-r-0 border-b-0 mt-4">
              <CardContent className="p-8 flex justify-center items-center">
                <p className="text-gray-600 text-base leading-relaxed">
                  {`Focusing on insight and impact, we capture the social impact of your giving, sharing learnings and 
                  reviews in funder reports to strengthen future activity.`}
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Third Card - Purple Border */}
          <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-purple-500 border-t-0 border-r-0 border-b-0">
            <CardContent className="p-8 flex justify-center items-center md:min-h-[350px]">
              <p className="text-gray-600 text-base leading-relaxed">
                {`We'll work with you to design a grant programme that makes a measurable difference to the 
                communities you support, using fair, accessible and transparent grantmaking practices.`}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}