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
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [projectCategories, setProjectCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
 

  const closeSheet = () => setIsSheetOpen(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownOff = () => {
    setIsOpen(isOpen);
  };
  return (
    <>
      {/* Top Div with Contact Info and Sheet Button */}
      <div className="top-div">

        {/* Main Navigation Menu */}
        <NavigationMenu className="hidden md:flex w-full items-center max-w-none px-8 py-3">
          <ul className="w-full flex items-center justify-between gap-6 ">
            <NavigationMenuItem>
              <Link href="/">
                {/* <Image src={logo} alt={"logo"} className="w-auto h-11" /> */}
              </Link>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center hover:text-[#FF4400] transform transition-all duration-300 delay-200">
                  Who We Are <ChevronDown className="mt-1 ml-1 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black text-white">
                  <DropdownMenuItem onClick={() => router.push(`/about-us`)}>About Us</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push(`/what-sets-us-apart`)}>What sets us apart</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push(`/our-team`)}>Our Team</DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
            <NavigationMenuItem className=" hover:text-tertiary">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center hover:text-[#FF4400] transform transition-all duration-300 delay-200">
                  What We Do <ChevronDown className="mt-1 ml-1 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black text-white">
                  <DropdownMenuItem onClick={() => router.push(`/individual-contributions`)}>Individual Contributions</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push(`/corporate-contributions`)}>Corporate Contributions</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push(`/charities`)}>Charities</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <Link
                href="/projects"
                className="hover:text-[#FF4400] transform transition-all duration-300 delay-200"
              >{`Projects`}</Link>
            </NavigationMenuItem> */}


            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center hover:text-[#FF4400] transform transition-all duration-300 delay-200"
              >
                <Link
                  href="/projects"
                  className="hover:text-[#FF4400] transform transition-all duration-100 delay-100"
                  onClick={toggleDropdownOff}
                >
                  {`Projects`}
                </Link>

                <ChevronDown
                  className="mt-1 w-4 ml-3 cursor-pointer"
                  onClick={toggleDropdown}
                />
              </DropdownMenuTrigger>
              {isOpen && (
                <DropdownMenuContent className="bg-black text-white">
                  {loading ? (
                    <p>Loading categories...</p>
                  ) : (
                    projectCategories.map((category: any) => (
                      <DropdownMenu key={category?.id}>

                        <DropdownMenuItem
                          onClick={() => router.push(`/projects/${category?.slug}`)}
                        >
                          <p className="font-semibold mt-3 md:mt-1">{category?.title}</p>
                        </DropdownMenuItem>
                      </DropdownMenu>
                    ))
                  )}
                </DropdownMenuContent>
              )}
            </DropdownMenu>





            <NavigationMenuItem>
              <Link
                href="/contact"
                className="hover:text-[#FF4400] transform transition-all duration-300 delay-200"
              >{`Contact`}</Link>
            </NavigationMenuItem>


            {/* <NavigationMenuItem className="flex">
              <Input placeholder="Search..." className="rounded-full border border-2 border-slate-200 rounded-r-none border-r-0" />
              <Button variant="ghost" className="rounded-full border border-2 border-slate-200 rounded-l-none border-l-0"><Search /></Button>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link
                href="/our-app"
                className="hover:text-[#FF4400] transform transition-all duration-300 delay-200"
              >{`Application`}</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="https://app.maulee.org/" target="_blank">
                <Button className="text-white rounded-full font-medium bg-[linear-gradient(95deg,_#F05623_0%,_#9B1B37_80.26%)] hover:text-black hover:bg-[#FF4400] transform transition-all duration-300 delay-150">
                  Sign Up
                </Button>
              </Link>
            </NavigationMenuItem>
          </ul>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
