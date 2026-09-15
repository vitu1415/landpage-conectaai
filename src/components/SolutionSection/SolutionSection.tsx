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
          Conheça o <span className="solution-highlight">ConectaAi.</span>
        </h2>

        <p className="section-subtitle animate-on-scroll">
          Uma experiência social criada para cada evento, onde você pode
          descobrir o que está acontecendo, encontrar pessoas, interagir e
          criar novas conexões.
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
            <h4>Conexões reais</h4>
            <p>Relacionamentos que valem</p>
          </div>
        </div>
      </div>
    </section>
  );
}
