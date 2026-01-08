import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <Section className="py-24">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-snaf-green mb-4">Our Projects</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore the initiatives we are undertaking to transform lives and communities.
                </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-lg text-center max-w-2xl mx-auto">
                <p className="text-yellow-800 font-bold mb-4">Under Construction</p>
                <p className="text-yellow-700">
                    We are currently updating our project portfolio. Please check back soon!
                </p>
                <div className="mt-6">
                    <Link href="/" className="text-snaf-green font-bold hover:underline">Return Home</Link>
                </div>
            </div>
        </Section>
    );
}
