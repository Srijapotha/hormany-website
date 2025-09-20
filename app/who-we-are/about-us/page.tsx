// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Eye, ChartLine, Handshake, Heart, User } from "lucide-react"
import Image from "next/image"
import { human_rights_hero,Compassion, Inclusivity, Integrity, Collaboration, Innovation, Sustainability, Diversity, Accountability, Empowerment } from "@/assets";


export default function aboutus() {
    return (
        <>
            {/* Hero section */}
            <div
                className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${human_rights_hero.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 max-w-3xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
                        About Us
                    </h1>
                </div>
            </div>

            {/* Who we are */}
            <div className="p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>Who We Are</h2>
                <p className="text-center text-[#64748B] text-base font-normal leading-relaxed">
                    HarmonyOverHate is a global charity dedicated to creating a world where dignity, equality, and <br />respect are the foundation of every community. We work to support victims of hate, promote dialogue<br /> across faiths, empower through education, and strengthen communities for lasting harmony.
                </p>
            </div>


            {/* Vision & Mission */}
            <div className="bg-[#2E6BE60D] p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Vision & Mission
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <Card className="rounded-2xl border-l-4 border-[#2E6BE6] shadow-md hover:shadow-lg transition p-6 bg-white">
                        <CardHeader className="flex flex-col items-start gap-3">
                            <h3 className="text-xl font-bold text-[#0F172A]">Our Vision</h3>
                            <Eye className="w-16 h-16 text-white bg-[#2E6BE6] p-4 rounded-full" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-base font-normal">
                                To build a just, inclusive, and peaceful world where diversity is
                                celebrated, human rights are upheld, and every individual has the
                                freedom to live with dignity, equality, and mutual respect in a
                                thriving global community.
                            </p>
                        </CardContent>
                    </Card>


                    <Card className="rounded-2xl border-l-4 border-[#7A60D1] shadow-md hover:shadow-lg transition p-6 bg-white">
                        <CardHeader className="flex flex-col items-start gap-3">
                            <h3 className="text-xl font-bold text-[#0F172A]">Our Mission</h3>
                            <ChartLine className="w-16 h-16 text-white bg-[#7A60D1] p-4 rounded-full" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-base font-normal">
                                To challenge hate, prejudice, and discrimination everywhere by supporting victims with care and relief services, promoting dialogue across faiths and cultures, and empowering people through education, advocacy, and unity.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>


            {/* Our Values */}
            <div className="bg-[#ffffff] p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Our Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 max-w-7xl mx-auto">

                    {/* Card 1 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2 border-r-gray-300 border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                                <Image src={Compassion} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Compassion</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                We believe in actively understanding and empathizing with the experiences and challenges of others, without judgment or assumptions. Prioritizing compassion fosters a sense of belonging.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2 border-r-gray-300 border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                         <Image src={Inclusivity} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Inclusivity</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                We believe strength is built through tackling adversity. Hearing diverse perspectives fuels innovation, deepens connections between people, and makes us who we are.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2  border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                                <Image src={Integrity} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Integrity</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                Connecting to the heart of the matter. We listen actively and act with respect and authenticity. We encourage honesty while upholding ethical and professional standards.
                            </p>
                        </CardContent>
                    </Card>


                    {/* Card 4 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2 border-r-gray-300 border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                                <Image src={Collaboration} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Collaboration</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                We strive for the highest standards in all we do and seek continuous improvement through feedback from our partners and those we serve.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 5 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2 border-r-gray-300 border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                            <Image src={Innovation} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Innovation</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                We approach the world with a sense of interest and wonder.  We embrace continuous improvement, and change, and are humble enough to learn from every situation.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 6 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2  border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                                <Image src={Sustainability} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Sustainability</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                We do our best with excellence in everything we do. We are passing the torch of mastery. Our transfer of expertise allows for sustainable strategic management.
                            </p>
                        </CardContent>
                    </Card>


                    {/* Card 7 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2 border-r-gray-300 border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                                <Image src={Diversity} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Diversity</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                We celebrate diversity. We respect all cultures, religions, races, ethnicities, sexual orientations, and political views, and encompass a diverse array of entities of all sizes and types.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 8 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2 border-r-gray-300 border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                            <Image src={Accountability} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Accountability</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                We hold ourselves personally and collectively responsible for following the right steps to assist you and adhering to ethical principles in an environment of openness and honesty.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Card 9 */}
                    <Card className="rounded-lg border-2 border-[#ffffff] border-r-2  border-b-2 border-b-gray-300 shadow-none p-6">
                        <CardHeader className="flex flex-col items-start gap-4">
                            <div className="text-[#FF5C39]">
                                <Image src={Empowerment} alt="Compassion" width={50} height={50}/>
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A]">Empowerment</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-[#64748B] text-sm leading-relaxed">
                                Making a difference fostering a sense of ownership and pride. We approach everything with passion and purpose and know our work is bigger than ourselves.
                            </p>
                        </CardContent>
                    </Card>

                </div>
            </div>




            {/* Join Our Movement */}
            <div className="bg-gradient-to-r from-[#2E6BE6] to-[#7A60D1] p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#ffffff] mb-1 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Join Our Movement
                </h2>
                <p className="text-center mb-8 text-lg text-white max-w-3xl mx-auto">
                    Every action counts. Whether through volunteering, donating, or spreading awareness, you can make a difference.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card className="rounded-2xl border-0 transition bg-[#FFFFFF1A] p-6">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <User className="w-10 h-10 text-white" />
                            <h3 className="text-xl font-bold text-white text-center">Volunteer</h3>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <p className="text-white text-base text-center -mt-4">
                                Join our global network of volunteers making change in their communities.
                            </p>
                            <Button className="bg-white text-[#2E6BE6] text-base font-medium py-3 px-5 hover:bg-[#ffffff]">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-0 transition bg-[#FFFFFF1A] p-6">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Heart className="w-10 h-10 text-white" />
                            <h3 className="text-xl font-bold text-white text-center">Donate</h3>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <p className="text-white text-base text-center -mt-4">
                                Support our programs and help us reach more communities in need.
                            </p>
                            <Button className="bg-white text-[#2E6BE6] text-base font-medium py-3 px-5 hover:bg-[#ffffff]">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl border-0 transition bg-[#FFFFFF1A] p-6">
                        <CardHeader className="flex flex-col items-center gap-4">
                            <Handshake className="w-10 h-10 text-white" />
                            <h3 className="text-xl font-bold text-white text-center">Partner</h3>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center gap-4">
                            <p className="text-white text-base text-center -mt-4">
                                Collaborate with us to amplify impact in your organization or community.
                            </p>
                            <Button className="bg-white text-[#2E6BE6] text-base font-medium py-3 px- hover:bg-[#ffffff]">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>


        </>
    )
}
