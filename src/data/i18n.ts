import type { Lang } from './types';

export type { Lang };

export const I18N = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      experience: 'Experiência',
      menu: 'Abrir menu',
      close: 'Fechar menu',
    },
    hi: 'Olá',
    iam: 'Sou Tharlei',
    roles: [
      'desenvolvedor backend',
      'desenvolvedor front-end',
      'tech lead',
      'desenvolvedor web',
      'desenvolvedor full stack',
    ],
    description:
      'Desenvolvedor de software apaixonado por criar aplicações web robustas e escaláveis.',
    techEyebrow: 'Stack',
    techTitle: 'Tecnologias com as quais trabalho',
    techSubtitle:
      'Mais de uma década construindo, escalando e mantendo sistemas em produção com este ecossistema.',
    rights: 'Todos os direitos reservados',
    switchLang: 'Switch to English',
    toggleTheme: 'Alternar tema',
    projects: {
      eyebrow: 'Trabalho selecionado',
      title: 'Projetos e experiências',
      subtitle:
        'Plataformas em produção, sistemas críticos e experiências em pontos de venda — uma amostra do que entreguei nos últimos anos.',
      visit: 'Visitar site',
      addPreview: 'Pré-visualização do site',
      employed: 'Experiência profissional',
      freelance: 'Freelance',
      stackLabel: 'Stack do projeto',
      adult: {
        title: 'Conteúdo adulto (+18)',
        body: 'Este projeto é uma plataforma com conteúdo adulto. Você precisa ter 18 anos ou mais para acessar. Deseja continuar?',
        confirm: 'Tenho 18+, continuar',
        cancel: 'Cancelar',
      },
    },
    experience: {
      eyebrow: 'Trajetória profissional',
      title: 'Quase uma década construindo software',
      subtitle:
        'Da bancada do estágio aos sistemas em produção com milhões de acessos diários. Um resumo da jornada até aqui.',
      present: 'o momento',
      fulltime: 'Tempo integral',
      internship: 'Estágio',
      remote: 'Remota',
      current: 'Atual',
      stackLabel: 'Principais tecnologias',
      yearsLabel: 'anos',
      monthsLabel: 'meses',
      educationTitle: 'Formação acadêmica',
      educationEyebrow: 'Educação formal',
      certsTitle: 'Licenças e certificados',
      certsEyebrow: 'Aprendizado contínuo',
      certsCount: (n: number) => `${n} certificados`,
      issuedAt: 'Emitido em',
      credentialId: 'Código',
      viewCredential: 'Exibir credencial',
      skillsLabel: 'Competências',
    },
    resume: {
      cta: 'Baixar CV',
      shortCta: 'CV',
      ariaLabel: 'Baixar currículo em português (compatível com ATS)',
      genTitle: 'Gerando currículo...',
      comingSoon:
        'A geração de CV será conectada em breve. Por enquanto, todos os dados já estão organizados nesta página.',
      ok: 'Entendi',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      menu: 'Open menu',
      close: 'Close menu',
    },
    hi: 'Hi',
    iam: "I'm Tharlei",
    roles: [
      'backend developer',
      'front-end developer',
      'tech lead',
      'web developer',
      'full stack developer',
    ],
    description:
      "I'm a software developer passionate about creating robust and scalable web applications.",
    techEyebrow: 'Stack',
    techTitle: 'Technologies I work with',
    techSubtitle:
      'Over a decade shipping, scaling, and maintaining production systems with this ecosystem.',
    rights: 'All rights reserved',
    switchLang: 'Mudar para Português',
    toggleTheme: 'Toggle theme',
    projects: {
      eyebrow: 'Selected work',
      title: 'Projects & experience',
      subtitle:
        'Production platforms, mission-critical systems, and in-branch experiences — a snapshot of what I shipped over the last few years.',
      visit: 'Visit site',
      addPreview: 'Site preview',
      employed: 'Full-time',
      freelance: 'Freelance',
      stackLabel: 'Project stack',
      adult: {
        title: 'Adult content (18+)',
        body: 'This project is an adult-content platform. You must be 18 or older to access it. Do you want to continue?',
        confirm: "I'm 18+, continue",
        cancel: 'Cancel',
      },
    },
    experience: {
      eyebrow: 'Career journey',
      title: 'Nearly a decade shipping software',
      subtitle:
        'From an internship bench to production systems serving millions of daily visits. A snapshot of the journey so far.',
      present: 'present',
      fulltime: 'Full-time',
      internship: 'Internship',
      remote: 'Remote',
      current: 'Current',
      stackLabel: 'Top stack',
      yearsLabel: 'yrs',
      monthsLabel: 'mos',
      educationTitle: 'Education',
      educationEyebrow: 'Formal training',
      certsTitle: 'Licenses & certifications',
      certsEyebrow: 'Continuous learning',
      certsCount: (n: number) => `${n} certificates`,
      issuedAt: 'Issued',
      credentialId: 'Credential ID',
      viewCredential: 'View credential',
      skillsLabel: 'Skills',
    },
    resume: {
      cta: 'Download résumé',
      shortCta: 'Résumé',
      ariaLabel: 'Download English résumé (ATS-friendly)',
      genTitle: 'Generating résumé...',
      comingSoon:
        'Résumé generation will be wired up soon. For now, every section on this page is already structured for export.',
      ok: 'Got it',
    },
  },
} satisfies Record<Lang, unknown>;

export type Dict = (typeof I18N)['pt'];
