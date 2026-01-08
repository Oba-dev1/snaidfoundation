import { Section } from "@/components/ui/Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank } from "@fortawesome/free-solid-svg-icons";

export default function DonatePage() {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Section className="py-24">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
                    <div className="text-snaf-green text-5xl mb-6">
                        <FontAwesomeIcon icon={faBank} />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                        Make a Donation
                    </h1>
                    <p className="text-gray-600 mb-8 text-lg">
                        Your generous support helps us continue our mission. <br />
                        Please use the details below to make a direct transfer.
                    </p>

                    <div className="bg-snaf-green/5 border border-snaf-green/20 p-6 rounded-lg text-left inline-block w-full">
                        <div className="space-y-4">
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold">Bank Name</span>
                                <span className="text-xl font-bold text-gray-800">Zenith Bank</span>
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold">Account Name</span>
                                <span className="text-xl font-bold text-gray-800">Supreme Nimble Aid Foundation</span>
                            </div>
                            <div>
                                <span className="block text-xs uppercase tracking-wider text-gray-500 font-bold">Account Number</span>
                                <span className="text-3xl font-mono font-bold text-snaf-green">1234567890</span>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-gray-400">
                        Online payments via Paystack coming soon.
                    </p>
                </div>
            </Section>
        </div>
    );
}
