import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import Link from "next/link";

export function LatestNews() {
    const news = [
        {
            id: 1,
            title: "SNAID Foundation put smiles on pupils at LEA Primary School",
            date: "August 12, 2024",
            excerpt: "Our team visited Aleita to distribute educational materials and school uniforms to over 200 pupils...",
            category: "Events"
        },
        {
            id: 2,
            title: "Official Launch and Unveiling of the Foundation",
            date: "July 15, 2024",
            excerpt: "A landmark day as we officially unveiled our mission to the world, attended by dignitaries and partners...",
            category: "News"
        },
        {
            id: 3,
            title: "Community Health Outreach Program",
            date: "June 05, 2024",
            excerpt: "Providing free medical checkups and essential medicines to the rural communities in Abuja...",
            category: "Health"
        }
    ];

    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-12">
                <span className="text-snaf-orange font-bold uppercase tracking-widest text-sm mb-2 block">Our Blog</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-snaf-green">Latest News & Events</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                        <div className="h-48 bg-gray-200 w-full group-hover:bg-gray-300 transition-colors">
                            {/* Image Placeholder */}
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-xs font-bold text-snaf-orange uppercase">{item.category}</span>
                                <span className="text-xs text-gray-500">{item.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-snaf-green transition-colors line-clamp-2">
                                <Link href={`/blog/${item.id}`}>
                                    {item.title}
                                </Link>
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                {item.excerpt}
                            </p>
                            <Link href={`/blog/${item.id}`} className="text-snaf-green font-bold text-sm hover:underline">
                                Read More &rarr;
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="outline" href="/blog">View All News</Button>
            </div>
        </Section>
    );
}
