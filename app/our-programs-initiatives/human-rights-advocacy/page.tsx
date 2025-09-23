import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Lightbulb, Shield, Megaphone } from "lucide-react"
import { human_rights_hero } from "@/assets"
import JoinOurMovementComponent from "@/components/reusableComponents/JoinOurMovementComponent"

export default function HumanRightsAdvocacy() {
  return (
    <>
      {/* Hero section */}
      <div
        className="relative w-full w-full h-[55vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] p-[40px_10px_40px_10px] flex items-center justify-center text-center overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${human_rights_hero.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl text-white space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
            Human Rights & Advocacy
          </h1>
          <p className="text-lg md:text-xl">
           {`Join us in the fight for justice and equality. Together we can make a difference`}
          </p>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="p-[40px_10px_40px_10px] md:p-[6%]">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>Why It Matters</h2>
        <p className="text-center text-[#64748B] text-base font-normal leading-relaxed">
         {` Human rights are the cornerstone of a fair and just society. By defending these rights, we not only protect individuals but also strengthen equality, social harmony, and long-term peace.`}
        </p>
      </div>


      {/* Our Focus Area */}
      <div className="bg-[#2E6BE60D] p-[40px_10px_40px_10px] md:p-[6%]">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
          Our Focus Area
        </h2>
        <p className="text-center mb-8 text-lg text-[#0F172A] max-w-3xl mx-auto">
          {`We work across three key areas to advance human rights globally`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="rounded-2xl border border-[#0000004D] hover:shadow-lg transition p-4">
            <CardHeader className="flex flex-col items-start gap-3">
              <Lightbulb className="w-16 h-16 text-white bg-[#22A06B] p-4 rounded-full" />
              <h3 className="text-xl font-bold text-[#0F172A] text-start mt-2">
                Awareness & Education
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#64748B] text-base font-normal -mt-4">
                {`Raising awareness about human rights issues and educating communities about their rights.`}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-[#0000004D] hover:shadow-lg transition p-4">
            <CardHeader className="flex flex-col items-start gap-3">
              <Shield className="w-16 h-16 text-white bg-[#22A06B] p-4 rounded-full" />
              <h3 className="text-xl font-bold text-[#0F172A] text-start mt-2">
                Support & Protection
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#64748B] text-base font-normal -mt-4">
                {`Providing support and protection to individuals and communities whose rights are violated.`}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-[#0000004D] hover:shadow-lg transition p-4">
            <CardHeader className="flex flex-col items-start gap-3">
              <Megaphone className="w-16 h-16 text-white bg-[#22A06B] p-4 rounded-full" />
              <h3 className="text-xl font-bold text-[#0F172A] text-start mt-2">
                Policy & Advocacy
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#64748B] text-base font-normal -mt-4">
                {`Advocating for policy changes and holding governments accountable for human rights abuses.`}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Join Our Movement */}
       <JoinOurMovementComponent />

    </>
  )
}
