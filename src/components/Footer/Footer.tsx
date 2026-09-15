import { Globe, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="logo-conecta">Conecta</span>
              <span className="logo-ai">Ai</span>
            </a>
            <p className="footer-slogan">
              Mais que conectados, somos ConectaAi.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Instagram">
                <Globe size={18} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Produto</h4>
              <a href="#">Início</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="#funcionalidades">Funcionalidades</a>
              <a href="#eventos">Eventos</a>
            </div>

            <div className="footer-column">
              <h4>Para eventos</h4>
              <a href="#organizadores">Organizadores</a>
              <a href="#waitlist">Lista de espera</a>
              <a href="#">Contato</a>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Termos de uso</a>
              <a href="#">Política de privacidade</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 ConectaAi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
