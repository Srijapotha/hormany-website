
import Image from "next/image";
import { MissionDevelopment1, MissionDevelopment2, MissionDevelopment3, MissionDevelopment4 } from "@/assets";
export default function CitizenshipSection() {
    return(
          <section className="bg-[#FCFCF2] p-[40px_10px_40px_10px] md:p-[6%]">
                <div className="container mx-auto px-5 max-w-5xl">
                  <div className="text-center mb-12">
                    <h2  className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[35px] sm:leading-[45px] md:leading-[50px]" style={{ fontFamily: "Unbounded" }}>
                      Advancement of Citizenship and Community Development
                    </h2>
                    <p className="text-center mb-8 text-lg text-[#0F172A] max-w-3xl mx-auto md:-mt-10 -mt-5">
                      To advance citizenship and community development for the public
                      benefit by
                    </p>
                  </div>      
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    <div className="flex-1 lg:flex-initial lg:w-2/5">
                      <Image
                        src={MissionDevelopment1}
                        alt="Community Engagement"
                        width={400}
                        height={300}
                        className="w-full max-w-md rounded-xl mb-6 shadow-lg"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        Community Engagement
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Supporting community centres, volunteer programmes, and cultural
                        activities that bring people together across all faiths and
                        communities, enhancing social cohesion.
                      </p>
                    </div>
        
                    <div className="flex-1 lg:w-3/5 space-y-7">
                      <div className="flex items-start gap-5 p-5 md:p-6 mb-0">
                        <Image
                          src={MissionDevelopment2}
                          alt="Charity Collaboration"
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-2">
                            Charity Collaboration
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Encouraging collaboration between charities, community
                            groups, faith organisations, and public bodies to reduce
                            prejudice and build stronger, sustainable communities.
                          </p>
                        </div>
                      </div>
        
                      <div className="flex items-start gap-5 p-5 md:p-6 mb-0">
                        <Image
                          src={MissionDevelopment3}
                          alt="Civic Participation"
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-2">
                            Civic Participation
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Promoting active civic participation, social responsibility,
                            and environmental sustainability across all sections of
                            society.
                          </p>
                        </div>
                      </div>
        
                      <div className="flex items-start gap-5 p-5 md:p-6 mb-0">
                        <Image
                          src={MissionDevelopment4}
                          alt="Inclusive Initiatives"
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-lg font-bold text-gray-800 mb-2">
                            Inclusive Initiatives
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Supporting initiatives that encourage inclusive
                            collaboration for the long-term benefit of society.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
    )
}

