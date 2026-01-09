"use client";

import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { client } from "@/lib/sanity";
import createImageUrlBuilder from '@sanity/image-url';
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PortableText } from '@portabletext/react';

const builder = createImageUrlBuilder(client);

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

interface Post {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    body: any;
    mainImage?: any;
}

function BlogContent() {
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug');

    const [posts, setPosts] = useState<Post[]>([]);
    const [singlePost, setSinglePost] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch List or Single Post based on URL
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setSinglePost(null);
            setPosts([]);

            try {
                if (slug) {
                    // Fetch Single Post
                    const query = `*[_type == "post" && slug.current == $slug][0]`;
                    const data = await client.fetch(query, { slug }, { cache: 'no-store' });
                    setSinglePost(data);
                } else {
                    // Fetch List
                    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
                        _id,
                        title,
                        slug,
                        publishedAt,
                        body,
                        mainImage
                    }`;
                    const data = await client.fetch(query, {}, { cache: 'no-store' });
                    setPosts(data);
                }
            } catch (error) {
                console.error("Failed to fetch blog data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    // RENDER: Loading State
    if (isLoading) {
        return (
            <div className="bg-gray-50 min-h-screen">
                <Section className="pb-8 pt-24">
                    <div className="max-w-3xl mx-auto space-y-8 animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
                        <div className="h-64 bg-gray-200 rounded w-full"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                        </div>
                    </div>
                </Section>
            </div>
        );
    }

    // RENDER: Detail View
    if (slug && singlePost) {
        return (
            <div className="bg-white min-h-screen">
                <Section className="py-24">
                    <div className="max-w-3xl mx-auto">
                        <Link href="/blog" className="text-snaf-orange font-bold text-sm mb-6 inline-block hover:underline">
                            &larr; Back to Blog
                        </Link>

                        <div className="text-sm text-gray-500 mb-4">
                            {singlePost.publishedAt ? new Date(singlePost.publishedAt).toLocaleDateString() : 'Unknown Date'}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-snaf-green mb-8 leading-tight">
                            {singlePost.title}
                        </h1>

                        {singlePost.mainImage && (
                            <div className="md:h-96 w-full rounded-lg mb-8 overflow-hidden relative">
                                <img
                                    src={urlFor(singlePost.mainImage).width(1200).url()}
                                    alt={singlePost.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-snaf-green prose-a:text-snaf-orange">
                            {singlePost.body ? (
                                <PortableText value={singlePost.body} components={ptComponents} />
                            ) : (
                                <p>No content available for this post.</p>
                            )}
                        </div>
                    </div>
                </Section>
            </div>
        );
    }

    // RENDER: Detail View (Not Found)
    if (slug && !singlePost) {
        return (
            <div className="bg-gray-50 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-600 mb-4">Post not found</h1>
                    <Link href="/blog" className="text-snaf-green hover:underline">Return to Blog</Link>
                </div>
            </div>
        );
    }

    // RENDER: List View
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
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                                <div className="h-48 bg-gray-200 overflow-hidden relative">
                                    {post.mainImage && (
                                        <img
                                            src={urlFor(post.mainImage).width(600).height(400).url()}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-500 mb-2">
                                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent'}
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-snaf-green line-clamp-2">
                                        <Link href={`/blog?slug=${post.slug.current}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.body ? (
                                            post.body.find((b: any) => b._type === "block")?.children.map((child: any) => child.text).join(" ").substring(0, 150) + "..."
                                        ) : ""}
                                    </p>
                                    <div className="mt-auto">
                                        <Link href={`/blog?slug=${post.slug.current}`} className="text-snaf-green font-bold text-sm hover:underline">
                                            Read Article &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500 text-lg">No posts found.</p>
                        </div>
                    )}
                </div>
            </Section>
        </div>
    );
}

export default function BlogPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-gray-50"></div>}>
            <BlogContent />
        </Suspense>
    );
}
