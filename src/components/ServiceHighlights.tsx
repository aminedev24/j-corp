import { useEffect, useRef, useState } from "react";

type Service = {
  icon: string;
  label: string;
  detail: string;
  imageUrl?: string;
  capabilities?: string[];
};

type ServiceHighlightsProps = {
  services: Service[];
};

const ServiceHighlights = ({ services }: ServiceHighlightsProps) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() => services.map(() => false));
  const [visibleTexts, setVisibleTexts] = useState<boolean[]>(() => services.map(() => false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setVisibleItems(services.map(() => false));
    setVisibleTexts(services.map(() => false));
  }, [services]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisibleItems(services.map(() => true));
      setVisibleTexts(services.map(() => true));
      return undefined;
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-index");
            if (!indexAttr) return;
            const index = Number(indexAttr);
            setVisibleItems((prev) => {
              if (prev[index]) return prev;
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            cardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );
    
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-index");
            if (!indexAttr) return;
            const index = Number(indexAttr);
            setVisibleTexts((prev) => {
              if (prev[index]) return prev;
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            textObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5, rootMargin: "0px 0px -10% 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) cardObserver.observe(el);
    });

    textRefs.current.forEach((el) => {
      if (el) textObserver.observe(el);
    });

    return () => {
      cardObserver.disconnect();
      textObserver.disconnect();
    };
  }, [services, itemRefs]);

  return (
    <section className="space-y-4 bg-slate-950 px-6 py-12 text-center sm:px-10 lg:py-16">
      <h2 className="text-3xl font-semibold">Hands-On Support When You Need It</h2>
      <p className="mx-auto max-w-2xl text-slate-200/80">
        Beyond the spotlight sectors, J-Corp keeps operations moving with skilled teams for essential services.
      </p>
      <div className="mt-10 grid gap-8 mx-auto max-w-5xl">
        {services.map((service, index) => (
          <div
            key={service.label}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            data-index={index}
            className={`h-full rounded-3xl border border-white/10 bg-slate-900/70 p-5 sm:p-6 text-left transition duration-500 ease-out ${
              visibleItems[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="relative h-48 sm:h-60 overflow-hidden rounded-2xl border border-white/10">
              {service.imageUrl ? (
                <>
                  <img
                    className="h-full w-full object-cover"
                    src={service.imageUrl}
                    alt={`${service.label} visual`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" aria-hidden="true" />
                </>
              ) : (
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-j-sky/20 via-slate-900 to-slate-950 text-4xl">
                  <span aria-hidden="true">{service.icon}</span>
                </div>
              )}
              <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-900">
                {service.icon} Ops
              </span>
            </div>
            <div
              ref={(el) => {
                textRefs.current[index] = el;
              }}
              data-index={index}
              className={`space-y-2 px-1 py-4 transition duration-500 ease-out ${
                visibleTexts[index] ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <h3 className="text-2xl font-semibold">{service.label}</h3>
              <p className="text-sm text-slate-200/75">{service.detail}</p>
              {service.capabilities?.length ? (
                <ul className="mt-3 space-y-1.5 text-sm text-slate-200/65">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-j-mint" aria-hidden="true" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;
