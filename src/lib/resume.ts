/* ============================================================
   Résumé generator (stub)
   ============================================================
   Collects every section's data into a single structured payload.
   Today it stashes the payload on window and surfaces a notice;
   swap the body for a real ATS-friendly PDF builder later — the
   call site (ResumeButton) doesn't need to change.
============================================================ */
import type { Lang } from '../data/types';
import { I18N } from '../data/i18n';
import { TECH } from '../data/tech';
import { CAREER } from '../data/career';
import { EDUCATION } from '../data/education';
import { CERTS } from '../data/certs';
import { PROJECTS } from '../data/projects';
import { profile } from '../data/profile';

export function buildResumePayload(lang: Lang) {
  const prof = {
    name: profile.name,
    headline:
      lang === 'pt'
        ? 'Engenheiro de Software Sênior | Tech Lead | Laravel · Vue.js · React · AWS'
        : 'Senior Software Engineer | Tech Lead | Laravel · Vue.js · React · AWS',
    email: profile.email,
    website: profile.website,
    location: lang === 'pt' ? 'Brasil · Remoto' : 'Brazil · Remote',
    summary: I18N[lang].description,
  };

  return {
    lang,
    generatedAt: new Date().toISOString(),
    profile: prof,
    career: CAREER.map(c => ({
      company: c.company,
      tenure: c.tenure[lang],
      roles: c.roles.map(r => ({
        title: r.title[lang],
        period: r.period[lang],
        duration: r.duration[lang],
        type: r.type,
        remote: !!r.remote,
        location: r.location ? r.location[lang] : null,
        summary: r.summary[lang],
        techs: r.techs.map(k => TECH[k]?.name || k),
      })),
    })),
    education: EDUCATION.map(e => ({
      school: e.school,
      degree: e.degree[lang],
      period: e.period[lang],
      summary: e.summary[lang],
    })),
    certifications: CERTS.map(c => ({
      title: c.title[lang],
      issuer: c.issuer,
      date: c.date[lang],
      code: c.code || null,
      skills: c.skills || [],
    })),
    projects: PROJECTS.map(p => ({
      title: p.title,
      company: p.company,
      subtitle: p.subtitle[lang],
      summary: p.summary[lang],
      url: p.siteUrl,
      techs: p.techs.map(k => TECH[k]?.name || k),
    })),
  };
}

export function generateResume({ lang, onNotice }: { lang: Lang; onNotice?: () => void }) {
  const payload = buildResumePayload(lang);
  (window as unknown as { __RESUME_DATA__?: unknown }).__RESUME_DATA__ = payload;
  console.info('[résumé] payload ready', payload);
  onNotice?.();
}
