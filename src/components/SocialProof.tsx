export default function SocialProof() {
  const stats = [
    { value: "82%", label: "of Gen Z Australians report financial stress" },
    { value: "49%", label: "say feeling overwhelmed is their biggest barrier" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[900px] relative z-10">
        <div className="border border-black/5 bg-zinc-50/50 rounded-[32px] px-8 py-12 md:px-14 md:py-20 text-center">
          {/* Stats row */}
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 150}ms` }}>
                <p className="text-black font-bold text-6xl md:text-7xl tracking-tighter mb-4">
                  {stat.value}
                </p>
                <p className="text-zinc-500 text-sm md:text-[15px] max-w-[200px] mx-auto leading-relaxed font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-black/5 mx-auto mb-10" />

          {/* Tagline */}
          <p className="text-black font-bold text-xl tracking-tight animate-fade-up [animation-delay:350ms]">
            Rilo exists to change that.
          </p>
        </div>
      </div>
    </section>
  );
}

