"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/Button';
import classNames from 'classnames';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'About Us', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Our Team', href: '/team' },
        { name: 'Events', href: '/events' },
        { name: 'Get Involved', href: '/get-involved' },
        { name: 'Media', href: '/media' },
    ];

    return (
        <header className="w-full bg-white shadow-sm z-50 relative">
            {/* Top Bar */}
            <div className="bg-gray-50 border-b border-gray-100 hidden md:block">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs font-medium text-gray-600">
                    <div className="flex gap-4">
                        <span>Together, We Create Change</span>
                        <span>|</span>
                        <Link href="/get-involved" className="hover:text-snaf-green transition-colors">Join our Team</Link>
                        <span>|</span>
                        <Link href="/events" className="hover:text-snaf-green transition-colors">Events</Link>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href="#" className="hover:text-snaf-green transition-colors"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className="hover:text-snaf-green transition-colors"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="hover:text-snaf-green transition-colors"><FontAwesomeIcon icon={faTiktok} /></a>
                        <a href="#" className="hover:text-snaf-green transition-colors"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="https://res.cloudinary.com/dws3lnn4d/image/upload/c_crop,w_1200,h_900/v1767864362/SNAFpng16_zghmw0.png"
                            alt="Supreme Nimble Aid Foundation"
                            className="h-32 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 font-bold hover:text-snaf-green text-sm uppercase tracking-wide transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Button variant="primary" size="md" href="/donate">
                            Donate Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-700 text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={classNames(
                "lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden",
                { "max-h-[500px] py-6": isOpen, "max-h-0": !isOpen }
            )}>
                <div className="container mx-auto px-4 flex flex-col gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 font-bold hover:text-snaf-green py-2 border-b border-gray-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mt-4">
                        <Button variant="primary" size="lg" className="w-full" href="/donate">
                            Donate Now
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
