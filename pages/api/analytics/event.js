import { arrayUnion, doc, increment, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../../libs/firebase';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Método não permitido' });

  const { action, sessionId, visitorId, page, referrer, startedAt } = req.body || {};
  if (!sessionId || !visitorId || !page) return res.status(400).json({ message: 'Evento inválido' });

  const now = Date.now();
  const durationSec = Math.max(0, Math.round((now - Number(startedAt || now)) / 1000));
  const country = req.headers['x-vercel-ip-country'] || req.headers['cf-ipcountry'] || 'Desconhecido';
  const cityHeader = req.headers['x-vercel-ip-city'];
  const city = cityHeader ? decodeURIComponent(cityHeader) : 'Desconhecida';
  let source = 'Direto';
  try { source = referrer ? new URL(referrer).hostname : 'Direto'; } catch {}

  const base = {
    visitorId: String(visitorId).slice(0, 80),
    sessionId: String(sessionId).slice(0, 80),
    country: String(country).slice(0, 80),
    city: String(city).slice(0, 120),
    source: String(source).slice(0, 160),
    lastPage: String(page).slice(0, 240),
    lastSeenAt: serverTimestamp(),
    durationSec,
  };

  const extra = action === 'start'
    ? { startedAt: serverTimestamp(), pages: arrayUnion(page), pageViews: increment(1) }
    : action === 'pageview'
      ? { pages: arrayUnion(page), pageViews: increment(1) }
      : {};

  try {
    await setDoc(doc(db, 'analytics_sessions', sessionId), { ...base, ...extra }, { merge: true });
    return res.status(204).end();
  } catch (error) {
    console.error('Analytics event error:', error);
    return res.status(500).json({ message: 'Não foi possível registrar o evento' });
  }
}
