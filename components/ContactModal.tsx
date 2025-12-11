"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, CheckCircle } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const nameInputRef = useRef<HTMLInputElement>(null);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                nameInputRef.current?.focus();
            }, 100);
        } else {
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
            setIsSubmitted(false);
        }
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission (no backend needed)
        setIsSubmitted(true);

        // Auto-close after 3 seconds
        setTimeout(() => {
            onClose();
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 101,
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingTop: '10vh',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    pointerEvents: 'none',
                    overflow: 'auto'
                }}
            >
                <div
                    className="animate-slideDown"
                    style={{
                        width: '100%',
                        maxWidth: '32rem',
                        overflow: 'hidden',
                        borderRadius: '1rem',
                        backgroundColor: 'white',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        pointerEvents: 'auto',
                        marginBottom: '2rem'
                    }}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4">
                        <h2 className="text-xl font-bold text-black">Contact Us</h2>
                        <button
                            onClick={onClose}
                            className="rounded-full p-2 text-black/70 transition-colors hover:bg-black/10 hover:text-black"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {isSubmitted ? (
                        /* Success Message */
                        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                            <div className="mb-4 rounded-full bg-green-100 p-4">
                                <CheckCircle className="h-12 w-12 text-green-600" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                Message Sent!
                            </h3>
                            <p className="text-gray-500">
                                Thank you for contacting us. We&apos;ll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        /* Form */
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        ref={nameInputRef}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="membership">Membership Inquiry</option>
                                        <option value="personal-training">Personal Training</option>
                                        <option value="classes">Group Classes</option>
                                        <option value="products">Products & Equipment</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-3 font-semibold text-black transition-all hover:from-yellow-500 hover:to-yellow-600 hover:shadow-lg"
                            >
                                <Send className="h-5 w-5" />
                                Send Message
                            </button>
                        </form>
                    )}

                    {/* Footer */}
                    <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 text-center text-xs text-gray-500">
                        We typically respond within 24 hours
                    </div>
                </div>
            </div>
        </>
    );
}
