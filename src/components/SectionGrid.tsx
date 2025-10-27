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
  <section className="section-grid">
    {sections.map((section) => (
      <article key={section.id} id={section.id} className="section-grid__card">
        {section.imageUrl ? (
          <div className="section-grid__image-wrapper">
            <img src={section.imageUrl} alt={section.title} loading="lazy" />
          </div>
        ) : null}
        <h2>{section.title}</h2>
        <p>{section.description}</p>
        <ul>
          {section.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <a
          className="button button--ghost"
          href={section.ctaLink ?? "#contact"}
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
