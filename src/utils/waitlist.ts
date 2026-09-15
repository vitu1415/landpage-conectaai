const STORAGE_KEY = 'conectaai_waitlist';

export interface WaitlistEntry {
  id: string;
  email: string;
  timestamp: string;
  source: string;
}

export function saveEmail(email: string, source = 'landing-page'): WaitlistEntry | null {
  const existing = getWaitlist();
  const alreadyExists = existing.find(
    (entry) => entry.email.toLowerCase() === email.toLowerCase()
  );

  if (alreadyExists) {
    return null;
  }

  const entry: WaitlistEntry = {
    id: crypto.randomUUID(),
    email: email.toLowerCase().trim(),
    timestamp: new Date().toISOString(),
    source,
  };

  existing.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));

  sendToWebhook(entry);

  return entry;
}

export function getWaitlist(): WaitlistEntry[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function exportWaitlist(): string {
  const entries = getWaitlist();
  return JSON.stringify(entries, null, 2);
}

export function downloadWaitlist(): void {
  const data = exportWaitlist();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `conectaai-waitlist-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function getWaitlistCount(): number {
  return getWaitlist().length;
}

// Envia para webhook (facil de conectar com Zapier, n8n, Make, etc.)
async function sendToWebhook(entry: WaitlistEntry): Promise<void> {
  const WEBHOOK_URL = import.meta.env.VITE_WAITLIST_WEBHOOK_URL;

  if (!WEBHOOK_URL) {
    return;
  }

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
  } catch (error) {
    console.error('Erro ao enviar para webhook:', error);
  }
}
