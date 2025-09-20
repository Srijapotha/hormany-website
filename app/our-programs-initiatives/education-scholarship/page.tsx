import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { scholarship_programs,educational_resources,training_workshops,education_scholarship,education_video_banner } from "@/assets"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Handshake, Heart, User, ArrowRight } from "lucide-react"

export default function EducationScholarship() {
  return (
    <>
      {/* Hero section */}
      <div
        className="relative w-full md:h-[60vh] h-[100vh] flex items-center justify-center text-center overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${education_scholarship.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-3xl text-white space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
            Education & Scholarship
          </h1>
          <p className="text-lg md:text-xl">
            HarmonyOverHate is committed to building a world where diversity is celebrated, rights are protected, and communities thrive together.
          </p>
        </div>
      </div>



      {/* Benefits  */}
      <div className="bg-white p-[40px_10px_40px_10px] md:p-[6%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={scholarship_programs}
                alt="Scholarship Programs"
                className="w-full h-56 object-cover rounded-t-2xl"
                width={1200}
                height={1000}
              />
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#0F172A] text-start mb-3 -mt-8">
                Scholarship Programs
              </h3>
              <p className="text-[#64748B] text-base text-start mb-4">
                We provide merit-based and need-based scholarships to deserving students who face financial challenges. These scholarships ensure that talented individuals are not…
              </p>
              <a
                href="#"
                className="text-[#2563EB] font-semibold flex items-center gap-2 text-sm hover:underline"
              >
                READ MORE <span className="text-[#F97316]"><ArrowRight /></span>
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={educational_resources}
                alt="Educational Resources"
                className="w-full h-56 object-cover rounded-t-2xl"
                width={1200}
                height={1000}
              />
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#0F172A] text-start mb-3 -mt-8">
                Educational Resources
              </h3>
              <p className="text-[#64748B] text-base text-start mb-4">
                Beyond financial support, we believe access to quality learning materials is crucial. From books and digital content to mentoring and career guidance, our resources are designed to help…
              </p>
              <a
                href="#"
                className="text-[#2563EB] font-semibold flex items-center gap-2 text-sm hover:underline"
              >
                READ MORE <span className="text-[#F97316]"><ArrowRight /></span>
              </a>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white p-0 overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={training_workshops}
                alt="Training Workshops"
                className="w-full h-56 object-cover rounded-t-2xl"
                width={1200}
                height={1000}
              />
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-[#0F172A] text-start mb-3 -mt-8">
                Training Workshops
              </h3>
              <p className="text-[#64748B] text-base text-start mb-4">
                Education goes hand in hand with skill development. Our workshops focus on leadership, communication, technology, and vocational training. These sessions equip students with…
              </p>
              <a
                href="#"
                className="text-[#2563EB] font-semibold flex items-center gap-2 text-sm hover:underline"
              >
                READ MORE <span className="text-[#F97316]"><ArrowRight /></span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video part section */}
      <div className="bg-[#2E6BE60D] p-[40px_10px_40px_10px] md:p-[6%]">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-1  leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
          Introduction Video of Our Program
        </h2>
        <p className="text-center mb-8 text-lg text-[#0F172A] max-w-3xl mx-auto">
          To advance human rights, equality, and diversity for the public benefit by
        </p>
        <div className="relative w-full flex justify-center items-center">
          <Image
            src={education_video_banner}
            alt="Education and Scholarship"
            className="w-200 h-auto object-cover rounded-2xl"
            width={1000}
            height={500}
          />
          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play Video"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 md:w-10 md:h-10 text-[#F97316]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
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
              <Button className="bg-white text-[#2E6BE6] text-base font-medium py-3 px-5 hover:bg-[#ffffff]">
                Get Started
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>


    </>
  )
}
