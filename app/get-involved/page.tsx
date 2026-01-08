"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { client } from "@/lib/sanity";

export default function GetInvolvedPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "General Volunteering",
        consent: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // 1. Submit to Sanity (create a new document)
            // Note: This requires a token with write permissions in your .env or client config
            // Creating a temporary fallback if no token is present to avoid breaking the flow
            const doc = {
                _type: 'volunteer',
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                interest: formData.interest,
                submittedAt: new Date().toISOString(),
                status: 'new'
            };

            // We use a specific write operation. 
            // IMPORTANT: The standard 'client' from lib/sanity usually lacks a token for security.
            // For this to work efficiently in a client-side static app, we are using a token provided by env.
            // Ideally this runs server-side, but for this static export flow, we do it here.
            await client.create(doc).catch(err => {
                console.error("Sanity submission failed (likely missing token):", err);
                // We continue to WhatsApp even if save fails, so user isn't blocked.
            });

        } catch (error) {
            console.error("Error submitting form:", error);
        }

        // 2. Redirect to WhatsApp Group
        window.open(`https://chat.whatsapp.com/Gwz0Mhoab6PJVptPcxjP02`, "_blank");
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen pt-24 pb-12 relative">
            {/* Page Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: 'url("https://res.cloudinary.com/dws3lnn4d/image/upload/v1767866352/IMG-20251016-WA0082_nkmtzc.jpg")' }}
            >
                <div className="absolute inset-0 bg-snaf-green/90 mix-blend-multiply"></div>
            </div>

            <Section className="relative z-10">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-snaf-green py-8 px-8 text-center bg-opacity-95">
                        <h1 className="text-3xl font-serif font-bold text-white mb-2">Join Our Team</h1>
                        <p className="text-snaf-yellow text-lg">Become a Volunteer Today!</p>
                    </div>

                    <div className="p-8 md:p-12">
                        <p className="text-gray-600 mb-8 text-center">
                            Fill out the form below to express your interest. You will be redirected to our WhatsApp Group to verify your membership.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snaf-green focus:border-transparent transition-all"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snaf-green focus:border-transparent transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snaf-green focus:border-transparent transition-all"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-bold text-gray-700 mb-2">Area of Interest</label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-snaf-green focus:border-transparent transition-all"
                                >
                                    <option value="General Volunteering">General Volunteering</option>
                                    <option value="Education Support">Education Support</option>
                                    <option value="Community Outreach">Community Outreach</option>
                                    <option value="Fundraising">Fundraising</option>
                                    <option value="Event Planning">Event Planning</option>
                                </select>
                            </div>

                            {/* Consent Checkbox */}
                            <div className="flex items-start gap-3 pt-2">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    name="consent"
                                    required
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    className="mt-1 h-4 w-4 text-snaf-green border-gray-300 rounded focus:ring-snaf-green"
                                />
                                <label htmlFor="consent" className="text-sm text-gray-500">
                                    By clicking "Join via WhatsApp", I agree to allow SNAID to process my data and I agree to be redirected to the WhatsApp group to complete my registration.
                                </label>
                            </div>

                            <div className="pt-2">
                                <Button
                                    variant="primary"
                                    className="w-full justify-center py-4 text-lg"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Processing..." : "Join via WhatsApp →"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
