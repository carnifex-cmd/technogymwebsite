interface HeroProps {
    title?: string;
    subtitle?: string;
    backgroundImage?: string;
    ctaText?: string;
    showCTA?: boolean;
}

export function Hero({
    title = "Fitness Journey",
    subtitle = "Transform Your Body, Mind, And Performance\nWith Purpose And Power.",
    backgroundImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    ctaText = "Start Workout Plan",
    showCTA = true,
}: HeroProps) {
    return (
        <section
            className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`,
            }}
        >
            <div className="container flex flex-col items-center justify-center gap-8 px-4 text-center">
                <h1 className="text-5xl font-bold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
                    {title}
                </h1>
                <p className="max-w-[600px] text-lg text-white/80 md:text-xl whitespace-pre-line">
                    {subtitle}
                </p>
                {showCTA && (
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
                        {ctaText}
                    </button>
                )}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2 text-sm text-white/60">
                <span className="writing-mode-vertical rotate-180" style={{ writingMode: "vertical-rl" }}>
                    Scroll
                </span>
            </div>

            {/* Slider indicators */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/60 transition-colors hover:border-white hover:text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <div className="flex items-center gap-2">
                    <div className="h-0.5 w-8 rounded-full bg-white/30" />
                    <div className="h-0.5 w-8 rounded-full bg-yellow-400" />
                    <div className="h-0.5 w-8 rounded-full bg-white/30" />
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/60 transition-colors hover:border-white hover:text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
