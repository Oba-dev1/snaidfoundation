import { Section } from "../ui/Section";

export function AboutHero() {
    return (
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: 'url(https://res.cloudinary.com/dws3lnn4d/image/upload/v1767885960/IMG-20251016-WA0024_yhwsit.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">About us</h1>
                <p className="text-xl md:text-3xl font-light tracking-wide">Founding Story</p>
            </div>
        </div>
    );
}
