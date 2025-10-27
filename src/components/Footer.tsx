const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      <a href="https://artisbay.com/" target="_blank" rel="noreferrer">
        Artisbay Inc.
      </a>
      <a href="https://aurora-lumen.com/" target="_blank" rel="noreferrer">
        Aurora Lumen
      </a>
    </div>
    <span className="footer__note">© {new Date().getFullYear()} J-Corp. All rights reserved.</span>
  </footer>
);

export default Footer;
