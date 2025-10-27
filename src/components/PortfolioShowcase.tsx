export type RepoHighlight = {
  name: string;
  description: string;
  url: string;
  previewUrl?: string;
  pageUrl?: string;
  previewImage?: string;
};

type PortfolioShowcaseProps = {
  repositories: RepoHighlight[];
};

const PortfolioShowcase = ({ repositories }: PortfolioShowcaseProps) => (
  <section className="portfolio-showcase" id="portfolio">
    <div className="portfolio-showcase__intro">
      <h2>Prototype & Product Library</h2>
      <p>
        Explore a sample of Johnny Corp repos spanning Arduino experiments, mobility concepts, operational
        tooling, and polished web applications.
      </p>
    </div>
    <div className="portfolio-showcase__grid">
      {repositories.map((repo) => (
        <article
          key={repo.url}
          className={`portfolio-showcase__card${repo.previewImage ? " portfolio-showcase__card--has-image" : ""}`}
        >
          {repo.previewImage ? (
            <div className="portfolio-showcase__media">
              <img src={repo.previewImage} alt={`${repo.name} preview`} loading="lazy" />
            </div>
          ) : null}
          <div className="portfolio-showcase__body">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>
          <div className="portfolio-showcase__links">
            <a href={repo.url} target="_blank" rel="noreferrer">
              View Repo
            </a>
            <a
              href={repo.pageUrl ?? repo.previewUrl ?? repo.url}
              target="_blank"
              rel="noreferrer"
            >
              View Page
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default PortfolioShowcase;

export type { RepoHighlight as PortfolioRepoHighlight };
