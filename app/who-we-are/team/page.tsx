import { MissionHeroBanner } from "@/assets"
import Image from "next/image"
import { Paresh_Deshmukh, Luis, suki, salman, Poorva_Deshmukh, Vijay_Pattar, Sushil_Gaikwad } from "@/assets"


export default function Team() {
    return (
        <>
            {/* Hero section */}
            <div
                className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${MissionHeroBanner.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-3xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
                        Meet Our Leaders
                    </h1>
                    <p className="text-lg md:text-xl">
                        The visionaries guiding maulee towards a more inclusive, empowered, and sustainable future.
                    </p>
                </div>
            </div>



            {/* Global Board */}
            <div className="bg-[#2E6BE60D] p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Global Board
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                    
                    <div className="group relative">
                        <Image
                            src={Paresh_Deshmukh}
                            alt="Paresh Deshmukh"
                            className="w-full h-[350px] object-cover"
                            width={100}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5  border-t-5  border-[#2E6BE6]">
                            <h3 className="text-lg font-bold text-[#0F172A]">Paresh Deshmukh</h3>
                            <p className="text-sm text-[#64748B] mt-1 font-semibold">
                            </p>
                            <a
                                href="#"
                                className="text-[#2563EB] font-medium text-sm mt-2 flex items-center gap-1"
                            >
                                Read more <span>→</span>
                            </a>
                        </div>
                    </div>

                    
                    <div className="group relative">
                        <Image
                            src={Luis}
                            alt="Luis Gallardo"
                            className="w-full h-[350px] object-cover"
                            width={100}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5 border-t-5  border-[#2E6BE6] ">
                            <h3 className="text-lg font-bold text-[#0F172A]">Luis Gallardo</h3>
                            <p className="text-sm text-[#64748B] mt-1 font-semibold">
                            </p>
                            <a
                                href="#"
                                className="text-[#2563EB] font-medium text-sm mt-2 flex items-center gap-1"
                            >
                                Read more <span>→</span>
                            </a>
                        </div>
                    </div>

                    
                    <div className="group relative">
                        <Image
                            src={suki}
                            alt="Suki Fuller"
                            className="w-full h-[350px] object-cover"
                            width={100}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5 border-t-5  border-[#2E6BE6]">
                            <h3 className="text-lg font-bold text-[#0F172A]">Suki Fuller</h3>
                            <p className="text-sm text-[#64748B] mt-1 font-semibold">
                            </p>
                            <a
                                href="#"
                                className="text-[#2563EB] font-medium text-sm mt-2 flex items-center gap-1"
                            >
                                Read more <span>→</span>
                            </a>
                        </div>
                    </div>

                    
                    <div className="group relative">
                        <Image
                            src={salman}
                            alt="Salman Shaikh"
                            className="w-full h-[350px] object-cover  grayscale"
                            width={100}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5 border-t-5  border-[#2E6BE6]">
                            <h3 className="text-lg font-bold text-[#0F172A]">Salman Shaikh</h3>
                            <p className="text-sm text-[#64748B] mt-1 font-semibold">
                            </p>
                            <a
                                href="#"
                                className="text-[#2563EB] font-medium text-sm mt-2 flex items-center gap-1"
                            >
                                Read more <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>




            {/* Excutive Board */}
            <div className="bg-white p-[40px_10px_40px_10px] md:p-[6%]">
                <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#0F172A] mb-6 sm:mb-8 md:mb-12 leading-[40px] sm:leading-[50px] md:leading-[60px]" style={{ fontFamily: "Unbounded" }}>
                    Excutive Board
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 md:w-250">
                    
                    <div className="group relative">
                        <Image
                            src={Poorva_Deshmukh}
                            alt="Paresh Deshmukh"
                            className="w-full h-[350px] object-cover"
                            width={100}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5  border-t-5  border-[#2E6BE6]">
                            <h3 className="text-lg font-bold text-[#0F172A]">Poorva Deshmukh</h3>
                            <p className="text-sm text-[#64748B] mt-1 font-semibold">
                            </p>
                            <a
                                href="#"
                                className="text-[#2563EB] font-medium text-sm mt-2 flex items-center gap-1"
                            >
                                Read more <span>→</span>
                            </a>
                        </div>
                    </div>

                    
                    <div className="group relative">
                        <Image
                            src={Vijay_Pattar}
                            alt="Luis Gallardo"
                            className="w-full h-[350px] object-cover"
                            width={100}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5 border-t-5  border-[#2E6BE6] ">
                            <h3 className="text-lg font-bold text-[#0F172A]">Vijay Pattar</h3>
                            <p className="text-sm text-[#64748B] mt-1 font-semibold">
                            </p>
                            <a
                                href="#"
                                className="text-[#2563EB] font-medium text-sm mt-2 flex items-center gap-1"
                            >
                                Read more <span>→</span>
                            </a>
                        </div>
                    </div>

                    
                    <div className="group relative">
                        <Image
                            src={Sushil_Gaikwad}
                            alt="Suki Fuller"
                            className="w-full h-[350px] object-cover"
                            width={100}
                        />
                        <div className="bottom-0 left-0 w-full bg-white shadow-md px-4 py-5 border-t-5  border-[#2E6BE6]">
                            <h3 className="text-lg font-bold text-[#0F172A]">Sushil Gaikwad</h3>
                            <p className="text-sm text-[#64748B] mt-1 font-semibold">
                            </p>
                            <a
                                href="#"
                                className="text-[#2563EB] font-medium text-sm mt-2 flex items-center gap-1"
                            >
                                Read more <span>→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
