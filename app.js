// =======================
// Data
// =======================
const projects = [
  {
    iconClass:'fa-solid fa-clipboard-check',
    titleES:'Gestión de Actividades',
    titleEN:'Activity Management',
    descES:'Panel de control para visualizar actividades realizadas, asistencias y convenios con instituciones.',
    descEN:'Dashboard to track completed activities, attendance, and agreements with institutions.',
    tags:['Python','HTML','CSS','XAMPP'],
    cat:'web'
  },
  {
    iconClass:'fa-solid fa-book-open-reader',
    titleES:'Lectum',
    titleEN:'Lectum',
    descES:'Aplicación con OCR e IA para apoyar a personas con dislexia ajustando el texto para mejorar su lectura.',
    descEN:'Mobile app with OCR and AI to help people with dyslexia by adapting text to improve readability.',
    tags:['Flutter','Firebase','OCR','IA'],
    cat:'app'
  },
  {
    iconClass:'fa-solid fa-music',
    titleES:'Reproductor de Música',
    titleEN:'Music Player',
    descES:'Reproductor de música en Flutter estilo Spotify (listas, reproducción y UI moderna).',
    descEN:'Flutter music player inspired by Spotify (playlists, playback and modern UI).',
    tags:['Flutter','Dart','UI'],
    cat:'app'
  },
  {
    iconClass:'fa-solid fa-laptop-code',
    titleES:'Portafolio Web',
    titleEN:'Web Portfolio',
    descES:'Portafolio web con información personal, modo oscuro/claro, animaciones y diseño responsive.',
    descEN:'Personal portfolio with dark/light mode, animations and responsive design.',
    tags:['HTML','CSS','JavaScript'],
    cat:'web'
  }
];

const roles = [
  { textES:'Desarrolladora de software', textEN:'Software Developer', icon:'💻' },
  { textES:'SysAdmin', textEN:'SysAdmin', icon:'🛠️' },
  { textES:'Project Manager', textEN:'Project Manager', icon:'📌' }
];

const i18n = {
  es: {
    nav_home:'Inicio', nav_about:'Sobre mí', nav_projects:'Proyectos', nav_contact:'Contáctame',
    home_greeting:'Bienvenida a mi portafolio',
    home_hi:'Hola, soy',
    home_intro:'Estudiante de Ingeniería de Sistemas (USB). Me apasiona la tecnología, el desarrollo web y descubrir cosas nuevas.',
    btn_projects:'Ver proyectos', btn_contact:'Contáctame',
    stat_projects:'Proyectos', stat_semesters:'Semestres', stat_tech:'Tecnologías',
    about_label:'Conóceme', about_title_1:'Sobre', about_title_2:'mí',
    about_p1:'Soy estudiante de <strong>Ingeniería de Sistemas</strong> en la <strong>Universidad Simón Bolívar (USB)</strong>, en Cúcuta, Colombia. Me apasiona el desarrollo web y la tecnología.',
    about_p2:'Me considero una estudiante con ideas innovadoras para ayudar a la humanidad y superar dificultades que se presentan en la comunidad día a día, creando soluciones útiles, accesibles y bien diseñadas.',
    about_p3:'También me interesa el desarrollo móvil, la investigación y aplicar inteligencia artificial para resolver problemas reales.',
    hl_1k:'Enfoque', hl_1v:'Web + Mobile',
    hl_2k:'Interés', hl_2v:'IA + Investigación',
    hl_3k:'Estilo', hl_3v:'Soluciones útiles',
    skills_title:'Tecnologías', timeline_title:'Experiencia',
    tl1_year:'2023 — Presente',
    tl1_role:'Estudiante de Ingeniería de Sistemas (7mo semestre)',
    tl1_place:'Universidad Simón Bolívar · Cúcuta, Colombia',
    projects_label:'Mi trabajo', projects_title_1:'Mis', projects_title_2:'Proyectos',
    filter_all:'Todos', filter_web:'Web', filter_app:'Aplicación', filter_data:'Datos',
    contact_label:'Hablemos', contact_title:'Contáctame',
    contact_heading:'¿Tienes un proyecto en mente?',
    contact_desc:'Estoy disponible para colaboraciones, prácticas y proyectos académicos. ¡No dudes en escribirme!',
    contact_city_label:'Ciudad', contact_inst_label:'Institución',
    form_title:'Escríbeme', form_note:'Responderé pronto',
    form_name:'Nombre', form_email:'Email', form_subject:'Asunto', form_message:'Mensaje', form_send:'Enviar mensaje',
    form_success:'¡Mensaje enviado! Te responderé pronto.',
    footer_text:'Desarrollado por Valentina Bautista'
  },
  en: {
    nav_home:'Home', nav_about:'About', nav_projects:'Projects', nav_contact:'Contact',
    home_greeting:'Welcome to my portfolio',
    home_hi:"Hi, I'm",
    home_intro:'Systems Engineering student (USB). I’m passionate about technology, web development, and learning new things.',
    btn_projects:'View projects', btn_contact:'Contact me',
    stat_projects:'Projects', stat_semesters:'Semesters', stat_tech:'Technologies',
    about_label:'Get to know me', about_title_1:'About', about_title_2:'me',
    about_p1:'I’m a <strong>Systems Engineering</strong> student at <strong>Simón Bolívar University (USB)</strong> in Cúcuta, Colombia. I’m passionate about web development and technology.',
    about_p2:'I see myself as a student with innovative ideas to help people and overcome daily community challenges by building useful, accessible, and well-designed solutions.',
    about_p3:'I’m also interested in mobile development, research, and applying AI to solve real-world problems.',
    hl_1k:'Focus', hl_1v:'Web + Mobile',
    hl_2k:'Interest', hl_2v:'AI + Research',
    hl_3k:'Style', hl_3v:'Useful solutions',
    skills_title:'Technologies', timeline_title:'Experience',
    tl1_year:'2023 — Present',
    tl1_role:'Systems Engineering Student (7th semester)',
    tl1_place:'Simón Bolívar University · Cúcuta, Colombia',
    projects_label:'My work', projects_title_1:'My', projects_title_2:'Projects',
    filter_all:'All', filter_web:'Web', filter_app:'App', filter_data:'Data',
    contact_label:"Let's talk", contact_title:'Contact',
    contact_heading:'Do you have a project in mind?',
    contact_desc:'I’m open to collaborations, internships, and academic projects. Feel free to reach out!',
    contact_city_label:'City', contact_inst_label:'Institution',
    form_title:'Message me', form_note:"I'll reply soon",
    form_name:'Name', form_email:'Email', form_subject:'Subject', form_message:'Message', form_send:'Send message',
    form_success:"Message sent! I'll get back to you soon.",
    footer_text:'Built by Valentina Bautista'
  }
};

// =======================
// Helpers
// =======================
const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];
const state = { lang:'es', typeTimer:null, type:{ri:0, ci:0, del:false}, filter:'all' };

// =======================
// Smooth Reveal (IntersectionObserver)
// =======================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.12 });

function setupReveal(){
  $$('.reveal').forEach(el => revealObserver.observe(el));
  $$('#home .reveal').forEach(el => el.classList.add('show'));
}

// =======================
// Depth Tilt (3D parallax)
// =======================
function setupTilt(){
  const cards = $$('[data-tilt]');
  cards.forEach(card => {
    const inner = card.querySelector('.tilt-inner');
    if (!inner) return;

    const max = 10; // degrees
    const z = 8;    // translateZ

    function onMove(e){
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;

      const rotY = (x - 0.5) * (max * 2);
      const rotX = (0.5 - y) * (max * 2);

      inner.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(${z}px)`;
    }
    function onLeave(){
      inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  });
}

// =======================
// Render Projects (Bento + smartphone hover)
// =======================
function renderProjects(){
  const list = $('#projectsList');
  list.innerHTML = '';

  const filtered = state.filter === 'all' ? projects : projects.filter(p => p.cat === state.filter);

  filtered.forEach((p, idx) => {
    const title = state.lang === 'es' ? p.titleES : p.titleEN;
    const desc  = state.lang === 'es' ? p.descES : p.descEN;

    const el = document.createElement('article');
    el.className = 'proj bento reveal';
    el.style.transitionDelay = `${idx * 0.06}s`;

    el.innerHTML = `
      <div class="phone">
        <div class="proj-top">
          <div>
            <div class="proj-title">${title}</div>
            <p class="proj-desc">${desc}</p>
          </div>
          <div class="proj-ico" aria-hidden="true"><i class="${p.iconClass}"></i></div>
        </div>
        <div class="proj-tags">
          ${p.tags.map(t => `<span class="tag"><i class="fa-solid fa-star"></i>${t}</span>`).join('')}
        </div>
      </div>
    `;

    list.appendChild(el);
    revealObserver.observe(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  });
}

function setupTabs(){
  $$('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      renderProjects();
    });
  });
}

// =======================
// Typewriter
// =======================
function restartType(){
  if (state.typeTimer) clearTimeout(state.typeTimer);
  state.type = {ri:0, ci:0, del:false};

  const textEl = $('#typeText');
  const iconEl = $('#typeIcon');
  textEl.textContent = '';
  iconEl.textContent = '';

  function tick(){
    const t = state.type;
    const item = roles[t.ri];
    const word = (state.lang === 'es') ? item.textES : item.textEN;

    iconEl.textContent = ' ' + item.icon;

    if (!t.del){
      textEl.textContent = word.substring(0, t.ci + 1);
      t.ci++;
      if (t.ci === word.length){
        t.del = true;
        state.typeTimer = setTimeout(tick, 1400);
        return;
      }
    } else {
      textEl.textContent = word.substring(0, t.ci - 1);
      t.ci--;
      if (t.ci === 0){
        t.del = false;
        t.ri = (t.ri + 1) % roles.length;
      }
    }
    state.typeTimer = setTimeout(tick, t.del ? 60 : 95);
  }
  tick();
}

// =======================
// Counters
// =======================
function animateCounters(){
  $$('[data-target]').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const interval = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = count + '+';
      if (count >= target) clearInterval(interval);
    }, 40);
  });
}

// =======================
// Scroll: progress, active nav, top button
// =======================
function setupScroll(){
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;
    $('#progressBar').style.width = (max > 0 ? (scrolled / max * 100) : 0) + '%';
    $('#backTop').classList.toggle('visible', scrolled > 420);

    const ids = ['home','about','projects','contact'];
    let current = 'home';
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el && scrolled >= el.offsetTop - 140) current = id;
    });
    $$('#navLinks a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  });
}

// =======================
// Theme (persist)
// =======================
const THEME_KEY = 'valentina_theme';
function setupTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') document.documentElement.setAttribute('data-theme', saved);

  $('#themeBtn').addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
  });
}

// =======================
// Lang
// =======================
function applyLang(){
  const dict = i18n[state.lang];
  document.documentElement.lang = state.lang;

  const navMap = {'#home':dict.nav_home,'#about':dict.nav_about,'#projects':dict.nav_projects,'#contact':dict.nav_contact};
  $$('[data-nav]').forEach(a => {
    const href = a.getAttribute('href');
    if (href && navMap[href]) a.textContent = navMap[href];
  });

  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key || !dict[key]) return;
    if (key.startsWith('about_')) el.innerHTML = dict[key];
    else el.textContent = dict[key];
  });

  $('#langBtn').textContent = state.lang.toUpperCase();
  renderProjects();
  restartType();
}

function setupLang(){
  $('#langBtn').addEventListener('click', () => {
    state.lang = (state.lang === 'es') ? 'en' : 'es';
    applyLang();
  });
  applyLang();
}

// =======================
// Mobile menu
// =======================
function setupMobile(){
  const hamburger = $('#hamburger');
  const mobileMenu = $('#mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  $$('.mobile-link').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// =======================
// Contact form demo
// =======================
function setupForm(){
  $('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const success = $('#formSuccess');
    success.style.display = 'block';
    e.target.reset();
    setTimeout(() => success.style.display = 'none', 5000);
  });
}

// =======================
// Init
// =======================
(function init(){
  $('#year').textContent = new Date().getFullYear();
  renderProjects();
  setupTabs();
  setupScroll();
  setupTheme();
  setupLang();
  setupMobile();
  setupForm();
  setupReveal();
  setupTilt();
  animateCounters();
  restartType();
})();