import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const VISITOR_KEY = 'portfolio_anonymous_visitor';
const SESSION_KEY = 'portfolio_session';

const makeId = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;

export default function AnalyticsTracker() {
  const router = useRouter();
  const sessionRef = useRef(null);

  useEffect(() => {
    if (router.pathname === '/private-insights') return undefined;
    const visitorId = localStorage.getItem(VISITOR_KEY) || makeId();
    const sessionId = sessionStorage.getItem(SESSION_KEY) || makeId();
    localStorage.setItem(VISITOR_KEY, visitorId);
    sessionStorage.setItem(SESSION_KEY, sessionId);
    sessionRef.current = { visitorId, sessionId, startedAt: Date.now() };

    const send = (action, page = window.location.pathname) => {
      const payload = JSON.stringify({ action, page, referrer: document.referrer, ...sessionRef.current });
      if (action === 'end' && navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics/event', new Blob([payload], { type: 'application/json' }));
      } else {
        fetch('/api/analytics/event', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: payload, keepalive: true }).catch(() => {});
      }
    };

    send('start');
    const onRoute = (url) => send('pageview', url.split('?')[0]);
    const heartbeat = window.setInterval(() => send('heartbeat'), 30000);
    const finish = () => send('end');
    router.events.on('routeChangeComplete', onRoute);
    window.addEventListener('pagehide', finish);
    return () => {
      clearInterval(heartbeat);
      router.events.off('routeChangeComplete', onRoute);
      window.removeEventListener('pagehide', finish);
    };
  }, [router.events, router.pathname]);

  return null;
}
