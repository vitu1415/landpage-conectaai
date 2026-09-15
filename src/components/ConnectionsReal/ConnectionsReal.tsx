import { useEffect, useRef } from 'react';
import './ConnectionsReal.css';

export default function ConnectionsReal() {
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
    <section className="connections-real" ref={sectionRef}>
      <div className="container">
        <div className="cr-content animate-on-scroll">
          <h2 className="cr-title">
            Porque algumas das melhores historias comecam com um simples{' '}
            <span className="cr-highlight">"oi".</span>
          </h2>
          <p className="cr-subtitle">
            O digital encontra o presencial para tornar as conexoes mais
            naturais.
          </p>

          <div className="cr-cards">
            <div className="cr-card">
              <div className="cr-card-avatars">
                <div className="cr-avatar cr-av-1"></div>
                <div className="cr-avatar cr-av-2"></div>
              </div>
              <p>"Nao imaginava que encontraria tanta gente legal aqui."</p>
            </div>
            <div className="cr-card">
              <div className="cr-card-avatars">
                <div className="cr-avatar cr-av-3"></div>
                <div className="cr-avatar cr-av-4"></div>
              </div>
              <p>"Foi tao facil puxar assunto quando descobrimos os interesses."</p>
            </div>
            <div className="cr-card">
              <div className="cr-card-avatars">
                <div className="cr-avatar cr-av-5"></div>
                <div className="cr-avatar cr-av-6"></div>
              </div>
              <p>"A gente se conectou no festival e agora marca de se ver toda semana."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
