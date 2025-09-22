import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SustainChanges() {
  return (
    <section className="p-[40px_10px_40px_10px] md:p-[4%] bg-[#F4F7FD]">
      <div className="container mx-auto px-5 max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Unbounded" }}>
          Sustainable Change
        </h2>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* First Card - Orange/Red Border */}
          <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-red-500 border-t-0 border-r-0 border-b-0">
            <CardContent className="p-8 flex justify-center items-center">
              <p className="text-gray-600 text-base leading-relaxed">
                Complete and submit our online application form
              </p>
            </CardContent>
          </Card>

          {/* Second Card Group - Teal and Yellow Cards */}
          <div>
            <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-teal-500 border-t-0 border-r-0 border-b-0">
              <CardContent className="p-8 flex justify-center items-center">
                <p className="text-gray-600 text-base leading-relaxed">
                  {`Confirm your email address. We’ll ask your charity’s main contact (registered with the Charity Commission) to confirm this.
`}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Third Card - Purple Border */}
          <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-purple-500 border-t-0 border-r-0 border-b-0">
            <CardContent className="p-8 flex justify-center items-center">
              <p className="text-gray-600 text-base leading-relaxed">
                Once approved, start adding your projects and tracking all activities.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='mt-16 flex justify-center '>
          {/* <Button className="bg-[#F6C33B] text-white px-6 py-3 rounded-full  font-semibold text-sm hover:bg-emerald-600 hover:-translate-y-px transition-all self-start">
            Register Now
          </Button> */}
        </div>
      </div>
    </section>
  );
}