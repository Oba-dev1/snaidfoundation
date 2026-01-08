import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function MissionSummary() {
    return (
        <Section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Staggered Images */}
                <div className="relative h-[650px] hidden lg:block">
                    <div className="absolute top-0 left-0 w-3/5 h-4/5 bg-gray-200 rounded-lg shadow-lg" style={{ backgroundImage: 'url("https://res.cloudinary.com/dws3lnn4d/image/upload/v1767867578/IMG-20251016-WA0015_krw4cl.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {/* Image 1 Placeholder */}
                    </div>
                    <div className="absolute bottom-0 right-0 w-3/5 h-4/5 bg-gray-300 rounded-lg shadow-lg border-4 border-white" style={{ backgroundImage: 'url("https://res.cloudinary.com/dws3lnn4d/image/upload/v1767867516/IMG-20251016-WA0037_ook9ac.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {/* Image 2 Placeholder */}
                    </div>
                </div>

                {/* Mobile View Image Fallback */}
                <div className="lg:hidden h-64 bg-gray-200 rounded-lg shadow-md"></div>

                {/* Right Content - Text */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-snaf-green mb-2">
                        About us
                    </h2>
                    <span className="block text-gray-800 font-bold text-sm mb-6 uppercase tracking-wide">
                        Empowering Communities, <span className="text-snaf-orange">Changing Lives</span>
                    </span>

                    <div className="space-y-6 text-gray-600 leading-relaxed font-sans">
                        <p>
                            Supreme Nimble Aid Foundation (SNAID Foundation) is a registered non-profit organization
                            dedicated to improving lives <span className="font-bold text-gray-800">through education, empowerment, and social development.</span>
                        </p>
                        <p>
                            We believe that <span className="font-bold text-gray-800">sustainable</span> community growth begins with compassion and practical action.
                            Our programs focus on <span className="font-bold text-gray-800">education, health, empowerment, and welfare</span>—helping individuals
                            unlock their potential and contribute meaningfully to society.
                        </p>
                        <p>
                            Through collaboration with schools, local communities, and development partners, we create opportunities
                            for people to rise above barriers and live with dignity and purpose.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Button variant="primary" href="/about">
                            Learn more &gt;
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
}
