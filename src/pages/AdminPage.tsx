import { useState } from 'react';
import { getWaitlist, downloadWaitlist, type WaitlistEntry } from '../utils/waitlist';
import { Lock, Download, Trash2, LogOut, Mail, Copy, Check } from 'lucide-react';
import './AdminPage.css';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'conectaai2026';

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [copied, setCopied] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setEntries(getWaitlist());
      setError('');
    } else {
      setError('Senha incorreta');
    }
  };

  const handleRefresh = () => {
    setEntries(getWaitlist());
  };

  const handleExport = () => {
    downloadWaitlist();
  };

  const handleCopyAll = () => {
    const emails = entries.map((e) => e.email).join('\n');
    navigator.clipboard.writeText(emails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    if (window.confirm('Tem certeza? Isso vai apagar todos os emails.')) {
      localStorage.removeItem('conectaai_waitlist');
      setEntries([]);
    }
  };

  if (!authenticated) {
    return (
      <div className="admin-page">
        <div className="admin-login">
          <div className="login-icon">
            <Lock size={28} />
          </div>
          <h1>Painel Admin</h1>
          <p>Digite a senha para acessar</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="login-input"
              autoFocus
            />
            {error && <span className="login-error">{error}</span>}
            <button type="submit" className="login-button">
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-dashboard">
        <header className="admin-header">
          <div>
            <h1>Waitlist ConectaAi</h1>
            <p className="admin-count">
              {entries.length} pessoa{entries.length !== 1 ? 's' : ''} na fila
            </p>
          </div>
          <div className="admin-actions">
            <button onClick={handleRefresh} className="btn-secondary" title="Atualizar">
              ↻
            </button>
            <button onClick={handleCopyAll} className="btn-secondary" title="Copiar emails">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'Copiado!' : 'Copiar'}
            </button>
            <button onClick={handleExport} className="btn-secondary" title="Exportar JSON">
              <Download size={16} />
              Exportar
            </button>
            <button onClick={handleClear} className="btn-danger" title="Limpar">
              <Trash2 size={16} />
            </button>
            <button onClick={() => setAuthenticated(false)} className="btn-secondary" title="Sair">
              <LogOut size={16} />
            </button>
          </div>
        </header>

        <div className="admin-table-wrapper">
          {entries.length === 0 ? (
            <div className="admin-empty">
              <Mail size={48} />
              <p>Nenhum email capturado ainda.</p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Data</th>
                  <th>Horário</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={entry.id}>
                    <td className="td-index">{index + 1}</td>
                    <td className="td-email">{entry.email}</td>
                    <td>
                      {new Date(entry.timestamp).toLocaleDateString('pt-BR')}
                    </td>
                    <td>
                      {new Date(entry.timestamp).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
