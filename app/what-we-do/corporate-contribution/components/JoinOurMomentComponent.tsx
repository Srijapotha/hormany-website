import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Handshake, Heart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatWeDo() {
    return(
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
                            {/* <Button className="bg-white text-[#2E6BE6] text-base font-medium py-3 px-5 hover:bg-[#ffffff]">
                                Get Started
                            </Button> */}
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
                            {/* <Button className="bg-white text-[#2E6BE6] text-base font-medium py-3 px-5 hover:bg-[#ffffff]">
                                Get Started
                            </Button> */}
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
                            {/* <Button className="bg-white text-[#2E6BE6] text-base font-medium py-3 px- hover:bg-[#ffffff]">
                                Get Started
                            </Button> */}
                        </CardContent>
                    </Card>
                </div>
            </div>
    )
}