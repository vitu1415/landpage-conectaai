import { useEffect, useRef } from 'react';
import { Rss, Users, Link2, MessageSquare, Calendar, Hash } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: Rss,
    title: 'Feed do evento',
    description:
      'Veja o que está acontecendo, compartilhe momentos, comentários e interações.',
    color: 'var(--turquesa)',
  },
  {
    icon: Users,
    title: 'Pessoas',
    description:
      'Descubra participantes e encontre pessoas com interesses em comum.',
    color: 'var(--roxo)',
  },
  {
    icon: Link2,
    title: 'Conexões',
    description:
      'Envie solicitações e construa novas conexões com quem combina com você.',
    color: 'var(--laranja)',
  },
  {
    icon: Users,
    title: 'Grupos',
    description:
      'Encontre pessoas que compartilham um objetivo ou interesse dentro do evento.',
    color: 'var(--turquesa)',
  },
  {
    icon: MessageSquare,
    title: 'Chat',
    description:
      'Continue a conversa depois de criar uma conexão.',
    color: 'var(--roxo)',
  },
  {
    icon: Calendar,
    title: 'Agenda',
    description:
      'Descubra atividades, atrações e momentos importantes do evento.',
    color: 'var(--laranja)',
  },
];

export default function Features() {
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
    <section className="features" id="funcionalidades" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Tudo que você precisa para{' '}
          <span className="features-highlight">viver o evento</span>
        </h2>

        <p className="section-subtitle animate-on-scroll">
          Funcionalidades pensadas para tornar sua experiência no evento mais
          social, divertida e conectada.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card animate-on-scroll"
              key={index}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className="feature-icon"
                style={{
                  background: `${feature.color}10`,
                  color: feature.color,
                }}
              >
                <feature.icon size={24} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}

          <div className="feature-card feature-highlight-card animate-on-scroll">
            <div className="feature-highlight-content">
              <Hash size={32} />
              <h3>Interesses</h3>
              <p>
                Marque seus interesses e deixe o ConectaAi te conectar com
                quem curte as mesmas coisas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
