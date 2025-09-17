"use client";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";

export default function Footer() {
  
  return (
    <>
      <footer className=" bg-white px-5 md:px-10 py-10 lg:container lg:max-w-7xl mx-auto">

        <div className="grid grid-cols-1 gap-8 pb-4 md:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-2 md:col-span-1">
            <div className="p-auto gap-2">
              <Link href="/">
                {/* <Image alt="logo" src={logo} className="" height={40} /> */}
              </Link>
              <menu className="leading-10 mt-2">
                <li>
                  <Link
                    href="/about-us"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    About Maulee
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-sets-us-apart"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    What sets us apart
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Achievements
                  </Link>
                </li> */}
                <li className="">
                  <Link
                    href="/projects"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Projects
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/contact"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/our-app"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Application
                  </Link>
                </li>


              </menu>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="p-auto gap-2">
              <p className="text-2xl font-bold w-fit border-b-2 border-[#F05623]">
                Join Us
              </p>
              <menu className="leading-10 mt-2">
                {/* <li className="">
                  <Link
                    href="/"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Sitemap
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Suggest Project
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/individual-contributions"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Individual Contributions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-contributions"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Corporate Contributions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/charities"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Charities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/slavery-and-human-trafficking"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Slavery and Human Trafficking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/policies-and-ethics"
                    className="hover:font-bold hover:border-b-2 hover:border-b-orange-500 duration-300"
                  >
                    Policies and Ethics
                  </Link>
                </li>
              </menu>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-5 md:col-span-1">
            <p className="text-2xl font-bold w-fit border-b-2 border-[#F05623]">
              Contact Us
            </p>
            <div className="flex items-center gap-2">
              <Mail className="text-[#F05623] animate-jello-horizontal" />
             
            </div>

            <div className="flex items-center gap-2">
              <Smartphone className="text-[#F05623] animate-shakeHorizontal" />
              
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="text-[#F05623] animate-heartbeat" />
              
            </div>


            <div className="flex items-center gap-3">
             
            </div>




          </div>
        </div>
      </footer>
      <div className="p-1 bg-black">
        <p className="text-center text-white font-medium">
          Copyright © | All Rights Reserved | <Link
            href="/terms-and-conditions"
            className="hover:text-[#69b3f8fb] transform transition-all duration-300 delay-150"
          >
            Terms
          </Link> | <Link
            href="/cookie-policy"
            className="hover:text-[#69b3f8fb] transform transition-all duration-300 delay-150"
          >
            Cookies
          </Link> | <Link
            href="/privacy-policy"
            className="hover:text-[#69b3f8fb] transform transition-all duration-300 delay-150"
          >
            Privacy
          </Link>
        </p>
      </div>
    </>
  );
}
