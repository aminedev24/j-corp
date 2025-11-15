import { useEffect, useRef, useState } from "react";

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

const PortfolioShowcase = ({ repositories }: PortfolioShowcaseProps) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() => repositories.map(() => false));
  const [visibleText, setVisibleText] = useState<boolean[]>(() => repositories.map(() => false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleCards(repositories.map(() => false));
    setVisibleText(repositories.map(() => false));
  }, [repositories]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisibleCards(repositories.map(() => true));
      setVisibleText(repositories.map(() => true));
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
  }, [repositories]);

  return (
    <section className="space-y-6 bg-slate-900 px-6 py-12 text-center sm:px-10 lg:py-16" id="portfolio">
      <div className="mx-auto max-w-3xl space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-j-mint/70">Prototype Library</p>
        <h2 className="bg-gradient-to-r from-white via-j-mint to-white bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
          Prototype & Product Library
        </h2>
        <p className="text-base text-slate-200/80 sm:text-lg lg:text-xl">
          Explore a sample of Johnny Corp repos spanning Arduino experiments, mobility concepts, operational tooling,
          and polished web applications. Each repo ships with deployment notes and partner-ready demos.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/80">
          <p className="uppercase tracking-[0.3em] text-j-mint/70">Shipping faster</p>
          <p>
            GitHub activity + hosted previews keep investors and collaborators in lockstep with the innovation pipeline.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-8">
        {repositories.map((repo, index) => (
          <article
            key={repo.url}
            data-index={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left shadow-card-dark transition duration-500 ease-out sm:p-6 lg:p-8 ${
              visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            {repo.previewImage ? (
              <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 sm:h-60">
                <img className="h-full w-full object-cover" src={repo.previewImage} alt={`${repo.name} preview`} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-3 left-4 flex gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/80">
                  <span>Live Repo</span>
                  <span>#{repo.name.slice(0, 4).toUpperCase()}</span>
                </div>
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
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{repo.name}</h3>
                <p className="text-sm text-slate-200/80 sm:text-base lg:text-lg">{repo.description}</p>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  CI-ready · DX audited · Auto deploy hooks
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-j-mint/70">Deployment links</p>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-j-mint">
                  <a className="btn btn-primary flex-1 justify-center text-base" href={repo.url} target="_blank" rel="noreferrer">
                    View Repo
                  </a>
                  <a
                    className="btn btn-ghost flex-1 justify-center text-base hover:underline"
                    href={repo.pageUrl ?? repo.previewUrl ?? repo.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Page
                  </a>
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Updated weekly · Staging + prod builds monitored
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioShowcase;

export type { RepoHighlight as PortfolioRepoHighlight };
