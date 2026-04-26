const pokemons = [
  {
    nome: "Bulbasaur",
    tipo: "planta",
    altura: "0.7 m",
    peso: "6.9 kg",
    categoria: "Seed",
    habilidades: "Overgrow",
    fraqueza: "🔥 Fogo",
    tipoIcon: "🌿 Planta",
    img: "assets/images/pokemons/Bulbasaur.png",
    evolucoes: [
      "assets/images/pokemons/Bulbasaur.png",
      "assets/images/pokemons/Bulbasaur-ev2.png",
      "assets/images/pokemons/Bulbasaur-ev3.png"
    ]
  },
  {
    nome: "Charmander",
    tipo: "fogo",
    altura: "0.6 m",
    peso: "8.5 kg",
    categoria: "Lizard",
    habilidades: "Blaze",
    fraqueza: "💧 Água",
    tipoIcon: "🔥 Fogo",
    img: "assets/images/pokemons/Charmander.png",
    evolucoes: ["assets/images/pokemons/Charmander.png"]
  },
  {
    nome: "Squirtle",
    tipo: "agua",
    altura: "0.5 m",
    peso: "9.0 kg",
    categoria: "Tiny Turtle",
    habilidades: "Torrent",
    fraqueza: "⚡ Elétrico",
    tipoIcon: "💧 Água",
    img: "assets/images/pokemons/Squirtle.png",
    evolucoes: ["assets/images/pokemons/Squirtle.png"]
  },
  {
    nome: "Abra",
    tipo: "psiquico",
    altura: "0.9 m",
    peso: "19.5 kg",
    categoria: "Psi",
    habilidades: "Synchronize",
    fraqueza: "👻 Fantasma",
    tipoIcon: "🔮 Psíquico",
    img: "assets/images/pokemons/Abra.png",
    evolucoes: ["assets/images/pokemons/Abra.png"]
  },
  {
    nome: "Bellsprout",
    tipo: "planta",
    altura: "0.7 m",
    peso: "4.0 kg",
    categoria: "Flower",
    habilidades: "Chlorophyll",
    fraqueza: "🔥 Fogo",
    tipoIcon: "🌿 Planta",
    img: "assets/images/pokemons/Bellsprout.png",
    evolucoes: ["assets/images/pokemons/Bellsprout.png"]
  },
  {
    nome: "Caterpie",
    tipo: "normal",
    altura: "0.3 m",
    peso: "2.9 kg",
    categoria: "Worm",
    habilidades: "Shield Dust",
    fraqueza: "🔥 Fogo",
    tipoIcon: "🐛 Normal",
    img: "assets/images/pokemons/Caterpie.png",
    evolucoes: ["assets/images/pokemons/Caterpie.png"]
  },
  {
    nome: "Clefairy",
    tipo: "normal",
    altura: "0.6 m",
    peso: "7.5 kg",
    categoria: "Fairy",
    habilidades: "Cute Charm",
    fraqueza: "⚔️ Aço",
    tipoIcon: "🌸 Normal",
    img: "assets/images/pokemons/Clefairy.png",
    evolucoes: ["assets/images/pokemons/Clefairy.png"]
  },
  {
    nome: "Eevee",
    tipo: "normal",
    altura: "0.3 m",
    peso: "6.5 kg",
    categoria: "Evolution",
    habilidades: "Run Away",
    fraqueza: "⚔️ Lutador",
    tipoIcon: "⭐ Normal",
    img: "assets/images/pokemons/Eevee.png",
    evolucoes: ["assets/images/pokemons/Eevee.png"]
  },
  {
    nome: "Goldeen",
    tipo: "agua",
    altura: "0.6 m",
    peso: "15.0 kg",
    categoria: "Goldfish",
    habilidades: "Swift Swim",
    fraqueza: "⚡ Elétrico",
    tipoIcon: "💧 Água",
    img: "assets/images/pokemons/Goldeen.png",
    evolucoes: ["assets/images/pokemons/Goldeen.png"]
  },
  {
    nome: "Growlithe",
    tipo: "fogo",
    altura: "0.7 m",
    peso: "19.0 kg",
    categoria: "Puppy",
    habilidades: "Intimidate",
    fraqueza: "💧 Água",
    tipoIcon: "🔥 Fogo",
    img: "assets/images/pokemons/Growlithe.png",
    evolucoes: ["assets/images/pokemons/Growlithe.png"]
  },
  {
    nome: "Jigglypuff",
    tipo: "normal",
    altura: "0.5 m",
    peso: "5.5 kg",
    categoria: "Balloon",
    habilidades: "Cute Charm",
    fraqueza: "⚔️ Aço",
    tipoIcon: "🎵 Normal",
    img: "assets/images/pokemons/Jigglypuff.png",
    evolucoes: ["assets/images/pokemons/Jigglypuff.png"]
  },
  {
    nome: "Krabby",
    tipo: "agua",
    altura: "0.4 m",
    peso: "6.5 kg",
    categoria: "River Crab",
    habilidades: "Hyper Cutter",
    fraqueza: "⚡ Elétrico",
    tipoIcon: "💧 Água",
    img: "assets/images/pokemons/Krabby.png",
    evolucoes: ["assets/images/pokemons/Krabby.png"]
  },
  {
    nome: "Lapras",
    tipo: "gelo",
    altura: "2.5 m",
    peso: "220.0 kg",
    categoria: "Transport",
    habilidades: "Water Absorb",
    fraqueza: "⚡ Elétrico",
    tipoIcon: "❄️ Gelo",
    img: "assets/images/pokemons/Lapras.png",
    evolucoes: ["assets/images/pokemons/Lapras.png"]
  },
  {
    nome: "Pidgey",
    tipo: "normal",
    altura: "0.3 m",
    peso: "1.8 kg",
    categoria: "Tiny Bird",
    habilidades: "Keen Eye",
    fraqueza: "⚡ Elétrico",
    tipoIcon: "🐦 Normal",
    img: "assets/images/pokemons/Pidgey.png",
    evolucoes: ["assets/images/pokemons/Pidgey.png"]
  },
  {
    nome: "Pikachu",
    tipo: "eletrico",
    altura: "0.4 m",
    peso: "6.0 kg",
    categoria: "Mouse",
    habilidades: "Static",
    fraqueza: "🌍 Terra",
    tipoIcon: "⚡ Elétrico",
    img: "assets/images/pokemons/Pikachu.png",
    evolucoes: ["assets/images/pokemons/Pikachu.png"]
  },
  {
    nome: "Ponyta",
    tipo: "fogo",
    altura: "1.0 m",
    peso: "30.0 kg",
    categoria: "Fire Horse",
    habilidades: "Run Away",
    fraqueza: "💧 Água",
    tipoIcon: "🔥 Fogo",
    img: "assets/images/pokemons/Ponyta.png",
    evolucoes: ["assets/images/pokemons/Ponyta.png"]
  },
  {
    nome: "Snorlax",
    tipo: "normal",
    altura: "2.1 m",
    peso: "460.0 kg",
    categoria: "Sleeping",
    habilidades: "Immunity",
    fraqueza: "⚔️ Lutador",
    tipoIcon: "😴 Normal",
    img: "assets/images/pokemons/Snorlax.png",
    evolucoes: ["assets/images/pokemons/Snorlax.png"]
  }
];

function renderPokemons(filtro) {
  const grid = document.getElementById("pokemonsGrid");
  grid.innerHTML = "";

  const lista = filtro === "todos"
    ? pokemons
    : pokemons.filter(p => p.tipo === filtro);

  if (lista.length === 0) {
    grid.innerHTML = `<p style="color:rgba(255,255,255,0.7); font-family:'Press Start 2P',cursive; font-size:0.7rem; grid-column:1/-1; padding:20px;">Nenhum pokémon encontrado.</p>`;
    return;
  }

  lista.forEach((poke, i) => {
    const card = document.createElement("div");
    card.classList.add("pokemon-card");
    card.style.animationDelay = `${i * 0.04}s`;
    card.innerHTML = `<img src="${poke.img}" alt="${poke.nome}" title="${poke.nome}" />`;
    card.addEventListener("click", () => abrirModal(poke));
    grid.appendChild(card);
  });
}

function inicializarFiltros() {
  const items = document.querySelectorAll(".filter-item");
  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      const filtro = item.getAttribute("data-filter");
      renderPokemons(filtro);
    });
  });
}

function abrirModal(poke) {
  const overlay = document.getElementById("modalOverlay");
  document.getElementById("modalName").textContent = poke.nome;
  document.getElementById("modalAltura").textContent = poke.altura;
  document.getElementById("modalPeso").textContent = poke.peso;
  document.getElementById("modalCategoria").textContent = poke.categoria;
  document.getElementById("modalHabilidades").textContent = poke.habilidades;
  document.getElementById("modalTipo").textContent = poke.tipoIcon;
  document.getElementById("modalFraqueza").textContent = poke.fraqueza;

  const evoArea = document.getElementById("modalEvolutions");
  evoArea.innerHTML = "";
  if (poke.evolucoes && poke.evolucoes.length > 1) {
    poke.evolucoes.forEach((evoImg, idx) => {
      const img = document.createElement("img");
      img.src = evoImg;
      img.alt = poke.nome + " ev" + (idx + 1);
      evoArea.appendChild(img);
      if (idx < poke.evolucoes.length - 1) {
        const arrow = document.createElement("span");
        arrow.classList.add("modal-evo-arrow");
        arrow.textContent = "›";
        evoArea.appendChild(arrow);
      }
    });
  } else if (poke.evolucoes && poke.evolucoes.length === 1) {
    const img = document.createElement("img");
    img.src = poke.evolucoes[0];
    img.alt = poke.nome;
    img.style.width = "110px";
    img.style.height = "110px";
    evoArea.appendChild(img);
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function gerarCarta() {
  const nome = document.getElementById("cartaNome").value.trim();
  const vida = document.getElementById("cartaVida").value.trim();
  const pokemonSel = document.getElementById("cartaPokemon").value;
  const ataque = document.getElementById("cartaAtaque").value.trim();
  const categoria = document.getElementById("cartaCategoria").value;
  const resistencia = document.getElementById("cartaResistencia").value.trim();

  if (!nome || !vida || !pokemonSel || !ataque || !categoria || !resistencia) {
    alert("Por favor, preencha todos os campos antes de gerar a carta!");
    return;
  }

  const pokeData = pokemons.find(p => p.nome === pokemonSel);
  const imgSrc = pokeData ? pokeData.img : "images/pokemons/Pikachu.png";

  document.getElementById("cartaNomeDisplay").textContent = nome;
  document.getElementById("cartaVidaDisplay").textContent = `HP ${vida}`;
  document.getElementById("cartaPokeImg").src = imgSrc;
  document.getElementById("cartaPokeImg").alt = pokemonSel;
  document.getElementById("cartaCategoriaDisplay").textContent = `Categoria: ${categoria}`;
  document.getElementById("cartaAtaqueDisplay").textContent = `⚔ ${ataque}`;
  document.getElementById("cartaResistenciaDisplay").textContent = `🛡 Resist.: ${resistencia}`;

  const cartaDados = document.getElementById("cartaDados");
  cartaDados.style.display = "flex";

  const preview = document.getElementById("cartaPreview");
  preview.classList.remove("revealed");
  void preview.offsetWidth;
  preview.classList.add("revealed");
}

function inicializarNav() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  const links = navLinks.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

function inicializarScrollSpy() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active-link");
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

document.getElementById("modalClose").addEventListener("click", fecharModal);
document.getElementById("modalOverlay").addEventListener("click", function(e) {
  if (e.target === this) fecharModal();
});
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") fecharModal();
});

document.addEventListener("DOMContentLoaded", () => {
  renderPokemons("todos");
  inicializarFiltros();
  inicializarNav();
  inicializarScrollSpy();
});