import { Hero } from "@/components/home/Hero";
import { MissionSummary } from "@/components/home/MissionSummary";
import { ImpactStats } from "@/components/home/ImpactStats";
import { LatestNews } from "@/components/home/LatestNews";
import { Projects } from "@/components/home/Projects";
import { Volunteer } from "@/components/home/Volunteer";
import { Team } from "@/components/home/Team";

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
