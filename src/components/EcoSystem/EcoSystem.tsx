import { useEffect, useRef } from 'react';
import { Search, Zap, ArrowRightLeft } from 'lucide-react';
import './EcoSystem.css';

const phases = [
  {
    icon: Search,
    phase: 'ANTES',
    title: 'Descubra',
    description: 'Descubra pessoas e interesses antes do evento começar.',
    color: 'var(--turquesa)',
  },
  {
    icon: Zap,
    phase: 'DURANTE',
    title: 'Interaja',
    description: 'Interaja, participe e conecte-se em tempo real.',
    color: 'var(--roxo)',
  },
  {
    icon: ArrowRightLeft,
    phase: 'DEPOIS',
    title: 'Mantenha',
    description: 'Continue as conversas, mantenha as conexões e guarde suas histórias.',
    color: 'var(--laranja)',
  },
];

export default function EcoSystem() {
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
    <section className="ecosystem" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          O evento não para quando a{' '}
          <span className="eco-highlight">música para.</span>
        </h2>

        <p className="section-subtitle animate-on-scroll">
          O ConectaAi acompanha toda a sua experiência — antes, durante e
          depois do evento.
        </p>

        <div className="eco-timeline">
          {phases.map((item, index) => (
            <div
              className="eco-phase animate-on-scroll"
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className="eco-phase-icon"
                style={{ background: `${item.color}12`, color: item.color }}
              >
                <item.icon size={28} />
              </div>
              <span
                className="eco-phase-label"
                style={{ color: item.color }}
              >
                {item.phase}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {index < phases.length - 1 && (
                <div className="eco-connector">
                  <div className="eco-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
