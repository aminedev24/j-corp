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
  <section className="space-y-6 bg-slate-900 px-6 py-12 sm:px-10" id="portfolio">
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-j-mint/70">Prototype Library</p>
      <h2 className="text-3xl font-semibold">Prototype & Product Library</h2>
      <p className="text-slate-200/80">
        Explore a sample of Johnny Corp repos spanning Arduino experiments, mobility concepts, operational tooling,
        and polished web applications.
      </p>
    </div>
    <div className="grid gap-5 md:grid-cols-2">
      {repositories.map((repo) => (
        <article
          key={repo.url}
          className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-card-dark transition hover:-translate-y-1 hover:border-white/40"
        >
          {repo.previewImage ? (
            <div className="relative">
              <img className="h-48 w-full object-cover" src={repo.previewImage} alt={`${repo.name} preview`} loading="lazy" />
            </div>
          ) : null}
          <div className="flex flex-1 flex-col gap-3 p-5">
            <div>
              <h3 className="text-2xl font-semibold">{repo.name}</h3>
              <p className="text-sm text-slate-200/80">{repo.description}</p>
            </div>
            <div className="mt-auto flex gap-4 border-t border-white/5 pt-4 text-sm font-semibold text-j-mint">
              <a className="hover:underline" href={repo.url} target="_blank" rel="noreferrer">
                View Repo
              </a>
              <a
                className="hover:underline"
                href={repo.pageUrl ?? repo.previewUrl ?? repo.url}
                target="_blank"
                rel="noreferrer"
              >
                View Page
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default PortfolioShowcase;

export type { RepoHighlight as PortfolioRepoHighlight };
