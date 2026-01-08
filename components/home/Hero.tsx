"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

// User: Add your Cloudinary links here
const heroImages = [
    "https://res.cloudinary.com/dws3lnn4d/image/upload/v1767866146/IMG-20251016-WA0017_jjyci5.jpg",
    "https://res.cloudinary.com/dws3lnn4d/image/upload/v1767866352/IMG-20251016-WA0082_nkmtzc.jpg",
    "https://res.cloudinary.com/dws3lnn4d/image/upload/v1767866686/IMG-20251016-WA0084_guskiz.jpg",
];

export function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[600px] md:h-[700px] bg-gray-900 overflow-hidden">
            {/* Carousel Backgrounds */}
            {heroImages.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    style={{
                        backgroundImage: img ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img})` : 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
                        backgroundColor: index === 0 ? '#2d3748' : index === 1 ? '#21686E' : '#E1682D', // Fallback colors to show transitions without images
                    }}
                />
            ))}

            {/* Content Overlay */}
            <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start text-white z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 max-w-4xl leading-tight">
                    Together, We Create <span className="text-snaf-orange">Change.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-sans leading-relaxed">
                    Empowering lives and building brighter futures through impactful charity initiatives.
                    Join us in making a difference today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" href="/get-involved">
                        Volunteer <FontAwesomeIcon icon={faUser} className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="secondary" size="lg" href="/donate">
                        Donate <FontAwesomeIcon icon={faHeart} className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-snaf-orange w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
