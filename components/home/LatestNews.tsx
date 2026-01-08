import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import Link from "next/link";
import { client } from "@/lib/sanity";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage?: any;
    body: any;
}

async function getLatestPosts() {
    // Fetch latest 3 posts, including mainImage
    const query = `*[_type == "post"] | order(publishedAt desc)[0..2] {
        _id,
        title,
        slug,
        publishedAt,
        mainImage,
        body
    }`;
    const posts = await client.fetch(query);
    return posts;
}

// Helper to extract plain text from PortableText
function getExcerpt(body: any) {
    if (!body || !Array.isArray(body)) return "";
    const block = body.find((b: any) => b._type === "block");
    if (!block || !block.children) return "";
    return block.children.map((child: any) => child.text).join(" ").substring(0, 100) + "...";
}

export async function LatestNews() {
    const news: Post[] = await getLatestPosts();

    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-12">
                <span className="text-snaf-orange font-bold uppercase tracking-widest text-sm mb-2 block">Our Blog</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-snaf-green">Latest News & Events</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.length > 0 ? (
                    news.map((item) => (
                        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                            <div className="h-48 w-full overflow-hidden bg-gray-200 relative">
                                {item.mainImage ? (
                                    <img
                                        src={urlFor(item.mainImage).width(600).height(400).url()}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        {/* Fallback placeholder if no image is set */}
                                        <span className="text-sm">Read Article</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="text-xs font-bold text-snaf-orange uppercase">News</span>
                                    <span className="text-xs text-gray-500">{item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : 'Recent'}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-snaf-green transition-colors line-clamp-2">
                                    <Link href={`/blog/${item.slug.current}`}>
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {getExcerpt(item.body)}
                                </p>
                                <div className="mt-auto">
                                    <Link href={`/blog/${item.slug.current}`} className="text-snaf-green font-bold text-sm hover:underline">
                                        Read More &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10">
                        <p className="text-gray-500">No news updates yet. Stay tuned!</p>
                    </div>
                )}
            </div>

            <div className="text-center mt-12">
                <Button variant="outline" href="/blog">View All News</Button>
            </div>
        </Section>
    );
}
