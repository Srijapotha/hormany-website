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
                <Link href="/about-us" className=" text-[#D1D5DB] text-base text-normal">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/what-sets-us-apart" className=" text-[#D1D5DB] text-base text-normal">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/projects" className=" text-[#D1D5DB] text-base text-normal">
                  Global Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className=" text-[#D1D5DB] text-base text-normal">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <p className="text-lg font-semibold text-white font-bold mb-3  w-fit">
              Get Involved
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/individual-contributions" className=" text-[#D1D5DB] text-base text-normal">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/corporate-contributions" className=" text-[#D1D5DB] text-base text-normal">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/charities" className=" text-[#D1D5DB] text-base text-normal">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/slavery-and-human-trafficking" className=" text-[#D1D5DB] text-base text-normal">
                  Join Campaigns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
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
