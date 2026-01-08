import { Section } from "../ui/Section";

export function FounderMessage() {
    return (
        <Section className="bg-white py-20">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-snaf-green mb-6">
                        Founder's Message
                    </h2>

                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-800">Mr. Ndukuba Caminus Chinonye</h3>
                        <p className="text-snaf-orange font-bold text-sm uppercase tracking-wide">Principal Partner / Director</p>
                    </div>

                    <div className="space-y-6 text-gray-600 leading-relaxed font-nunito text-lg">
                        <p>
                            From inception, SNAID Foundation was born out of a desire to make compassion actionable.
                            We envisioned a world where hope meets opportunity — where people, no matter their background,
                            can access the support and tools they need to thrive.
                        </p>
                        <p>
                            Each outreach, training, and initiative we carry out is rooted in this conviction.
                            Our commitment is to serve with empathy, lead with integrity, and act with consistency.
                        </p>
                        <p>
                            As we grow, our focus remains simple: to empower lives, one community at a time.
                        </p>
                    </div>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <div className="relative w-full max-w-lg mx-auto">
                        {/* Decorative border or shadow can be added here */}
                        <div className="border-8 border-gray-50 shadow-2xl rounded-lg overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dws3lnn4d/image/upload/v1767886086/Cammy_oewgdy.jpg"
                                alt="Mr. Ndukuba Caminus Chinonye - Founder"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </Section>
    );
}
