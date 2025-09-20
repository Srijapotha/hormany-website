import { MissionHeroBanner } from "@/assets"
import IndividualComponent from "./components/IndividualComponent"
import CharityComponent from "./components/CharityComponent"
import ImpactComponent from "./components/SustainComponent"
import StrategicAdviceComponent from "./components/StrategicAdviceComponent"
import JoinOurMomentComponent from "./components/JoinOurMomentComponent"
import CharityResourcesQuote from "./components/CharityResourcesQuote"
import OurMethodology from "./components/OurMethodology"
export default function HomePage() {
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

                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 max-w-3xl text-white space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]" style={{ fontFamily: "Unbounded" }}>
                        Charities
                    </h1>
                </div>
            </div>

       {/** Individual Contribution  */}
       <IndividualComponent />
       {/** Amplify Your Impact  */}
       <ImpactComponent />
       {/** Charities  */}
       <CharityComponent />
       {/** Our Methodology  */}
       <OurMethodology />
       {/** Get Strategic Advice  */}
       <StrategicAdviceComponent />
       {/** Charity Resources Quote  */}
       <CharityResourcesQuote />
       {/** Join Our Moment  */}
       <JoinOurMomentComponent />

    </>
    )
}
