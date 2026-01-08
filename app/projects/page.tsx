import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { client } from "@/lib/sanity";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

// Define Interface
interface Project {
    _id: string;
    title: string;
    description: string;
    status: string;
    mainImage: any;
}

// Fetch Data
async function getProjects() {
    // Fetch ALL projects, ordered by creation date
    const query = `*[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        description,
        status,
        mainImage
    }`;
    const projects = await client.fetch(query);
    return projects;
}



export default async function ProjectsPage() {
    const projects: Project[] = await getProjects();

    return (
        <Section className="py-24 bg-gray-50 min-h-screen">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-snaf-green mb-4">Our Projects</h1>
                <p className="text-gray-600">
                    Explore the initiatives we are undertaking to transform lives and communities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-shadow">
                            <div className="relative h-64 overflow-hidden">
                                {/* Tag */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className={`text-white text-xs font-bold px-3 py-1 uppercase tracking-wide ${project.status === 'ongoing' ? 'bg-snaf-orange' : 'bg-snaf-green'}`}>
                                        {project.status ? project.status.replace('-', ' ') : 'Project'}
                                    </span>
                                </div>
                                {/* Image */}
                                <div
                                    className="w-full h-full bg-gray-200 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: project.mainImage ? `url("${urlFor(project.mainImage).width(800).url()}")` : 'none' }}
                                >
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-serif font-bold text-snaf-green mb-4">{project.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
                        <p className="text-gray-500 text-lg">No projects found. Publish one in the Sanity Studio to see it here!</p>
                    </div>
                )}
            </div>
        </Section>
    );
}
