import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#" className="navbar-logo">
          <img src="/src/assets/logo.png" alt="ConectaAi Logo" className="navbar-logo-image" />
          <span className="logo-conecta">Conecta</span>
          <span className="logo-ai">Ai</span>
        </a>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#como-funciona" onClick={() => setIsOpen(false)}>Como funciona</a>
          <a href="#funcionalidades" onClick={() => setIsOpen(false)}>Funcionalidades</a>
          <a href="#organizadores" onClick={() => setIsOpen(false)}>Para eventos</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="#waitlist" className="navbar-cta" onClick={() => setIsOpen(false)}>
            Entrar na lista
          </a>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
