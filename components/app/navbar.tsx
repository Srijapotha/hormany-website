"use client";
import Link from "next/link";
import {
  ChevronDown,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import Image from "next/image";
import HarmonyLogo from "@/assets/images/HarmonyOverHate_Icon.svg";

const Navbar = () => {
  const router = useRouter();
  // const [isSheetOpen, setIsSheetOpen] = useState(false);
  // const [projectCategories, setProjectCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);


  // const closeSheet = () => setIsSheetOpen(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };
  // const toggleDropdownOff = () => {
  //   setIsOpen(isOpen);
  // };
  return (
    <>
      <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={HarmonyLogo}
            alt="Harmony Logo"
            width={120}
            height={40}
            className="h-20 w-20"
            priority
          />
        </Link>

        {/* Middle - Nav Links */}
        <NavigationMenu>
          <ul className="flex items-center gap-6">
            {/* Who We Are */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all">
                  Who We Are <ChevronDown className="ml-1 w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#F26D4A] text-white">
                  <DropdownMenuItem onClick={() => router.push("/about-us")}>
                    About Us
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/what-sets-us-apart")}>
                    What Sets Us Apart
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/our-team")}>
                    Our Team
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {/* What We Do */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all">
                  What We Do <ChevronDown className="ml-1 w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#F26D4A] text-white">
                  <DropdownMenuItem onClick={() => router.push("/individual-contributions")}>
                    Individual Contributions
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/corporate-contributions")}>
                    Corporate Contributions
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/charities")}>
                    Charities
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {/* Our Work */}
            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all">
                  Our Work <ChevronDown className="ml-1 w-4 h-4" />
                </DropdownMenuTrigger>
              </DropdownMenu>
            </NavigationMenuItem>

            {/* Get Involved */}
            <NavigationMenuItem>
              <Link
                href="/get-involved"
                className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all"
              >
                Get Involved
              </Link>
            </NavigationMenuItem>
          </ul>
        </NavigationMenu>

        {/* Right - Search + Buttons */}
        <div className="flex items-center gap-4">
          {/* <button className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all">
            <Search className="w-5 h-5 mr-3" />
            Search
          </button> */}

          <Link href="/join">
            <Button className="rounded-full text-base bg-green-600 hover:bg-green-700 text-white px-8 py-6 font-medium">
              Join Harmony
            </Button>
          </Link>
          <Link href="/donate">
            <Button className="rounded-full text-base bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-6 font-medium">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;
