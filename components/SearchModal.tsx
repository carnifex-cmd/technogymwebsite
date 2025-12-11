"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";

// Searchable content with keywords and descriptions
const searchableContent = [
    {
        title: "Home",
        href: "/",
        description: "Welcome to TechnoGym - Transform your fitness journey",
        keywords: ["home", "main", "welcome", "technogym", "fitness", "gym"],
    },
    {
        title: "Wellness Programs",
        href: "/wellness",
        description: "Discover our comprehensive wellness and recovery programs",
        keywords: ["wellness", "health", "recovery", "rest", "meditation", "yoga", "spa", "relaxation", "mindfulness"],
    },
    {
        title: "Products",
        href: "/products",
        description: "Explore our premium fitness equipment and gear",
        keywords: ["products", "equipment", "gear", "machines", "treadmill", "weights", "dumbbells", "cardio", "shop", "buy"],
    },
    {
        title: "Success Stories",
        href: "/stories",
        description: "Read inspiring transformation stories from our members",
        keywords: ["stories", "success", "transformation", "testimonials", "results", "before", "after", "members", "achievements"],
    },
    {
        title: "Membership Plans",
        href: "/membership",
        description: "Find the perfect membership plan for your fitness goals",
        keywords: ["membership", "plans", "pricing", "subscribe", "join", "register", "packages", "monthly", "annual"],
    },
    {
        title: "Personal Training",
        href: "/wellness",
        description: "One-on-one training sessions with certified professionals",
        keywords: ["personal", "training", "trainer", "coach", "one-on-one", "private", "sessions"],
    },
    {
        title: "Group Classes",
        href: "/wellness",
        description: "Join our energizing group fitness classes",
        keywords: ["group", "classes", "class", "spin", "cycling", "aerobics", "zumba", "pilates", "bootcamp"],
    },
    {
        title: "Cardio Equipment",
        href: "/products",
        description: "Premium cardio machines for effective workouts",
        keywords: ["cardio", "treadmill", "elliptical", "bike", "rowing", "running", "cycling"],
    },
    {
        title: "Strength Training",
        href: "/products",
        description: "Build muscle with our strength training equipment",
        keywords: ["strength", "weights", "lifting", "muscle", "power", "bench", "squat", "deadlift"],
    },
    {
        title: "Contact Us",
        href: "/",
        description: "Get in touch with our team",
        keywords: ["contact", "support", "help", "email", "phone", "location", "address"],
    },
];

interface SearchResult {
    title: string;
    href: string;
    description: string;
}

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    // Search function
    const performSearch = useCallback((searchQuery: string) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        const normalizedQuery = searchQuery.toLowerCase().trim();
        const words = normalizedQuery.split(/\s+/);

        const scored = searchableContent.map((item) => {
            let score = 0;

            // Check title match
            if (item.title.toLowerCase().includes(normalizedQuery)) {
                score += 10;
            }

            // Check description match
            if (item.description.toLowerCase().includes(normalizedQuery)) {
                score += 5;
            }

            // Check keyword matches
            words.forEach((word) => {
                item.keywords.forEach((keyword) => {
                    if (keyword.includes(word) || word.includes(keyword)) {
                        score += 3;
                    }
                });
            });

            return { ...item, score };
        });

        const filtered = scored
            .filter((item) => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 6);

        setResults(filtered);
        setSelectedIndex(0);
    }, []);

    // Handle input change
    useEffect(() => {
        performSearch(query);
    }, [query, performSearch]);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        } else {
            setQuery("");
            setResults([]);
        }
    }, [isOpen]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    setSelectedIndex((prev) =>
                        prev < results.length - 1 ? prev + 1 : prev
                    );
                    break;
                case "ArrowUp":
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
                    break;
                case "Enter":
                    e.preventDefault();
                    if (results[selectedIndex]) {
                        router.push(results[selectedIndex].href);
                        onClose();
                    }
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, results, selectedIndex, router, onClose]);

    // Handle result click
    const handleResultClick = (href: string) => {
        router.push(href);
        onClose();
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
                    paddingTop: '15vh',
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                    pointerEvents: 'none'
                }}
            >
                <div
                    className="animate-slideDown"
                    style={{
                        width: '100%',
                        maxWidth: '42rem',
                        overflow: 'hidden',
                        borderRadius: '1rem',
                        backgroundColor: 'white',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        pointerEvents: 'auto'
                    }}
                >
                    {/* Search Input */}
                    <div className="flex items-center gap-4 border-b border-gray-200 px-6 py-4">
                        <Search className="h-6 w-6 text-gray-400" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for pages, programs, equipment..."
                            className="flex-1 text-lg text-gray-900 placeholder-gray-400 outline-none"
                        />
                        <button
                            onClick={onClose}
                            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-[400px] overflow-y-auto">
                        {query.trim() === "" ? (
                            <div className="px-6 py-8 text-center">
                                <p className="text-gray-500">
                                    Start typing to search...
                                </p>
                                <div className="mt-4 flex flex-wrap justify-center gap-2">
                                    {["Wellness", "Products", "Membership"].map((term) => (
                                        <button
                                            key={term}
                                            onClick={() => setQuery(term)}
                                            className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-yellow-100 hover:text-yellow-700"
                                        >
                                            {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : results.length > 0 ? (
                            <ul className="py-2">
                                {results.map((result, index) => (
                                    <li key={`${result.title}-${result.href}`}>
                                        <button
                                            onClick={() => handleResultClick(result.href)}
                                            onMouseEnter={() => setSelectedIndex(index)}
                                            className={`flex w-full items-center justify-between px-6 py-4 text-left transition-colors ${index === selectedIndex
                                                ? "bg-yellow-50"
                                                : "hover:bg-gray-50"
                                                }`}
                                        >
                                            <div>
                                                <h4
                                                    className={`font-semibold ${index === selectedIndex
                                                        ? "text-yellow-700"
                                                        : "text-gray-900"
                                                        }`}
                                                >
                                                    {result.title}
                                                </h4>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    {result.description}
                                                </p>
                                            </div>
                                            <ArrowRight
                                                className={`h-5 w-5 transition-transform ${index === selectedIndex
                                                    ? "translate-x-1 text-yellow-600"
                                                    : "text-gray-300"
                                                    }`}
                                            />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="px-6 py-8 text-center">
                                <p className="text-gray-500">
                                    No results found for &quot;{query}&quot;
                                </p>
                                <p className="mt-2 text-sm text-gray-400">
                                    Try searching for wellness, products, or membership
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 bg-gray-50 px-6 py-3">
                        <div className="flex items-center justify-between text-xs text-gray-400">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">↑↓</kbd>
                                    to navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">↵</kbd>
                                    to select
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="rounded bg-gray-200 px-1.5 py-0.5 font-mono">esc</kbd>
                                    to close
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
