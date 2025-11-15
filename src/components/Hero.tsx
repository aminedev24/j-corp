import type { AppRoute } from "../types/navigation";

type HeroProps = {
  onNavigate: (view: AppRoute) => void;
};

const founderPortraitSrc = `${import.meta.env.BASE_URL}j-corp-founder.png`;

const Hero = ({ onNavigate }: HeroProps) => (
  <header className="min-h-[85vh] bg-[radial-gradient(120%_120%_at_50%_0%,#1b2338_0%,#07080d_60%,#020205_100%)] px-6 pb-8 pt-10 sm:px-10 lg:px-20 flex flex-col gap-8">
    <nav className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.4em] text-j-mint/70">
      <span>J-Corp</span>
      <button
        className="text-slate-200/80 transition hover:text-white"
        type="button"
        onClick={() => onNavigate("contact")}
      >
        Contact
      </button>
    </nav>
    <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-center">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-4xl leading-tight sm:text-5xl lg:text-[3.5rem]">
          Building ventures that connect{" "}
          <span className="text-j-mint">technology, sport, and lifestyle.</span>
        </h1>
        <p className="text-base text-slate-100/80 lg:text-lg">
          J-Corp (Johnny Corp) partners with investors and change-makers to launch Arduino-powered hardware,
          digital products, and the CaliGymnic performance movement alongside elevated food and lifestyle
          concepts. Choose a lens below to deep dive into each pillar at your own pace.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="btn btn-primary" type="button" onClick={() => onNavigate("focus")}>
            Explore Venture Labs
          </button>
          <button className="btn btn-secondary" type="button" onClick={() => onNavigate("portfolio")}>
            Prototype Library
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => onNavigate("contact")}>
            Meet the Team
          </button>
          <a className="btn btn-ghost" href="https://github.com/aminedev24" target="_blank" rel="noreferrer">
            View GitHub
          </a>
        </div>
      </div>
      <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-3 shadow-card-dark">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent pointer-events-none" aria-hidden="true" />
 
        

        <img
          className="relative z-10 h-full w-full rounded-2xl object-cover"
          src={founderPortraitSrc}
          alt="Founder portrait representing Johnny Corp"
          loading="lazy"
        />
        <div className="relative z-10 mt-4 space-y-1 px-2 pb-1 text-sm text-slate-200">
          <p className="font-semibold text-white">Johnny Corp Collective</p>
          <p className="text-slate-200/70">Hybrid founder studio • Remote-first</p>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
