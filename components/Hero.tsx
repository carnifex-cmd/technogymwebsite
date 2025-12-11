"use client";

import { useState, useEffect, useCallback } from "react";

export interface HeroSlide {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText?: string;
}

interface HeroProps {
    slides?: HeroSlide[];
    showCTA?: boolean;
    autoAdvance?: boolean;
    autoAdvanceInterval?: number;
}

// Default slide for backward compatibility
const defaultSlide: HeroSlide = {
    title: "Fitness Journey",
    subtitle: "Transform Your Body, Mind, And Performance\nWith Purpose And Power.",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText: "Start Workout Plan",
};

export function Hero({
    slides = [defaultSlide],
    showCTA = true,
    autoAdvance = false,
    autoAdvanceInterval = 5000,
}: HeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const slideCount = slides.length;

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 1000);
    }, [isTransitioning]);

    const handleNext = useCallback(() => {
        const nextIndex = (currentSlide + 1) % slideCount;
        goToSlide(nextIndex);
    }, [currentSlide, slideCount, goToSlide]);

    const handlePrev = useCallback(() => {
        const prevIndex = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(prevIndex);
    }, [currentSlide, slideCount, goToSlide]);

    // Auto-advance timer
    useEffect(() => {
        if (!autoAdvance || slideCount <= 1) return;

        const timer = setInterval(() => {
            handleNext();
        }, autoAdvanceInterval);

        return () => clearInterval(timer);
    }, [autoAdvance, autoAdvanceInterval, handleNext, slideCount]);

    const currentData = slides[currentSlide];

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Background images - stacked for crossfade effect */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.backgroundImage}')`,
                        opacity: index === currentSlide ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        zIndex: index === currentSlide ? 1 : 0,
                    }}
                />
            ))}

            {/* Content overlay */}
            <div className="relative z-10 container flex flex-col items-center justify-center gap-8 px-4 text-center">
                <h1 className="text-5xl font-bold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
                    {currentData.title}
                </h1>
                <p className="max-w-[600px] text-lg text-white/80 md:text-xl whitespace-pre-line">
                    {currentData.subtitle}
                </p>
                {showCTA && currentData.ctaText && (
                    <button className="mt-4 flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-yellow-300 hover:scale-105">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                        {currentData.ctaText}
                    </button>
                )}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-8 z-10 flex items-center gap-2 text-sm text-white/60">
                <span className="writing-mode-vertical rotate-180" style={{ writingMode: "vertical-rl" }}>
                    Scroll
                </span>
            </div>

            {/* Slider controls - only show if more than 1 slide */}
            {slideCount > 1 && (
                <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
                    <button
                        onClick={handlePrev}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/60 transition-colors hover:border-white hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="Previous slide"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <div className="flex items-center gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                className={`h-0.5 w-8 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-yellow-400 w-12" : "bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/60 transition-colors hover:border-white hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        aria-label="Next slide"
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
}
