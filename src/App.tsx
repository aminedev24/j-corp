import { useMemo } from "react";
import Hero from "./components/Hero";
import SectionGrid, { SectionConfig } from "./components/SectionGrid";
import ServiceHighlights from "./components/ServiceHighlights";
import ContactCTA from "./components/ContactCTA";
import PortfolioShowcase, { RepoHighlight } from "./components/PortfolioShowcase";
import Footer from "./components/Footer";

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
        detail: "Landing pages, SaaS platforms, and e-commerce experiences delivered end-to-end."
      },
      {
        icon: "📱",
        label: "Product UI/UX",
        detail: "Design systems, rapid prototyping, and user research to validate ideas fast."
      },
      {
        icon: "⚡",
        label: "Electrical Services",
        detail: "Certified technicians handling installations, upgrades, and smart energy retrofits."
      },
      {
        icon: "🔧",
        label: "Fabrication & Handywork",
        detail: "On-site maintenance, custom fabrication, and rapid-response facility support."
      },
      {
        icon: "🚗",
        label: "Automotive Support",
        detail: "Fleet maintenance, EV conversions, and precision detailing to keep you mobile."
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

  return (
    <>
      <Hero />
      <SectionGrid sections={focusAreas} />
      <PortfolioShowcase repositories={repoHighlights} />
      <ServiceHighlights services={serviceAddOns} />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default App;
