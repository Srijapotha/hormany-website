import { MissionHeroBanner } from "@/assets"
import Image from "next/image"
import { Paresh_Deshmukh, Sushil_Gaikwad, Richa } from "@/assets"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import { ArrowRight } from "lucide-react"


export default function Team() {
    return (
        <>
            {/* Hero section */}
            <div
                className="relative w-full h-[55vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] p-[40px_10px_40px_10px] flex items-center justify-center text-center overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${MissionHeroBanner.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-3xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
                        Meet Our Leaders
                    </h1>
                    <p className="text-lg md:text-xl">
                        The visionaries guiding maulee towards a more inclusive, empowered, and sustainable future.
                    </p>
                </div>
            </div>



            <div className="bg-[#2E6BE60D] p-[40px_10px] md:p-[40px_20px] lg:p-[6%]">
                <h2
                    className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[34px] sm:leading-[46px] md:leading-[56px]"
                    style={{ fontFamily: "Unbounded" }}
                >
                    Global Board
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
                    <div className="group relative flex flex-col">
                        <Image
                            src={Richa}
                            alt="Richa Sinha"
                            className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover rounded-t-xl"
                            width={500}
                            height={450}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5 border-t-5  border-[#2E6BE6]">
                            <h3 className="text-lg font-bold text-[#0F172A]">Richa Sinha</h3>

                            <Accordion type="single" collapsible className="mt-2">
                                <AccordionItem value="item-1" className="border-none">
                                    <AccordionTrigger className="px-0 flex gap-2 text-left text-[#2E6BE6] font-semibold hover:font-bold hover:text-blue-700">
                                        Read more <ArrowRight />
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-sm text-[#64748B] mt-1 text-justify">
                                            {`Richa Sinha is the Chairperson of Harmony Over Hate, a global interfaith and intercultural movement dedicated to promoting peace, unity, and mutual respect across communities. Under her leadership, Harmony Over Hate has emerged as a strong voice against intolerance and discrimination, creating platforms for dialogue, collaboration, and positive social change.

Alongside this role, Richa is the Chairperson and Founder of the Scottish Hindu Foundation, the representative body of all Scottish Hindu Mandirs to the Scottish Government. A dentist by profession, she also serves as the Hindu Representative on the Faith and Belief Committee in the Scottish Government and is a member of the BBC Scotland Advisory Committee on Religion and Ethics.

Passionate about cultural and linguistic preservation, Richa has led the Hindi Pathshala Program since 2013 and is actively campaigning for Hindi to be included in the National Curriculum. On the international stage, she is working with the United Nations Human Rights Council (UNHRC) to secure recognition of Hinduphobia as a global human rights issue.

Through her leadership in Harmony Over Hate, the Scottish Hindu Foundation, and beyond, Richa continues to champion interfaith harmony, cultural education, and inclusive representation at both national and international levels.
`}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>


                        </div>
                    </div>

                    <div className="group relative flex flex-col">
                        <Image
                            src={Paresh_Deshmukh}
                            alt="Paresh Deshmukh"
                            className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover rounded-t-xl"
                            width={500}
                            height={450}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5  border-t-5  border-[#2E6BE6]">
                            <h3 className="text-lg font-bold text-[#0F172A]">Paresh Deshmukh</h3>
                            <Accordion type="single" collapsible className="mt-2">
                                <AccordionItem value="item-1" className="border-none">
                                    <AccordionTrigger className="px-0 flex gap-2 text-left text-[#2E6BE6] font-semibold hover:font-bold hover:text-blue-700">
                                        Read more <ArrowRight />
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-sm text-[#64748B] mt-1 text-justify">
                                            {`Paresh Deshmukh is the Vice Chair of Harmony Over Hate, a global charity dedicated to advancing human rights, equality, and diversity; promoting interfaith and racial harmony; supporting individuals affected by hate crime, discrimination, or social exclusion; and strengthening community cohesion in Scotland and across the world. As both Vice Chair and Founder Director, Paresh has been instrumental in shaping Harmony Over Hate’s vision as an international movement that champions peace, dialogue, and inclusion.

Beyond this role, Paresh is the Founder and Chairperson of the Maulee Foundation, which delivers initiatives across Asia, Africa, and Europe to support education, empower vulnerable communities, and enable smaller charities to embrace digital transformation. Maulee has become a platform that bridges innovation with compassion, ensuring that grassroots organisations have the tools, knowledge, and resources to create sustainable change.

He is also the Founder Director of Tech Saudi Advocates, part of the Global Tech Advocates network, driving innovation, diversity, and investment in the technology ecosystem across Saudi Arabia and worldwide. Paresh additionally co-founded Cyber London, which supports the UK’s third sector with digital skills and innovation, and established the Global CISO Society, a worldwide knowledge-sharing platform for cybersecurity leaders.

An entrepreneur as well as a philanthropist, Paresh founded Baseel Group in 2012, a multinational enterprise delivering IT and cybersecurity solutions in more than 100 countries, with entities across six regions. He has also launched and scaled ventures in diverse industries, including healthcare through the NeoSmile Group.

Guided by the belief that collaboration and innovation are the foundations of progress, Paresh continues to use his global networks, business expertise, and philanthropic vision to strengthen Harmony Over Hate’s mission and build a more equitable, inclusive, and sustainable world.`}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>



                        </div>
                    </div>
                    <div className="group relative flex flex-col">
                        <Image
                            src={Sushil_Gaikwad}
                            alt="Sushil Gaikwad"
                            className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover rounded-t-xl"
                            width={500}
                            height={450}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5 border-t-5  border-[#2E6BE6]">
                            <h3 className="text-lg font-bold text-[#0F172A]">Sushil Gaikwad</h3>
                            <Accordion type="single" collapsible className="mt-2">
                                <AccordionItem value="item-1" className="border-none">
                                    <AccordionTrigger className="px-0 flex gap-2 text-left text-[#2E6BE6] font-semibold hover:font-bold hover:text-blue-700">
                                        Read more <ArrowRight />
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-sm text-[#64748B] mt-1 text-justify">
                                            {`Sushil Gaikwad is the Director for Legal and Compliance at Harmony Over Hate, a global charity dedicated to advancing human rights, promoting interfaith and racial harmony, tackling hate crime and discrimination, and strengthening community cohesion. In this role, Sushil ensures that Harmony Over Hate operates with the highest standards of legal integrity, compliance, and governance, enabling the organisation to champion equality and justice on both national and international stages.

Alongside this, Sushil serves as the Legal and Compliance Director of the Maulee Foundation, where he brings more than 14 years of legal expertise and community leadership to strengthen governance, accountability, and compliance across the Foundation’s global initiatives in Asia, Africa, and Europe.

A qualified solicitor and respected community leader, Sushil has also played an active role in civic and cultural life. He served as Chair Trustee and Building Trustee at Maharashtra Mandal London, guiding one of the UK’s oldest cultural charities through strategic governance and compliance. His commitment to public service was also reflected in 2019, when he stood as an independent candidate in the UK General Election, advocating for fairness, equity, and community empowerment.

Through his leadership at Harmony Over Hate and Maulee Foundation, Sushil applies his deep knowledge of law, compliance, and charity governance to safeguard missions of social impact while empowering grassroots organisations worldwide. Guided by integrity and compassion, he is committed to building a more resilient third sector that advances equality, human rights, and sustainable development across communities.`}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>



                        </div>
                    </div>

                </div>
            </div>







        </>
    )
}
