import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";

const exploreLinks = [
    { label: "Wellness", href: "/wellness" },
    { label: "Products", href: "/products" },
    { label: "Design", href: "/design" },
    { label: "Stories", href: "/stories" },
    { label: "Membership", href: "/membership" },
];

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
];

const supportLinks = [
    { label: "FAQs", href: "/faqs" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
];

const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-[#1A1A1A]">
            <div className="container mx-auto px-6 py-8 lg:px-12 lg:py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
                    {/* Logo Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex flex-col items-start">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-yellow-500"
                            >
                                <rect x="6" y="8" width="4" height="16" fill="currentColor" />
                                <rect x="14" y="4" width="4" height="24" fill="currentColor" />
                                <rect x="22" y="8" width="4" height="16" fill="currentColor" />
                            </svg>
                            <span className="mt-1 text-sm font-bold tracking-[0.15em] text-white">
                                TECHNOGYM
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-400">
                            Premium Fitness Solutions
                        </p>
                    </div>

                    {/* Explore Links */}
                    <div>
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            {exploreLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
                            Follow Us
                        </h4>
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white transition-opacity hover:opacity-70"
                                        aria-label={social.label}
                                    >
                                        <IconComponent className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom Strip */}
                <div className="mt-12 border-t border-white/10 pt-8">
                    <p className="text-center text-xs text-gray-500">
                        © 2025 Technogym Clone. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
