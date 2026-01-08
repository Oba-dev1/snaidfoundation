import { Section } from "../ui/Section";

export function VisionMission() {
    return (
        <Section className="bg-white pb-20 pt-10">
            <div className="flex flex-col gap-10">

                {/* Top Image */}
                <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
                    <img
                        src="https://res.cloudinary.com/dws3lnn4d/image/upload/v1767886216/IMG-20251016-WA0087_rivupo.jpg"
                        alt="SNAID Foundation Team and Community"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Vision & Mission Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">

                    {/* Vision */}
                    <div className="space-y-4">
                        <div className="bg-snaf-orange px-6 py-2 w-fit">
                            <h2 className="text-2xl font-serif font-bold text-white">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-nunito text-lg">
                            A society where every individual, regardless of background or circumstance, has the opportunity
                            and support to reach their full potential and contribute meaningfully to community development.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="space-y-4">
                        <div className="bg-snaf-green px-6 py-2 w-fit">
                            <h2 className="text-2xl font-serif font-bold text-white">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-nunito text-lg">
                            To empower individuals and communities through access to quality education, welfare support,
                            and life-enriching opportunities — fostering growth, resilience, and self-reliance for a sustainable future.
                        </p>
                    </div>

                </div>
            </div>
        </Section>
    );
}
