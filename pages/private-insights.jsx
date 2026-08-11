import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { Activity, Clock3, Eye, MapPin, Users } from 'lucide-react';

const rank = (values) => Object.entries(values.reduce((acc, value) => {
  const key = value || 'Desconhecido';
  acc[key] = (acc[key] || 0) + 1;
  return acc;
}, {})).sort((a, b) => b[1] - a[1]);

export default function PrivateInsights({ dashboardKey }) {
  const [mounted, setMounted] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setMounted(true);
    fetch(`/api/analytics/report?key=${encodeURIComponent(dashboardKey)}`)
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data) => setSessions(data.sessions || []))
      .catch(() => setError('Não foi possível carregar os dados. Verifique o Firebase e a chave do painel.'));
  }, [dashboardKey]);

  const report = useMemo(() => {
    const visitors = new Set(sessions.map((item) => item.visitorId)).size;
    const pageViews = sessions.reduce((total, item) => total + Number(item.pageViews || 0), 0);
    const average = sessions.length ? Math.round(sessions.reduce((total, item) => total + Number(item.durationSec || 0), 0) / sessions.length) : 0;
    const hours = sessions.map((item) => item.startedAt ? String(new Date(item.startedAt).getHours()).padStart(2, '0') + ':00' : null).filter(Boolean);
    return {
      visitors, pageViews, average,
      peak: rank(hours)[0]?.[0] || '—',
      countries: rank(sessions.map((item) => item.country)).slice(0, 8),
      sources: rank(sessions.map((item) => item.source)).slice(0, 8),
      pages: rank(sessions.flatMap((item) => item.pages || [])).slice(0, 10),
    };
  }, [sessions]);

  const cards = [
    { label: 'Visitantes únicos', value: report.visitors, icon: Users },
    { label: 'Sessões', value: sessions.length, icon: Activity },
    { label: 'Visualizações', value: report.pageViews, icon: Eye },
    { label: 'Duração média', value: `${report.average}s`, icon: Clock3 },
    { label: 'Horário de pico', value: report.peak, icon: MapPin },
  ];

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base font-body text-ink">
        <Head><title>Insights privados | Anderson</title><meta name="robots" content="noindex,nofollow,noarchive" /></Head>
        <div className="neu p-8 text-center">
          <span className="pulse-soft mx-auto block h-3 w-3 rounded-full bg-teal" />
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[.24em] text-faint">Carregando insights</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base px-5 py-10 font-body text-ink md:px-10">
      <Head><title>Insights privados | Anderson</title><meta name="robots" content="noindex,nofollow,noarchive" /></Head>
      <main className="mx-auto max-w-6xl">
        <p className="font-mono text-[10px] uppercase tracking-[.28em] text-faint">private // analytics</p>
        <h1 className="mt-2 font-display text-4xl font-bold">Visão geral do portfólio.</h1>
        <p className="mt-2 text-muted">Dados anônimos das últimas 1.000 sessões registradas.</p>
        {error && <div className="neu mt-8 p-5 text-coral">{error}</div>}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map(({ label, value, icon: Icon }) => <div key={label} className="neu p-5"><Icon size={18} className="text-plum" /><p className="mt-5 font-mono text-[9px] uppercase tracking-wider text-faint">{label}</p><strong className="mt-1 block font-display text-3xl">{value}</strong></div>)}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {[['Páginas mais acessadas', report.pages], ['Origem dos acessos', report.sources], ['Países', report.countries]].map(([title, rows]) => (
            <section key={title} className="neu p-6"><h2 className="font-display text-lg font-bold">{title}</h2><div className="mt-5 space-y-3">{rows.length ? rows.map(([name, count]) => <div key={name} className="flex items-center justify-between gap-4 border-b border-deepest pb-2 font-mono text-xs"><span className="truncate text-muted">{name}</span><strong>{count}</strong></div>) : <p className="text-sm text-faint">Ainda não há dados.</p>}</div></section>
          ))}
        </div>
        <section className="neu mt-6 overflow-x-auto p-6"><h2 className="font-display text-lg font-bold">Acessos recentes</h2><table className="mt-5 w-full min-w-[720px] text-left font-mono text-xs"><thead className="text-faint"><tr><th className="pb-3">Data</th><th>Página</th><th>Local</th><th>Origem</th><th>Duração</th></tr></thead><tbody>{sessions.slice(0, 30).map((item) => <tr key={item.id} className="border-t border-deepest text-muted"><td className="py-3">{item.startedAt ? new Date(item.startedAt).toLocaleString('pt-BR') : '—'}</td><td>{item.lastPage}</td><td>{item.city} / {item.country}</td><td>{item.source}</td><td>{item.durationSec || 0}s</td></tr>)}</tbody></table></section>
      </main>
    </div>
  );
}

export function getServerSideProps({ query }) {
  const key = process.env.ANALYTICS_DASHBOARD_KEY;
  if (!key || query.key !== key) return { notFound: true };
  return { props: { dashboardKey: key } };
}
