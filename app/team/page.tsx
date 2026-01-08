import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default function TeamPage() {
    return (
        <Section className="py-24 bg-gray-50 min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-snaf-green mb-4">Our Team</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Meet the dedicated individuals driving our mission forward.
                </p>
            </div>

            <div className="bg-white border border-gray-200 p-12 rounded-lg text-center max-w-2xl mx-auto shadow-sm">
                <div className="mb-6 text-snaf-green">
                    <FontAwesomeIcon icon={faUsers} className="text-6xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Under Construction</h2>
                <p className="text-gray-600 mb-8">
                    We are updating our team profiles to showcase the amazing people behind SNAID Foundation. Check back soon!
                </p>
                <div className="flex justify-center gap-4">
                    <Button variant="primary" href="/">Return Home</Button>
                    <Button variant="outline" href="/about">About Us</Button>
                </div>
            </div>
        </Section>
    );
}
