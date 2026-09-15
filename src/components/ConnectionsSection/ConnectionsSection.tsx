import { useEffect, useRef } from 'react';
import './ConnectionsSection.css';

export default function ConnectionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="connections-section" ref={sectionRef}>
      <div className="container">
        <div className="connections-layout">
          <div className="connections-text animate-on-scroll">
            <h2 className="connections-title">
              Nao e so sobre quem esta no evento.
              <br />
              <span className="connections-highlight">
                E sobre quem voce encontra nele.
              </span>
            </h2>

            <p className="connections-subtitle">
              O ConectaAi conecta evento, pessoas, interesses e experiencias
              em uma unica camada social.
            </p>

            <div className="connections-pills">
              <span className="pill pill-turquesa">Evento</span>
              <span className="pill pill-roxo">Pessoas</span>
              <span className="pill pill-laranja">Interesses</span>
              <span className="pill pill-turquesa">Experiencias</span>
            </div>

            <div className="connections-equals">
              <span className="equals-arrow">=</span>
              <span className="equals-result">Conexao</span>
            </div>
          </div>

          <div className="connections-visual animate-on-scroll">
            <div className="connections-circle circle-1">
              <div className="circle-label">Evento</div>
            </div>
            <div className="connections-circle circle-2">
              <div className="circle-label">Pessoas</div>
            </div>
            <div className="connections-circle circle-3">
              <div className="circle-label">Interesses</div>
            </div>
            <div className="connections-center">
              <div className="center-content">
                <span className="center-icon">+</span>
                <span className="center-text">Conexao</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
