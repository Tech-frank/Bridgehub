import Hero from "@/components/Hero"
import Mission from "@/components/Mission"
import Values from "@/components/Values"
import Services from "@/components/Services"
// import Features from "@/components/Features"
export default function Home(){
    return(
        <div>
            <Hero />
            <Mission />
            <Values />
            <Services />
            {/* <Features /> */}
        </div>
    )
}