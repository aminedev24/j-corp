import { useCallback, useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import SectionGrid, { SectionConfig } from "./components/SectionGrid";
import ServiceHighlights from "./components/ServiceHighlights";
import ContactCTA from "./components/ContactCTA";
import PortfolioShowcase, { RepoHighlight } from "./components/PortfolioShowcase";
import Footer from "./components/Footer";
import type { AppRoute, AppView } from "./types/navigation";

const routeToHash: Record<AppRoute, string> = {
  home: "",
  focus: "ventures",
  portfolio: "portfolio",
  services: "services",
  contact: "contact"
};

const hashToRoute: Record<string, AppView> = {
  ventures: "focus",
  portfolio: "portfolio",
  services: "services",
  contact: "contact"
};

const resolveRouteFromHash = (): AppRoute => {
  if (typeof window === "undefined") {
    return "home";
  }

  const hashValue = window.location.hash.replace(/^#\/?/, "").toLowerCase();
  if (!hashValue) {
    return "home";
  }

  return hashToRoute[hashValue] ?? "home";
};

const App = () => {
  const focusAreas = useMemo<SectionConfig[]>(
    () => [
      {
        id: "it",
        title: "Digital Products & Web",
        description:
          "Mission-critical web and mobile solutions, automation pipelines, and product strategy for high-growth teams.",
        highlights: [
          "Full-stack web & mobile engineering",
          "AI-assisted business intelligence",
          "Cloud, DevOps, and cybersecurity readiness"
        ],
        ctaText: "Start a Web Project",
        imageUrl:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "arduino",
        title: "Arduino & Embedded Lab",
        description:
          "Rapid prototyping with microcontrollers, custom PCB design, and IoT integrations that bridge the physical and digital.",
        highlights: [
          "Sensor-driven automation systems",
          "Prototype-to-production consulting",
          "STEM outreach and hardware bootcamps"
        ],
        ctaText: "Prototype with Arduino",
        imageUrl:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "caligymnic",
        title: "CaliGymnic Performance",
        description:
          "A sports innovation collective advancing calisthenics, body-building, martial arts, and holistic fitness programs.",
        highlights: [
          "Periodized calisthenics training",
          "Strength & conditioning analytics",
          "Martial arts performance labs"
        ],
        ctaText: "Read the CaliGymnic Blog",
        ctaLink: "https://caligymnic.sport.blog/",
        imageUrl:
          "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=900&q=80"
      },
      {
        id: "food",
        title: "Food & Lifestyle Concepts",
        description:
          "Sustainable culinary ventures, immersive pop-ups, and wellness-focused dining experiences tuned to urban tastes.",
        highlights: [
          "Smart kitchen automation partners",
          "Nutritional product development",
          "Experiential gastronomy labs"
        ],
        ctaText: "Discover Food Concepts",
        imageUrl:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
      }
    ],
    []
  );

  const serviceAddOns = useMemo(
    () => [
      {
        icon: "💻",
        label: "Web Development",
        detail: "Landing pages, SaaS platforms, and e-commerce experiences delivered end-to-end.",
        capabilities: ["Conversion-focused marketing sites", "SaaS dashboards and admin tooling", "Commerce + payment integrations"],
        imageUrl: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80"
      },
      {
        icon: "📱",
        label: "Product UI/UX",
        detail: "Design systems, rapid prototyping, and user research to validate ideas fast.",
        capabilities: ["Interactive design systems", "Figma-to-production handoff", "Qualitative testing playbooks"],
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      },
      {
        icon: "⚡",
        label: "Electrical Services",
        detail: "Certified technicians handling installations, upgrades, and smart energy retrofits.",
        capabilities: ["Industrial panel upgrades", "IoT sensors + automation", "Emergency response crews"],
        imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80"
      },
      {
        icon: "🔧",
        label: "Fabrication & Handywork",
        detail: "On-site maintenance, custom fabrication, and rapid-response facility support.",
        capabilities: ["Rapid prototyping lab", "Fixture + signage fabrication", "24/7 facilities support"],
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
      },
      {
        icon: "🚗",
        label: "Automotive Support",
        detail: "Fleet maintenance, EV conversions, and precision detailing to keep you mobile.",
        capabilities: ["EV retrofit strategy", "Fleet maintenance playbooks", "Studio-grade detailing"],
        imageUrl: "https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&w=800&q=80"
      }
    ],
    []
  );

  const repoHighlights = useMemo<RepoHighlight[]>(
    () => [
      {
        name: "Artisbay.com",
        description:
          "ArtisBay Inc. exports genuine Japanese used vehicles, tires, and auto parts with trusted global logistics.",
        url: "https://github.com/aminedev24/artisbay-consulting",
        pageUrl: "https://artisbay.com/",
        previewUrl: "https://artisbay.com/",
        previewImage: "https://artisbay.com/images/companyprofile.png"
      },
      {
        name: "Aurora Lumen",
        description:
          "Experimental AI companion exploring memory, creativity, and knowledge—sponsored by Artisbay Inc. in Yokohama.",
        url: "https://github.com/aminedev24/artisbay-consulting",
        pageUrl: "https://aurora-lumen.com/",
        previewUrl: "https://aurora-lumen.com/",
        previewImage:
          "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "LightBulb",
        description: "Industrial electrical automation concepts using Arduino-driven lighting controls.",
        url: "https://github.com/aminedev24/lightBulb",
        pageUrl: "https://aminedev24.github.io/lightBulb/",
        previewUrl: "https://aminedev24.github.io/lightBulb/",
        previewImage:
          "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Car Explorer",
        description: "Unfinished prototype exploring a vehicle export service marketplace experience.",
        url: "https://github.com/aminedev24/carExplorer",
        pageUrl: "https://aminedev24.github.io/carExplorer/",
        previewUrl: "https://aminedev24.github.io/carExplorer/",
        previewImage:
          "https://images.unsplash.com/photo-1549921296-3ecf9c4a5a57?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "AutoCam V2",
        description: "Unfinished AutoCam prototype streamlining vehicle imagery capture for export workflows.",
        url: "https://github.com/aminedev24/autocam-v2",
        pageUrl: "https://aminedev24.github.io/autocam-v2/",
        previewUrl: "https://aminedev24.github.io/autocam-v2/",
        previewImage:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "React CRUD App",
        description: "Live demo of CRUD workflows in React with hosted preview.",
        url: "https://github.com/aminedev24/react-crud-app-first",
        pageUrl: "https://aminedev24.github.io/react-crud-app-first/",
        previewUrl: "https://aminedev24.github.io/react-crud-app-first/",
        previewImage:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Assurance App",
        description: "CRUD insurance management app tailored for a boutique assurance provider.",
        url: "https://github.com/aminedev24/assurance-app",
        pageUrl: "https://aminedev24.github.io/assurance-app/",
        previewUrl: "https://aminedev24.github.io/assurance-app/",
        previewImage:
          "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Artisbay Consulting",
        description: "Consulting brand presence with tailored landing experience.",
        url: "https://github.com/aminedev24/artisbay-consulting",
        pageUrl: "https://aminedev24.github.io/artisbay-consulting/",
        previewUrl: "https://aminedev24.github.io/artisbay-consulting/",
        previewImage:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "JS App 2",
        description: "JavaScript learning lab covering DOM interactions and APIs.",
        url: "https://github.com/aminedev24/JsApp2",
        pageUrl: "https://aminedev24.github.io/JsApp2/",
        previewUrl: "https://aminedev24.github.io/JsApp2/",
        previewImage:
          "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Gym JS",
        description: "CRUD dashboard to manage gym clients, sessions, and personalized programming.",
        url: "https://github.com/aminedev24/gymJs",
        pageUrl: "https://aminedev24.github.io/gymJs/",
        previewUrl: "https://aminedev24.github.io/gymJs/",
        previewImage:
          "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=900&q=80"
      },
      {
        name: "Fashion App React",
        description: "Retail storefront exploration featuring catalog and cart flows.",
        url: "https://github.com/aminedev24/fashion-app-react",
        pageUrl: "https://aminedev24.github.io/fashion-app-react/",
        previewUrl: "https://aminedev24.github.io/fashion-app-react/",
        previewImage:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80"
      }
    ],
    []
  );

  const [route, setRoute] = useState<AppRoute>(() => resolveRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(resolveRouteFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = useCallback((nextRoute: AppRoute) => {
    const hash = routeToHash[nextRoute];
    if (hash) {
      window.location.hash = `/${hash}`;
    } else {
      window.location.hash = "";
    }
    setRoute(nextRoute);
  }, []);

  const viewSections = useMemo<
    Record<
      AppView,
      {
        eyebrow: string;
        title: string;
        description: string;
        element: JSX.Element;
      }
    >
  >(
    () => ({
      focus: {
        eyebrow: "R&D Ventures",
        title: "Venture Labs Deep Dive",
        description:
          "Unpack four parallel labs spanning digital products, Arduino builds, CaliGymnic performance, and sustainable food experiences.",
        element: <SectionGrid sections={focusAreas} />
      },
      portfolio: {
        eyebrow: "Prototype Library",
        title: "Prototypes, Proofs & Live Repos",
        description:
          "Browse working code, hosted demos, and explorations that show how Johnny Corp experiments before scaling.",
        element: <PortfolioShowcase repositories={repoHighlights} />
      },
      services: {
        eyebrow: "Operations Crew",
        title: "Hands-On Service Programs",
        description:
          "Electrical, fabrication, product UX, and automotive teams are on call to keep operations alive between ventures.",
        element: <ServiceHighlights services={serviceAddOns} />
      },
      contact: {
        eyebrow: "Partner With J-Corp",
        title: "Collaborate With Johnny Corp",
        description:
          "Investors, technologists, athletes, and culinary partners can open a direct conversation with the core team.",
        element: <ContactCTA />
      }
    }),
    [focusAreas, repoHighlights, serviceAddOns]
  );

  const teaserCards = useMemo(
    () => [
      {
        route: "focus" as const,
        eyebrow: "R&D Programs",
        title: "Venture Labs",
        summary: "Four-lab program combining software, Arduino, CaliGymnic sport science, and culinary concepts.",
        imageUrl: focusAreas[0]?.imageUrl,
        ctaLabel: "Open Labs"
      },
      {
        route: "portfolio" as const,
        eyebrow: "Prototype Shelf",
        title: "Product Library",
        summary: "Click through hosted demos and repositories that document every experiment.",
        imageUrl: repoHighlights[0]?.previewImage,
        ctaLabel: "See Prototypes"
      },
      {
        route: "services" as const,
        eyebrow: "Ops Support",
        title: "Skilled Services",
        summary: "Certified crews covering UX, fabrication, electrical systems, and automotive care.",
        placeholderIcon: "⚡",
        ctaLabel: "View Services"
      },
      {
        route: "contact" as const,
        eyebrow: "Partner Up",
        title: "Team & Partners",
        summary: "Get in touch for partnerships, talent collaborations, or venture scouting.",
        placeholderIcon: "✉️",
        ctaLabel: "Reach Out"
      }
    ],
    [focusAreas, repoHighlights]
  );

  const renderHome = () => (
    <>
      <Hero onNavigate={handleNavigate} />
      <section className="grid gap-4 bg-slate-950 px-6 py-8 sm:px-10 md:grid-cols-2 xl:grid-cols-4" aria-label="Preview of J-Corp pillars">
        {teaserCards.map((teaser) => (
          <article
            key={teaser.route}
            className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-card-dark"
          >
            <div className="relative h-36 w-full overflow-hidden border-b border-white/5">
              {teaser.imageUrl ? (
                <img className="h-full w-full object-cover" src={teaser.imageUrl} alt="" aria-hidden="true" loading="lazy" />
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-j-sky/20 via-slate-900 to-slate-950 text-4xl">
                  <span aria-hidden="true">{teaser.placeholderIcon}</span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-j-mint/70">{teaser.eyebrow}</span>
              <h3>{teaser.title}</h3>
              <p className="text-sm text-slate-200/80">{teaser.summary}</p>
              <button type="button" className="btn btn-secondary mt-auto w-full" onClick={() => handleNavigate(teaser.route)}>
                {teaser.ctaLabel}
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );

  const renderRoutedView = () => {
    if (route === "home") {
      return renderHome();
    }

    const config = viewSections[route];
    if (!config) {
      return renderHome();
    }

    return (
      <>
        <section className="space-y-4 border-b border-white/10 bg-[radial-gradient(120%_120%_at_50%_0%,#1b1f32_0%,#06070c_60%,#020205_100%)] px-6 py-12 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-j-mint/70">{config.eyebrow}</p>
          <h1 className="text-3xl font-semibold sm:text-4xl">{config.title}</h1>
          <p className="max-w-3xl text-slate-200/80">{config.description}</p>
          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn btn-secondary" onClick={() => handleNavigate("home")}>
              Back to Overview
            </button>
          </div>
        </section>
        <div>{config.element}</div>
      </>
    );
  };

  return (
    <>
      {renderRoutedView()}
      <Footer />
    </>
  );
};

export default App;
