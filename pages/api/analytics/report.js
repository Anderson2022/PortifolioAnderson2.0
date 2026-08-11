import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../../../libs/firebase';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Método não permitido' });
  if (!process.env.ANALYTICS_DASHBOARD_KEY || req.query.key !== process.env.ANALYTICS_DASHBOARD_KEY) return res.status(404).end();

  try {
    const snapshot = await getDocs(query(collection(db, 'analytics_sessions'), orderBy('startedAt', 'desc'), limit(1000)));
    const sessions = snapshot.docs.map((entry) => {
      const data = entry.data();
      return { id: entry.id, ...data, startedAt: data.startedAt?.toDate?.().toISOString() || null, lastSeenAt: data.lastSeenAt?.toDate?.().toISOString() || null };
    });
    res.status(200).json({ sessions });
  } catch (error) {
    console.error('Analytics report error:', error);
    res.status(500).json({ message: 'Não foi possível carregar o relatório' });
  }
}
