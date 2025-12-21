"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SearchModal } from "@/components/SearchModal";
import { ContactModal } from "@/components/ContactModal";

const navItems = [
    { label: "HOME", href: "/" },
    { label: "WELLNESS", href: "/wellness" },
    { label: "PRODUCTS", href: "/products" },
    { label: "STORIES", href: "/stories" },
    { label: "MEMBERSHIP", href: "/membership" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "bg-white/80 shadow-sm backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="flex items-center justify-between px-8 py-6 lg:px-12">
                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex flex-col items-center">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`transition-colors duration-300 ${isScrolled ? "text-amber-700" : "text-yellow-400"}`}
                            >
                                <rect x="6" y="8" width="4" height="16" fill="currentColor" />
                                <rect x="14" y="4" width="4" height="24" fill="currentColor" />
                                <rect x="22" y="8" width="4" height="16" fill="currentColor" />
                            </svg>
                            <span className={`text-[8px] font-bold tracking-[0.2em] transition-colors duration-300 ${isScrolled ? "text-amber-700" : "text-yellow-400"}`}>
                                TECHNOGYM
                            </span>
                        </div>
                    </Link>

                    {/* Center: Navigation Links */}
                    <div className="hidden items-center gap-8 lg:flex">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`relative text-sm font-medium tracking-wide transition-all ${isActive
                                        ? `${isScrolled ? "text-black" : "text-white"} after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-yellow-400`
                                        : isScrolled
                                            ? "text-black opacity-70 hover:opacity-100"
                                            : "text-white hover:opacity-80"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right: Icons and CTA Button */}
                    <div className="flex items-center gap-4">
                        {/* Search Icon */}
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className={`rounded-full p-2 transition-colors ${isScrolled
                                ? "text-black hover:bg-black/10"
                                : "text-white hover:bg-white/10"
                                }`}
                            aria-label="Search"
                        >
                            <Search className="h-5 w-5" />
                        </button>

                        {/* Contact Us Button - Hidden on mobile */}
                        <Button
                            variant="outline"
                            onClick={() => setIsContactOpen(true)}
                            className={`hidden lg:block rounded-full px-6 py-2 text-sm font-medium tracking-wide transition-all ${isScrolled
                                ? "border-black bg-transparent text-black hover:bg-black hover:text-white"
                                : "border-white bg-transparent text-white hover:bg-white hover:text-black"
                                }`}
                        >
                            CONTACT US
                        </Button>

                        {/* Hamburger Menu - Visible on mobile only */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={`lg:hidden rounded-full p-2 transition-colors ${isScrolled
                                ? "text-black hover:bg-black/10"
                                : "text-white hover:bg-white/10"
                                }`}
                            aria-label="Open menu"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Search Modal */}
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

            {/* Contact Modal */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            {/* Mobile Menu Sheet */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetContent side="right" className="w-[300px] bg-white">
                    <SheetHeader className="border-b pb-4">
                        <SheetTitle className="flex items-center gap-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-amber-700"
                            >
                                <rect x="6" y="8" width="4" height="16" fill="currentColor" />
                                <rect x="14" y="4" width="4" height="24" fill="currentColor" />
                                <rect x="22" y="8" width="4" height="16" fill="currentColor" />
                            </svg>
                            <span className="text-xs font-bold tracking-[0.2em] text-amber-700">
                                TECHNOGYM
                            </span>
                        </SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-1 py-6">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 text-sm font-medium tracking-wide transition-all rounded-lg ${isActive
                                            ? "bg-yellow-50 text-amber-700 border-l-4 border-amber-700"
                                            : "text-gray-700 hover:bg-gray-100 hover:text-black"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="border-t pt-6 px-4">
                        <Button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsContactOpen(true);
                            }}
                            className="w-full rounded-full bg-amber-700 text-white hover:bg-amber-800"
                        >
                            CONTACT US
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
