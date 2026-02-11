const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    headline: "A coach, not a dashboard",
    body: "Rilo talks to you about your money. It doesn't just show you where it went. Think personal trainer, not bathroom scale.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    headline: "Built around your pay cycle",
    body: "Rilo knows when you get paid and paces your spending across every fortnight. No more guessing on day 12.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    headline: "Made for Australians",
    body: "Fortnightly pay. Superannuation. HECS debt. BNPL. Rilo understands your financial reality because it was built in it.",
  },
];

export default function ValueProps() {
  return (
    <section id="features" className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Section header */}
        <div className="text-center mb-24">
          <span className="meta-label text-black mb-4 block animate-fade-up">
            WHY RILO
          </span>
          <h2 className="text-[clamp(1.8rem,5vw,2.5rem)] font-bold tracking-tight text-black animate-fade-up [animation-delay:100ms]">
            Not another budgeting app.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group animate-fade-up flex flex-col items-center text-center"
              style={{
                animationDelay: `${200 + i * 100}ms`
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-black/5 flex items-center justify-center text-black mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500 ease-smooth">
                {card.icon}
              </div>

              <h3 className="text-black font-bold text-lg mb-4 tracking-tight">
                {card.headline}
              </h3>
              <p className="text-zinc-500 text-[15px] leading-relaxed max-w-[280px]">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

