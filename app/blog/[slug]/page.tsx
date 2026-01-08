import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity";
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

// Define components for Portable Text
const ptComponents = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="my-8 relative w-full h-auto rounded-lg overflow-hidden shadow-sm">
                    <img
                        src={urlFor(value).width(800).fit('max').auto('format').url()}
                        alt={value.alt || 'Blog Content Image'}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>
            );
        }
    }
};

// Define the interface for the Post
interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    mainImage: any;
    body: any; // Portable Text Block components
}

// 1. Generate Static Params (Required for 'output: export')
export async function generateStaticParams() {
    const query = `*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`;
    const posts = await client.fetch(query);

    console.log("DEBUG: generateStaticParams fetched posts:", JSON.stringify(posts, null, 2));

    return posts.map((post: { slug: string }) => ({
        slug: post.slug,
    }));
}

// 2. Fetch Data for a single post
async function getPost(slug: string) {
    const query = `*[_type == "post" && slug.current == $slug][0]`;
    const post = await client.fetch(query, { slug });
    return post;
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const post: Post = await getPost(slug);

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
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Unknown Date'}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-snaf-green mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {post.mainImage && (
                        <div className="md:h-96 w-full rounded-lg mb-8 overflow-hidden relative">
                            <img
                                src={urlFor(post.mainImage).width(1200).url()}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-snaf-green prose-a:text-snaf-orange">
                        {post.body ? (
                            <PortableText value={post.body} components={ptComponents} />
                        ) : (
                            <p>No content available for this post.</p>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
}
