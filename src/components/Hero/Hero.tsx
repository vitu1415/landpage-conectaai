import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Users, MessageCircle, Zap } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
        <div className="hero-gradient-orb orb-3"></div>
      </div>

      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-badge animate-on-scroll">
            <Sparkles size={14} />
            <span>Lançamento em breve</span>
          </div>

          <h1 className="hero-title animate-on-scroll">
            O evento acontece ao vivo.<br />
            <span className="hero-highlight">A conexão também.</span>
          </h1>

          <p className="hero-subtitle animate-on-scroll">
            Descubra pessoas, compartilhe momentos e viva o evento de um jeito
            diferente com o ConectaAi.
          </p>

          <div className="hero-ctas animate-on-scroll">
            <a href="#waitlist" className="btn-primary">
              <span>Quero conhecer o ConectaAi</span>
              <ArrowRight size={18} />
            </a>
            <a href="#como-funciona" className="btn-secondary">
              Como funciona
            </a>
          </div>

          <div className="hero-stats animate-on-scroll">
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">pessoas na fila</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">10</span>
              <span className="stat-label">eventos confirmados</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-on-scroll">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-event-tag">
                    <span className="event-dot"></span>
                    Festival Conecta
                  </div>
                  <span className="phone-time">21:30</span>
                </div>

                <div className="phone-notification notif-1">
                  <div className="notif-avatar notif-avatar-1"></div>
                  <div className="notif-content">
                    <strong>Maria e mais 3 pessoas</strong> estão no mesmo evento
                  </div>
                </div>

                <div className="phone-notification notif-2">
                  <div className="notif-avatar notif-avatar-2"></div>
                  <div className="notif-content">
                    <strong>Novo match!</strong> Você e Lucas gostam de eletrônica
                  </div>
                </div>

                <div className="phone-notification notif-3">
                  <div className="notif-avatar notif-avatar-3"></div>
                  <div className="notif-content">
                    <strong>Feed do evento:</strong> 42 novos posts agora
                  </div>
                </div>

                <div className="phone-notification notif-4">
                  <div className="notif-avatar notif-avatar-4"></div>
                  <div className="notif-content">
                    <strong>Grupo:</strong> Galera do Festival está online
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="floating-card fc-1">
              <Users size={16} />
              <span>+127 conectados</span>
            </div>
            <div className="floating-card fc-2">
              <MessageCircle size={16} />
              <span>Nova mensagem</span>
            </div>
            <div className="floating-card fc-3">
              <Zap size={16} />
              <span>Interesse em comum</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
