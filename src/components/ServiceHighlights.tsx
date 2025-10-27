type Service = {
  icon: string;
  label: string;
  detail: string;
};

type ServiceHighlightsProps = {
  services: Service[];
};

const ServiceHighlights = ({ services }: ServiceHighlightsProps) => (
  <section className="service-highlights">
    <h2>Hands-On Support When You Need It</h2>
    <p>
      Beyond the spotlight sectors, J-Corp keeps operations moving with skilled teams for essential services.
    </p>
    <div className="service-highlights__grid">
      {services.map((service) => (
        <div key={service.label} className="service-highlights__item">
          <span aria-hidden="true" className="service-highlights__icon">
            {service.icon}
          </span>
          <h3>{service.label}</h3>
          <p>{service.detail}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceHighlights;
