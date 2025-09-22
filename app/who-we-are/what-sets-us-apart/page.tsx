
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
            What Sets Us Apart
          </h1>
        </div>
      </div>




      {/* What Distinguishes Us */}
      <div className="bg-[#ffffff] p-[40px_10px_40px_10px] md:p-[6%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

          <Card className="rounded-2xl border-l-4 border-[#2E6BE6] shadow-md hover:shadow-lg transition p-3 bg-white">
            <CardHeader className="flex flex-col items-start gap-3">
              <p className="bg-[#2E6BE6] py-2.5 px-5 rounded-full text-white text-xl font-bold mb-3">1</p>
              <h3 className="text-xl font-bold text-[#0F172A]">Transparency</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#64748B] text-base font-normal -mt-4">{`We ensure complete transparency in our operations by assuring that every donation directly benefits the intended recipients. Our esteemed corporate partner, Baseel Partners LLP, UK amd Maulee Foundation,  covers all operational and logistic expenses for the Maulee Foundation. This commitment means that every penny donated goes directly to those in need, underscoring our dedication to openness.`}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-l-4 border-[#7A60D1] shadow-md hover:shadow-lg transition p-3 bg-white">
            <CardHeader className="flex flex-col items-start gap-3">
              <p className="bg-[#7A60D1] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">2</p>
              <h3 className="text-xl font-bold text-[#0F172A]">International Reach</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#64748B] text-base font-normal -mt-4">{`We have established international collaboration with a network of similar organisations. Our global influence is amplified through our exchange of regional knowledge and innovative ideas.`}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-l-4 border-[#F6C33B] shadow-md hover:shadow-lg transition p-3 bg-white">
            <CardHeader className="flex flex-col items-start gap-3">
              <p className="bg-[#F6C33B] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">3</p>
              <h3 className="text-xl font-bold text-[#0F172A]">Empowering Charities</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#64748B] text-base font-normal -mt-4">{`We're the voice of those making a difference. We support and amplify small non-profits. We work to build skills and capacity within communities.`}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-l-4 border-[#F26D4A] shadow-md hover:shadow-lg transition p-3 bg-white">
            <CardHeader className="flex flex-col items-start gap-3">
              <p className="bg-[#F26D4A] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">4</p>
              <h3 className="text-xl font-bold text-[#0F172A]">Innovative Collaboration</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#64748B] text-base font-normal -mt-4">{`We're pioneering new approaches to community needs by partnering with diverse stakeholders. We support innovation by employing cutting-edge solutions to complex challenges.`}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-l-4 border-[#22A06B] shadow-md hover:shadow-lg transition p-3 bg-white">
            <CardHeader className="flex flex-col items-start gap-3">
              <p className="bg-[#22A06B] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">5</p>
              <h3 className="text-xl font-bold text-[#0F172A]">Commitment to Integrity</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#64748B] text-base font-normal -mt-4">{`At Harmony Over Hate, accountability is not just a principle but a cornerstone of our operations. Our financial records are meticulously maintained and open to scrutiny, reflecting our dedication to the highest standards of commitment. We foster trust through clear, honest, and accessible practices.`}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-l-4 border-[#c15798] shadow-md hover:shadow-lg transition p-3 bg-white">
            <CardHeader className="flex flex-col items-start gap-3">
              <p className="bg-[#c15798] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">6</p>
              <h3 className="text-xl font-bold text-[#0F172A]">Community-Centric Approach</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#0F172A] text-base font-normal -mt-4">{`We believe in the power of inclusivity. We prioritize collaboration and actively engage with communities, valuing their insights, needs, and aspirations. We co-create sustainable solutions that resonate with each community's unique dynamics.`}</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-l-4 border-[#58ab50] shadow-md hover:shadow-lg transition p-3 bg-white">
            <CardHeader className="flex flex-col items-start gap-3">
              <p className="bg-[#58ab50] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">7</p>
              <h3 className="text-xl font-bold text-[#0F172A]">Sustainable Change</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#0F172A] text-base font-normal -mt-4">
                {`We invest in long-term impact. This includes providing ongoing training and new learning opportunities for board members, volunteers, and staff. These investments ensure the organisation's and the non-profit sectors' continued strength and inspire donor confidence.`}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-l-4 border-[#e4a129] shadow-md hover:shadow-lg transition p-3 bg-white">
            <CardHeader className="flex flex-col items-start gap-3">
              <p className="bg-[#e4a129] py-3 px-5 rounded-full text-white text-xl font-bold mb-3">8</p>
              <h3 className="text-xl font-bold text-[#0F172A]">Due Diligence</h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#0F172A] text-base font-normal -mt-4">
                {`We ensure every action counts. We conduct a thorough vetting of charities, donors, and volunteers and a full lifecycle management of initiatives.`}
              </p>
            </CardContent>
          </Card>

        </div>

        {/* <div className="group [perspective:1000px]">
          <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            
            <div className="absolute inset-0 rounded-2xl border-l-4 border-[#2E6BE6] shadow-md transition bg-white p-3 [backface-visibility:hidden]">
              <CardHeader className="flex flex-col items-start gap-3">
                <p className="bg-[#2E6BE6] py-2.5 px-5 rounded-full text-white text-xl font-bold mb-3">1</p>
                <h3 className="text-xl font-bold text-[#0F172A]">Transparency</h3>
              </CardHeader>
            </div>

            
            <div className="absolute inset-0 rounded-2xl border-l-4 border-[#2E6BE6] shadow-md transition bg-white p-3 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <CardContent>
                <p className="text-[#64748B] text-base font-normal">{`We ensure complete transparency in our operations by assuring that every donation directly benefits the intended recipients. Our esteemed corporate partner, Baseel Partners LLP, UK and Maulee Foundation, covers all operational and logistic expenses for the Maulee Foundation. This commitment means that every penny donated goes directly to those in need, underscoring our dedication to openness.`}</p>
              </CardContent>
            </div>

          </div>
        </div> */}

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
