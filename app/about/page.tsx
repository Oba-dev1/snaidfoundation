import { AboutHero } from "@/components/about/AboutHero";
import { FounderMessage } from "@/components/about/FounderMessage";
import { MissionSummary } from "@/components/home/MissionSummary";
import { VisionMission } from "@/components/about/VisionMission";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <MissionSummary />
            <FounderMessage />
            <VisionMission />
        </main>
    );
}
