import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Community_Development } from "@/assets"
// import Image from "next/image"

export default function CommunityDevelopment() {
    return (
        <>
            {/* Hero section */}
            <div
                className="relative w-full h-[55vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] p-[40px_10px_40px_10px] flex items-center justify-center text-center overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${Community_Development.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/75" />
                <div className="relative z-10 max-w-3xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
                        Community Development
                    </h1>
                    <p className="text-lg md:text-xl">
                        {` Join us in the fight for justice and equality together we can make a difference`}
                    </p>
                </div>
            </div>

            {/* Why It Matters */}
            <div className="p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>Why Community Development Matters</h2>
                <p className="text-center text-[#64748B] text-base font-normal leading-relaxed md:-mt-10 -mt-5">
                    {`Communities are strongest when everyone has the opportunity to participate, contribute, and belong. Our Community Development initiatives focus on reducing prejudice, promoting active citizenship, and creating spaces where people of all faiths and backgrounds can work together for the common good.`}
                </p>
            </div>


            {/* Our Key Initiatives */}
            <div className="bg-[#2E6BE60D] p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Our Key Initiatives
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card className="rounded-2xl border border-[#0F172A] bg-[#0F172A] hover:shadow-lg transition-shadow p-10">
                        <CardHeader className="p-0">
                            <h3 className="text-xl font-bold text-[#22A06B]">
                                Community Hubs & Activities
                            </h3>
                        </CardHeader>
                        <CardContent className="p-0 -mt-3">
                            <p className="text-white text-base font-normal leading-relaxed">   
                                {`Creating safe and welcoming spaces for community members to connect, learn, and grow together.`}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border border-[#0F172A] bg-[#0F172A] hover:shadow-lg transition-shadow p-10">
                        <CardHeader className="p-0">
                            <h3 className="text-xl font-bold text-[#22A06B]">
                                Inclusive Collaboration
                            </h3>
                        </CardHeader>
                        <CardContent className="p-0 -mt-3">
                            <p className="text-white text-base font-normal leading-relaxed">
                                {` Fostering partnerships between residents, organizations, and local government to achieve common goals.`}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border border-[#0F172A] bg-[#0F172A] hover:shadow-lg transition-shadow p-10 ">
                        <CardHeader className="p-0">
                            <h3 className="text-xl font-bold text-[#22A06B]">
                                Active Citizenship
                            </h3>
                        </CardHeader>
                        <CardContent className="p-0 -mt-3">
                            <p className="text-white text-base font-normal leading-relaxed">
                                {`Empowering individuals to participate in decision-making processes and shape the future of their communities.`}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>


            {/* Stories of Hope*/}
            {/* <div className="bg-white p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Stories of Change
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card className="shadow-none border-0 bg-white p-0 transition-none">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold text-[#2E6BE6] text-start mb-4">Sarahs Journey</h3>
                            <p className="text-[#64748B] text-base text-start">
                               This program changed my life. I have new skills, a new job, and a newfound confidence in myself and my future.
                            </p>
                        </CardContent>
                    </Card>


                    <Card className="shadow-none border-0 bg-white p-0 transition-none">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold text-[#2E6BE6] text-start mb-4">Green Spaces Initiative</h3>
                            <p className="text-[#64748B] text-base text-start">
                                Our community park was transformed. Its now a vibrant hub where families gather and children play safely
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="shadow-none border-0 bg-white p-0 transition-none">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent>
                            <h3 className="text-xl font-semibold text-[#2E6BE6] text-start mb-4">Volunteers Making a Difference</h3>
                            <p className="text-[#64748B] text-base text-start">
                                Volunteering has been incredibly rewarding. Its amazing to see the direct impact of our collective efforts.
                            </p>
                        </CardContent>
                    </Card>

                </div>
            </div> */}

        </>
    )
}
