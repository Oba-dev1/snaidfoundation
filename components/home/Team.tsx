import { Section } from "../ui/Section";
import { client } from "@/lib/sanity";
import imageUrlBuilder from '@sanity/image-url';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

// Define Interface
interface TeamMember {
    _id: string;
    name: string;
    role: string;
    image: any;
    bio: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
}

// Fetch Data
async function getTeamMembers() {
    const query = `*[_type == "teamMember"] | order(order asc) {
        _id,
        name,
        role,
        image,
        bio,
        facebook,
        twitter,
        linkedin,
        instagram
    }`;
    const members = await client.fetch(query);
    return members;
}

export const revalidate = 60;

export async function Team() {
    const teamMembers: TeamMember[] = await getTeamMembers();

    return (
        <Section className="bg-white py-20">
            <div className="text-center mb-16">
                <span className="font-serif font-bold text-snaf-green text-lg">Our Expert Team</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 text-snaf-green">
                    Meet our dedicated and experienced team
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.length > 0 ? (
                    teamMembers.map((member) => (
                        <div key={member._id} className="bg-white group text-center">
                            <div className="h-80 w-full overflow-hidden bg-gray-100 mb-6 relative">
                                {/* Image */}
                                <div
                                    className="w-full h-full bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: member.image ? `url("${urlFor(member.image).width(600).height(800).fit('crop').url()}")` : 'none' }}
                                >
                                    {!member.image && <div className="w-full h-full flex items-center justify-center text-gray-400">Photo</div>}
                                </div>
                            </div>

                            <h3 className="text-xl font-serif font-bold text-snaf-green mb-2">{member.name}</h3>
                            <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">{member.role}</p>

                            <div className="flex justify-center gap-4 text-snaf-green opacity-0 group-hover:opacity-100 transition-opacity">
                                {member.facebook && (
                                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-snaf-orange">
                                        <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                                    </a>
                                )}
                                {member.twitter && (
                                    <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-snaf-orange">
                                        <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-snaf-orange">
                                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                                    </a>
                                )}
                                {member.instagram && (
                                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-snaf-orange">
                                        <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            <div className="h-1 w-16 bg-gray-100 mx-auto mt-6 group-hover:bg-snaf-orange transition-colors"></div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-10 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">No team members found. Add your amazing team in the Studio!</p>
                    </div>
                )}
            </div>
        </Section>
    );
}
