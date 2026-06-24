(function () {
  const TICKER = [
    ['USD/BRL', '5,18', 'down', '▼ 0,12%'],
    ['EUR/BRL', '5,64', 'up', '▲ 0,08%'],
    ['IBOVESPA', '132.450', 'up', '▲ 0,34%'],
    ['SOJA/SC', 'R$ 142,30', 'down', '▼ 0,55%'],
    ['MILHO/SC', 'R$ 68,90', 'up', '▲ 1,1%'],
    ['BRENT', 'US$ 82,40', 'down', '▼ 0,22%'],
    ['CAFÉ/SC', 'R$ 1.240', 'up', '▲ 2,3%'],
    ['BTC/USD', '67.200', 'up', '▲ 1,8%']
  ];

  const AUTOR = 'Redação Sul em Foco';

  const CATEGORY_DATA = {
    'Política': {
      banner: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1400&q=80',
      subtitle: 'Assembleias, governo estadual e decisões que moldam o Sul',
      navIndex: 1,
      articles: [
        { img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&q=75', date: '22 jun.', title: 'Paraná aprova pacote de incentivos para pequenos produtores rurais', excerpt: 'Lei prevê crédito subsidiado e isenção de ICMS para propriedades de até 50 hectares nos 399 municípios paranaenses.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=500&q=75', date: '22 jun.', title: 'Câmara de Curitiba debate projeto que regula agrotóxicos em zonas urbanas', excerpt: 'Proposta estabelece faixa de exclusão de 500 metros ao redor de escolas e hospitais para aplicação de defensivos.', author: AUTOR, time: '5 min' },
        { img: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=500&q=75', date: '21 jun.', title: 'Codessul propõe corredor logístico integrado entre PR, SC e RS', excerpt: 'Governadores apresentaram plano conjunto de rodovias e ferrovias para escoamento de grãos até o Mercosul.', author: AUTOR, time: '3 min' },
        { img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=75', date: '21 jun.', title: 'Assembleia gaúcha aprova lei de transparência em contratos de obras públicas', excerpt: 'Texto obriga publicação em tempo real de licitações acima de R$ 500 mil no portal estadual.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1577962917302-cd8740dce7f5?w=500&q=75', date: '20 jun.', title: 'Senador catarinense preside comissão sobre reforma tributária regional', excerpt: 'Audiências públicas em Florianópolis e Chapecó reuniram prefeitos e entidades empresariais do Sul.', author: AUTOR, time: '6 min' },
        { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=75', date: '20 jun.', title: 'Prefeitura de Florianópolis lança plano de mobilidade com VLT costeiro', excerpt: 'Projeto de R$ 1,8 bi prevê ligação entre o centro e bairros da ilha até 2030, com consulta popular em julho.', author: AUTOR, time: '5 min' }
      ]
    },
    'Finanças': {
      banner: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80',
      subtitle: 'Mercados, empresas e economia dos três estados do Sul',
      navIndex: 2,
      articles: [
        { img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=75', date: '22 jun.', title: 'Selic estável impulsiona crédito rural nas cooperativas paranaenses', excerpt: 'Sistema Ocepar registrou alta de 18% na concessão de financiamentos para custeio da safra de inverno.', author: AUTOR, time: '5 min' },
        { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=75', date: '22 jun.', title: 'Exportações gaúchas batem recorde de US$ 8,2 bi no primeiro trimestre', excerpt: 'Soja, carne bovina e celulose lideram embarques pelo Porto de Rio Grande e fronteira terrestre.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1551281049-bebda4e38f71?w=500&q=75', date: '21 jun.', title: 'Fintechs de Curitiba captam R$ 120 mi em rodada série A', excerpt: 'Startup de pagamentos para agronegócio planeja expansão para Santa Catarina e Rio Grande do Sul.', author: AUTOR, time: '3 min' },
        { img: 'https://images.unsplash.com/photo-1642790106117-e829e14a794f?w=500&q=75', date: '21 jun.', title: 'Ibovespa reage a IPCA: papéis de agronegócio lideram altas no pregão', excerpt: 'Ações de frigoríficos gaúchos e exportadoras de grãos subiram até 3,2% na sessão desta segunda.', author: AUTOR, time: '2 min' },
        { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=75', date: '20 jun.', title: 'Mercado imobiliário catarinense projeta valorização de 8% em 2026', excerpt: 'Secovi-SC aponta aquecimento em Balneário Camboriú e Florianópolis, com lançamentos acima de 2025.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=500&q=75', date: '19 jun.', title: 'Cooperativas de crédito do PR ampliam linhas para agricultura familiar', excerpt: 'Novas modalidades incluem crédito para energia solar em propriedades rurais e modernização de silos.', author: AUTOR, time: '5 min' }
      ]
    },
    'Agro': {
      banner: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80',
      subtitle: 'Safra, cooperativismo e inovação no campo sulista',
      navIndex: 3,
      articles: [
        { img: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&q=75', date: '22 jun.', title: 'Safra recorde de soja no Paraná deve movimentar R$ 48 bi em 2026', excerpt: 'IAPAR estima 21,4 milhões de toneladas, com produtividade recorde no Oeste e Sudoeste do estado.', author: AUTOR, time: '6 min' },
        { img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&q=75', date: '22 jun.', title: 'Sensores de umidade reduzem uso de água em 40% nas lavouras paranaenses', excerpt: 'Produtores de Cascavel adotam sistema israelense que cruza dados de solo com previsão climática.', author: AUTOR, time: '5 min' },
        { img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&q=75', date: '21 jun.', title: 'Erva-mate gaúcha recebe indicação geográfica e abre mercado europeu', excerpt: 'Certificação do INPI deve impulsionar exportações do produto em até 60% nos próximos dois anos.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=75', date: '21 jun.', title: 'Cooperativas catarinenses investem R$ 1,2 bi em beneficiamento de grãos', excerpt: 'Programa prevê modernização de 38 unidades armazenadoras até o final de 2027.', author: AUTOR, time: '3 min' },
        { img: 'https://images.unsplash.com/photo-1625246333195-78d9c038adbc?w=500&q=75', date: '20 jun.', title: 'Trigo gaúcho colhe safra acima da média com clima favorável no RS', excerpt: 'Emater prevê produção de 3,8 milhões de toneladas, impulsionada por chuvas regulares no inverno.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1592982537447-7447970a9d94?w=500&q=75', date: '19 jun.', title: 'Exportação de maçã via Paranaguá cresce 15% e abre rotas para a Ásia', excerpt: 'Produtores de São Joaquim (SC) firmam contrato com importadores chineses para embarque no segundo semestre.', author: AUTOR, time: '5 min' }
      ]
    },
    'Esportes': {
      banner: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&q=80',
      subtitle: 'Futebol, esportes olímpicos e competições regionais',
      navIndex: 4,
      articles: [
        { img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=75', date: '22 jun.', title: 'Athletico vence fora de casa e sobe para segundo no Brasileirão', excerpt: 'Com gol de Pablo na reta final, o Rubro-Negro ficou com os três pontos diante do Flamengo no Maracanã.', author: AUTOR, time: '2 min' },
        { img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=75', date: '22 jun.', title: 'Coritiba anuncia técnico português para a temporada 2026/27', excerpt: 'Treinador chega com dois títulos nacionais em Portugal e estreia no Couto Pereira no próximo sábado.', author: AUTOR, time: '3 min' },
        { img: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=500&q=75', date: '21 jun.', title: 'Tenista curitibana avança às quartas de Roland Garros Júnior', excerpt: 'Giovana Matos, 17 anos, venceu adversária francesa em sets diretos e lidera o ranking brasileiro sub-18.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=500&q=75', date: '21 jun.', title: 'Paraná Clube lança peneiras em 18 municípios para revelar talentos', excerpt: 'Projeto de base oferece bolsas de estudo a jovens de baixa renda selecionados até agosto.', author: AUTOR, time: '3 min' },
        { img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&q=75', date: '20 jun.', title: 'Cascavel sedia etapa do Campeonato Paranaense de Ciclismo', excerpt: 'Percurso de 180 km atrai mais de 300 atletas de seis estados e percorre estradas rurais do Oeste.', author: AUTOR, time: '3 min' },
        { img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=75', date: '20 jun.', title: 'Inter de Porto Alegre confirma contratação de meia argentino', excerpt: 'Jogador de 24 anos assina por três temporadas e reforça elenco para a disputa da Libertadores.', author: AUTOR, time: '2 min' }
      ]
    },
    'Gastronomia': {
      banner: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1400&q=80',
      subtitle: 'Sabores coloniais, festivais e a alta gastronomia do Sul',
      navIndex: 6,
      articles: [
        { img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=75', date: '21 jun.', title: 'Festival de pinhão em São José dos Pinhais bate recorde de visitantes', excerpt: 'Edição 2026 reuniu 85 mil pessoas em três dias, com pratos típicos e feira de produtores locais.', author: AUTOR, time: '3 min' },
        { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=75', date: '22 jun.', title: 'Restaurante de Gramado entra na lista regional de alta gastronomia', excerpt: 'Chef gaúcho é reconhecido por menu degustação com ingredientes da Serra e harmonização com vinhos locais.', author: AUTOR, time: '5 min' },
        { img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=75', date: '21 jun.', title: 'Chef curitibano resgata receitas de imigrantes ucranianos no Batel', excerpt: 'Novo restaurante serve varenyky e borscht com ingredientes de produtores da Região Metropolitana.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=75', date: '20 jun.', title: 'Feira de produtos coloniais em Nova Petrópolis atrai turistas da região', excerpt: 'Evento reúne queijos artesanais, embutidos e doces típicos de colonização alemã no Rio Grande do Sul.', author: AUTOR, time: '3 min' },
        { img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=500&q=75', date: '20 jun.', title: 'Cervejarias artesanais de Blumenau expandem exportação para a Europa', excerpt: 'Três microcervejarias catarinenses fecharam contratos de distribuição na Alemanha e na Áustria.', author: AUTOR, time: '4 min' },
        { img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=75', date: '19 jun.', title: 'Festival do Barreado em Morretes celebra prato típico do litoral paranaense', excerpt: 'Receita de carne cozida em panela de barro durante 12 horas é protagonista do evento de três dias.', author: AUTOR, time: '3 min' }
      ]
    }
  };

  const pages = {
    home: document.getElementById('page-home'),
    reportagem: document.getElementById('page-reportagem'),
    categoria: document.getElementById('page-categoria'),
    tirinhas: document.getElementById('page-tirinhas')
  };
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const catTitle = document.getElementById('cat-title-text');
  const catSubtitle = document.getElementById('cat-subtitle-text');
  const catHeroBg = document.getElementById('cat-hero-bg');
  const catGrid = document.getElementById('cat-grid');
  const tickerTrack = document.getElementById('ticker-track');

  function renderTicker() {
    if (!tickerTrack) return;
    const item = ([label, val, dir, change]) =>
      `<span class="ticker-item">${label} <strong>${val}</strong> <span class="${dir}">${change}</span></span>`;
    const markup = TICKER.map(item).join('');
    tickerTrack.innerHTML = markup + markup;
  }

  function renderCategoryGrid(catName) {
    const data = CATEGORY_DATA[catName];
    if (!data || !catGrid) return;
    const frag = document.createDocumentFragment();
    data.articles.forEach(a => {
      const art = document.createElement('article');
      art.className = 'news-card';
      art.dataset.nav = 'reportagem';
      art.innerHTML = `
        <div class="news-card-img"><img src="${a.img}" alt="" loading="lazy"></div>
        <div class="news-card-body">
          <span class="news-card-tag">${catName} · ${a.date}</span>
          <h3 class="news-card-title">${a.title}</h3>
          <p class="news-card-excerpt">${a.excerpt}</p>
          <div class="news-card-meta"><span>Por ${a.author}</span><span>${a.time}</span></div>
        </div>`;
      frag.appendChild(art);
    });
    catGrid.replaceChildren(frag);
  }

  function showPage(pageName, catName) {
    Object.values(pages).forEach(p => p?.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    if (pageName === 'home') {
      pages.home.classList.add('active');
      navLinks[0]?.classList.add('active');
    } else if (pageName === 'reportagem') {
      pages.reportagem.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pageName === 'categoria') {
      const data = CATEGORY_DATA[catName];
      pages.categoria.classList.add('active');
      if (catTitle) catTitle.textContent = catName || 'Categoria';
      if (catSubtitle) catSubtitle.textContent = data?.subtitle || ('Todas as notícias de ' + (catName || 'Categoria'));
      if (catHeroBg) catHeroBg.style.backgroundImage = data?.banner ? `url('${data.banner}')` : '';
      renderCategoryGrid(catName);
      if (data?.navIndex != null) navLinks[data.navIndex]?.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (pageName === 'tirinhas') {
      pages.tirinhas.classList.add('active');
      navLinks[5]?.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  document.body.addEventListener('click', e => {
    const el = e.target.closest('[data-nav]');
    if (!el) return;
    e.preventDefault();
    const page = el.dataset.nav;
    showPage(page === 'categoria' ? 'categoria' : page, el.dataset.cat);
  });

  document.body.addEventListener('keydown', e => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = e.target.closest('[role="link"][data-nav]');
    if (!el) return;
    e.preventDefault();
    el.click();
  });

  renderTicker();
})();
