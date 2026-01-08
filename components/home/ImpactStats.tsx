import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function ImpactStats() {
    const stats = [
        { id: 1, number: "50", label: "Number of Supporters" },
        { id: 2, number: "50+", label: "Volunteers Worldwide" },
        { id: 3, number: "1", label: "Completed Projects" },
    ];

    return (
        <section className="relative z-20 -mt-16 container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white shadow-xl rounded-lg overflow-hidden">
                {/* White Stats Boxes */}
                {stats.map((stat, index) => (
                    <div
                        key={stat.id}
                        className={`p-8 text-center flex flex-col justify-center items-center h-48 border-b md:border-b-0 ${index !== stats.length - 1 ? 'md:border-r border-gray-100' : ''
                            }`}
                    >
                        <div className="text-4xl font-serif font-bold text-snaf-green mb-4 relative inline-block">
                            {stat.number}
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-snaf-orange"></span>
                        </div>
                        <div className="text-sm text-gray-500 font-sans mt-2">{stat.label}</div>
                    </div>
                ))}

                {/* Green CTA Box */}
                <div className="bg-snaf-green p-8 flex flex-col justify-center h-48">
                    <div className="w-12 h-1 bg-snaf-orange mb-6"></div>
                    <h3 className="text-white font-serif font-bold text-lg mb-4 leading-tight">
                        Our goal is to help people
                    </h3>
                    <Link
                        href="/get-involved"
                        className="text-white text-sm font-bold border-b border-white/50 hover:border-white inline-flex items-center gap-2 self-start pb-1 transition-all"
                    >
                        Become a Volunteer
                        <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
