# ivanpsg.dev - Portfólio Pessoal

Portfólio minimalista e eficiente desenvolvido com Astro + Tailwind CSS, seguindo a paleta **Modern Coder**.

## 🚀 Stack Tecnológica

- **Framework**: [Astro](https://astro.build) v5.16+
- **CSS**: [Tailwind CSS](https://tailwindcss.com) v4.1+
- **Fonts**: Inter (UI) + JetBrains Mono (mono) via Google Fonts
- **Gerenciador**: pnpm v10.28+

## 🎨 Paleta de Cores - Modern Coder

```css
--color-bg: #0b0f10; /* Fundo escuro frio */
--color-surface: #111417; /* Superfícies */
--color-text: #e6f8ff; /* Texto principal */
--color-accent: #2dd4bf; /* Accent (teal) */
--color-accent2: #ff8a65; /* Accent secundário (coral) */
--color-border: #1e2426; /* Bordas */
--color-muted: #7b8a8e; /* Texto secundário */
```

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou 20+
- pnpm 10+ (recomendado)

### Passos

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/IvanPSG-BR/ivanpsg-portfolio.git
   cd ivanpsg-portfolio
   ```

2. **Instale as dependências**:

   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**:

   ```bash
   pnpm dev
   ```

4. **Acesse no navegador**:
   ```
   http://localhost:4321
   ```

## 🛠️ Comandos Disponíveis

| Comando        | Ação                                    |
| -------------- | --------------------------------------- |
| `pnpm install` | Instala as dependências                 |
| `pnpm dev`     | Inicia servidor dev em `localhost:4321` |
| `pnpm build`   | Gera build de produção em `./dist/`     |
| `pnpm preview` | Preview local do build de produção      |

## 📁 Estrutura do Projeto

```
ivanpsg-portfolio/
├── src/
│   ├── components/        # Componentes Astro reutilizáveis
│   │   ├── Header.astro   # Navegação + theme toggle
│   │   ├── Hero.astro     # Seção hero com foto e CTAs
│   │   ├── About.astro    # Sobre mim + skills
│   │   ├── Projects.astro # Grid de projetos
│   │   ├── ProjectCard.astro # Card individual de projeto
│   │   ├── Carousel.astro # Carrossel de certificados
│   │   ├── Contact.astro  # Formulário de contato
│   │   └── Footer.astro   # Rodapé com socials
│   ├── layouts/
│   │   └── Base.astro     # Layout HTML base
│   ├── pages/
│   │   └── index.astro    # Página principal
│   └── styles/
│       └── global.css     # Estilos globais + Tailwind
├── public/                # Assets estáticos
├── design/                # Imagens de design (desktop/mobile)
├── astro.config.mjs       # Configuração do Astro
├── tailwind.config.mjs    # Configuração do Tailwind
└── package.json           # Dependências e scripts
```

## ✨ Features Implementadas

- ✅ **Layout responsivo**: Mobile-first, otimizado para desktop e mobile
- ✅ **Tema claro/escuro**: Toggle acessível com persistência em localStorage
- ✅ **Navegação acessível**: ARIA labels, foco visível, navegação por teclado
- ✅ **Animações leves**: Transições CSS suaves sem frameworks pesados
- ✅ **Fontes otimizadas**: Preconnect para Google Fonts
- ✅ **Carrossel JS puro**: Navegação com setas e indicadores
- ✅ **Formulário validado**: Validação HTML5 + feedback aria-live
- ✅ **SEO básico**: Meta tags, Open Graph, título dinâmico
- ✅ **Performance**: Bundle minificado, inlineStyles auto

## 🎯 Personalização

### Atualizar Informações Pessoais

1. **Foto de perfil**: Substitua `/public/profile.jpg` com sua foto
2. **Currículo**: Adicione `/public/curriculo.pdf`
3. **Dados pessoais**: Edite os componentes em `src/components/`:
   - `Hero.astro`: Nome, título, descrição
   - `About.astro`: Bio, skills, valores
   - `Projects.astro`: Projetos (array `projects`)
   - `Carousel.astro`: Certificados (array `certificates`)
   - `Contact.astro` e `Footer.astro`: Email, links sociais

### Trocar Cores do Tema

Edite `tailwind.config.mjs` na seção `theme.extend.colors.modern`:

```js
modern: {
  bg: '#suacor',
  accent: '#suacor',
  // ...
}
```

E atualize as CSS variables em `src/styles/global.css` (`:root` e `[data-theme="light"]`).

## ♿ Acessibilidade

Este portfólio foi desenvolvido com foco em acessibilidade:

- **HTML semântico**: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- **ARIA labels**: Todos elementos interativos rotulados
- **Navegação por teclado**: Tab, Enter, setas (carrossel)
- **Contraste**: WCAG AA+ (mínimo 4.5:1 para texto)
- **Focus visible**: Outline em `:focus-visible`
- **Skip link**: Link "Pular para conteúdo" para screen readers
- **Alt text**: Todas imagens com descrições
- **Reduced motion**: Respeita `prefers-reduced-motion`

## 📋 Checklist de Revisão

Antes de fazer deploy, verifique:

- [ ] Foto de perfil (`/public/profile.jpg`) atualizada
- [ ] Currículo (`/public/curriculo.pdf`) adicionado
- [ ] Dados pessoais (nome, email, socials) atualizados
- [ ] Projetos reais adicionados em `Projects.astro`
- [ ] Certificados reais em `Carousel.astro`
- [ ] Contraste de cores testado (ferramenta: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- [ ] Testado em mobile (responsive design)
- [ ] Formulário de contato conectado a backend/API (opcional)
- [ ] Favicon personalizado em `/public/favicon.svg`
- [ ] Meta tags Open Graph com imagem de preview
- [ ] Lighthouse score verificado (Performance, Accessibility, SEO)

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push para GitHub
2. Importe projeto no [Vercel](https://vercel.com)
3. Configure:
   - Framework Preset: **Astro**
   - Build Command: `pnpm build`
   - Output Directory: `dist`

### Netlify

1. Faça push para GitHub
2. Conecte repositório no [Netlify](https://netlify.com)
3. Configure:
   - Build command: `pnpm build`
   - Publish directory: `dist`

### GitHub Pages

```bash
pnpm build
# Suba a pasta dist/ para o branch gh-pages
```

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Ivan Pedro Sampaio Gonçalves**

- GitHub: [@IvanPSG-BR](https://github.com/IvanPSG-BR)
- Portfolio: [ivanpsg.dev](https://ivanpsg.dev)

---

Desenvolvido com ♥ usando Astro + Tailwind CSS
