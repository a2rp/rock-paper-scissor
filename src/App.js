import { createElement, useEffect, useState } from "react";
import {
  FaCodepen,
  FaCoffee,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaHeart,
  FaLinkedin,
  FaPatreon,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowUp, FiMenu, FiPlay, FiX } from "react-icons/fi";
import RockPaperScissor from "./rockPaperScissor/RockPaperScissor";
import "./index.css";

const links = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
  { label: "CodePen", href: "https://codepen.io/ash1198", icon: FaCodepen },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
  { label: "Email", href: "mailto:ash.ranjan09@gmail.com", icon: FaEnvelope },
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
  { label: "Patreon", href: "https://patreon.com/a2rp", icon: FaPatreon },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="game-app">
      <header className="game-header">
        <a className="game-brand" href="#top" aria-label="Rock Paper Scissor home">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Ashish Ranjan logo" />
          <span><small>FRONTEND GAME</small><strong>Rock Paper Scissor</strong></span>
        </a>

        <div className="game-header-actions">
          <a className="header-link" href="#game"><FiPlay /> Play now</a>
          <button
            className="game-menu-button"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="game-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav id="game-mobile-menu" className={"game-mobile-menu" + (menuOpen ? " is-open" : "")} aria-hidden={!menuOpen}>
          <a href="#game" onClick={() => setMenuOpen(false)}><FiPlay /> Play now</a>
          <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}><FaGlobe /> Portfolio</a>
          <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}><FaGithub /> GitHub</a>
        </nav>
      </header>

      <main id="top" className="game-main">
        <RockPaperScissor />
      </main>

      <footer className="game-footer">
        <div className="footer-inner">
          <span>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
          <div className="footer-links">
            {links.map(({ label, href, icon }) => (
              <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{createElement(icon)}</a>
            ))}
          </div>
        </div>
      </footer>

      <button className="game-top-button" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" title="Back to top">
        <FiArrowUp />
      </button>
    </div>
  );
};

export default App;
