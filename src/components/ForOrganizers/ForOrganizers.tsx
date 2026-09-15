import { useEffect, useRef } from 'react';
import { TrendingUp, Users, BarChart3, Heart, ArrowRight } from 'lucide-react';
import './ForOrganizers.css';

const benefits = [
  {
    icon: Users,
    title: 'Maior interacao',
    description: 'Participantes interagem mais entre si durante todo o evento.',
  },
  {
    icon: Heart,
    title: 'Comunidade ativa',
    description: 'Crie uma comunidade antes, durante e depois do evento.',
  },
  {
    icon: TrendingUp,
    title: 'Mais engajamento',
    description: 'Publicacoes, comentarios e interacoes aumentam a retencao.',
  },
  {
    icon: BarChart3,
    title: 'Dados valiosos',
    description: 'Entenda os interesses e comportamentos da sua audiencia.',
  },
];

export default function ForOrganizers() {
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
    <section className="for-organizers" id="organizadores" ref={sectionRef}>
      <div className="container">
        <div className="organizers-layout">
          <div className="organizers-text animate-on-scroll">
            <span className="organizers-label">Para organizadores</span>
            <h2 className="organizers-title">
              E para quem organiza o{' '}
              <span className="org-highlight">evento?</span>
            </h2>
            <p className="organizers-subtitle">
              O ConectaAi nao so melhora a experiencia dos participantes —
              tambem traz beneficios reais para quem produz o evento.
            </p>
          </div>

          <div className="organizers-benefits">
            {benefits.map((benefit, index) => (
              <div
                className="benefit-card animate-on-scroll"
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon">
                  <benefit.icon size={22} />
                </div>
                <div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="organizers-cta animate-on-scroll">
            <a href="#waitlist" className="org-cta-button">
              <span>Quero levar o ConectaAi para meu evento</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
