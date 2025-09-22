"use client";
import { Banner, Intro, Map, Program1, Program2, Program3, Program4, Program5, Project1, Project2, Project3, Project4, Project5 } from "@/assets";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { ChartNoAxesCombined, Check, ChevronDown, Eye, Handshake, Heart, MoveRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative bg-black">
        <Image
          src={Banner}
          height={400}
          width={1400} // Keep this in proportion to the actual image
          priority // Loads this image as a high-priority image (above-the-fold)
          alt="Advancing Human Rights, Equality, and Diversity"
          className="w-full h-auto object-cover" // Ensures the image covers its container without stretching
          layout="responsive" // Ensures the image maintains its aspect ratio while scaling
        />
        <div className="absolute text-center inset-0 flex flex-col items-center justify-center px-[5%] md:px-[12%] text-white lg:container lg:max-w-7xl mx-auto">

          <h1 className="text-xs sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]">
            Advancing Human Rights, Equality, and Diversity
          </h1>
          <p className="mt-2 md:mt-5 !leading-loose text-xs md:text-lg">
            Together we work to build harmony, support those in need, and create inclusive communities through education, citizenship, and collaboration
          </p>

        </div>
      </div>
      <div className="bg-[#64748B1A] pt-0 px-6 py-10">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-1 lg:container lg:max-w-7xl mx-auto">
          <div className="relative bg-transparent">
            <Image
              src={Project1}
              alt=""
              className="w-full h-auto"
              layout="responsive"
            />
            <div className="absolute text-center inset-0 flex flex-col items-center justify-center px-[5%] md:px-[12%] text-white lg:container lg:max-w-7xl mx-auto">
              <h6 className="text-white text-xs md:text-xl font-semibold">Human Rights & Equality</h6>
            </div>
          </div>
          <div className="relative bg-transparent">
            <Image
              src={Project2}
              alt=""
              className="w-full h-auto"
              layout="responsive"
            />
            <div className="absolute text-center inset-0 flex flex-col items-center justify-center px-[5%] md:px-[12%] text-white lg:container lg:max-w-7xl mx-auto">
              <h6 className="text-white text-xs md:text-xl font-semibold">Harmony & Relief</h6>
            </div>
          </div>
          <div className="relative bg-transparent">
            <Image
              src={Project3}
              alt=""
              className="w-full h-auto"
              layout="responsive"
            />
            <div className="absolute text-center inset-0 flex flex-col items-center justify-center px-[5%] md:px-[12%] text-white lg:container lg:max-w-7xl mx-auto">
              <h6 className="text-white text-xs md:text-xl font-semibold">Education & Growth</h6>
            </div>
          </div>
          <div className="relative bg-transparent">
            <Image
              src={Project4}
              alt=""
              className="w-full h-auto"
              layout="responsive"
            />
            <div className="absolute text-center inset-0 flex flex-col items-center justify-center px-[5%] md:px-[12%] text-white lg:container lg:max-w-7xl mx-auto">
              <h6 className="text-white text-xs md:text-xl font-semibold">Citizenship & Community</h6>
            </div>
          </div>
          <div className="relative bg-transparent">
            <Image
              src={Project5}
              alt=""
              className="w-full h-auto"
              layout="responsive"
            />
            <div className="absolute text-center inset-0 flex flex-col items-center justify-center px-[5%] md:px-[12%] text-white lg:container lg:max-w-7xl mx-auto">
              <h6 className="text-white text-xs md:text-xl font-semibold">Relief & Support</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:container lg:max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image alt="" src={Intro} />
          <div className="relative p-8 md:pl-8 md:pr-5 rounded-4xl flex flex-col justify-center overflow-hidden bg-[#2e6be626]  md:bg-transparent">

            {/* <div className="absolute top-0 left-0 h-full w-full bg-[#2e6be626] transform skew-x-3 translate-y-4 origin-right rounded-3xl z-0 shadow-inner" /> */}

            <div className="relative z-10">
              <h2 className="text-2xl md:text-[34px] font-bold mb-2">About Us</h2>

              <CardDescription className="text-justify text-base">
                HarmonyOverHate is a global charity dedicated to creating a world where dignity, equality, and respect are the foundation of every community. We work to support victims of hate, promote dialogue across faiths, empower through education, and strengthen communities for lasting harmony.
              </CardDescription>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <div>
                  <div className="flex gap-3 items-center py-1">
                    <span className="bg-[#F26D4A] p-2 rounded-full font-semibold text-white">01</span>
                    <p className="font-semibold">Human Rights Advocacy</p>
                  </div>
                  <div className="flex gap-3 items-center py-1">
                    <span className="bg-[#F26D4A] p-2 rounded-full font-semibold text-white">02</span>
                    <p className="font-semibold">Support & Relief</p>
                  </div>
                </div>

                <div>
                  <div className="flex gap-3 items-center py-1">
                    <span className="bg-[#F26D4A] p-2 rounded-full font-semibold text-white">03</span>
                    <p className="font-semibold">Interfaith Harmony</p>
                  </div>
                  <div className="flex gap-3 items-center py-1">
                    <span className="bg-[#F26D4A] p-2 rounded-full font-semibold text-white">04</span>
                    <p className="font-semibold">Education & Development</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute hidden md:block top-0 left-0 h-full w-full [clip-path:polygon(0%_20%,100%_0%,100%_100%,0%_100%)] bg-[#2e6be626] transform skew-y-4 translate-x-4 origin-right z-0 shadow-inner " />

          </div>

        </div>
      </div>

      <div className="lg:container lg:max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-[34px] font-bold text-center my-7 md:my-8">Vision & Mission</h2>

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

      <div className="lg:container lg:max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl md:text-[34px] font-bold text-center my-7 md:my-8">Our Programs & Initiatives</h3>
        <p className="text-center">Comprehensive programs addressing every aspect of human rights and community building.</p>

        <Carousel className="w-full" >

          <CarouselContent>
            <CarouselItem className="py-8 md:basis-1/2">

              <Card className="h-full flex flex-col p-10 shadow-lg">
                <Image src={Program2} alt="" />

                <CardTitle>Community Development</CardTitle>
                <CardDescription>
                  <p className="leading-loose text-justify">
                    Building stronger communities through civic engagement, volunteer programs, and grassroots initiatives.
                  </p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Volunteer Programs</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Community Centers</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Civic Engagement</p>
                </CardDescription>
              </Card>

            </CarouselItem>

            <CarouselItem className="py-8 md:basis-1/2">
              <Card className="h-full flex flex-col p-10 shadow-lg">
                <Image src={Program1} alt="" />

                <CardTitle>Education & Scholarships</CardTitle>
                <CardDescription>
                  <p className="leading-loose text-justify">Empowering the next generation through education, scholarships, and training programs that promote understanding and equality.
                  </p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Scholarship Programs</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Educational Resources</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Training Workshops</p>
                </CardDescription>
              </Card>
            </CarouselItem>

            <CarouselItem className="py-8 md:basis-1/2">
              <Card className="h-full flex flex-col p-10 shadow-lg">
                <Image src={Program3} alt="" />

                <CardTitle>Human Rights & Advocacy
                </CardTitle>
                <CardDescription>
                  <p className="leading-loose text-justify">
                    Defending dignity, equality, and justice for all.
                  </p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Victim Support & Advocacy</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Awareness Campaigns</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Policy & Legal Partnerships</p>
                </CardDescription>
              </Card>
            </CarouselItem>

            <CarouselItem className="py-8 md:basis-1/2">
              <Card className="h-full flex flex-col p-10 shadow-lg">
                <Image src={Program4} alt="" />

                <CardTitle>Interfaith & Community Harmony</CardTitle>
                <CardDescription>
                  <p className="leading-loose text-justify">
                    Building bridges across faiths, cultures, and communities.
                  </p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Dialogue & Mediation
                  </p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Intercultural Events</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Reconciliation Projects
                  </p>
                </CardDescription>
              </Card>
            </CarouselItem>

            <CarouselItem className="py-8 md:basis-1/2">
              <Card className="h-full flex flex-col p-10 shadow-lg">
                <Image src={Program5} alt="" />

                <CardTitle>Support & Relief
                </CardTitle>
                <CardDescription>
                  <p className="leading-loose text-justify">Providing urgent help and long-term recovery for victims of hate.
                  </p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Crisis Relief & Counselling</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Family & Community Support</p>
                  <p className="flex gap-3"><Check className="text-[#0eb204]" /> Rehabilitation & Integration
                  </p>
                </CardDescription>
              </Card>
            </CarouselItem>


          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>

      <div className="bg-[#0F172A]">
        <div className="text-white text-center lg:container lg:max-w-7xl mx-auto px-6 py-10">

          <h3 className="text-3xl font-semibold">Global Impact & Partners</h3>
          <p>Working with leading organizations worldwide to create lasting change.</p>

          <Image src={Map} alt="" className="p-5 md:p-15" />
        </div>
      </div>

      {/* <div className="my-10">
        <div className="block sm:hidden mb-4">
          <div className="relative">
            <button
              type="button"
              className="p-4 border-t-2 border-[#2E6BE6] border-x-0 border-b-0 bg-[#2E6BE633] font-semibold w-full text-lg flex justify-between items-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-controls="dropdown-menu"
            >
              <span>
                {selectedPage === 1
                  ? 'Individual Contributions'
                  : selectedPage === 2
                    ? 'Corporate Contributions'
                    : 'Charities'}
              </span>
              <ChevronDown
                className={`ml-2 font-bold transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isOpen && (
              <div id="dropdown-menu" className="absolute left-0 right-0 mt-1 border-t-2 border-[#2E6BE6] border-x-0 border-b-0 bg-[#d5e1fa]  rounded-md shadow-lg z-10">
                <button
                  type="button"
                  className="p-4 w-full text-lg text-left"
                  onClick={() => { setCurrentPage(1); setSelectedPage(1); setIsOpen(false); }}
                >
                  Individual Contributions
                </button>
                <button
                  type="button"
                  className="p-4 w-full text-lg text-left"
                  onClick={() => { setCurrentPage(2); setSelectedPage(2); setIsOpen(false); }}
                >
                  Corporate Contributions
                </button>
                <button
                  type="button"
                  className="p-4 w-full text-lg text-left"
                  onClick={() => { setCurrentPage(3); setSelectedPage(3); setIsOpen(false); }}
                >
                  Charities
                </button>
              </div>
            )}
          </div>
        </div>


        <Pagination className="hidden sm:block px-1 lg:px-14 justify-start lg:container lg:max-w-7xl mx-auto">
          <PaginationContent className="flex flex-wrap justify-start">
            <PaginationItem className="w-full sm:w-auto">
              <PaginationLink
                className={`cursor-pointer text-base font-semibold block md:inline w-full md:w-auto rounded-none p-2 ${currentPage === 1 ? "border-t-2 border-[#2E6BE6] border-x-0 border-b-0 bg-[#2E6BE633]" : ""}`}
                onClick={() => { setCurrentPage(1); setSelectedPage(1); }}
                isActive={currentPage === 1}
                href={`#page-1`}
                aria-current={currentPage === 1 ? 'page' : undefined}
              >
                Individual Contributions
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="w-full sm:w-auto">
              <PaginationLink
                className={`cursor-pointer text-base font-semibold block md:inline w-full md:w-auto rounded-none p-2 ${currentPage === 2 ? "border-t-2 border-[#2E6BE6] border-x-0 border-b-0 bg-[#2E6BE633]" : ""}`}
                onClick={() => { setCurrentPage(2); setSelectedPage(2); }}
                isActive={currentPage === 2}
                href={`#page-2`}
                aria-current={currentPage === 2 ? 'page' : undefined}
              >
                Corporate Contributions
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="w-full sm:w-auto">
              <PaginationLink
                className={`cursor-pointer text-base font-semibold block md:inline w-full md:w-auto rounded-none p-2 ${currentPage === 3 ? "border-t-2 border-[#2E6BE6] border-x-0 border-b-0 bg-[#2E6BE633]" : ""}`}
                onClick={() => { setCurrentPage(3); setSelectedPage(3); }}
                isActive={currentPage === 3}
                href={`#page-3`}
                aria-current={currentPage === 3 ? 'page' : undefined}
              >
                Charities
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>


        {currentPage === 1 && (
          <div className="bg-[#2E6BE60D] px-6 py-10">
            <div className="lg:container lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="col-span-1 group">
                <Link
                  href="/what-we-do/individual-contributions"
                  className=" text-base md:text-xl font-semibold flex gap-2 hover:text-[#2E6BE6] transform transition-all duration-100 delay-100"
                >
                  Individual Contributions
                  <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                <CardDescription className="text-justify text-base">We collaborate to support you in realizing your giving goals, whether they involve one-time gifts, ongoing contributions, or creating your own subjective philanthropic strategy. </CardDescription>
              </div>

              <div>
                <div className="mb-4 group">
                  <Link
                    href="/what-we-do/individual-contributions"
                    className=" text-base md:text-xl font-semibold flex gap-2 hover:text-[#2E6BE6] transform transition-all duration-100 delay-100"
                  >
                    Make your Donations Effective
                    <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                  <CardDescription className="text-justify">Discover the best ways to contribute that matches your aspiration. We match our strategic, insight led approach with your giving ambitions, so you give in the way you want, to the causes you want, at the right time for you.</CardDescription>
                </div>

                <div className="mb-4 group">
                  <Link
                    href="/what-we-do/individual-contributions"
                    className=" text-base md:text-xl font-semibold flex gap-2 hover:text-[#2E6BE6] transform transition-all duration-100 delay-100"
                  >
                    Amplify your Impact
                    <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                  <CardDescription className="text-justify">Maximise the impact of your contribution by aligning your contribution’s goals with the exigencies of the charities. From strategic advice to grantmaking and social investment, we can work together to drive meaningful change.</CardDescription>
                </div>

                <div className="mb-4 group">
                  <Link
                    href="/what-we-do/individual-contributions"
                    className=" text-base md:text-xl font-semibold flex gap-2 hover:text-[#2E6BE6] transform transition-all duration-100 delay-100"
                  >
                    Resources to make your Donations Effective
                    <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                  <CardDescription className="text-justify">We offer seamless support and expertise to strengthen your own. A trusted philanthropy partner to help your clients make a measurable difference to the causes they care about. 	 </CardDescription>
                </div>

              </div>
            </div>

          </div>
        )}
        {currentPage === 2 && (
          <div className="bg-[#2E6BE60D] px-6 py-10">
            <div className="lg:container lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="col-span-1 group">
                <Link href="/what-we-do/corporate-contribution" className=" text-base md:text-xl font-semibold flex gap-2 hover:text-[#2E6BE6] transform transition-all duration-100 delay-100">
                  Corporate Contributions
                  <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                <CardDescription className="text-justify text-base">
                </CardDescription>
              </div>

              <div>
                <div className="mb-4 group">
                  <Link
                    href="/what-we-do/corporate-contributions"
                    className=" text-base md:text-xl font-semibold flex gap-2 hover:text-[#2E6BE6] transform transition-all duration-100 delay-100"
                  >

                    <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                  <CardDescription className="text-justify"></CardDescription>
                </div>
              </div>
            </div>

          </div>
        )}
        {currentPage === 3 && (
          <div className="bg-[#2E6BE60D] px-6 py-10">
            <div className="lg:container lg:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="col-span-1 group">
                <Link href="/what-we-do/charities" className=" text-base md:text-xl font-semibold flex gap-2 hover:text-[#2E6BE6] transform transition-all duration-100 delay-100">
                  Charities
                  <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                <CardDescription className="text-justify">
                </CardDescription>
              </div>
              <div>

                <div className="mb-4 group">
                  <Link
                    href="/what-we-do/charities"
                    className=" text-base md:text-xl font-semibold flex gap-2 hover:text-[#2E6BE6] transform transition-all duration-100 delay-100"
                  >


                    <MoveRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                  <CardDescription className="text-justify text-sm"> </CardDescription>
                </div>

              </div>
            </div>

          </div>
        )}
      </div> */}

      <div className="bg-gradient-to-r from-[#2E6BE6] to-[#7A60D1] p-[40px_10px_40px_10px] md:p-[6%]">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#ffffff] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
          Join Our Movement
        </h2>
        <p className="text-center mb-8 text-lg text-white max-w-3xl mx-auto md:-mt-10 -mt-5">
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
  );
}
