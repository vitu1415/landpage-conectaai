import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { saveEmail, getWaitlistCount } from '../../utils/waitlist';
import './CTA.css';

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(getWaitlistCount());

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) return;

    const result = saveEmail(email);

    if (result === null) {
      setError('Esse e-mail já está na lista!');
      return;
    }

    setSubmitted(true);
    setCount(getWaitlistCount());
  };

  return (
    <section className="cta-section" id="waitlist" ref={sectionRef}>
      <div className="cta-bg">
        <div className="cta-orb cta-orb-1"></div>
        <div className="cta-orb cta-orb-2"></div>
      </div>

      <div className="container">
        <div className="cta-content animate-on-scroll">
          <h2 className="cta-title">
            Seu próximo evento{' '}
            <span className="cta-highlight">pode ser diferente.</span>
          </h2>

          <p className="cta-subtitle">
            Entre para a lista e seja uma das primeiras pessoas a experimentar
            o ConectaAi.
          </p>

          {!submitted ? (
            <form className="cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                required
                className={`cta-input ${error ? 'input-error' : ''}`}
              />
              <button type="submit" className="cta-button">
                <span>Quero fazer parte</span>
                <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            <div className="cta-success">
              <div className="success-icon">
                <Check size={24} />
              </div>
              <h3>Você está na lista!</h3>
              <p>
                Entraremos em contato assim que o ConectaAi estiver disponível.
              </p>
            </div>
          )}

          {error && (
            <div className="cta-error">
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}

          <p className="cta-note">
            {count > 0
              ? `${count} pessoa${count > 1 ? 's' : ''} já na fila. `
              : ''}
            Vamos enviar apenas novidades sobre o lançamento do ConectaAi.
          </p>
        </div>
      </div>
    </section>
  );
}
