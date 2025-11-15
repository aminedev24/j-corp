import { useEffect, useRef, useState } from "react";

type BlogPost = {
  title: string;
  excerpt: string;
  url: string;
  tag: string;
  imageUrl: string;
};

type CaligymnicBlogProps = {
  posts: BlogPost[];
};

const CaligymnicBlog = ({ posts }: CaligymnicBlogProps) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(() => posts.map(() => false));
  const [visibleText, setVisibleText] = useState<boolean[]>(() => posts.map(() => false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleCards(posts.map(() => false));
    setVisibleText(posts.map(() => false));
  }, [posts]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisibleCards(posts.map(() => true));
      setVisibleText(posts.map(() => true));
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
  }, [posts]);

  return (
    <section className="space-y-4 bg-slate-900 px-6 py-12 text-center sm:px-10 lg:py-16">
      <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">CaliGymnic Dispatch</h2>
      <p className="mx-auto max-w-3xl text-base text-slate-200/80 sm:text-lg lg:text-xl">
        Fresh training theory, hybrid programming, and wellness rituals from the CaliGymnic collective. Each post opens a
        deep dive on the official blog.
      </p>
      <div className="mx-auto mt-10 grid max-w-5xl gap-8">
        {posts.map((post, index) => (
          <article
            key={post.url}
            data-index={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-left shadow-card-dark transition duration-500 ease-out sm:p-6 lg:p-8 ${
              visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="relative h-48 overflow-hidden rounded-2xl border border-white/10 sm:h-60">
              <img className="h-full w-full object-cover" src={post.imageUrl} alt={post.title} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" aria-hidden="true" />
              <span className="absolute bottom-3 left-4 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/80">
                {post.tag}
              </span>
            </div>
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
              <h3 className="bg-gradient-to-r from-white via-j-mint to-white bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
                {post.title}
              </h3>
              <p className="text-base text-slate-200/80 sm:text-lg">{post.excerpt}</p>
              <div className="flex flex-wrap gap-3">
                <a className="btn btn-primary flex-1 justify-center text-base" href={post.url} target="_blank" rel="noreferrer">
                  Read Post
                </a>
                <a className="btn btn-ghost flex-1 justify-center text-base" href="https://caligymnic.sport.blog/" target="_blank" rel="noreferrer">
                  Full Blog
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CaligymnicBlog;

export type { BlogPost };
