import { Hero } from "@/components/home/Hero";
import { MissionSummary } from "@/components/home/MissionSummary";
import { ImpactStats } from "@/components/home/ImpactStats";
import { LatestNews } from "@/components/home/LatestNews";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionSummary />
      <LatestNews />
    </>
  );
}
