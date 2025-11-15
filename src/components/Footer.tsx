const Footer = () => (
  <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-slate-950 px-6 py-6 text-sm text-slate-200/70">
    <div className="flex flex-wrap gap-4 text-j-mint">
      <a className="font-semibold hover:underline" href="https://artisbay.com/" target="_blank" rel="noreferrer">
        Artisbay Inc.
      </a>
      <a className="font-semibold hover:underline" href="https://aurora-lumen.com/" target="_blank" rel="noreferrer">
        Aurora Lumen
      </a>
    </div>
    <span>© {new Date().getFullYear()} J-Corp. All rights reserved.</span>
  </footer>
);

export default Footer;
