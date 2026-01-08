import { Hero } from "@/components/home/Hero";
import { MissionSummary } from "@/components/home/MissionSummary";
import { ImpactStats } from "@/components/home/ImpactStats";
import { LatestNews } from "@/components/home/LatestNews";
import Projects from "@/components/home/Projects";
import { Volunteer } from "@/components/home/Volunteer";
import { Team } from "@/components/home/Team"; // Still named export because I didn't change it to default in Team.tsx yet? Wait, let me check code sent.

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionSummary />
      <Projects />
      <Volunteer />
      <Team />
      <LatestNews />
    </>
  );
}
