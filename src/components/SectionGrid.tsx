import { useEffect, useRef, useState } from "react";

export type SectionConfig = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaLink?: string;
  imageUrl?: string;
};

type SectionGridProps = {
  sections: SectionConfig[];
};

const SectionGrid = ({ sections }: SectionGridProps) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() => sections.map(() => false));
  const [visibleText, setVisibleText] = useState<boolean[]>(() => sections.map(() => false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleCards(sections.map(() => false));
    setVisibleText(sections.map(() => false));
  }, [sections]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisibleCards(sections.map(() => true));
      setVisibleText(sections.map(() => true));
      return undefined;
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (Number.isNaN(index)) return;
            setVisibleCards((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            cardObserver.unobserve(entry.target as Element);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (Number.isNaN(index)) return;
            setVisibleText((prev) => {
              if (prev[index]) return prev;
              const next = [...prev];
              next[index] = true;
              return next;
            });
            textObserver.unobserve(entry.target as Element);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -10% 0px" }
    );

    cardRefs.current.forEach((el) => el && cardObserver.observe(el));
    textRefs.current.forEach((el) => el && textObserver.observe(el));

    return () => {
      cardObserver.disconnect();
      textObserver.disconnect();
    };
  }, [sections]);

  return (
    <section className="space-y-4 bg-slate-900 px-6 py-12 text-center sm:px-10 lg:py-16">
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Venture Labs Deep Dive</h2>
      <p className="mx-auto max-w-3xl text-base text-slate-200/80 sm:text-lg lg:text-xl">
        Each lab combines product strategy, fabrication, and operator training to ship market-ready concepts faster.
      </p>
      <div className="mx-auto mt-10 grid max-w-5xl gap-8">
        {sections.map((section, index) => (
          <article
            key={section.id}
            data-index={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left shadow-card-dark transition duration-500 ease-out sm:p-6 lg:p-8 ${
              visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {section.imageUrl ? (
              <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 sm:h-60">
                <img className="h-full w-full object-cover" src={section.imageUrl} alt={section.title} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-3 left-4 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/80">
                  {section.ctaText}
                </span>
              </div>
            ) : null}
            <div
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              data-index={index}
              className={`space-y-4 px-1 py-5 transition duration-500 ease-out ${
                visibleText[index] ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex flex-wrap gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-j-mint/80">
                <span>Focus Area</span>
                <span className="text-white/60">{section.id}</span>
              </div>
              <h3 className="bg-gradient-to-r from-white via-j-mint to-white bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
                {section.title}
              </h3>
              <p className="text-base text-slate-200/80 sm:text-lg lg:text-xl">
                <span className="font-semibold text-j-mint">Impact:</span> {section.description}
              </p>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-j-mint/70">Key plays</p>
                <ul className="space-y-2 text-sm text-slate-200/80 sm:text-base">
                  {section.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-j-mint" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Cross-team deployment in 14 days · Remote + on-site
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="btn btn-primary flex-1 justify-center text-base"
                  href={section.ctaLink ?? "#/contact"}
                  target={section.ctaLink ? "_blank" : undefined}
                  rel={section.ctaLink ? "noreferrer" : undefined}
                >
                  {section.ctaText}
                </a>
                <button className="btn btn-ghost flex-1 justify-center text-base" type="button">
                  Download Overview
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SectionGrid;
