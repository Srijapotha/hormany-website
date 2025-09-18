import { Banner, Map } from "@/assets";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ChartNoAxesCombined, Eye } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative bg-black">
        <Image
          src={Banner}
          height={400}
          width={1400} // Keep this in proportion to the actual image
          priority // Loads this image as a high-priority image (above-the-fold)
          alt="Advancing Human Rights, Equality, and Diversity"
          className="w-full h-auto object-cover lg:container lg:max-w-8xl mx-auto" // Ensures the image covers its container without stretching
          layout="responsive" // Ensures the image maintains its aspect ratio while scaling
        />
        <div className="absolute inset-0 items-center justify-center px-5 md:px-16 text-white lg:container lg:max-w-7xl mx-auto">
          <div>
            <h1 className="leading-normal text-white text-3xl font-semibold ">
              Advancing Human Rights, Equality, and Diversity
            </h1>
            <p className="mt-5 text-sm hidden md:block !leading-loose text-justify">
              Together we work to build harmony, support those in need, and create inclusive communities through education, citizenship, and collaboration
            </p>

            {/* <Link href="https://app.maulee.org/" target="_blank">
                            <Button className="h-auto bg-[linear-gradient(95deg,_#F05623_0%,_#9B1B37_80.26%)] rounded-full mt-4 transform transition-transform duration-300 ease-in-out hover:scale-105 relative">
                                Find a Charity <MoveRight className="ml-2" />
                            </Button>
                        </Link> */}
          </div>
        </div>
      </div>

      <div className="lg:container lg:max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold text-center">Vision & Mission</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
          <div className="h-full">
            <Card className="h-full flex flex-col p-10 border-l-4 border-[#2E6BE6] border-t-0 border-r-0 border-b-0 shadow-lg">
              <CardTitle className="text-xl">Our Vision</CardTitle>
              <span className="bg-[#2E6BE6] rounded-full p-4 w-fit my-4">
                <Eye className="text-white" />
              </span>
              <CardDescription className="text-justify mt-auto">
                To build a just, inclusive, and peaceful world
                where diversity is celebrated, human rights are upheld, and every individual has the freedom to live with dignity, equality, and mutual respect in a thriving global community.
              </CardDescription>
            </Card>
          </div>

          <div className="h-full">
            <Card className="h-full flex flex-col p-10 border-l-4 border-[#7A60D1] border-t-0 border-r-0 border-b-0 shadow-lg">
              <CardTitle className="text-xl">Our Mission</CardTitle>
              <span className="bg-[#7A60D1] rounded-full p-4 w-fit my-4">
                <ChartNoAxesCombined className="text-white" />
              </span>
              <CardDescription className="text-justify mt-auto">
                To challenge hate, prejudice, and discrimination everywhere by supporting victims with care and relief services, promoting dialogue across faiths and cultures, and empowering people through education, advocacy, and unity.
              </CardDescription>
            </Card>
          </div>
        </div>


      </div>

      <div className="bg-[#0F172A]">
        <div className="text-white text-center lg:container lg:max-w-7xl mx-auto px-6 py-10">

          <h3 className="text-3xl font-semibold">Global Impact & Partners</h3>
          <p>Working with leading organizations worldwide to create lasting change.</p>

          <Image src={Map} alt="" className="p-5 md:p-15" />
        </div>
      </div>

    </>
  );
}
