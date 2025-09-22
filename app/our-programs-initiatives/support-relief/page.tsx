import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {Interfaith_Community_Harmony_hero ,support_relif} from "@/assets"

export default function SupportRelif() {
    return (
        <>
            {/* Hero section */}
            <div
                className="relative w-full w-full h-[55vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] p-[40px_10px_40px_10px] flex items-center justify-center text-center overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${support_relif.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 max-w-3xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
                        Support & Relief
                    </h1>
                    <p className="text-lg md:text-xl">
                        Join us in the fight for justice and equality together we can make a difference
                    </p>
                </div>
            </div>

            {/* Why Support & Relief Matters */}
            <div className="p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>Why Support & Relief Matters</h2>
                <p className="text-center text-[#64748B] text-base font-normal leading-relaxed">
                    Support and relief are crucial in helping individuals and communities recover from disasters. conflicts, and <br />other hardships. Our work focuses on providing essential resources, fostering resilience, and empowering <br />people to rebuild their lives.

                </p>
            </div>


            {/* Our Relief Initiatives */}
            <div className="bg-[#2E6BE60D] p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Our Relief Initiatives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto text-center">
                   
                    <div className="p-6 border-r border-[#A7F3D0]">
                        <h3 className="text-lg font-bold text-[#EAB308] mb-3 text-start">
                            Direct Support Services
                        </h3>
                        <p className="text-[#64748B] text-base text-start">
                            Providing immediate aid such as food, shelter, and medical care to those affected by crises.
                        </p>
                    </div>

                    
                    <div className="p-6 border-r border-[#A7F3D0]">
                        <h3 className="text-lg font-bold text-[#F97316] mb-3 text-start">
                            Grants & Assistance
                        </h3>
                        <p className="text-[#64748B] text-base text-start">
                            Offering financial grants and assistance programs to support individuals and families in need.
                        </p>
                    </div>

                  
                    <div className="p-6 border-r border-[#A7F3D0]">
                        <h3 className="text-lg font-bold text-[#7C3AED] mb-3 tex-start">
                            Crisis Relief & Recovery
                        </h3>
                        <p className="text-[#64748B] text-base text-start">
                            Responding to emergencies and disasters with rapid relief efforts and long-term recovery programs.
                        </p>
                    </div>

                    
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-[#2563EB] mb-3 text-start">
                            Community Partnerships
                        </h3>
                        <p className="text-[#64748B] text-base text-start">
                            Collaborating with local organizations to strengthen community resilience and support sustainable solutions.
                        </p>
                    </div>
                </div>
            </div>



            {/* Stories of Hope*/}
            <div className="bg-white p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Stories of Hope
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card className="shadow-none border-0 bg-white p-0 transition-none">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold text-[#2E6BE6] text-start mb-4">Empowering Women Through Agriculture</h3>
                            <p className="text-[#64748B] text-base text-start">
                                Learn how our agricultural programs are empowering women in rural communities.
                            </p>
                        </CardContent>
                    </Card>


                    <Card className="shadow-none border-0 bg-white p-0 transition-none">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold text-[#2E6BE6] text-start mb-4">Creating Safe Spaces for Children</h3>
                            <p className="text-[#64748B] text-base text-start">
                            Discover how we are creating safe and nurturing environments for children affected by crises.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-none border-0 bg-white p-0 transition-none">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold text-[#2E6BE6] text-start mb-4">Rebuilding Lives After a Disaster</h3>
                            <p className="text-[#64748B] text-base text-start">
                             Read about how we helped a family rebuild their home and lives after a devastating earthquake.
                            </p>
                        </CardContent>
                    </Card>
                    
                </div>
            </div>
        </>
    )
}
