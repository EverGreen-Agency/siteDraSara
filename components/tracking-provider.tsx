"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {useEffect, useState} from "react";

type TrackingIds = {ga4: string | null; gtm: string | null; googleAds: string | null};
type AnalyticsPayload = Record<string, string | undefined>;
type Consent = "accepted" | "rejected" | null;
type AnalyticsWindow = typeof window & {dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void};

const storageKey = "dra-sara-analytics-consent";

function dataLayer() {
  const target = window as AnalyticsWindow;
  target.dataLayer ??= [];
  return target.dataLayer;
}

function sendEvent(event: string, payload: AnalyticsPayload, throughGtm: boolean) {
  const enriched = {page_path: window.location.pathname, ...payload};
  if (throughGtm) dataLayer().push({event, ...enriched});
  else (window as AnalyticsWindow).gtag?.("event", event, enriched);
}

function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

export function TrackingProvider({ids}: {ids: TrackingIds}) {
  const pathname = usePathname();
  const enabled = Boolean(ids.ga4 || ids.gtm || ids.googleAds);
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    if (!enabled) return;
    const stored = window.localStorage.getItem(storageKey);
    if (stored === "accepted" || stored === "rejected") {
      const timer = window.setTimeout(() => setConsent(stored), 0);
      return () => window.clearTimeout(timer);
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled || consent !== "accepted") return;
    if (ids.gtm) {
      dataLayer().push({"gtm.start": Date.now(), event: "gtm.js"});
      loadScript("dra-sara-gtm", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(ids.gtm)}`);
      return;
    }
    const measurementId = ids.ga4 ?? ids.googleAds;
    if (!measurementId) return;
    const target = window as AnalyticsWindow;
    target.gtag ??= (...args: unknown[]) => { dataLayer().push(args); };
    target.gtag("consent", "update", {analytics_storage: "granted", ad_storage: ids.googleAds ? "granted" : "denied", ad_user_data: ids.googleAds ? "granted" : "denied", ad_personalization: "denied"});
    target.gtag("js", new Date());
    loadScript("dra-sara-gtag", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`);
    target.gtag("config", measurementId, {send_page_view: false});
    if (ids.googleAds && ids.googleAds !== measurementId) target.gtag("config", ids.googleAds);
  }, [consent, enabled, ids.ga4, ids.googleAds, ids.gtm]);

  useEffect(() => {
    if (consent !== "accepted") return;
    sendEvent("page_view", {page_title: document.title}, Boolean(ids.gtm));
    const marker = document.querySelector<HTMLElement>("[data-page-event]");
    if (marker?.dataset.pageEvent) sendEvent(marker.dataset.pageEvent, {treatment: marker.dataset.treatment, specialty: marker.dataset.specialty, content_type: marker.dataset.contentType}, Boolean(ids.gtm));
  }, [consent, ids.gtm, pathname]);

  useEffect(() => {
    if (consent !== "accepted") return;
    function handleClick(event: MouseEvent) {
      const element = (event.target as HTMLElement).closest<HTMLElement>("[data-track-event]");
      if (!element?.dataset.trackEvent) return;
      sendEvent(element.dataset.trackEvent, {cta_location: element.dataset.trackLocation, treatment: element.dataset.treatment}, Boolean(ids.gtm));
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [consent, ids.gtm]);

  if (!enabled || consent !== null) return null;
  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(storageKey, value);
    setConsent(value);
  };
  return <aside className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl border border-[var(--color-border)] bg-white p-5 shadow-[0_20px_70px_rgba(63,39,56,0.22)]" aria-label="Preferências de privacidade">
    <p className="font-title text-xl text-[var(--color-primary)]">Sua escolha de privacidade</p>
    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">Com sua autorização, usamos medição de audiência para melhorar o conteúdo. Recusar não altera o funcionamento do site. <Link href="/politica-de-cookies" className="font-semibold underline underline-offset-4">Saiba mais</Link>.</p>
    <div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={() => choose("accepted")} className="min-h-11 bg-[var(--color-primary)] px-5 text-sm font-semibold text-white">Aceitar medição</button><button type="button" onClick={() => choose("rejected")} className="min-h-11 border border-[var(--color-border)] px-5 text-sm font-semibold text-[var(--color-primary)]">Recusar</button></div>
  </aside>;
}
