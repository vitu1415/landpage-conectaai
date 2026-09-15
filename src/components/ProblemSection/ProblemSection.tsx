import { useEffect, useRef } from 'react';
import { UserX, Users, Smartphone, MessageSquare } from 'lucide-react';
import './ProblemSection.css';

export default function ProblemSection() {
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
    <section className="problem-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Você já foi a um evento querendo conhecer gente nova...
          <br />
          <span className="problem-highlight">
            mas acabou só com quem já conhecia?
          </span>
        </h2>

        <p className="section-subtitle animate-on-scroll">
          Eventos reúnem milhares de pessoas. Mas encontrar quem realmente combina
          com você nem sempre acontece.
        </p>

        <div className="problem-cards">
          <div className="problem-card animate-on-scroll">
            <div className="problem-icon">
              <Smartphone size={28} />
            </div>
            <h3>Grupos fechados</h3>
            <p>
              Você vai com amigos e acaba não conhecendo ninguém novo durante
              o evento inteiro.
            </p>
          </div>

          <div className="problem-card animate-on-scroll">
            <div className="problem-icon">
              <UserX size={28} />
            </div>
            <h3>Dificuldade para puxar assunto</h3>
            <p>
              Tem pessoas interessantes por perto, mas não sabe como iniciar
              uma conversa.
            </p>
          </div>

          <div className="problem-card animate-on-scroll">
            <div className="problem-icon">
              <Users size={28} />
            </div>
            <h3>Interesses em comum</h3>
            <p>
              Tem gente que curte as mesmas coisas que você, mas vocês nunca
              se encontram.
            </p>
          </div>

          <div className="problem-card animate-on-scroll">
            <div className="problem-icon">
              <MessageSquare size={28} />
            </div>
            <h3>Conexões que não continuam</h3>
            <p>
              Você troca um oi e nunca mais vê a pessoa. O evento termina e
              a conexão também.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
