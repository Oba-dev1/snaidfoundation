import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data matches the listing page
const mockPosts = [
    {
        _id: "1",
        title: "SNAID Foundation put smiles on pupils at LEA Primary School",
        slug: { current: "snaid-foundation-school-visit" },
        publishedAt: "2024-08-12",
        body: "Full article content goes here... This is a placeholder for the actual Sanity portable text content.",
    },
    {
        _id: "2",
        title: "Official Launch and Unveiling",
        slug: { current: "official-launch" },
        publishedAt: "2024-07-15",
        body: "Full article content goes here...",
    },
];

export async function generateStaticParams() {
    // In real app: const posts = await client.fetch(`*[_type == "post"]{ slug }`);
    return mockPosts.map((post) => ({
        slug: post.slug.current,
    }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = mockPosts.find((p) => p.slug.current === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen">
            <Section className="py-24">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="text-snaf-orange font-bold text-sm mb-6 inline-block hover:underline">
                        &larr; Back to Blog
                    </Link>
                    <div className="text-sm text-gray-500 mb-4">
                        {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-snaf-green mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <div className="h-64 md:h-96 bg-gray-200 rounded-lg mb-8">
                        {/* Featured Image Placeholder */}
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>{post.body}</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
