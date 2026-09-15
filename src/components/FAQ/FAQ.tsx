import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'O que e o ConectaAi?',
    answer:
      'O ConectaAi e uma rede social temporaria e contextual criada para cada evento. Ele permite que voce descubra pessoas, participe do feed, entre em grupos e crie conexoes reais durante experiencias presenciais.',
  },
  {
    question: 'Preciso estar em um evento para usar?',
    answer:
      'O ideal e usar durante um evento, mas voce pode explorar eventos que estao por vir, descobrir quem vai participar e comecar a se conectar antes mesmo do evento comecar.',
  },
  {
    question: 'Como encontro outras pessoas?',
    answer:
      'Atraves do feed, da aba de pessoas e dos grupos. O ConectaAi mostra participantes com interesses em comum e facilita o primeiro passo para uma conexao.',
  },
  {
    question: 'Posso conversar com outras pessoas?',
    answer:
      'Sim! Depois de criar uma conexao, voce pode continuar a conversa pelo chat do aplicativo.',
  },
  {
    question: 'O ConectaAi funciona em qualquer evento?',
    answer:
      'O ConectaAi funciona em festivais, shows, meetups, hackathons, eventos universitarios, eventos de tecnologia e qualquer experiencia presencial onde existam participantes.',
  },
  {
    question:
      'Como organizadores podem levar o ConectaAi para seus eventos?',
    answer:
      'Organizadores podem entrar em contato conosco atraves da secao "Para eventos" e descobrir como o ConectaAi pode melhorar a experiencia dos participantes no seu evento.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section className="faq-section" id="faq" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          Perguntas <span className="faq-highlight">frequentes</span>
        </h2>

        <p className="section-subtitle animate-on-scroll">
          Tudo que voce precisa saber antes de experimentar o ConectaAi.
        </p>

        <div className="faq-list animate-on-scroll">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`faq-chevron ${
                    openIndex === index ? 'rotated' : ''
                  }`}
                />
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === index ? '200px' : '0',
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
