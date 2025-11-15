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

const SectionGrid = ({ sections }: SectionGridProps) => (
  <section className="grid gap-6 bg-slate-900 px-6 py-10 sm:px-10 lg:grid-cols-2 lg:gap-8">
    {sections.map((section) => (
      <article
        key={section.id}
        id={section.id}
        className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-card-dark"
      >
        {section.imageUrl ? (
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <img className="h-56 w-full object-cover transition duration-300 hover:scale-[1.03]" src={section.imageUrl} alt={section.title} loading="lazy" />
          </div>
        ) : null}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <p className="text-sm text-slate-200/80">{section.description}</p>
          <ul className="space-y-1 text-sm text-slate-200/70">
            {section.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-j-mint" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          className="btn btn-ghost w-full justify-center"
          href={section.ctaLink ?? "#/contact"}
          target={section.ctaLink ? "_blank" : undefined}
          rel={section.ctaLink ? "noreferrer" : undefined}
        >
          {section.ctaText}
        </a>
      </article>
    ))}
  </section>
);

export default SectionGrid;
