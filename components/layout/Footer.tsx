import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="https://res.cloudinary.com/dws3lnn4d/image/upload/c_crop,w_1200/v1767864694/SNAFpng14_k6gy9i.png"
                                alt="Supreme Nimble Aid Foundation"
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering lives and building brighter futures through impactful charity initiatives. Join us in making a difference today.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-snaf-green transition-colors text-sm">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-snaf-green transition-colors text-sm">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-snaf-green transition-colors text-sm">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-snaf-green transition-colors text-sm">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6 border-l-4 border-snaf-orange pl-3">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-snaf-orange transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="hover:text-snaf-orange transition-colors">Our Projects</Link></li>
                            <li><Link href="/team" className="hover:text-snaf-orange transition-colors">Meet the Team</Link></li>
                            <li><Link href="/events" className="hover:text-snaf-orange transition-colors">Upcoming Events</Link></li>
                            <li><Link href="/contact" className="hover:text-snaf-orange transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6 border-l-4 border-snaf-orange pl-3">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex gap-3">
                                <FontAwesomeIcon icon={faLocationDot} className="mt-1 text-snaf-green" />
                                <span>123 Charity Lane, Abuja,<br />Federal Capital Territory, Nigeria</span>
                            </li>
                            <li className="flex gap-3">
                                <FontAwesomeIcon icon={faPhone} className="mt-1 text-snaf-green" />
                                <span>+234 800 123 4567</span>
                            </li>
                            <li className="flex gap-3">
                                <FontAwesomeIcon icon={faEnvelope} className="mt-1 text-snaf-green" />
                                <span>info@snaidfoundation.org</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Simplified) */}
                    <div>
                        <h3 className="text-lg font-serif font-bold mb-6 border-l-4 border-snaf-orange pl-3">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter to get latest updates and news.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-gray-800 border-none rounded px-4 py-3 text-sm text-white focus:ring-1 focus:ring-snaf-green"
                            />
                            <button className="w-full bg-snaf-green text-white font-bold py-3 px-4 rounded hover:bg-opacity-90 transition-opacity text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Supreme Nimble Aid Foundation. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
