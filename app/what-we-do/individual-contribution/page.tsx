import { MissionHeroBanner } from "@/assets"
import IndividualComponent from "./components/IndividualComponent"
import CharityComponent from "./components/CharityComponent"
import ImpactComponent from "./components/ImpactComponent"
import StrategicAdviceComponent from "./components/StrategicAdviceComponent"
import JoinOurMomentComponent from "./components/JoinOurMomentComponent"
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
                        {"Individual Contributions"}
                    </h1>
                </div>
            </div>

       {/** Individual Contribution  */}
       <IndividualComponent />
       {/** Charities  */}
       <CharityComponent />
       {/** Amplify Your Impact  */}
       <ImpactComponent />
       {/** Get Strategic Advice  */}
       <StrategicAdviceComponent />
       {/** Join Our Moment  */}
       <JoinOurMomentComponent />

    </>
    )
}
