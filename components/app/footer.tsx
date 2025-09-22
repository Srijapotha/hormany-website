"use client";
import Link from "next/link";
import HarmonyLogo from "@/assets/images/HarmonyOverHate_Icon.svg";
import Image from "next/image";
import {
  Mail,
  Smartphone,
} from "lucide-react";

export default function Footer() {

  return (
    <>
      <footer className="w-full bg-[#0F172A] pt-20 px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {/* Logo + Intro */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center">
              <Image
                src={HarmonyLogo}
                alt="Harmony Logo"
                width={140}
                height={45}
                className="h-30 w-30"
                priority
              />
            </Link>
            <p className="mt-4 text-normal text-[#D1D5DB]">
              Building a world where diversity is celebrated and rights are protected
              for all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xl font-semibold text-white font-bold mb-3  w-fit">
              Quick Links
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/our-mission" className=" text-[#D1D5DB] text-base text-normal">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/who-we-are/about-us" className=" text-[#D1D5DB] text-base text-normal">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="/who-we-are/our-team" className=" text-[#D1D5DB] text-base text-normal">
                  Our Team
                </Link>
              </li> */}
              <li>
                <Link href="/who-we-are/what-sets-us-apart" className=" text-[#D1D5DB] text-base text-normal">
                  What Sets Us Apart
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <p className="text-lg font-semibold text-white font-bold mb-3  w-fit">
              Our Programs & Initiatives
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/our-programs-initiatives/human-rights-advocacy" className=" text-[#D1D5DB] text-base text-normal">
                  Human Rights & Advocacy
                </Link>
              </li>
              <li>
                <Link href="/our-programs-initiatives/interfaith-community-harmony" className=" text-[#D1D5DB] text-base text-normal">
                  Interfaith & Community Harmony
                </Link>
              </li>
              <li>
                <Link href="/our-programs-initiatives/support-relief" className=" text-[#D1D5DB] text-base text-normal">
                  Support & Relief

                </Link>
              </li>
              <li>
                <Link href="/our-programs-initiatives/community-development" className=" text-[#D1D5DB] text-base text-normal">
                  Community Development
                </Link>
              </li>
              <li>
                <Link href="/our-programs-initiatives/education-scholarship" className=" text-[#D1D5DB] text-base text-normal">
                  Education & Scholarship
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <p className="text-lg font-semibold text-white font-bold mb-3  w-fit">
              Contact Us
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3 mb-6">
                <Mail className="text-white" />
                <Link href="mailto:info@harmonyoverhate.org" className="text-white">info@harmonyoverhate.org</Link>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="text-white animate-shakeHorizontal" />
                <Link href="tel:+44 20 4540 0111" className="text-white">+44 20 4540 0111</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="w-full bg-black py-3">
        <p className="text-center text-gray-300 text-sm">
          Copyright © | All Rights Reserved
          {/* |{" "}
          <Link href="/terms-and-conditions" className="hover:text-[#69b3f8fb] transition">
            Terms
          </Link>{" "}
          |{" "}
          <Link href="/cookie-policy" className="hover:text-[#69b3f8fb] transition">
            Cookies
          </Link>{" "}
          |{" "}
          <Link href="/privacy-policy" className="hover:text-[#69b3f8fb] transition">
            Privacy
          </Link> */}
        </p>
      </div>

    </>
  );
}
