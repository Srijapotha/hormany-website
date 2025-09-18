
import Image from "next/image";
import { MissionEducation1, MissionEducation2 } from "@/assets";
export default function EducationSection() {
    return(

        <section className="py-20 bg-white">
                <div className="container mx-auto px-5 max-w-6xl">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                      Advancement of Education
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                      To advance education for the public benefit by
                    </p>
                  </div>
        
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 max-w-5xl mx-auto">
                    {/* First row */}
                    <div className="min-h-64 flex items-stretch justify-center bg-white overflow-hidden">
                      <Image
                        src={MissionEducation1}
                        alt="Children learning together"
                        width={400}
                        height={260}
                        className="w-full h-full object-cover"
                      />
                    </div>
        
                    <div className="min-h-64 bg-[#0F172A] text-white flex flex-col justify-center py-8 px-6 md:py-10 text-start">
                      <h3 className="text-lg font-semibold mb-4 leading-tight">
                        School & Community Programmes
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Supporting schools, colleges, and community groups to deliver
                        programmes on equality, diversity, citizenship, and human
                        rights.
                      </p>
                    </div>
        
                    <div className="min-h-64 flex items-stretch justify-center bg-white overflow-hidden">
                      <Image
                        src={MissionEducation2}
                        alt="Students collaborating"
                        width={400}
                        height={260}
                        className="w-full h-full object-cover"
                      />
                    </div>
        
                    {/* Second row */}
                    <div className="min-h-64 bg-[#0F172A] text-white flex flex-col justify-center py-8 px-6 md:py-10">
                      <h3 className="text-lg font-semibold mb-4 leading-tight">
                        Research & Publications
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Supporting research, publications, and events on issues of
                        prejudice, social integration, harmony among all faiths, and
                        sustainable community development
                      </p>
                    </div>
        
                    <div className="min-h-64 bg-[#F26D4A] text-white flex flex-col justify-center py-8 px-6 md:p-10">
                      <h3 className="text-lg font-semibold mb-4 leading-tight">
                        Scholarships & Training
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Providing scholarships, bursaries, or training opportunities to
                        develop skills in conflict resolution, hate crime prevention,
                        leadership, and sustainability.
                      </p>
                    </div>
        
                    <div className="min-h-64 bg-[#0F172A] text-white flex flex-col justify-center py-8 px-6 md:py-10">
                      <h3 className="text-lg font-semibold mb-4 leading-tight">
                        Educational Collaboration
                      </h3>
                      <p className="text-sm leading-relaxed">
                        Promoting collaboration between educational institutions and
                        community groups to embed inclusive and cohesive practices.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

    )
}