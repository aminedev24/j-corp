const ContactCTA = () => (
  <section
    id="contact"
    className="space-y-6 bg-gradient-to-br from-j-sky/10 via-slate-900 to-slate-950 px-6 py-12 sm:px-10 lg:py-16"
  >
    <div className="space-y-5">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-j-mint/80">Partner hotline</p>
      <h2 className="bg-gradient-to-r from-white via-j-mint to-white bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl lg:text-5xl">
        Let’s shape the next venture together.
      </h2>
      <p className="max-w-3xl text-base text-slate-200/80 sm:text-lg">
        Investors, partners, and talent are all welcome. Share your vision and we will tailor a roadmap across IT,
        sports, food, or critical services. You will hear from a partner lead within 48 hours.
      </p>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-sm text-slate-200/80 sm:text-base">
        <p className="uppercase tracking-[0.35em] text-j-mint/70">What to include</p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-j-mint" aria-hidden="true" />
            <span>Problem statement or opportunity window</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-j-mint" aria-hidden="true" />
            <span>Desired timeline + team availability</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-j-mint" aria-hidden="true" />
            <span>Relevant assets or repos (optional)</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-4">
        <a className="btn btn-primary w-full text-base sm:w-auto" href="mailto:hello@j-corp.co">
          Email hello@j-corp.co
        </a>
        <a className="btn btn-secondary w-full text-base sm:w-auto" href="https://caligymnic.sport.blog/" target="_blank" rel="noreferrer">
          CaliGymnic Blog
        </a>
        <a className="btn btn-ghost w-full text-base sm:w-auto" href="https://github.com/aminedev24" target="_blank" rel="noreferrer">
          GitHub Portfolio
        </a>
      </div>
    </div>
    <div className="flex flex-wrap gap-4 text-sm text-slate-200/70 sm:text-base">
      <span>HQ: Global • Operating remote-first</span>
      <span>Response time: 2 business days</span>
      <span>Secure briefings available via NDA</span>
    </div>
  </section>
);

export default ContactCTA;
