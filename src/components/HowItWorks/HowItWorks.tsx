import { useEffect, useRef } from 'react';
import { LogIn, Compass, Link2, PartyPopper } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: LogIn,
    number: '01',
    title: 'Entre no evento',
    description: 'Escolha o evento que você está participando.',
    color: 'var(--turquesa)',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Descubra',
    description: 'Veja o feed, pessoas e grupos relacionados ao evento.',
    color: 'var(--roxo)',
  },
  {
    icon: Link2,
    number: '03',
    title: 'Conecte-se',
    description:
      'Encontre pessoas com interesses parecidos e envie uma solicitação de conexão.',
    color: 'var(--laranja)',
  },
  {
    icon: PartyPopper,
    number: '04',
    title: 'Viva o evento',
    description:
      'Converse, participe e transforme encontros presenciais em conexões reais.',
    color: 'var(--turquesa)',
  },
];

export default function HowItWorks() {
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
    <section className="how-it-works" id="como-funciona" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Como <span className="hiw-highlight">funciona</span>
        </h2>

        <p className="section-subtitle animate-on-scroll">
          Em quatro passos simples, você está pronto para viver o evento de
          um jeito completamente novo.
        </p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div
              className="step-card animate-on-scroll"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="step-number" style={{ color: step.color }}>
                {step.number}
              </div>
              <div className="step-icon" style={{ background: `${step.color}12`, color: step.color }}>
                <step.icon size={28} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
