const ContactCTA = () => (
  <section id="contact" className="space-y-6 bg-gradient-to-br from-j-sky/10 via-slate-900 to-slate-950 px-6 py-12 sm:px-10">
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold">Let’s shape the next venture together.</h2>
      <p className="max-w-2xl text-slate-200/80">
        Investors, partners, and talent are all welcome. Share your vision and we will tailor a roadmap across IT,
        sports, food, or critical services.
      </p>
      <a className="btn btn-primary w-full sm:w-auto" href="mailto:hello@j-corp.co">
        Email hello@j-corp.co
      </a>
      <div className="flex flex-wrap gap-4 text-sm text-j-mint">
        <a className="underline decoration-transparent transition hover:decoration-current" href="https://caligymnic.sport.blog/" target="_blank" rel="noreferrer">
          CaliGymnic Blog
        </a>
        <a className="underline decoration-transparent transition hover:decoration-current" href="https://github.com/aminedev24" target="_blank" rel="noreferrer">
          GitHub Portfolio
        </a>
      </div>
    </div>
    <div className="flex flex-wrap gap-4 text-sm text-slate-200/70">
      <span>HQ: Global • Operating remote-first</span>
      <span>Response time: 2 business days</span>
    </div>
  </section>
);

export default ContactCTA;
