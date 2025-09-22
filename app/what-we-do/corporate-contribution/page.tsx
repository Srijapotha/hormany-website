import { MissionHeroBanner } from "@/assets"
import IndividualComponent from "./components/IndividualComponent"
import CorporateContributionsComponent from "./components/CorporateContribution"
import JoinOurMomentComponent from "./components/JoinOurMomentComponent"
import MakeYourDonations from "./components/MakeYourDonation"
import StrategicAdvicePage from "./components/StrategicAdviceComponent"
import AdvisoryComponent from "./components/AdvisoryComponent"
export default function HomePage() {
    return (
        <>
      {/* Hero section */}
            <div
                className="relative w-full w-full h-[55vh] sm:h-[60vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] p-[40px_10px_40px_10px] flex items-center justify-center text-center overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${MissionHeroBanner.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 max-w-4xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]">
                        {`Corporate Contribution`}
                    </h1>
                </div>
            </div>

       {/** Individual Contribution  */}
       <IndividualComponent />

       {/** Corporate contribution */}

       <CorporateContributionsComponent/>

       {/** Make Your Donations  */}
       <MakeYourDonations />

       {/** Strategic Advice  */}
       <StrategicAdvicePage />

       {/** Advisory  */}
       <AdvisoryComponent />

       {/** Join Our Moment  */}
       <JoinOurMomentComponent />

    </>
    )
}
