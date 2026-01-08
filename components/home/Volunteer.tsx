import { Button } from "../ui/Button";
import { Section } from "../ui/Section";

export function Volunteer() {
    return (
        <Section className="relative py-24 bg-snaf-orange">
            {/* Background with overlay effect - User can add a specific background image here */}
            <div className="absolute inset-0 bg-snaf-orange/90 z-0"></div>

            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-50 z-0"
                style={{ backgroundImage: 'url("")' }}
            ></div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white max-w-3xl leading-tight">
                    Let's Make A Difference In The Lives Of Others
                </h2>

                <div className="shrink-0">
                    <Button
                        href="/get-involved"
                        className="uppercase border-2 border-white text-white hover:bg-white hover:text-snaf-orange bg-transparent font-bold px-8 py-3 rounded-none transition-all"
                    >
                        Become a Volunteer
                    </Button>
                </div>
            </div>
        </Section>
    );
}
