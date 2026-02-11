export default function Footer() {
    const year = new Date().getFullYear();

    const handleCtaClick = () => {
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-white border-t border-black/5">
            <div className="mx-auto max-w-[1200px] px-6 py-20">
                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <a
                            href="#"
                            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                        >
                            <span className="text-sm font-black tracking-[0.3em] text-black">
                                RILO®
                            </span>
                        </a>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px] font-medium">
                            The AI spending coach for the next generation. Built with precision, focused on your wealth.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="md:col-start-3">
                        <h4 className="text-black font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">
                            Platform
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="#demo" className="text-zinc-500 hover:text-black text-sm font-medium transition-colors">
                                    How it works
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="text-zinc-500 hover:text-black text-sm font-medium transition-colors">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#waitlist" className="text-zinc-500 hover:text-black text-sm font-medium transition-colors">
                                    Join Waitlist
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">
                            Connect
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://twitter.com/riloapp" className="text-zinc-500 hover:text-black text-sm font-medium transition-colors">
                                    Twitter / X
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hello@riloapp.com" className="text-zinc-500 hover:text-black text-sm font-medium transition-colors">
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="meta-label !text-[9px] font-bold tracking-[0.2em] opacity-40">
                        COPYRIGHT {year} RILO® APP. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="/privacy" className="meta-label !text-[9px] font-bold tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">
                            PRIVACY
                        </a>
                        <a href="/terms" className="meta-label !text-[9px] font-bold tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">
                            TERMS
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

