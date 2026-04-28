# 🎮 Checkpoint Project — CP5

> Landing page temática de Pokémon desenvolvida como Checkpoint 5 da disciplina **Front-end Design** — 1º ano de Engenharia de Software, FIAP Paulista.

---

## 📋 Sobre o Projeto

Uma landing page completa e totalmente responsiva com temática pixel-art de Pokémon, composta por **5 seções** em uma única página. O projeto aplica os conhecimentos adquiridos ao longo do semestre: código semântico, transições, animações, componentes reutilizáveis e manipulação de DOM com JavaScript.

---

## 👥 Integrantes

| Nome | RM |
|---|---|
| Camile Vitoria Silva | 566649 |
| Lucas de Oliveira Miranda Caetano | 568036 |
| Marco Túlio Longo Conte | 568373 |
| Sofia Souza Rodrigues | 566708 |

---

## 🗂️ Estrutura do Projeto

```
CheckPoint5-FrontEnd/
├── index.html
├── script.js
├── css/
│   ├── reset.css
│   ├── global.css
│   ├── navbar.css
│   ├── hero.css
│   ├── integrantes.css
│   ├── pokemons.css
│   ├── modal.css
│   ├── cartas.css
│   ├── footer.css
│   └── media.css
└── assets/
    └── images/
        ├── global/        # Banners e molduras
        ├── icons/         # Seta e ícones de tipo
        └── pokemons/      # Imagens dos Pokémons e evoluções
```

---

## 📄 Seções da Página

### 1️⃣ Início (Hero)
- Navbar fixa com links de smooth scroll para cada seção
- Menu hambúrguer funcional para dispositivos móveis
- Fundo com gradiente azul escuro (`#27a3ff`) → azul claro (`#e4ffff`)
- Imagens de fundo posicionadas com pseudo-elementos `::before` e `::after`
- Título "Checkpoint Project" em **Press Start 2P** (3.1rem, line-height 1.3rem)
- Botão **Start** com scroll suave para a seção de Integrantes

### 2️⃣ Integrantes
- Título "Choose your character" estilo pixel-art
- Caixa com lista dos integrantes e seus RMs
- Seta animada que aparece no hover de cada item

### 3️⃣ Pokémons
- Grid de Pokémons gerado dinamicamente via JavaScript
- Filtros laterais por tipo: **Todos, Água, Fogo, Planta, Elétrico, Gelo, Normal, Psíquico**
- Ao clicar em um Pokémon, abre um **modal** com:
  - Altura, Peso, Categoria, Habilidades, Tipo e Fraqueza
  - Cadeia de evolução com imagens
  - Fundo overlay preto com 40% de opacidade

### 4️⃣ Cartas
- Formulário para criar uma carta Pokémon personalizada
- Campos: Nome da carta, Quantidade de vida, Pokémon (select), Ataque, Categoria (select), Resistência
- Ao enviar, as informações aparecem renderizadas na carta visual
- Botão **Enviar** com cor `#7CAAC9` (hover: `#5881AE`)
- Inputs com bordas arredondadas de 15px e texto em 1.15rem

### 5️⃣ Footer
- Banner de imagem superior
- Título "Explore e divirta-se" em **Press Start 2P**
- Dois blocos de texto à esquerda com 50px de espaçamento entre eles:
  - Bloco 1: Curso, Instituição, Localização
  - Bloco 2: Telefone, E-mail, Redes Sociais

---

## 🎨 Design System

| Elemento | Valor |
|---|---|
| Fonte títulos | Press Start 2P |
| Fonte textos | Noto Serif |
| Subtítulos | 2.6rem, letter-spacing: -2px |
| Cor de fundo principal | `#FBF6F3` (branco) |
| Cor de fundo secundária | `#6D86DD` (azul) |
| Gradiente Hero | `#27a3ff` → `#e4ffff` |
| Cor botão Cartas | `#7CAAC9` |
| Cor botão Cartas (hover) | `#5881AE` |

---

## ⚙️ Tecnologias Utilizadas

- **HTML5** semântico
- **CSS3** — Flexbox, Grid, animações, transições, media queries
- **JavaScript** — manipulação de DOM, filtros dinâmicos, modal, geração de carta
- **Bootstrap 5.3** — grid responsivo e utilitários
- **Google Fonts** — Press Start 2P & Noto Serif

---

## 📱 Responsividade

O projeto foi desenvolvido seguindo abordagem **mobile-first** e testado nas resoluções:

- 📱 Mobile
- 💊 Tablet
- 🖥️ Desktop

---

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/camilevs/CheckPoint5-FrontEnd.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador — nenhuma dependência ou servidor necessário.

---

## 📅 Entrega

Checkpoint 5 — 2º Semestre · Disciplina: Front-end Design  
**FIAP — 1ESPS**
