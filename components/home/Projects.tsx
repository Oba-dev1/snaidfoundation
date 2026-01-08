import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function Projects() {
    return (
        <Section className="bg-white py-20">
            <div className="text-center mb-16">
                <span className="font-serif font-bold text-snaf-green text-lg">Trending Causes</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-snaf-green">
                    We are always where other people <br />
                    need <span className="text-snaf-orange">help.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project Card 1 */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-shadow">
                    <div className="relative h-64 overflow-hidden">
                        {/* Tag */}
                        <div className="absolute top-4 left-4 z-10">
                            <span className="bg-snaf-green text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                                Education
                            </span>
                        </div>
                        {/* Image Placeholder - User can replace with uploads later or now if provided */}
                        <div
                            className="w-full h-full bg-gray-200 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundImage: 'url("https://res.cloudinary.com/dws3lnn4d/image/upload/v1767869259/IMG-20251016-WA0018_xyz.jpg")' }} // Using a placeholder based on user upload pattern or generic
                        >
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    </div>

                    <div className="p-8">
                        <h3 className="text-2xl font-serif font-bold text-snaf-green mb-4">Project School Ready</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            SNAID aims to equip pupils with essential school materials such as bags, books, and stationery, while also inspiring them through motivational and interactive sessions.
                        </p>
                        <Button variant="primary" className="w-full justify-center">
                            Learn more
                        </Button>
                    </div>
                </div>

                {/* Placeholder for future projects */}
            </div>
        </Section>
    );
}
