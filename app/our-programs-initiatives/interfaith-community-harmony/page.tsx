import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Lightbulb, Shield, Megaphone,} from "lucide-react"
import { Interfaith_Community_Harmony_hero } from "@/assets"
import Image from "next/image"

export default function  InterfaithCommunityHarmony() {
    return (
        <>
            {/* Hero section */}
            <div
                className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${Interfaith_Community_Harmony_hero.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 max-w-3xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
                        Interfaith & Community Harmony
                    </h1>
                    <p className="text-lg md:text-xl">
                        Join us in the fight for justice and equality together we can make a difference
                    </p>
                </div>
            </div>

            {/* Why It Matters */}
            <div className="p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>Why Interfaith Harmony Matters</h2>
                <p className="text-center text-[#64748B] text-base font-normal leading-relaxed md:-mt-10 -mt-5">
                    In today’s diverse world, promoting interfaith and community harmony is essential to overcoming prejudice, <br />preventing conflict, and building unity. By encouraging dialogue and collaboration, we create stronger, safer, and more <br />inclusive communities where everyone is valued.
                </p>
            </div>


            {/* Our Key Initiatives */}
            <div className="bg-[#2E6BE60D] p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Our Key Initiatives
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card className="rounded-2xl border border-[#0000004D] hover:shadow-lg transition p-4">
                        <CardHeader className="flex flex-col items-start gap-3">
                            <Lightbulb className="w-16 h-16 text-white bg-[#22A06B] p-4 rounded-full" />
                            <h3 className="text-xl font-bold text-[#0F172A] text-start mt-2">
                                Dialogue & Understanding
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-base font-normal -mt-4">
                                Facilitating meaningful conversations and exchanges between people of different faiths to build trust and break down stereotypes.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border border-[#0000004D] hover:shadow-lg transition p-4">
                        <CardHeader className="flex flex-col items-start gap-3">
                            <Shield className="w-16 h-16 text-white bg-[#22A06B] p-4 rounded-full" />
                            <h3 className="text-xl font-bold text-[#0F172A] text-start mt-2">
                                Community Projects
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-base font-normal -mt-4">
                                Collaborating on community-based projects that address social needs and promote cooperation across faith lines.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border border-[#0000004D] hover:shadow-lg transition p-4">
                        <CardHeader className="flex flex-col items-start gap-3">
                            <Megaphone className="w-16 h-16 text-white bg-[#22A06B] p-4 rounded-full" />
                            <h3 className="text-xl font-bold text-[#0F172A] text-start mt-2">
                                Awareness & Advocacy
                            </h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-base font-normal -mt-4">
                                Raising awareness about the importance of interfaith harmony and advocating for policies that promote inclusivity and respect for religious diversity.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>


            {/* Stories of Harmony
 */}
            <div className="bg-white p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Stories of Harmony
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card className="rounded-2xl border-0 transition bg-white p-0">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent className="flex flex-col items-start gap-4 p-6">
                            <h3 className="text-xl font-bold text-[Deep Charcoal] text-start">Building Bridges Through Dialogue</h3>
                            <p className="text-[#64748B] text-base text-start">
                                A story about how interfaith dialogue helped bridge divides and foster understanding in a local community.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-0 transition bg-white p-0">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent className="flex flex-col items-start gap-4 p-6">
                            <h3 className="text-xl font-bold text-[Deep Charcoal] text-start">Collaborating for a Better Community
                            </h3>
                            <p className="text-[#64748B] text-base text-start">
                                An example of a successful community project that brought together people of different faiths to address a shared need.

                            </p>
                        </CardContent>
                    </Card>


                    <Card className="rounded-2xl border-0 transition bg-white p-0">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Image src={Interfaith_Community_Harmony_hero} alt="Building Bridges Through Dialogue" className="w-120 h-45" width={1200} height={1000} />
                        </CardHeader>
                        <CardContent className="flex flex-col items-start gap-4 p-6">
                            <h3 className="text-xl font-bold text-[Deep Charcoal] text-start">Voices for Interfaith Understanding</h3>
                            <p className="text-[#64748B] text-base text-start">
                                Testimonials from individuals who have been positively impacted by our awareness and advocacy efforts.

                            </p>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </>
    )
}
