import { c as createComponent, r as renderTemplate, a as renderScript, b as renderSlot, d as renderHead, e as addAttribute, f as createAstro, m as maybeRenderHead, g as renderComponent } from '../chunks/astro/server_j-350Gwz.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    title = "Ivan Pedro Sampaio Gon\xE7alves - Desenvolvedor Backend",
    description = "Portf\xF3lio de Ivan Pedro Sampaio Gon\xE7alves - Desenvolvedor Backend especializado em solu\xE7\xF5es eficientes e escal\xE1veis."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR" data-theme="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="generator"', "><!-- SEO --><title>", '</title><meta name="author" content="Ivan Pedro Sampaio Gon\xE7alves"><meta name="keywords" content="desenvolvedor backend, portf\xF3lio, programador, web development"><!-- Open Graph / Social Media --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:site_name" content="ivanpsg.dev"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><!-- Favicon (placeholder - substituir com real) --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Preconnect para Google Fonts (performance) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- FontAwesome Icons --><script src="https://kit.fontawesome.com/e9077cd72b.js" crossorigin="anonymous"><\/script>', '</head> <body> <!-- Skip to content link para screen readers --> <a href="#main-content" class="skip-to-content">\nPular para o conte\xFAdo principal\n</a> <!-- Main content wrapper --> <div class="min-h-screen flex flex-col"> <!-- Slot principal - componentes ser\xE3o injetados aqui --> <main id="main-content" class="flex-1"> ', " </main> </div> <!-- Script para gerenciar tema (dark/light) --> ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderScript($$result, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/layouts/Base.astro?astro&type=script&index=0&lang.ts"));
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/layouts/Base.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 glass border-b border-modern-border" role="banner"> <div class="container-custom"> <nav class="flex items-center justify-between py-4" aria-label="Navegação principal"> <!-- Logo --> <a href="/" class="text-xl font-bold text-modern-text hover:text-modern-accent transition-colors duration-240" aria-label="ivanpsg.dev - Página inicial"> <span class="font-mono">ivanpsg</span><span class="text-modern-accent">.dev</span> </a> <!-- Desktop Navigation --> <ul class="hidden md:flex items-center gap-8"> <li> <a href="#sobre" class="text-modern-text hover:text-modern-accent transition-colors duration-240 font-medium" aria-label="Ir para seção Sobre">
Sobre
</a> </li> <li> <a href="#projetos" class="text-modern-text hover:text-modern-accent transition-colors duration-240 font-medium" aria-label="Ir para seção Projetos">
Projetos
</a> </li> <li> <a href="#contato" class="text-modern-text hover:text-modern-accent transition-colors duration-240 font-medium" aria-label="Ir para seção Contato">
Contato
</a> </li> </ul> <!-- Theme Toggle Button --> <button id="theme-toggle" type="button" class="p-2.5 rounded-md border border-modern-border hover:border-modern-accent transition-all duration-240 hover:scale-105" aria-label="Alternar tema claro/escuro" aria-pressed="false"> <!-- Sun Icon (Light Mode) --> <svg class="sun-icon w-5 h-5 text-modern-text hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> <!-- Moon Icon (Dark Mode) --> <svg class="moon-icon w-5 h-5 text-modern-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path> </svg> </button> <!-- Mobile Menu Button (hamburger) --> <button id="mobile-menu-toggle" type="button" class="md:hidden p-2.5 rounded-md border border-modern-border hover:border-modern-accent transition-all duration-240" aria-label="Abrir menu de navegação" aria-expanded="false" aria-controls="mobile-menu"> <svg class="w-5 h-5 text-modern-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </nav> <!-- Mobile Navigation Menu --> <div id="mobile-menu" class="hidden md:hidden pb-4" role="navigation" aria-label="Menu de navegação móvel"> <ul class="flex flex-col gap-4"> <li> <a href="#sobre" class="block text-modern-text hover:text-modern-accent transition-colors duration-240 font-medium">
Sobre
</a> </li> <li> <a href="#projetos" class="block text-modern-text hover:text-modern-accent transition-colors duration-240 font-medium">
Projetos
</a> </li> <li> <a href="#contato" class="block text-modern-text hover:text-modern-accent transition-colors duration-240 font-medium">
Contato
</a> </li> </ul> </div> </div> </header> ${renderScript($$result, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const stackIcons = [
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "TypeScript", icon: "fa-brands fa-js" },
    { name: "PostgreSQL", icon: "fa-solid fa-database" },
    { name: "Docker", icon: "fa-brands fa-docker" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "Github", icon: "fa-brands fa-github" },
    { name: "Linux", icon: "fa-brands fa-linux" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="section bg-modern-bg" aria-labelledby="hero-title"> <div class="container-custom"> <!-- Layout principal centralizado --> <div class="flex flex-col items-center text-center gap-8"> <!-- Foto do perfil (placeholder) --> <div class="flex-shrink-0"> <div class="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-modern-accent bg-modern-surface/60" role="img" aria-label="Foto de Ivan Pedro Sampaio Gonçalves"></div> </div> <!-- Conteúdo textual --> <div class="max-w-3xl"> <!-- Prefixo terminal --> <p class="font-mono text-sm md:text-base text-modern-muted mb-4"> <span class="text-modern-accent">ivanpsg@portifolio</span>:<span class="text-modern-accent2">~</span>$ <span class="text-modern-text">whoami</span> </p> <!-- Título com nome --> <h1 id="hero-title" class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"> <span class="text-modern-accent">Ivan Pedro</span> <br> <span class="text-modern-accent2">Sampaio Gonçalves</span> </h1> <!-- Subtítulo com cargo --> <p class="text-xl md:text-2xl text-modern-muted mb-8">
Desenvolvedor Backend
</p> </div> </div> <!-- Ícones de Stack (8 tecnologias) --> <div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-12 md:mt-16"> ${stackIcons.map((icon) => renderTemplate`<div class="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-modern-text flex items-center justify-center hover:bg-modern-accent hover:border-modern-accent transition-all duration-240 group"${addAttribute(icon.name, "title")}> <i${addAttribute(`${icon.icon} text-2xl md:text-3xl text-modern-text group-hover:text-black`, "class")} aria-hidden="true"></i> </div>`)} </div> <!-- Botão de currículo --> <div class="flex justify-center mt-12 md:mt-16"> <a href="/curriculo.pdf" download class="btn-primary text-base md:text-lg px-8 py-4" aria-label="Baixar currículo em PDF"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path> </svg>
Baixar Currículo
</a> </div> </div> </section>`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="sobre" class="section bg-modern-surface" aria-labelledby="about-title"> <div class="container-custom"> <!-- Terminal prompt title --> <p class="font-mono text-sm md:text-base text-modern-muted mb-8"> <span class="text-modern-accent">ivanpsg@portifolio</span>:<span class="text-modern-accent2">~</span>$ <span class="text-modern-text">about</span> </p> <!-- Título da seção --> <h2 id="about-title" class="text-3xl md:text-4xl font-bold text-modern-text mb-12">
Quem <span class="text-gradient">sou eu?</span> </h2> <!-- Texto principal --> <div class="space-y-4 mb-16"> <p class="text-base md:text-lg text-modern-muted leading-relaxed">
De nome <b>Ivan Pedro</b> e vindo de <b>Salvador/BA</b>, sou estudante universitário, aspirante a desenvolvedor, e além disso,
        entusiasta da área de tecnologia. <b>Dedicado a aprender coisas novas</b>, estou sempre buscando aprimorar minhas habilidades e
        expandir meu conhecimento. Sou apaixonado por programação e <b>estou animado para contribuir com projetos inovadores e desafiadores</b>.
</p> <p class="text-base md:text-lg text-modern-muted leading-relaxed">
Meu perfil é de alguém <b>paciente, comunicativo e disposto a aprender sem medo de errar</b>.
        Acredito que a melhor forma de crescer é enfrentando desafios e aprendendo com os erros (primeiro dos outros, depois os meus),
        e <b>estou sempre aberto a feedbacks construtivos</b> para melhorar minhas habilidades e conhecimentos.
</p> <p class="text-base md:text-lg text-modern-muted leading-relaxed">
Mesmo sem experiência profissional prévia, possuo <b>experiência acadêmica e em projetos pessoais</b>, o que me permitiu desenvolver habilidades técnicas e interpessoais.
        Já mexi com Python, PHP, MySQL, HTML, CSS, porém agora estou focando minhas energias em <b>entrar no mercado com Node.js + TypeScript, além de PostgreSQL</b>,
        não me limitando caso a vaga exija outras tecnologias. Estou ansioso para aplicar meu conhecimento e crescer profissionalmente na área de desenvolvimento.
</p> </div> <!-- Princípios & Valores (mantido) --> <div> <h3 class="text-2xl font-bold text-modern-text mb-6">
Princípios & Valores
</h3> <div class="grid md:grid-cols-3 gap-6"> <div class="card"> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-modern-accent/10 border border-modern-accent flex items-center justify-center"> <svg class="w-5 h-5 text-modern-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <div> <h4 class="font-bold text-modern-text mb-2">Performance</h4> <p class="text-sm text-modern-muted">
Código otimizado que roda até em hardware modesto
</p> </div> </div> </div> <div class="card"> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-modern-accent/10 border border-modern-accent flex items-center justify-center"> <svg class="w-5 h-5 text-modern-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path> </svg> </div> <div> <h4 class="font-bold text-modern-text mb-2">Simplicidade</h4> <p class="text-sm text-modern-muted">
Soluções claras sem complexidade desnecessária
</p> </div> </div> </div> <div class="card"> <div class="flex items-start gap-4"> <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-modern-accent/10 border border-modern-accent flex items-center justify-center"> <svg class="w-5 h-5 text-modern-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-bold text-modern-text mb-2">Qualidade</h4> <p class="text-sm text-modern-muted">
Documentação e código limpo sempre
</p> </div> </div> </div> </div> </div> </div> </section>`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/About.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, stack, link, thumbnail } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card group"> <!-- Thumbnail circular (opcional) --> ${thumbnail && renderTemplate`<div class="mb-4"> <div class="w-12 h-12 rounded-full bg-modern-accent/10 border border-modern-accent flex items-center justify-center overflow-hidden"> <img${addAttribute(thumbnail, "src")}${addAttribute(`Logo do projeto ${title}`, "alt")} class="w-full h-full object-cover" loading="lazy"> </div> </div>`} <!-- Título do projeto --> <h3 class="text-xl md:text-2xl font-mono font-bold text-modern-text mb-3 group-hover:text-modern-accent transition-colors duration-240"> ${title} </h3> <!-- Descrição --> <p class="text-modern-muted mb-6 leading-relaxed"> ${description} </p> <!-- Link para o projeto --> <a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-modern-accent hover:text-modern-accent2 transition-colors duration-240 font-medium"${addAttribute(`Ver projeto ${title} (abre em nova aba)`, "aria-label")}>
Ver projeto
<svg class="w-4 h-4 transition-transform duration-240 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </article>`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "Sistema de Gerenciamento",
      description: "API RESTful escal\xE1vel para gerenciamento de recursos com autentica\xE7\xE3o JWT e banco de dados PostgreSQL.",
      stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
      link: "https://github.com/ivanpsg",
      thumbnail: void 0
    },
    {
      title: "Microservi\xE7os Financeiros",
      description: "Arquitetura de microservi\xE7os para processamento de transa\xE7\xF5es financeiras com alta disponibilidade.",
      stack: ["Python", "FastAPI", "Redis", "Docker"],
      link: "https://github.com/ivanpsg",
      thumbnail: void 0
    },
    {
      title: "CLI Tool Automation",
      description: "Ferramenta de linha de comando para automa\xE7\xE3o de deploys e configura\xE7\xF5es de ambiente.",
      stack: ["Go", "CLI", "YAML", "GitHub Actions"],
      link: "https://github.com/ivanpsg",
      thumbnail: void 0
    },
    {
      title: "API Gateway",
      description: "Gateway de API com rate limiting, cache distribu\xEDdo e monitoramento em tempo real.",
      stack: ["Rust", "Actix", "Redis", "Prometheus"],
      link: "https://github.com/ivanpsg",
      thumbnail: void 0
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="projetos" class="section bg-modern-bg" aria-labelledby="projects-title"> <div class="container-custom"> <!-- Terminal prompt title --> <p class="font-mono text-sm md:text-base text-modern-muted mb-8"> <span class="text-modern-accent">ivanpsg@portifolio</span>:<span class="text-modern-accent2">~</span>$ <span class="text-modern-text">projects</span> </p> <!-- Título da seção --> <div class="mb-12"> <h2 id="projects-title" class="text-3xl md:text-4xl font-bold text-modern-text mb-4">
Projetos em <span class="text-gradient">Destaque</span> </h2> <p class="text-lg text-modern-muted max-w-2xl">
Seleção de projetos que demonstram minhas habilidades em backend,
        arquitetura e otimização de sistemas.
</p> </div> <!-- Grid de projetos --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list" aria-label="Lista de projetos"> ${projects.map((project) => renderTemplate`<div role="listitem"> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { ...project })} </div>`)} </div> </div> </section>`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Projects.astro", void 0);

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const certificates = [
    {
      title: "Certificado Placeholder 1",
      issuer: "Plataforma Online",
      date: "2XXX",
      image: "/certificates/cert1.jpg"
    },
    {
      title: "Certificado Placeholder 2",
      issuer: "Plataforma Online",
      date: "2XXX",
      image: "/certificates/cert2.jpg"
    },
    {
      title: "Certificado Placeholder 3",
      issuer: "Plataforma Online",
      date: "2XXX",
      image: "/certificates/cert3.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="certificados" class="section bg-modern-surface" aria-labelledby="carousel-title"> <div class="container-custom"> <!-- Título da seção --> <div class="text-center mb-12"> <h2 id="carousel-title" class="text-3xl md:text-4xl font-bold text-modern-text mb-4">
Certificados & <span class="text-gradient">Qualificações</span> </h2> </div> <!-- Carrossel --> <div class="relative max-w-4xl mx-auto" role="region" aria-label="Carrossel de certificados" aria-live="polite"> <!-- Container dos slides --> <div class="overflow-hidden rounded-lg"> <div id="carousel-track" class="flex transition-transform duration-500 ease-in-out" style="transform: translateX(0)"> ${certificates.map((cert, index) => renderTemplate`<div class="w-full flex-shrink-0 px-4"${addAttribute(index, "data-slide")} role="group" aria-roledescription="slide"${addAttribute(`Slide ${index + 1} de ${certificates.length}: ${cert.title}`, "aria-label")}> <div class="bg-modern-bg border border-modern-border rounded-lg p-8 text-center"> <!-- Ícone de certificado --> <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-modern-accent/10 border border-modern-accent flex items-center justify-center"> <svg class="w-8 h-8 text-modern-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg> </div> <!-- Conteúdo --> <h3 class="text-2xl font-bold text-modern-text mb-2"> ${cert.title} </h3> <p class="text-modern-muted mb-1"> ${cert.issuer} </p> <p class="text-sm text-modern-muted font-mono"> ${cert.date} </p> </div> </div>`)} </div> </div> <!-- Setas de navegação --> <button id="carousel-prev" type="button" class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-11 h-11 rounded-full bg-modern-surface border border-modern-border hover:border-modern-accent transition-all duration-240 hover:scale-110 flex items-center justify-center" aria-label="Certificado anterior"> <svg class="w-6 h-6 text-modern-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="carousel-next" type="button" class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-11 h-11 rounded-full bg-modern-surface border border-modern-border hover:border-modern-accent transition-all duration-240 hover:scale-110 flex items-center justify-center" aria-label="Próximo certificado"> <svg class="w-6 h-6 text-modern-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <!-- Indicadores (dots) --> <div class="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegação de slides"> ${certificates.map((_, index) => renderTemplate`<button type="button" class="carousel-dot w-2.5 h-2.5 rounded-full bg-modern-border transition-all duration-240 hover:bg-modern-accent"${addAttribute(index, "data-index")} role="tab"${addAttribute(`Ir para slide ${index + 1}`, "aria-label")}${addAttribute(index === 0 ? "true" : "false", "aria-selected")}></button>`)} </div> </div> </div> </section> ${renderScript($$result, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Carousel.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contato" class="section bg-modern-bg" aria-labelledby="contact-title"> <div class="container-custom max-w-3xl"> <!-- Terminal prompt title --> <p class="font-mono text-sm md:text-base text-modern-muted mb-8"> <span class="text-modern-accent">ivanpsg@portifolio</span>:<span class="text-modern-accent2">~</span>$ <span class="text-modern-text">contact</span> </p> <!-- Título da seção --> <div class="mb-12"> <h2 id="contact-title" class="text-3xl md:text-4xl font-bold text-modern-text mb-4">
Entre em <span class="text-gradient">Contato</span> </h2> <p class="text-lg text-modern-muted">
Tem um projeto em mente? Vamos conversar sobre como posso ajudar.
</p> </div> <!-- Formulário --> <form id="contact-form" class="space-y-6" aria-label="Formulário de contato" novalidate> <!-- Campo Nome --> <div> <label for="name" class="block text-modern-text font-medium mb-2">
Nome <span class="text-modern-accent2" aria-label="obrigatório">*</span> </label> <input type="text" id="name" name="name" class="input" placeholder="Seu nome completo" required aria-required="true" aria-describedby="name-error" minlength="3"> <p id="name-error" class="text-modern-accent2 text-sm mt-1 hidden" role="alert">
Por favor, insira seu nome (mínimo 3 caracteres).
</p> </div> <!-- Campo Email --> <div> <label for="email" class="block text-modern-text font-medium mb-2">
Email <span class="text-modern-accent2" aria-label="obrigatório">*</span> </label> <input type="email" id="email" name="email" class="input" placeholder="seu@email.com" required aria-required="true" aria-describedby="email-error"> <p id="email-error" class="text-modern-accent2 text-sm mt-1 hidden" role="alert">
Por favor, insira um email válido.
</p> </div> <!-- Campo Mensagem --> <div> <label for="message" class="block text-modern-text font-medium mb-2">
Mensagem <span class="text-modern-accent2" aria-label="obrigatório">*</span> </label> <textarea id="message" name="message" class="textarea" placeholder="Descreva seu projeto ou dúvida..." required aria-required="true" aria-describedby="message-error" minlength="10" rows="6"></textarea> <p id="message-error" class="text-modern-accent2 text-sm mt-1 hidden" role="alert">
Por favor, insira uma mensagem (mínimo 10 caracteres).
</p> </div> <!-- Botão Submit --> <div> <button type="submit" class="btn-primary w-full sm:w-auto" aria-label="Enviar mensagem de contato">
Enviar Mensagem
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path> </svg> </button> </div> <!-- Mensagem de feedback (aria-live) --> <div id="form-feedback" class="hidden p-4 rounded-md" role="status" aria-live="polite"></div> </form> <!-- Informações alternativas de contato --> <div class="mt-12 pt-8 border-t border-modern-border text-center"> <p class="text-modern-muted mb-4">Ou entre em contato diretamente:</p> <div class="flex flex-wrap justify-center gap-6"> <a href="mailto:seu@email.com" class="flex items-center gap-2 text-modern-accent hover:text-modern-accent2 transition-colors duration-240" aria-label="Enviar email"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg>
seu@email.com
</a> <a href="https://github.com/ivanpsg" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-modern-accent hover:text-modern-accent2 transition-colors duration-240" aria-label="GitHub (abre em nova aba)"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg>
GitHub
</a> <a href="https://linkedin.com/in/ivanpsg" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-modern-accent hover:text-modern-accent2 transition-colors duration-240" aria-label="LinkedIn (abre em nova aba)"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg>
LinkedIn
</a> </div> </div> </div> </section> ${renderScript($$result, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Contact.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-modern-surface border-t border-modern-border" role="contentinfo"> <div class="container-custom py-12"> <div class="flex flex-col items-center gap-8"></div> <!-- Copyright --> <div class="text-center"> <p class="text-modern-muted text-sm">
&copy; ${currentYear} <span class="font-mono text-modern-accent">ivanpsg.dev</span> </p> <p class="text-modern-muted text-xs mt-1">
Desenvolvido com <span class="text-modern-accent2" aria-label="amor">♥</span> usando Astro + Tailwind CSS
</p> </div> <!-- Versão (opcional) --> <div class="text-center"> <p class="font-mono text-xs text-modern-muted/60">v1.5.0</p> </div> </div> </footer>`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Ivan Pedro Sampaio Gon\xE7alves - Desenvolvedor Backend | Portf\xF3lio", "description": "Portf\xF3lio de Ivan Pedro Sampaio Gon\xE7alves - Desenvolvedor Backend especializado em solu\xE7\xF5es eficientes, escal\xE1veis e minimalistas." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})}  ${renderComponent($$result2, "Hero", $$Hero, {})}  ${renderComponent($$result2, "About", $$About, {})}  ${renderComponent($$result2, "Projects", $$Projects, {})}  ${renderComponent($$result2, "Carousel", $$Carousel, {})}  ${renderComponent($$result2, "Contact", $$Contact, {})}  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/ivan-psg/programacao/websites/ivanpsg-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
