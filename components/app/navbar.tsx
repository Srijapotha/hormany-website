"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HarmonyLogo from "@/assets/images/HarmonyOverHate_Icon.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:px-8">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={HarmonyLogo}
            alt="Harmony Logo"
            width={80}
            height={80}
            className="h-20 w-20"
            priority
          />
        </Link>

        {/* Desktop navigation (hidden on mobile) */}
        <nav className="hidden md:flex">
          <NavigationMenu>
            <ul className="flex items-center gap-6">
              <NavigationMenuItem>

                <Link href="/our-mission" className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all cursor-pointer">
                  Our Mission
                </Link>

              </NavigationMenuItem>
              {/* Who We Are */}
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all cursor-pointer">
                    Who We Are <ChevronDown className="ml-1 w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="">
                    <DropdownMenuItem onClick={() => router.push("/who-we-are/about-us")}>
                      About Us
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/who-we-are/what-sets-us-apart")}
                    >
                      What Sets Us Apart
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/who-we-are/team")}>
                      Our Team
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>

              {/* What We Do */}
              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all cursor-pointer">
                    What We Do <ChevronDown className="ml-1 w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => router.push("/what-we-do/individual-contribution")}
                    >
                      Individual Contributions
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/what-we-do/corporate-contribution")}
                    >
                      Corporate Contributions
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/what-we-do/charities")}>
                      Charities
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all cursor-pointer">
                    Our Program & Initiatives <ChevronDown className="ml-1 w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      onClick={() => router.push("/our-programs-initiatives/human-rights-advocacy")}
                    >
                      Human Right & Advocacy
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => router.push("/our-programs-initiatives/interfaith-community-harmony")}
                    >
                      Interfaith & Community Harmony
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/our-programs-initiatives/support-relief")}>
                      Support & Relief
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/our-programs-initiatives/community-development")}>
                      Community Development
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push("/our-programs-initiatives/education-scholarship")}>
                      Education & Scholarship
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </NavigationMenuItem>


              {/* Get Involved */}
              {/* <NavigationMenuItem>
                <Link
                  href="/get-involved"
                  className="flex items-center text-[#0F172A] font-normal font-base hover:text-[#22A06B] transition-all"
                >
                  Get Involved
                </Link>
              </NavigationMenuItem> */}
            </ul>
          </NavigationMenu>
        </nav>

        {/* Desktop buttons (hidden on mobile) */}
        {/* <div className="hidden md:flex items-center gap-4">
          <Link href="/join">
            <Button className="rounded-full text-base bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-medium">
              Join Harmony
            </Button>
          </Link>
          <Link href="/donate">
            <Button className="rounded-full text-base bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 font-medium">
              Donate
            </Button>
          </Link>
        </div> */}

        {/* Mobile menu button (Sheet trigger, visible only on mobile) */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="block md:hidden p-2 rounded-md text-[#0F172A] hover:text-[#22A06B] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-full max-w-xs p-6 overflow-y-auto bg-white"
          >
            <SheetHeader>
              <SheetTitle className="text-lg font-semibold mb-4">
                <Image src={HarmonyLogo} alt="" />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeSheet}
                className="font-medium border-b border-gray-300 pb-2"
              >
                Home
              </Link>

              <Link
                href="/our-mission"
                onClick={closeSheet}
                className="font-medium border-b border-gray-300 pb-2"
              >
                Our Mission
              </Link>

              <Accordion type="single" collapsible>
                <AccordionItem value="who-we-are">
                  <AccordionTrigger className="font-medium border-b border-gray-300 pb-2">
                    <p className="">Who We Are</p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-4 mt-2 space-y-1">
                      <li>
                        <Link
                          href="/who-we-are/about-us"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/who-we-are/what-sets-us-apart"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          What Sets Us Apart
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/who-we-are/team"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Our Team
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>

                <AccordionItem value="what-we-do">
                  <AccordionTrigger className="p-0 font-medium">
                    What We Do
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-4 mt-2 space-y-1">
                      <li>
                        <Link
                          href="/what-we-do/individual-contribution"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Individual Contributions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/what-we-do/corporate-contribution"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Corporate Contributions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/what-we-do/charities"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Charities
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>

                <AccordionItem value="what-we-do">
                  <AccordionTrigger className="text-base font-normal">
                    Our Programs & Initiatives
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="pl-4 mt-2 space-y-1">
                      <li>
                        <Link
                          href="/our-programs-initiatives/"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Human Rights & Advocacy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-programs-initiatives/"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Interfaith & Community Harmony
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-programs-initiatives/"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Support & Relief
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-programs-initiatives/"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Community Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-programs-initiatives/"
                          onClick={closeSheet}
                          className="block p-2 rounded hover:bg-slate-100"
                        >
                          Education & Scholarship
                        </Link>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
