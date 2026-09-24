import { createElement } from "react";
import { FaCoffee, FaFacebook, FaGithub, FaGlobe, FaHeart, FaLinkedin, FaPatreon, FaYoutube } from "react-icons/fa";
import RockPaperScissor from "./rockPaperScissor/RockPaperScissor";
import "./index.css";

const links = [
  { label: "Portfolio", href: "https://www.ashishranjan.net/", icon: FaGlobe },
  { label: "GitHub", href: "https://github.com/a2rp", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aashishranjan", icon: FaLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/theash.ashish/", icon: FaFacebook },
  { label: "YouTube", href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", icon: FaYoutube },
  { label: "Support", href: "https://a2rp-donation-page.netlify.app/", icon: FaHeart },
  { label: "Buy Me a Coffee", href: "https://buymeacoffee.com/a2rp", icon: FaCoffee },
  { label: "Patreon", href: "https://www.patreon.com/a2rp", icon: FaPatreon },
];

const App = () => (
  <div className="game-app">
    <header className="game-header">
      <a className="game-brand" href="#top" aria-label="Rock Paper Scissor home">
        <img src="/logo.png" alt="Ashish Ranjan logo" />
        <span><small>FRONTEND GAME</small><strong>Rock Paper Scissor</strong></span>
      </a>
      <a className="header-link" href="#game">Play now <span aria-hidden="true">↘</span></a>
    </header>

    <main id="top" className="game-main">
      <RockPaperScissor />
    </main>

    <footer className="game-footer">
      <div className="footer-inner">
        <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
        <div className="footer-links">
          {links.map(({ label, href, icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>{createElement(icon)}</a>)}
        </div>
      </div>
    </footer>
  </div>
);

export default App;
