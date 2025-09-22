
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { MissionHeroBanner, Economic_Transparency } from "@/assets"


export default function whatsetsusapart() {
    return (
        <>
            {/* Hero section */}
            <div
                className="relative w-full w-full h-[55vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] p-[40px_10px_40px_10px] flex items-center justify-center text-center overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${MissionHeroBanner.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-3xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
                        What Distinguishes Us
                    </h1>
                </div>
            </div>




            {/* What Distinguishes Us */}
           <div className="bg-[#ffffff] p-[40px_10px_40px_10px] md:p-[6%]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    
    <Card className="rounded-2xl border-l-4 border-[#2E6BE6] shadow-md hover:shadow-lg transition p-6 bg-white">
      <CardHeader className="flex flex-col items-start gap-3">
        <p className="bg-[#2E6BE6] py-2.5 px-5 rounded-full text-white text-xl font-bold mb-3">1</p>
        <h3 className="text-xl font-bold text-[#0F172A]">Transparency</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#64748B] text-base font-normal -mt-4"></p>
      </CardContent>
    </Card>

    <Card className="rounded-2xl border-l-4 border-[#7A60D1] shadow-md hover:shadow-lg transition p-6 bg-white">
      <CardHeader className="flex flex-col items-start gap-3">
        <p className="bg-[#7A60D1] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">2</p>
        <h3 className="text-xl font-bold text-[#0F172A]">International Reach</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#64748B] text-base font-normal -mt-4"></p>
      </CardContent>
    </Card>

    <Card className="rounded-2xl border-l-4 border-[#F6C33B] shadow-md hover:shadow-lg transition p-6 bg-white">
      <CardHeader className="flex flex-col items-start gap-3">
        <p className="bg-[#F6C33B] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">3</p>
        <h3 className="text-xl font-bold text-[#0F172A]">Empowerment Beyond Aid</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#64748B] text-base font-normal -mt-4"></p>
      </CardContent>
    </Card>

    <Card className="rounded-2xl border-l-4 border-[#F26D4A] shadow-md hover:shadow-lg transition p-6 bg-white">
      <CardHeader className="flex flex-col items-start gap-3">
        <p className="bg-[#F26D4A] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">4</p>
        <h3 className="text-xl font-bold text-[#0F172A]">Inclusivity</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#64748B] text-base font-normal -mt-4"></p>
      </CardContent>
    </Card>

    <Card className="rounded-2xl border-l-4 border-[#22A06B] shadow-md hover:shadow-lg transition p-6 bg-white">
      <CardHeader className="flex flex-col items-start gap-3">
        <p className="bg-[#22A06B] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">5</p>
        <h3 className="text-xl font-bold text-[#0F172A]">Sustainable Change</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#64748B] text-base font-normal -mt-4"></p>
      </CardContent>
    </Card>

    <Card className="rounded-2xl border-l-4 border-[#64748B] shadow-md hover:shadow-lg transition p-6 bg-white">
      <CardHeader className="flex flex-col items-start gap-3">
        <p className="bg-[#64748B] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">6</p>
        <h3 className="text-xl font-bold text-[#0F172A]">Empowerment Beyond Aid</h3>
      </CardHeader>
      <CardContent>
        <p className="text-[#0F172A] text-base font-normal -mt-4"></p>
      </CardContent>
    </Card>

  </div>
</div>




            {/* Economic Transparency */}
            <div className="bg-[#2E6BE60D] p-[25px_10px_25px_10px] md:p-[6%]">

                <h2
                    className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]"
                    style={{ fontFamily: "Unbounded" }}
                >
                    Economic Transparency
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">

                    <div className="flex justify-center">
                        <Image
                            src={Economic_Transparency}
                            alt="Economic Transparency"
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>


                    <div className="flex flex-col gap-4">
                        <p className="text-[#64748B] text-base font-normal leading-[26px]">
                            <strong className="text-[#2E6BE6]">Detailed Financial Records:</strong> Making sure that all our
                            financial records are detailed, which can be accessed by everyone and
                            will bring about responsible, clear dealings.
                        </p>
                        <p className="text-[#64748B] text-base font-normal leading-[26px]">
                            <strong className="text-[#2E6BE6]">Regular Audits:</strong> We conduct independent audits through
                            highly regarded agencies to guarantee compliance and transparency of our
                            financial management system.
                        </p>
                        <p className="text-[#64748B] text-base font-normal leading-[26px]">
                            <strong className="text-[#2E6BE6]">Impact Reporting:</strong> Publish examples of how annual
                            reports have used donation funds on our website and to donors to show
                            how different donations have worked towards improving our programs and
                            benefiting the intended beneficiaries.
                        </p>
                        <p className="text-[#64748B] text-base font-normal leading-[26px]">
                            <strong className="text-[#2E6BE6]">Donor Promise:</strong> Committing to using contributions in the
                            best manner possible with a high proportion going directly into our
                            projects and their communities. It is therefore our aim at Maulee
                            Foundation, to make a valuable long-term positive change to the
                            communities we serve by aligning our activities with these mission,
                            vision, and goals. Help us build a world where every person thrives.
                        </p>
                    </div>
                </div>
            </div>





        </>
    )
}
