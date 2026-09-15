import { useEffect, useRef } from 'react';
import { MapPin, Users, Zap, Music } from 'lucide-react';
import './EventExperience.css';

export default function EventExperience() {
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
    <section className="event-experience" id="eventos" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Uma experiencia{' '}
          <span className="ee-highlight">real</span>
        </h2>

        <p className="section-subtitle animate-on-scroll">
          Veja como seria participar de um evento com o ConectaAi.
        </p>

        <div className="event-demo animate-on-scroll">
          <div className="event-demo-header">
            <div className="event-demo-badge">
              <span className="live-dot"></span>
              AO VIVO
            </div>
            <h3>Festival Conecta</h3>
            <p>
              <MapPin size={14} />
              Sao Paulo, SP
            </p>
          </div>

          <div className="event-demo-stats">
            <div className="demo-stat">
              <Users size={18} />
              <span>
                <strong>2.847</strong> participantes
              </span>
            </div>
            <div className="demo-stat">
              <Zap size={18} />
              <span>
                <strong>412</strong> conexoes hoje
              </span>
            </div>
            <div className="demo-stat">
              <Music size={18} />
              <span>
                <strong>8</strong> palcos
              </span>
            </div>
          </div>

          <div className="event-demo-content">
            <div className="demo-feed">
              <h4>Feed do evento</h4>
              <div className="demo-post">
                <div className="demo-post-avatar"></div>
                <div className="demo-post-body">
                  <div className="demo-post-meta">
                    <strong>Mariana</strong>
                    <span>2min</span>
                  </div>
                  <p>
                    O set do DJ Lucas esta INSANO! Alguem do set 3 tambem?
                  </p>
                  <div className="demo-post-reactions">
                    <span className="reaction">12</span>
                    <span className="reaction">5 comentarios</span>
                  </div>
                </div>
              </div>
              <div className="demo-post">
                <div className="demo-post-avatar av-2"></div>
                <div className="demo-post-body">
                  <div className="demo-post-meta">
                    <strong>Thiago</strong>
                    <span>5min</span>
                  </div>
                  <p>
                    Galera do Standby! Bora pro proximo set juntos?
                  </p>
                  <div className="demo-post-reactions">
                    <span className="reaction">8</span>
                    <span className="reaction">3 comentarios</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="demo-sidebar">
              <div className="demo-people">
                <h4>Pessoas proximas</h4>
                <div className="demo-person">
                  <div className="demo-person-avatar"></div>
                  <div>
                    <strong>Julia</strong>
                    <span className="match-count">5 interesses em comum</span>
                  </div>
                  <button className="connect-btn">Conectar</button>
                </div>
                <div className="demo-person">
                  <div className="demo-person-avatar av-2"></div>
                  <div>
                    <strong>Rafael</strong>
                    <span className="match-count">3 interesses em comum</span>
                  </div>
                  <button className="connect-btn">Conectar</button>
                </div>
                <div className="demo-person">
                  <div className="demo-person-avatar av-3"></div>
                  <div>
                    <strong>Camila</strong>
                    <span className="match-count">4 interesses em comum</span>
                  </div>
                  <button className="connect-btn">Conectar</button>
                </div>
              </div>

              <div className="demo-groups">
                <h4>Grupos ativos</h4>
                <div className="demo-group">
                  <div className="group-icon">G</div>
                  <div>
                    <strong>Galera do Festival</strong>
                    <span>47 online</span>
                  </div>
                </div>
                <div className="demo-group">
                  <div className="group-icon gi-2">E</div>
                  <div>
                    <strong>Fans de Eletronica</strong>
                    <span>23 online</span>
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
