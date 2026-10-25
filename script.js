const translations = {
  en: {
    skip: 'Skip to content', eyebrow: 'ARGUS PROJECT · INFN', heroLine1: 'Knowledge', heroLine2: 'in motion.',
    heroLead: 'Complex systems need connected knowledge. ARGUS brings assets, documents, work and the people behind them into one clearer picture.',
    exploreProject: 'Explore the project', discoverHub: 'Discover Knowledge Hub', heroFoot: 'A project for knowledge that moves between people, teams and systems.', explore: 'EXPLORE',
    choosePath: 'CHOOSE YOUR PATH', gatewayTitle: 'From the vision to the work.', gatewayLead: 'Start with the research project, see the platform in action, or learn how to use it.',
    projectLabel: 'THE PROJECT', projectTitle: 'Why ARGUS exists', projectBody: 'The research vision, the challenge of complex infrastructure, and the ideas behind connected operational knowledge.', visitProject: 'Visit the project site',
    hubLabel: 'THE PLATFORM', hubBody: 'A connected workspace for assets, tickets, activities, documents, maps and AI assisted discovery.', exploreHub: 'Explore Knowledge Hub',
    learnLabel: 'LEARN & USE', guideTitle: 'Start with confidence', guideBody: 'A guided first route and searchable manuals, generated from the help included in the application.', getStarted: 'Getting started',
    ecosystemLabel: 'THE ECOSYSTEM', ecosystemTitle: 'One idea. Several ways to work with it.', stepVision: 'Understand the vision', stepPlatform: 'Explore the platform', stepPractice: 'Put knowledge to work',
    readyLabel: 'READY TO BEGIN?', entryTitle: 'The next answer starts here.', entryBody: 'Open the Knowledge Hub when you are ready to work, or read the guide to find your way around.', openApp: 'Open the web app', readManuals: 'Read the manuals',
    footerTag: 'Knowledge in motion.', footerInstitution: 'ARGUS project · INFN National Scientific Commission 5', footerProject: 'Project', footerManuals: 'Manuals',
    description: 'ARGUS connects assets, documentation, work and people across complex scientific infrastructure.', title: 'ARGUS — Knowledge in motion'
  },
  it: {
    skip: 'Vai al contenuto', eyebrow: 'PROGETTO ARGUS · INFN', heroLine1: 'La conoscenza', heroLine2: 'in movimento.',
    heroLead: 'I sistemi complessi hanno bisogno di conoscenza connessa. ARGUS riunisce asset, documenti, interventi e persone in una visione più chiara.',
    exploreProject: 'Scopri il progetto', discoverHub: 'Scopri Knowledge Hub', heroFoot: 'Un progetto per la conoscenza che circola tra persone, gruppi e sistemi.', explore: 'ESPLORA',
    choosePath: 'SCEGLI IL TUO PERCORSO', gatewayTitle: 'Dalla visione al lavoro.', gatewayLead: 'Parti dal progetto di ricerca, guarda la piattaforma oppure scopri come usarla.',
    projectLabel: 'IL PROGETTO', projectTitle: 'Perché nasce ARGUS', projectBody: 'La visione di ricerca, le sfide delle infrastrutture complesse e le idee alla base della conoscenza operativa connessa.', visitProject: 'Visita il sito del progetto',
    hubLabel: 'LA PIATTAFORMA', hubBody: 'Un workspace connesso per asset, ticket, attività, documenti, mappe e ricerca assistita dall’AI.', exploreHub: 'Esplora Knowledge Hub',
    learnLabel: 'IMPARA E USA', guideTitle: 'Inizia con sicurezza', guideBody: 'Un primo percorso guidato e manuali ricercabili, generati dalla guida inclusa nell’applicazione.', getStarted: 'Per iniziare',
    ecosystemLabel: 'L’ECOSISTEMA', ecosystemTitle: 'Un’idea. Diversi modi per usarla.', stepVision: 'Comprendi la visione', stepPlatform: 'Esplora la piattaforma', stepPractice: 'Metti al lavoro la conoscenza',
    readyLabel: 'PRONTO A INIZIARE?', entryTitle: 'La prossima risposta comincia qui.', entryBody: 'Apri Knowledge Hub quando sei pronto a lavorare, oppure leggi la guida per orientarti.', openApp: 'Apri la web app', readManuals: 'Leggi i manuali',
    footerTag: 'La conoscenza in movimento.', footerInstitution: 'Progetto ARGUS · INFN Commissione Scientifica Nazionale 5', footerProject: 'Progetto', footerManuals: 'Manuali',
    description: 'ARGUS collega asset, documentazione, interventi e persone nelle infrastrutture scientifiche complesse.', title: 'ARGUS — La conoscenza in movimento'
  }
};

function setLanguage(language) {
  const lang = language === 'it' ? 'it' : 'en';
  const copy = translations[lang];
  document.documentElement.lang = lang;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = copy[node.dataset.i18n] || node.textContent; });
  document.querySelectorAll('[data-lang]').forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.lang === lang)); });
  const links = {
    project: `https://infn-argus.github.io/argus-project-site/?lang=${lang}`,
    hub: `https://infn-argus.github.io/argus-knowledge-hub/${lang}/`,
    start: `https://infn-argus.github.io/argus-knowledge-hub/${lang}/getting-started/`,
    manuals: `https://infn-argus.github.io/argus-knowledge-hub/${lang}/manuals/`
  };
  document.querySelectorAll('[data-site]').forEach(link => { link.href = links[link.dataset.site]; });
  try { localStorage.setItem('argus-root-language', lang); } catch (_) {}
  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  history.replaceState(null, '', url.pathname + url.search + url.hash);
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let savedLanguage;
try { savedLanguage = localStorage.getItem('argus-root-language'); } catch (_) {}
const fromUrl = new URL(location.href).searchParams.get('lang');
const fromBrowser = (navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en';
setLanguage(fromUrl || savedLanguage || fromBrowser);
