import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { client } from "@/lib/sanity";

// Define Post type
interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    mainImage?: any;
}

// Sanity Fetch Function
async function getPosts() {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "...",
    mainImage
  }`;
    const posts = await client.fetch(query);
    return posts;
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="bg-gray-50 min-h-screen">
            <Section className="pb-8 pt-24">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-snaf-green mb-4">Our Blog</h1>
                    <p className="text-gray-600">
                        Updates, stories, and impact reports from the Supreme Nimble Aid Foundation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="h-48 bg-gray-200">
                                {/* Image Placeholder */}
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    {new Date(post.publishedAt).toLocaleDateString()}
                                </div>
                                <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-snaf-green">
                                    <Link href={`/blog/${post.slug.current}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.slug.current}`} className="text-snaf-green font-bold text-sm hover:underline">
                                    Read Article &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
