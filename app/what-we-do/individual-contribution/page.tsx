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
                        What We Do
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
