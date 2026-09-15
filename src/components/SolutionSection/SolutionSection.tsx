import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import './SolutionSection.css';

export default function SolutionSection() {
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
    <section className="solution-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Conheca o <span className="solution-highlight">ConectaAi.</span>
        </h2>

        <p className="section-subtitle animate-on-scroll">
          Uma experiencia social criada para cada evento, onde voce pode
          descobrir o que esta acontecendo, encontrar pessoas, interagir e
          criar novas conexoes.
        </p>

        <div className="solution-flow animate-on-scroll">
          <div className="flow-step">
            <div className="flow-icon">
              <span>01</span>
            </div>
            <h4>Evento</h4>
            <p>Festival, show, meetup, hackathon</p>
          </div>

          <div className="flow-arrow">
            <ArrowDown size={20} />
          </div>

          <div className="flow-step">
            <div className="flow-icon">
              <span>02</span>
            </div>
            <h4>Pessoas + Feed + Grupos</h4>
            <p>Descubra, interaja, conecte-se</p>
          </div>

          <div className="flow-arrow">
            <ArrowDown size={20} />
          </div>

          <div className="flow-step">
            <div className="flow-icon">
              <span>03</span>
            </div>
            <h4>Conexoes reais</h4>
            <p>Relacionamentos que valem</p>
          </div>
        </div>

        <div className="solution-mockup animate-on-scroll">
          <div className="mockup-container">
            <div className="mockup-screen">
              <div className="mockup-sidebar">
                <div className="mockup-nav-item active">
                  <div className="nav-dot"></div>
                  Feed
                </div>
                <div className="mockup-nav-item">
                  <div className="nav-dot"></div>
                  Pessoas
                </div>
                <div className="mockup-nav-item">
                  <div className="nav-dot"></div>
                  Grupos
                </div>
                <div className="mockup-nav-item">
                  <div className="nav-dot"></div>
                  Chat
                </div>
              </div>
              <div className="mockup-main">
                <div className="mockup-post">
                  <div className="mockup-post-header">
                    <div className="mockup-avatar"></div>
                    <div>
                      <strong>Ana Silva</strong>
                      <span>21:45</span>
                    </div>
                  </div>
                  <p>
                    Acabou de tocar a melhor musica da noite! Alguem veio
                    no set do DJ Lucas tambem?
                  </p>
                  <div className="mockup-post-tags">
                    <span className="tag">eletronica</span>
                    <span className="tag">festival</span>
                  </div>
                </div>
                <div className="mockup-post">
                  <div className="mockup-post-header">
                    <div className="mockup-avatar avatar-2"></div>
                    <div>
                      <strong>Pedro Costa</strong>
                      <span>21:30</span>
                    </div>
                  </div>
                  <p>
                    Conheci a galera do standby aqui! Bora pro proximo set?
                  </p>
                  <div className="mockup-post-tags">
                    <span className="tag">meetup</span>
                    <span className="tag">amizade</span>
                  </div>
                </div>
              </div>
              <div className="mockup-people-panel">
                <h5>Pessoas proximas</h5>
                <div className="mockup-person">
                  <div className="person-avatar"></div>
                  <div>
                    <strong>Julia</strong>
                    <span>3 interesses em comum</span>
                  </div>
                </div>
                <div className="mockup-person">
                  <div className="person-avatar avatar-2"></div>
                  <div>
                    <strong>Rafael</strong>
                    <span>5 interesses em comum</span>
                  </div>
                </div>
                <div className="mockup-person">
                  <div className="person-avatar avatar-3"></div>
                  <div>
                    <strong>Camila</strong>
                    <span>2 interesses em comum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
