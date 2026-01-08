import { Section } from "../ui/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const teamMembers = [
    {
        name: "Ndukuba Caminus Chinonye",
        role: "Principal Partner/Director",
        image: "", // Add link later
    },
    {
        name: "Senkoya Oluwole",
        role: "Director Policy & Strategy",
        image: "", // Add link later
    },
    {
        name: "Caminus Chioma Tracy",
        role: "Educator",
        image: "", // Add link later
    },
    {
        name: "Gaadi Caleb Nengena",
        role: "Researcher",
        image: "", // Add link later
    },
    {
        name: "Onyinyechi Elizabeth Nnadi",
        role: "Finance Officer",
        image: "", // Add link later
    },
    {
        name: "Peace Gwamna",
        role: "Communication Officer",
        image: "", // Add link later
    },
    {
        name: "Halima Tanko Augustina",
        role: "Head Human Recourses",
        image: "", // Add link later
    },
    {
        name: "Ehijator Irabor",
        role: "Project Manager",
        image: "", // Add link later
    },
];

export function Team() {
    return (
        <Section className="bg-white py-20">
            <div className="text-center mb-16">
                <span className="font-serif font-bold text-snaf-green text-lg">Our Expert Team</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 text-snaf-green">
                    Meet our dedicated and experienced team
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white group text-center">
                        <div className="h-80 w-full overflow-hidden bg-gray-100 mb-6 relative">
                            {/* Image Placeholder */}
                            <div
                                className="w-full h-full bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: member.image ? `url(${member.image})` : undefined }}
                            >
                                {!member.image && <div className="w-full h-full flex items-center justify-center text-gray-400">Photo</div>}
                            </div>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-snaf-green mb-2">{member.name}</h3>
                        <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">{member.role}</p>

                        <div className="flex justify-center gap-4 text-snaf-green opacity-0 group-hover:opacity-100 transition-opacity">
                            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 cursor-pointer hover:text-snaf-orange" />
                            <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 cursor-pointer hover:text-snaf-orange" />
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 cursor-pointer hover:text-snaf-orange" />
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 cursor-pointer hover:text-snaf-orange" />
                        </div>

                        <div className="h-1 w-16 bg-gray-100 mx-auto mt-6 group-hover:bg-snaf-orange transition-colors"></div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
