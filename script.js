/* ================================================================
   DATA
   Prices marked (est.) are researched Sept-2026 Nigerian UK-import/AsSeen
   market reference points, NOT your real supplier cost — check and adjust
   every one against your own buying price + margin before going live.
================================================================ */
const TINTS = [
  ['#8a8a8f','#5a5a5f'], ['#d4d4d8','#a3a3a8'], ['#6b6f76','#3d4046'], ['#8a7ca8','#5b4e79'],
  ['#4a6d8c','#2c4a63'], ['#8a7ca8','#5b4e79'], ['#5b5b63','#2b2b31'], ['#8a7ca8','#5b4e79'],
  ['#7d8a8f','#4a5459'], ['#a13e3e','#722a2a'], ['#a13e3e','#722a2a'], ['#4a6b8c','#2c4460'],
  ['#5b5b63','#2b2b31'], ['#8a8a8f','#5a5a5f'], ['#c98b5e','#a06a3e'], ['#4a6d8c','#2c4a63'],
  ['#5b5b63','#2b2b31'], ['#e0dcd4','#b8b2a4'], ['#c9838f','#9a5a66'], ['#5b5b63','#2b2b31'],
  ['#e8e3da','#c4bcac'], ['#8a7ca8','#5b4e79'], ['#5b5b63','#2b2b31'], ['#4a6d8c','#2c4a63'],
  ['#e8e3da','#c4bcac'], ['#5b5b63','#2b2b31'], ['#c98b5e','#a06a3e'], ['#7a2f3d','#4d1b24'],
  ['#5b5b63','#2b2b31'], ['#e8e3da','#c4bcac'], ['#4a5a52','#2c3730'], ['#7a2f3d','#4d1b24'],
  ['#3a3d42','#1e2023'], ['#3a3d42','#1e2023']
];
const PRODUCTS = [
  /* ---- iPhone 7 / 8 / XR ---- */
  {id:1,  name:'iPhone 7',            storage:'32GB',  series:'7',  seriesLabel:'iPhone 7',  price:75000,  color:'Assorted', image:'images/iphone-7-32gb.jpg'},
  {id:2,  name:'iPhone 8',            storage:'64GB',  series:'8',  seriesLabel:'iPhone 8',  price:110000, color:'Assorted', image:'images/iphone-8-64gb.jpg'},
  {id:5,  name:'iPhone XR',           storage:'64GB',  series:'xr', seriesLabel:'iPhone XR', price:190000, color:'Assorted', image:'images/iphone-xr-64gb.jpg'},
  /* ---- iPhone 11 ---- */
  {id:3,  name:'iPhone 11',           storage:'64GB',  series:'11', seriesLabel:'iPhone 11', price:235000, color:'Assorted', image:'images/iphone-11-64gb.jpg'},
  {id:4,  name:'iPhone 11',           storage:'128GB', series:'11', seriesLabel:'iPhone 11', price:260000, color:'Assorted', image:'images/iphone-11-128gb.jpg'},
  /* ---- iPhone 12 series ---- */
  {id:6,  name:'iPhone 12',           storage:'64GB',  series:'12', seriesLabel:'iPhone 12 series', price:250000, color:'Assorted', image:'images/iphone-12-64gb.jpg'},
  {id:7,  name:'iPhone 12',           storage:'128GB', series:'12', seriesLabel:'iPhone 12 series', price:300000, color:'Assorted', image:'images/iphone-12-128gb.jpg'},
  {id:8,  name:'iPhone 12 Pro',       storage:'128GB', series:'12', seriesLabel:'iPhone 12 series', price:365000, color:'Assorted', image:'images/iphone-12pro-128gb.jpg'},
  {id:9,  name:'iPhone 12 Pro Max',   storage:'128GB', series:'12', seriesLabel:'iPhone 12 series', price:450000, color:'Assorted', image:'images/iphone-12promax-128gb.jpg'},
  {id:12, name:'iPhone 12 Pro Max',   storage:'256GB', series:'12', seriesLabel:'iPhone 12 series', price:490000, color:'Assorted', image:'images/iphone-12promax-256gb.jpg'},
  /* ---- iPhone 13 series ---- */
  {id:10, name:'iPhone 13',           storage:'128GB', series:'13', seriesLabel:'iPhone 13 series', price:365000, color:'Assorted', image:'images/iphone-13-128gb.jpg'},
  {id:11, name:'iPhone 13',           storage:'256GB', series:'13', seriesLabel:'iPhone 13 series', price:380000, color:'Assorted', image:'images/iphone-13-256gb.jpg'},
  {id:14, name:'iPhone 13 Pro',       storage:'128GB', series:'13', seriesLabel:'iPhone 13 series', price:490000, color:'Assorted', image:'images/iphone-13pro-128gb.jpg'},        // est.
  {id:15, name:'iPhone 13 Pro Max',   storage:'128GB', series:'13', seriesLabel:'iPhone 13 series', price:590000, color:'Assorted', image:'images/iphone-13promax-128gb.jpg'},     // est.
  /* ---- iPhone 14 series ---- */
  {id:16, name:'iPhone 14',           storage:'128GB', series:'14', seriesLabel:'iPhone 14 series', price:440000, color:'Assorted', image:'images/iphone-14-128gb.jpg'},          // est.
  {id:17, name:'iPhone 14 Plus',      storage:'128GB', series:'14', seriesLabel:'iPhone 14 series', price:580000, color:'Assorted', image:'images/iphone-14plus-128gb.jpg'},      // est.
  {id:13, name:'iPhone 14 Pro',       storage:'128GB', series:'14', seriesLabel:'iPhone 14 series', price:685000, color:'Assorted', image:'images/iphone-14pro-128gb.jpg'},
  {id:18, name:'iPhone 14 Pro Max',   storage:'128GB', series:'14', seriesLabel:'iPhone 14 series', price:740000, color:'Assorted', image:'images/iphone-14promax-128gb.jpg'},    // est.
  /* ---- iPhone 15 series ---- */
  {id:19, name:'iPhone 15',           storage:'128GB', series:'15', seriesLabel:'iPhone 15 series', price:610000,  color:'Assorted', image:'images/iphone-15-128gb.jpg'},         // est.
  {id:20, name:'iPhone 15 Plus',      storage:'128GB', series:'15', seriesLabel:'iPhone 15 series', price:590000,  color:'Assorted', image:'images/iphone-15plus-128gb.jpg'},     // est.
  {id:21, name:'iPhone 15 Pro',       storage:'128GB', series:'15', seriesLabel:'iPhone 15 series', price:810000,  color:'Assorted', image:'images/iphone-15pro-128gb.jpg'},      // est.
  {id:22, name:'iPhone 15 Pro Max',   storage:'256GB', series:'15', seriesLabel:'iPhone 15 series', price:970000, color:'Assorted', image:'images/iphone-15promax-256gb.jpg'},   // est.
  /* ---- iPhone 16 series ---- */
  {id:27, name:'iPhone 16e',          storage:'128GB', series:'16', seriesLabel:'iPhone 16 series', price:650000,  color:'Assorted', image:'images/iphone-16e-128gb.jpg'},       // est.
  {id:23, name:'iPhone 16',           storage:'128GB', series:'16', seriesLabel:'iPhone 16 series', price:960000,  color:'Assorted', image:'images/iphone-16-128gb.jpg'},        // est.
  {id:24, name:'iPhone 16 Plus',      storage:'128GB', series:'16', seriesLabel:'iPhone 16 series', price:1050000, color:'Assorted', image:'images/iphone-16plus-128gb.jpg'},    // est.
  {id:25, name:'iPhone 16 Pro',       storage:'128GB', series:'16', seriesLabel:'iPhone 16 series', price:1270000, color:'Assorted', image:'images/iphone-16pro-128gb.jpg'},     // est.
  {id:26, name:'iPhone 16 Pro Max',   storage:'256GB', series:'16', seriesLabel:'iPhone 16 series', price:1580000, color:'Assorted', image:'images/iphone-16promax-256gb.jpg'},  // est.
  /* ---- iPhone 17 series + Air ---- */
  {id:32, name:'iPhone 17e',          storage:'128GB', series:'17', seriesLabel:'iPhone 17 series', price:870000,  color:'Assorted', image:'images/iphone-17e-128gb.jpg', condition:'new'},       // est.
  {id:28, name:'iPhone 17',           storage:'128GB', series:'17', seriesLabel:'iPhone 17 series', price:1180000, color:'Assorted', image:'images/iphone-17-128gb.jpg', condition:'new'},        // est.
  {id:31, name:'iPhone Air',          storage:'256GB', series:'air', seriesLabel:'iPhone Air',       price:109000, color:'Assorted', image:'images/iphone-air-256gb.jpg', condition:'new'},      // est.
  {id:29, name:'iPhone 17 Pro',       storage:'256GB', series:'17', seriesLabel:'iPhone 17 series', price:1750000, color:'Assorted', image:'images/iphone-17pro-256gb.jpg', condition:'new'},     // est.
  {id:30, name:'iPhone 17 Pro Max',   storage:'256GB', series:'17', seriesLabel:'iPhone 17 series', price:1900000, color:'Assorted', image:'images/iphone-17promax-256gb.jpg', condition:'new'},  // est.
  /* ---- iPhone 18 Pro / Pro Max — brand new (released 18 Sept 2026), sold
     sealed, NOT "AsSeen" — see condition:'new' handling in the render code ---- */
  {id:33, name:'iPhone 18 Pro',       storage:'256GB', series:'18', seriesLabel:'iPhone 18 series', price:2020000, color:'Assorted', image:'images/iphone-18pro-256gb.jpg', condition:'new'},     // est.
  {id:34, name:'iPhone 18 Pro Max',   storage:'256GB', series:'18', seriesLabel:'iPhone 18 series', price:2580000, color:'Assorted', image:'images/iphone-18promax-256gb.jpg', condition:'new'}, // est.
].map((p,i)=>({...p, tint:TINTS[i % TINTS.length]}));

const SERIES_ORDER = [
  {key:'7', label:'iPhone 7'}, {key:'8', label:'iPhone 8'}, {key:'xr', label:'iPhone XR'},
  {key:'11', label:'iPhone 11'}, {key:'12', label:'iPhone 12 series'}, {key:'13', label:'iPhone 13 series'},
  {key:'14', label:'iPhone 14 series'}, {key:'15', label:'iPhone 15 series'}, {key:'16', label:'iPhone 16 series'},
  {key:'17', label:'iPhone 17 series'}, {key:'air', label:'iPhone Air'}, {key:'18', label:'iPhone 18 series'}
];

/* ================================================================
   STATE & STORAGE PERSISTENCE
================================================================ */
function loadStorage(key, fallback){
  try {
    const val = localStorage.getItem('mg_' + key);
    return val ? JSON.parse(val) : fallback;
  } catch(e){ return fallback; }
}
function saveStorage(key, value){
  try {
    localStorage.setItem('mg_' + key, JSON.stringify(value));
  } catch(e){}
}

const state = {
  cart: loadStorage('cart', []),
  wishlist: loadStorage('wishlist', []),
  filters: { series: new Set(), storage: new Set(), maxPrice: 2850000, query: '' },
  sort: 'default',
  qvId: null,
  removeTarget: null, // {type:'cart', id}
};

/* Theme initialization from storage */
(function initTheme(){
  try {
    const saved = localStorage.getItem('mg_theme');
    const isDark = saved === 'dark' || (!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if(isDark){
      document.body.setAttribute('data-theme', 'dark');
      const sun = document.getElementById('themeIconSun');
      const moon = document.getElementById('themeIconMoon');
      if(sun) sun.style.display = 'none';
      if(moon) moon.style.display = 'block';
    }
  } catch(e){}
})();

const fmt = n => '₦' + n.toLocaleString('en-NG');
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

/* ================================================================
   TOASTS
================================================================ */
function toast(msg, type='ok'){
  const stack = $('#toastStack');
  const el = document.createElement('div');
  el.className = 'toast' + (type==='warn' ? ' warn' : '');
  el.innerHTML = (type==='warn'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6L9 17l-5-5"/></svg>')
    + '<span>' + msg + '</span>';
  stack.appendChild(el);
  setTimeout(()=> el.remove(), 3050);
}

/* ================================================================
   HEADER SCROLL / BACK TO TOP
================================================================ */
const header = $('#siteHeader');
const backToTop = $('#backToTop');
window.addEventListener('scroll', ()=>{
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 8);
  backToTop.classList.toggle('show', y > 500);
  updateActiveNav();
}, {passive:true});
backToTop.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

/* active nav indicator via scroll position */
const navSections = ['home','shop','deals','about','contact'];
function updateActiveNav(){
  let current = 'home';
  for(const id of navSections){
    const el = document.getElementById(id);
    if(el && el.getBoundingClientRect().top <= 130) current = id;
  }
  $$('.nav-link').forEach(a=> a.classList.toggle('active', a.dataset.nav===current));
}

/* ============ GLOBAL ESCAPE KEY HANDLER ============ */
window.addEventListener('keydown', e=>{
  if(e.key === 'Escape'){
    closeQuickView();
    closeMobileDrawer();
    closeCart();
    closeWishlist();
    const filtersPanel = $('#filtersPanel');
    if(filtersPanel) filtersPanel.classList.remove('open');
    const scrim = $('#scrim');
    if(scrim) scrim.classList.remove('show');
    const checkoutScrim = $('#checkoutScrim');
    if(checkoutScrim) checkoutScrim.classList.remove('show');
    const confirmScrim = $('#confirmScrim');
    if(confirmScrim) confirmScrim.classList.remove('show');
    const successScrim = $('#successScrim');
    if(successScrim) successScrim.classList.remove('show');
    document.body.style.overflow = '';
  }
});

/* ================================================================
   HAMBURGER / MOBILE DRAWER
================================================================ */
const hamburger = $('#hamburger'), mobileDrawer = $('#mobileDrawer'), scrim = $('#scrim');
function openMobileDrawer(){ mobileDrawer.classList.add('open'); scrim.classList.add('show'); hamburger.classList.add('active'); hamburger.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
function closeMobileDrawer(){ mobileDrawer.classList.remove('open'); scrim.classList.remove('show'); hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
hamburger.addEventListener('click', ()=> mobileDrawer.classList.contains('open') ? closeMobileDrawer() : openMobileDrawer());
$('#mobileDrawerClose').addEventListener('click', closeMobileDrawer);
scrim.addEventListener('click', ()=>{
  closeMobileDrawer();
  closeCart();
  closeWishlist();
  const filtersPanel = $('#filtersPanel');
  if(filtersPanel) filtersPanel.classList.remove('open');
});
$$('.mobile-nav-link').forEach(a=> a.addEventListener('click', closeMobileDrawer));

/* ================================================================
   SEARCH TOGGLE (navbar)
================================================================ */
const searchForm = $('#searchForm');
$('#searchToggle').addEventListener('click', ()=>{
  searchForm.classList.toggle('open');
  if(searchForm.classList.contains('open')) $('#navSearchInput').focus();
});

let navSearchTimer = null;
$('#navSearchInput').addEventListener('input', e=>{
  state.filters.query = e.target.value;
  $('#shopSearchInput').value = e.target.value;
  renderProducts();
  clearTimeout(navSearchTimer);
  if(e.target.value.trim()){
    navSearchTimer = setTimeout(()=>{
      const shopEl = document.getElementById('shop');
      if(shopEl && window.scrollY < shopEl.offsetTop - 150){
        shopEl.scrollIntoView({behavior:'smooth'});
      }
    }, 450);
  }
});

/* ================================================================
   THEME TOGGLE
================================================================ */
const themeToggle = $('#themeToggle');
themeToggle.addEventListener('click', ()=>{
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  const nextTheme = isDark ? 'light' : 'dark';
  document.body.setAttribute('data-theme', nextTheme);
  try { localStorage.setItem('mg_theme', nextTheme); } catch(e){}
  $('#themeIconSun').style.display = nextTheme === 'light' ? 'block' : 'none';
  $('#themeIconMoon').style.display = nextTheme === 'dark' ? 'none' : 'block';
  toast(nextTheme === 'light' ? 'Light mode on' : 'Dark mode on');
});

/* ================================================================
   TICKER
================================================================ */
(function buildTicker(){
  const items = ['UK IMPORTED', 'GRADED AS SEEN', 'RC 9175497 REGISTERED', 'iPHONE 7 → 18 PRO IN STOCK', 'NATIONWIDE DELIVERY', 'CALL +234 906 939 5763'];
  const row = $('#tickerRow');
  const html = items.map(t=>`<span><b>●</b> ${t}</span>`).join('');
  row.innerHTML = html + html; // duplicate for seamless loop
})();

/* ================================================================
   BUILD FILTER PANEL
================================================================ */
function buildFilters(){
  const seriesWrap = $('#seriesFilters');
  seriesWrap.innerHTML = SERIES_ORDER.map(s=>{
    const count = PRODUCTS.filter(p=>p.series===s.key).length;
    return `<label class="chip"><input type="checkbox" data-series="${s.key}"> ${s.label} <span class="count">${count}</span></label>`;
  }).join('');
  const storages = [...new Set(PRODUCTS.map(p=>p.storage))];
  const storageWrap = $('#storageFilters');
  storageWrap.innerHTML = storages.map(s=>{
    const count = PRODUCTS.filter(p=>p.storage===s).length;
    return `<label class="chip"><input type="checkbox" data-storage="${s}"> ${s} <span class="count">${count}</span></label>`;
  }).join('');

  seriesWrap.addEventListener('change', e=>{
    const key = e.target.dataset.series;
    if(!key) return;
    e.target.checked ? state.filters.series.add(key) : state.filters.series.delete(key);
    renderProducts();
  });
  storageWrap.addEventListener('change', e=>{
    const key = e.target.dataset.storage;
    if(!key) return;
    e.target.checked ? state.filters.storage.add(key) : state.filters.storage.delete(key);
    renderProducts();
  });
}
buildFilters();

function updateSeriesPillsActive(activeKey){
  $$('.series-pill').forEach(pill=>{
    pill.classList.toggle('active', pill.dataset.filterSeries === activeKey);
  });
}

function updateBreadcrumbsAndActiveFilters(list){
  const crumb = $('#crumbCurrent');
  if(crumb){
    if(state.filters.query){
      crumb.textContent = `Search: "${state.filters.query}"`;
    } else if(state.filters.series.size === 1){
      const sKey = [...state.filters.series][0];
      const match = SERIES_ORDER.find(s=>s.key===sKey);
      crumb.textContent = match ? match.label : 'Shop All iPhones';
    } else if(state.filters.series.size > 1){
      crumb.textContent = `Filtered Series (${state.filters.series.size})`;
    } else {
      crumb.textContent = 'Shop All iPhones';
    }
  }

  const bar = $('#activeFiltersBar');
  if(!bar) return;
  const tags = [];
  state.filters.series.forEach(k=>{
    const s = SERIES_ORDER.find(x=>x.key===k);
    tags.push({type:'series', key:k, label:s?s.label:k});
  });
  state.filters.storage.forEach(st=>{
    tags.push({type:'storage', key:st, label:st});
  });
  if(state.filters.maxPrice < 2850000){
    tags.push({type:'price', key:'price', label:`Max ${fmt(state.filters.maxPrice)}`});
  }
  if(state.filters.query){
    tags.push({type:'query', key:'query', label:`"${state.filters.query}"`});
  }

  if(tags.length === 0){
    bar.style.display = 'none';
    bar.innerHTML = '';
    return;
  }

  bar.style.display = 'flex';
  bar.innerHTML = `<span class="active-filters-title">Filters:</span>` +
    tags.map(t=>`
      <button type="button" class="filter-tag" data-tag-type="${t.type}" data-tag-key="${t.key}" aria-label="Remove filter ${t.label}">
        <span>${t.label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    `).join('') +
    `<button type="button" class="filter-clear-all" id="barClearAll">Clear all</button>`;
}

const activeFiltersBar = $('#activeFiltersBar');
if(activeFiltersBar){
  activeFiltersBar.addEventListener('click', e=>{
    const clearAll = e.target.closest('#barClearAll');
    if(clearAll){
      $('#clearFilters').click();
      return;
    }
    const tag = e.target.closest('.filter-tag');
    if(!tag) return;
    const {tagType, tagKey} = tag.dataset;
    if(tagType === 'series'){
      state.filters.series.delete(tagKey);
      const input = $(`#seriesFilters input[data-series="${tagKey}"]`);
      if(input) input.checked = false;
      updateSeriesPillsActive(state.filters.series.size === 1 ? [...state.filters.series][0] : null);
    } else if(tagType === 'storage'){
      state.filters.storage.delete(tagKey);
      const input = $(`#storageFilters input[data-storage="${tagKey}"]`);
      if(input) input.checked = false;
    } else if(tagType === 'price'){
      state.filters.maxPrice = 2850000;
      $('#priceRange').value = 2850000;
      $('#priceRangeVal').textContent = fmt(2850000);
    } else if(tagType === 'query'){
      state.filters.query = '';
      $('#shopSearchInput').value = '';
      $('#navSearchInput').value = '';
    }
    renderProducts();
  });
}

$('#priceRange').addEventListener('input', e=>{
  state.filters.maxPrice = Number(e.target.value);
  $('#priceRangeVal').textContent = fmt(state.filters.maxPrice);
  renderProducts();
});

$('#clearFilters').addEventListener('click', ()=>{
  state.filters.series.clear(); state.filters.storage.clear(); state.filters.maxPrice = 2850000; state.filters.query='';
  $$('#seriesFilters input, #storageFilters input').forEach(i=>i.checked=false);
  updateSeriesPillsActive(null);
  $('#priceRange').value = 2850000; $('#priceRangeVal').textContent = fmt(2850000);
  $('#shopSearchInput').value=''; $('#navSearchInput').value='';
  renderProducts();
  toast('Filters cleared');
});

const filtersPanel = $('#filtersPanel');
const filterToggle = $('#filterToggle');
const filterClose = $('#filterClose');
if(filterToggle && filtersPanel){
  filterToggle.addEventListener('click', ()=>{
    filtersPanel.classList.toggle('open');
    scrim.classList.toggle('show', filtersPanel.classList.contains('open'));
  });
}
if(filterClose && filtersPanel){
  filterClose.addEventListener('click', ()=>{
    filtersPanel.classList.remove('open');
    scrim.classList.remove('show');
  });
}

$('#shopSearchInput').addEventListener('input', e=>{
  state.filters.query = e.target.value;
  $('#navSearchInput').value = e.target.value;
  renderProducts();
});
$('#sortSelect').addEventListener('change', e=>{ state.sort = e.target.value; renderProducts(); });

/* series quick-jump links (nav dropdown, mobile drawer, series strip, footer) */
$$('[data-filter-series]').forEach(el=>{
  el.addEventListener('click', e=>{
    const key = el.dataset.filterSeries;
    state.filters.series.clear();
    state.filters.series.add(key);
    $$('#seriesFilters input').forEach(i=> i.checked = i.dataset.series === key);
    updateSeriesPillsActive(key);
    renderProducts();
    closeMobileDrawer();
    if(filtersPanel) filtersPanel.classList.remove('open');
    scrim.classList.remove('show');
    const shopEl = document.getElementById('shop');
    if(shopEl){
      shopEl.scrollIntoView({behavior:'smooth'});
    }
  });
});

/* ================================================================
   RENDER PRODUCTS  (with a simulated initial "loading" for skeleton UX)
================================================================ */
/* How many rear-camera lenses this specific model should show */
function lensCountFor(p){
  if(p.name.includes('Pro')) return 3;                          // Pro / Pro Max -> triple camera
  if(p.series==='air') return 1;                                 // iPhone Air -> single camera (ultra-thin design)
  if(p.name.endsWith('e')) return 1;                             // 16e / 17e budget line -> single camera
  if(['7','8','xr'].includes(p.series)) return 1;                // single camera generations
  return 2;                                                       // standard dual-camera generations
}

/* Camera module markup, positioned top-left of the device body */
function cameraModuleSVG(lens){
  if(lens === 1){
    return `<rect x="16" y="16" width="26" height="26" rx="9" fill="rgba(0,0,0,.4)"/>
      <circle cx="29" cy="29" r="8.5" fill="#17171b" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
      <circle cx="26.3" cy="26.3" r="2.3" fill="rgba(255,255,255,.35)"/>
      <circle cx="46" cy="18" r="2.4" fill="rgba(255,225,170,.9)"/>`;
  }
  if(lens === 2){
    return `<rect x="14" y="16" width="42" height="26" rx="11" fill="rgba(0,0,0,.4)"/>
      <circle cx="27" cy="29" r="8" fill="#17171b" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
      <circle cx="24.5" cy="26.5" r="2.1" fill="rgba(255,255,255,.32)"/>
      <circle cx="47" cy="29" r="8" fill="#17171b" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
      <circle cx="44.5" cy="26.5" r="2.1" fill="rgba(255,255,255,.32)"/>
      <circle cx="60" cy="18" r="2.4" fill="rgba(255,225,170,.9)"/>`;
  }
  return `<rect x="14" y="14" width="40" height="40" rx="13" fill="rgba(0,0,0,.42)"/>
    <circle cx="26" cy="26" r="7.3" fill="#17171b" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
    <circle cx="23.7" cy="23.7" r="1.9" fill="rgba(255,255,255,.32)"/>
    <circle cx="42" cy="26" r="7.3" fill="#17171b" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
    <circle cx="39.7" cy="23.7" r="1.9" fill="rgba(255,255,255,.32)"/>
    <circle cx="34" cy="42" r="7.3" fill="#17171b" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
    <circle cx="31.7" cy="39.7" r="1.9" fill="rgba(255,255,255,.32)"/>
    <circle cx="46" cy="42" r="2.2" fill="rgba(0,0,0,.55)"/>
    <circle cx="60" cy="14" r="2.4" fill="rgba(255,225,170,.9)"/>`;
}

/* Original vector illustration of the device (rear view) — not a photo, just
   an iPhone-like silhouette so we never reproduce Apple's actual product imagery */
function deviceIllustrationSVG(p){
  const [c1, c2] = p.tint;
  const lens = lensCountFor(p);
  const gid = 'dv' + p.id;
  return `<svg viewBox="0 0 100 200" class="device-illustration" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name} illustration">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
      <linearGradient id="${gid}s" x1="0" y1="0" x2="85" y2="160" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#ffffff" stop-opacity=".25"/>
        <stop offset="30%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="94" height="194" rx="26" fill="url(#${gid})" stroke="rgba(0,0,0,.28)" stroke-width="1"/>
    <rect x="3" y="3" width="94" height="194" rx="26" fill="url(#${gid}s)"/>
    <rect x="5.5" y="5.5" width="89" height="189" rx="23.5" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="1"/>
    <rect x="0" y="46" width="3" height="15" rx="1.5" fill="rgba(0,0,0,.32)"/>
    <rect x="0" y="67" width="3" height="15" rx="1.5" fill="rgba(0,0,0,.32)"/>
    <rect x="97" y="58" width="3" height="26" rx="1.5" fill="rgba(0,0,0,.32)"/>
    ${cameraModuleSVG(lens)}
  </svg>`;
}

/* Real product photo when available, falling back to the vector illustration
   if the image file is missing (onerror swaps it out automatically) */
function productMediaHTML(p, extraClass){
  const cls = extraClass ? ' ' + extraClass : '';
  if(p.image){
    const fallback = deviceIllustrationSVG(p).replace(/\s+/g,' ').replace(/"/g,'&quot;');
    return `<img src="${p.image}" alt="${p.name} ${p.storage}" loading="lazy" class="product-photo${cls}"
      onerror="this.outerHTML='${fallback}';">`;
  }
  return deviceIllustrationSVG(p);
}

function getFiltered(){
  let list = PRODUCTS.filter(p=>{
    if(state.filters.series.size && !state.filters.series.has(p.series)) return false;
    if(state.filters.storage.size && !state.filters.storage.has(p.storage)) return false;
    if(p.price > state.filters.maxPrice) return false;
    if(state.filters.query){
      const q = state.filters.query.toLowerCase();
      if(!(p.name.toLowerCase().includes(q) || p.storage.toLowerCase().includes(q) || p.seriesLabel.toLowerCase().includes(q))) return false;
    }
    return true;
  });
  if(state.sort==='price-asc') list.sort((a,b)=>a.price-b.price);
  else if(state.sort==='price-desc') list.sort((a,b)=>b.price-a.price);
  else if(state.sort==='name-asc') list.sort((a,b)=>a.name.localeCompare(b.name) || a.price-b.price);
  return list;
}

function renderProducts(){
  const grid = $('#productGrid');
  const list = getFiltered();
  $('#productCount').textContent = `${list.length} unit${list.length===1?'':'s'} found`;
  updateBreadcrumbsAndActiveFilters(list);

  if(!list.length){
    grid.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <h3>No matching units</h3><p>Try clearing a filter or searching a different model.</p>
    </div>`;
    return;
  }

  grid.innerHTML = list.map((p,idx)=>{
    const inWishlist = state.wishlist.includes(p.id);
    return `
    <article class="card" style="animation-delay:${Math.min(idx*0.05,0.4)}s" data-id="${p.id}">
      <div class="card-top">
        <span class="stamp-mini ${p.condition==='new' ? 'stamp-new' : 'stamp-seen'}">${p.condition==='new' ? '★ BRAND NEW' : '✓ AS SEEN'}</span>
        <div class="card-icons">
          <button class="mini-icon wishlist-toggle ${inWishlist?'active':''}" data-id="${p.id}" aria-label="Toggle wishlist">
            <svg viewBox="0 0 24 24" fill="${inWishlist?'currentColor':'none'}" stroke="currentColor" stroke-width="2"><path d="M12 21s-7.5-4.6-10-9.1C.5 8.4 2.3 5 5.8 5c2 0 3.4 1 4.2 2.3C10.8 6 12.2 5 14.2 5c3.5 0 5.3 3.4 3.8 6.9C19.5 16.4 12 21 12 21z"/></svg>
          </button>
          <button class="mini-icon quick-view-btn" data-id="${p.id}" aria-label="Quick view">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>
      <div class="perf-line"></div>
      <div class="card-body">
        <div class="phone-shape">${productMediaHTML(p)}</div>
        <div class="card-info">
          <h3>${p.name}</h3>
          <span class="storage">${p.storage} · UK Unit</span>
        </div>
      </div>
      <div class="card-footer">
        <div class="price-line">
          <span class="price mono">${fmt(p.price)}</span>
          <span class="stock-dot">In Stock</span>
        </div>
        <button class="btn btn-primary add-btn" data-id="${p.id}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="margin-right:2px;"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>
          Add to Cart
        </button>
      </div>
    </article>`;
  }).join('');
}

function loadInventory(){
  setTimeout(()=>{ renderProducts(); }, 700); // simulate load w/ skeleton
}
loadInventory();

/* ================================================================
   GRID EVENT DELEGATION (add to cart / wishlist / quick view)
================================================================ */
$('#productGrid').addEventListener('click', e=>{
  const addBtn = e.target.closest('.add-btn');
  const wishBtn = e.target.closest('.wishlist-toggle');
  const qvBtn = e.target.closest('.quick-view-btn');

  if(addBtn){
    const id = Number(addBtn.dataset.id);
    addToCart(id, 1);
    addBtn.textContent = 'Added to Cart ✓';
    addBtn.classList.add('added');
    setTimeout(()=>{ addBtn.textContent = 'Add to Cart'; addBtn.classList.remove('added'); }, 1400);
    return;
  }
  if(wishBtn){
    const id = Number(wishBtn.dataset.id);
    toggleWishlist(id);
    return;
  }
  if(qvBtn){
    openQuickView(Number(qvBtn.dataset.id));
  }
});

/* ================================================================
   CART LOGIC
================================================================ */
function addToCart(id, qty){
  const existing = state.cart.find(c=>c.id===id);
  if(existing) existing.qty += qty;
  else state.cart.push({id, qty});
  saveStorage('cart', state.cart);
  renderCart();
  bumpBadge('#cartCount');
  const p = PRODUCTS.find(x=>x.id===id);
  toast(`${p.name} ${p.storage} added to cart ✓`);
}
function setQty(id, qty){
  const item = state.cart.find(c=>c.id===id);
  if(!item) return;
  if(qty <= 0){ askRemove('cart', id); return; }
  item.qty = qty;
  saveStorage('cart', state.cart);
  renderCart();
}
function removeFromCart(id){
  state.cart = state.cart.filter(c=>c.id!==id);
  saveStorage('cart', state.cart);
  renderCart();
  bumpBadge('#cartCount');
  toast('Item removed from cart', 'warn');
}
function cartTotal(){
  return state.cart.reduce((sum,c)=>{ const p = PRODUCTS.find(x=>x.id===c.id); return sum + (p?p.price*c.qty:0); },0);
}
function bumpBadge(sel){
  const el = $(sel);
  if(!el) return;
  el.classList.add('bump');
  setTimeout(()=>el.classList.remove('bump'), 350);
}
function renderCart(){
  const count = state.cart.reduce((s,c)=>s+c.qty,0);
  const countEl = $('#cartCount');
  if(countEl){
    countEl.textContent = count;
    countEl.classList.toggle('show', count>0);
  }

  const wrap = $('#cartItems');
  if(!wrap) return;
  if(!state.cart.length){
    wrap.innerHTML = `<div class="drawer-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>
      <p>Your cart is empty.</p>
      <button class="btn btn-primary" onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'}); closeCart();">Browse iPhones</button>
    </div>`;
    $('#cartFooter').style.display = 'none';
  } else {
    wrap.innerHTML = state.cart.map(c=>{
      const p = PRODUCTS.find(x=>x.id===c.id);
      if(!p) return '';
      return `<div class="cart-item" data-id="${p.id}">
        <div class="ci-shape">${productMediaHTML(p)}</div>
        <div class="ci-info">
          <h4>${p.name}</h4>
          <div class="ci-meta">${p.storage} · ${fmt(p.price)}</div>
          <div class="ci-row">
            <div class="ci-stepper">
              <button class="ci-minus" data-id="${p.id}" aria-label="Decrease quantity">−</button>
              <span>${c.qty}</span>
              <button class="ci-plus" data-id="${p.id}" aria-label="Increase quantity">+</button>
            </div>
            <span class="ci-price mono">${fmt(p.price*c.qty)}</span>
            <button class="ci-remove" data-id="${p.id}" aria-label="Remove item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6h14z"/></svg></button>
          </div>
        </div>
      </div>`;
    }).join('');
    $('#cartFooter').style.display = 'block';
    $('#cartSubtotal').textContent = fmt(cartTotal());
  }
  const ckTotal = $('#checkoutTotal');
  if(ckTotal) ckTotal.textContent = fmt(cartTotal());
}
$('#cartItems').addEventListener('click', e=>{
  const minus = e.target.closest('.ci-minus'), plus = e.target.closest('.ci-plus'), rm = e.target.closest('.ci-remove');
  if(minus){ const id=Number(minus.dataset.id); const item=state.cart.find(c=>c.id===id); setQty(id, item.qty-1); }
  if(plus){ const id=Number(plus.dataset.id); const item=state.cart.find(c=>c.id===id); setQty(id, item.qty+1); }
  if(rm){ askRemove('cart', Number(rm.dataset.id)); }
});

/* cart drawer open/close */
const cartDrawer = $('#cartDrawer');
function openCart(){ cartDrawer.classList.add('open'); scrim.classList.add('show'); document.body.style.overflow='hidden'; }
function closeCart(){ cartDrawer.classList.remove('open'); scrim.classList.remove('show'); document.body.style.overflow=''; }
$('#cartBtn').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);

/* ================================================================
   WISHLIST LOGIC
================================================================ */
function toggleWishlist(id){
  const idx = state.wishlist.indexOf(id);
  const p = PRODUCTS.find(x=>x.id===id);
  if(idx>-1){ state.wishlist.splice(idx,1); toast(`${p.name} removed from wishlist`, 'warn'); }
  else { state.wishlist.push(id); toast(`${p.name} added to wishlist ✓`); }
  saveStorage('wishlist', state.wishlist);
  bumpBadge('#wishlistCount');
  renderProducts();
  renderWishlist();
}
function renderWishlist(){
  const count = state.wishlist.length;
  const countEl = $('#wishlistCount');
  if(countEl){
    countEl.textContent = count;
    countEl.classList.toggle('show', count>0);
  }

  const wrap = $('#wishlistItems');
  if(!wrap) return;
  if(!count){
    wrap.innerHTML = `<div class="drawer-empty">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7.5-4.6-10-9.1C.5 8.4 2.3 5 5.8 5c2 0 3.4 1 4.2 2.3C10.8 6 12.2 5 14.2 5c3.5 0 5.3 3.4 3.8 6.9C19.5 16.4 12 21 12 21z"/></svg>
      <p>No saved items yet.</p>
      <button class="btn btn-primary" onclick="document.getElementById('shop').scrollIntoView({behavior:'smooth'}); closeWishlist();">Browse iPhones</button>
    </div>`;
    return;
  }
  wrap.innerHTML = state.wishlist.map(id=>{
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p) return '';
    return `<div class="cart-item" data-id="${p.id}">
      <div class="ci-shape">${productMediaHTML(p)}</div>
      <div class="ci-info">
        <h4>${p.name}</h4>
        <div class="ci-meta">${p.storage} · ${fmt(p.price)}</div>
        <div class="ci-row">
          <button class="btn btn-sm btn-primary wl-add" data-id="${p.id}">Add to Cart</button>
          <button class="ci-remove wl-remove" data-id="${p.id}" aria-label="Remove"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M6 18L18 6"/></svg></button>
        </div>
      </div>
    </div>`;
  }).join('');
}
$('#wishlistItems').addEventListener('click', e=>{
  const add = e.target.closest('.wl-add'), rm = e.target.closest('.wl-remove');
  if(add){ addToCart(Number(add.dataset.id),1); }
  if(rm){ toggleWishlist(Number(rm.dataset.id)); }
});
const wishlistDrawer = $('#wishlistDrawer');
function openWishlist(){ wishlistDrawer.classList.add('open'); scrim.classList.add('show'); document.body.style.overflow='hidden'; }
function closeWishlist(){ wishlistDrawer.classList.remove('open'); scrim.classList.remove('show'); document.body.style.overflow=''; }
$('#wishlistBtn').addEventListener('click', openWishlist);
$('#wishlistClose').addEventListener('click', closeWishlist);

/* ================================================================
   QUICK VIEW MODAL
================================================================ */
const qvScrim = $('#qvScrim');
function openQuickView(id){
  const p = PRODUCTS.find(x=>x.id===id);
  state.qvId = id;
  let qty = 1;
  $('#qvTitle').textContent = p.name;
  $('#qvBody').innerHTML = `
    <div class="qv-gallery">
      <div class="phone-shape phone-shape-lg" id="qvPhonePreview">${productMediaHTML(p)}</div>
      <div class="qv-thumbs">
        <div class="thumb active" data-swatch="0" style="background:linear-gradient(160deg,${p.tint[0]},${p.tint[1]});" title="Finish A"></div>
        <div class="thumb" data-swatch="1" style="background:linear-gradient(160deg,${p.tint[1]},${p.tint[0]});" title="Finish B"></div>
      </div>
    </div>
    <div class="qv-details">
      <span class="grade-badge">${p.condition==='new' ? 'BRAND NEW · SEALED' : 'AS SEEN · VERIFIED'}</span>
      <h3>${p.name}</h3>
      <div class="meta">${p.storage} · UK Unit · ${p.seriesLabel}</div>
      <div class="qv-checklist">
        <div class="qv-check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Direct UK Unit</div>
        <div class="qv-check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Tested &amp; Graded</div>
        <div class="qv-check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Unlocked (All SIMs)</div>
        <div class="qv-check-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Nationwide Delivery</div>
      </div>
      <div class="qv-price mono">${fmt(p.price)}</div>
      <div class="qty-stepper">
        <button id="qvMinus" aria-label="Decrease quantity">−</button>
        <span id="qvQty">1</span>
        <button id="qvPlus" aria-label="Increase quantity">+</button>
      </div>
      <div class="qv-actions">
        <button class="btn btn-primary" id="qvAddBtn">Add to Cart</button>
        <button class="btn btn-ghost mini-icon-wrap" id="qvWishBtn" style="width:46px;padding:0;" aria-label="Toggle wishlist">
          <svg viewBox="0 0 24 24" fill="${state.wishlist.includes(id)?'currentColor':'none'}" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 21s-7.5-4.6-10-9.1C.5 8.4 2.3 5 5.8 5c2 0 3.4 1 4.2 2.3C10.8 6 12.2 5 14.2 5c3.5 0 5.3 3.4 3.8 6.9C19.5 16.4 12 21 12 21z"/></svg>
        </button>
      </div>
    </div>`;

  $$('#qvBody .thumb').forEach(th=>{
    th.addEventListener('click', ()=>{
      $$('#qvBody .thumb').forEach(t=>t.classList.remove('active'));
      th.classList.add('active');
      const preview = $('#qvPhonePreview');
      if(preview){
        preview.style.transform = th.dataset.swatch === '1' ? 'rotateY(10deg) scale(1.02)' : 'none';
      }
    });
  });

  $('#qvMinus').addEventListener('click', ()=>{ qty=Math.max(1,qty-1); $('#qvQty').textContent=qty; });
  $('#qvPlus').addEventListener('click', ()=>{ qty=Math.min(10,qty+1); $('#qvQty').textContent=qty; });
  $('#qvAddBtn').addEventListener('click', ()=>{ addToCart(id, qty); closeQuickView(); });
  $('#qvWishBtn').addEventListener('click', ()=>{ toggleWishlist(id); openQuickView(id); });
  qvScrim.classList.add('show');
  document.body.style.overflow='hidden';
}
function closeQuickView(){ qvScrim.classList.remove('show'); document.body.style.overflow=''; }
$('#qvClose').addEventListener('click', closeQuickView);
qvScrim.addEventListener('click', e=>{ if(e.target===qvScrim) closeQuickView(); });

/* ================================================================
   CONFIRM REMOVE MODAL
================================================================ */
const confirmScrim = $('#confirmScrim');
function askRemove(type, id){
  state.removeTarget = {type, id};
  const p = PRODUCTS.find(x=>x.id===id);
  $('#confirmText').textContent = `Are you sure you want to remove ${p.name} ${p.storage} from your cart?`;
  confirmScrim.classList.add('show');
}
$('#confirmCancel').addEventListener('click', ()=> confirmScrim.classList.remove('show'));
confirmScrim.addEventListener('click', e=>{ if(e.target===confirmScrim) confirmScrim.classList.remove('show'); });
$('#confirmOk').addEventListener('click', ()=>{
  if(state.removeTarget?.type==='cart') removeFromCart(state.removeTarget.id);
  confirmScrim.classList.remove('show');
});

/* ================================================================
   CHECKOUT FLOW
================================================================ */
const checkoutScrim = $('#checkoutScrim');

function renderCheckoutRecap(){
  const recap = $('#checkoutOrderRecap');
  if(!recap) return;
  const count = state.cart.reduce((a,c)=>a+c.qty, 0);
  recap.innerHTML = `
    <div class="checkout-recap-title">
      <span>Order Items (${count})</span>
      <span>${fmt(cartTotal())}</span>
    </div>
    ${state.cart.map(c=>{
      const p = PRODUCTS.find(x=>x.id===c.id);
      if(!p) return '';
      return `<div class="checkout-recap-item">
        <span>${p.name} <small style="color:var(--muted);">(${p.storage} ×${c.qty})</small></span>
        <span class="mono">${fmt(p.price * c.qty)}</span>
      </div>`;
    }).join('')}
  `;
}

$('#checkoutBtn').addEventListener('click', ()=>{
  if(!state.cart.length){ toast('Your cart is empty', 'warn'); return; }
  closeCart();
  $('#checkoutTotal').textContent = fmt(cartTotal());
  renderCheckoutRecap();
  checkoutScrim.classList.add('show');
});
$('#checkoutClose').addEventListener('click', ()=> checkoutScrim.classList.remove('show'));
$('#crumbCartLink').addEventListener('click', e=>{ e.preventDefault(); checkoutScrim.classList.remove('show'); openCart(); });
checkoutScrim.addEventListener('click', e=>{ if(e.target===checkoutScrim) checkoutScrim.classList.remove('show'); });

/* ---- account / password toggle ---- */
const ckAccount = $('#ckCreateAccount');
if(ckAccount){
  ckAccount.addEventListener('change', ()=>{
    const show = ckAccount.checked;
    const fPass = $('#f-pass');
    const fPass2 = $('#f-pass2');
    if(fPass) fPass.style.display = show ? '' : 'none';
    if(fPass2) fPass2.style.display = show ? '' : 'none';
    if(!show){
      setFieldState('f-pass', true, false);
      setFieldState('f-pass2', true, false);
    } else {
      validateCheckout(false);
    }
  });
}

/* ---- validation helpers ---- */
function setFieldState(fieldId, valid, show){
  const el = document.getElementById(fieldId);
  if(!el) return;
  el.classList.remove('invalid','valid');
  if(show===false) return;
  el.classList.add(valid ? 'valid' : 'invalid');
}
const NG_PHONE = /^(?:\+234|0)[789][01]\d{8}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateCheckout(showAll){
  let ok = true;
  const name = $('#ckName').value.trim();
  const nameValid = name.split(' ').filter(Boolean).length >= 2;
  setFieldState('f-fullname', nameValid, showAll || $('#ckName')._touched);
  ok = ok && nameValid;

  const email = $('#ckEmail').value.trim();
  const emailValid = EMAIL_RE.test(email);
  setFieldState('f-email', emailValid, showAll || $('#ckEmail')._touched);
  ok = ok && emailValid;

  const phone = $('#ckPhone').value.trim().replace(/\s+/g,'');
  const phoneValid = NG_PHONE.test(phone);
  setFieldState('f-phone', phoneValid, showAll || $('#ckPhone')._touched);
  ok = ok && phoneValid;

  const addr = $('#ckAddress').value.trim();
  const addrValid = addr.length >= 10;
  setFieldState('f-address', addrValid, showAll || $('#ckAddress')._touched);
  ok = ok && addrValid;

  const checkPass = ckAccount ? ckAccount.checked : false;

  if(checkPass){
    const pass = $('#ckPass').value;
    const passValid = pass.length >= 8 && /\d/.test(pass) && /[^A-Za-z0-9]/.test(pass);
    setFieldState('f-pass', passValid, showAll || $('#ckPass')._touched);
    ok = ok && passValid;

    const pass2 = $('#ckPass2').value;
    const pass2Valid = pass2.length>0 && pass2 === pass;
    setFieldState('f-pass2', pass2Valid, showAll || $('#ckPass2')._touched);
    ok = ok && pass2Valid;
  } else {
    setFieldState('f-pass', true, false);
    setFieldState('f-pass2', true, false);
  }

  return ok;
}

['ckName','ckEmail','ckPhone','ckAddress','ckPass','ckPass2'].forEach(id=>{
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener('input', ()=>{ el._touched = true; validateCheckout(false); });
  el.addEventListener('blur', ()=>{ el._touched = true; validateCheckout(false); });
});

$('#ckPass').addEventListener('input', e=>{
  const val = e.target.value;
  let score = 0;
  if(val.length>=8) score++;
  if(/[A-Z]/.test(val)) score++;
  if(/\d/.test(val)) score++;
  if(/[^A-Za-z0-9]/.test(val)) score++;
  const bar = $('#strengthBar'), label = $('#strengthLabel');
  const pct = (score/4)*100;
  bar.style.width = pct + '%';
  const colors = ['#e0524f','#e0524f','#F2843A','#e8b93f','#2BA89A'];
  bar.style.background = colors[score];
  const labels = ['Too short','Weak','Fair','Good','Strong'];
  label.textContent = val ? 'Password strength: ' + labels[score] : 'Password strength';
});

$('#checkoutForm').addEventListener('submit', e=>{
  e.preventDefault();
  const valid = validateCheckout(true);
  if(!valid){ toast('Please fix the highlighted fields', 'warn'); return; }
  const btn = $('#placeOrderBtn');
  const originalText = btn.textContent;
  btn.disabled = true;
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="animation:spin .7s linear infinite;"><circle cx="12" cy="12" r="9" stroke-opacity=".25"/><path d="M21 12a9 9 0 00-9-9"/></svg> Placing order…`;

  /* build the WhatsApp order message from the current cart + form fields
     BEFORE we clear the cart below */
  const orderRef = 'MG-' + Date.now().toString().slice(-6);
  const lines = state.cart.map(c=>{
    const p = PRODUCTS.find(x=>x.id===c.id);
    return `• ${p.name} ${p.storage} x${c.qty} — ${fmt(p.price*c.qty)}`;
  });
  const msg = [
    `New order — Mandela Phonez & Gadgets`,
    `Ref: ${orderRef}`,
    ``,
    ...lines,
    ``,
    `Total: ${fmt(cartTotal())}`,
    ``,
    `Name: ${$('#ckName').value.trim()}`,
    `Phone: ${$('#ckPhone').value.trim()}`,
    `Address: ${$('#ckAddress').value.trim()}`
  ].join('\n');
  $('#successWhatsBtn').href = 'https://wa.me/2349069395763?text=' + encodeURIComponent(msg);

  setTimeout(()=>{
    btn.disabled = false; btn.textContent = originalText;
    checkoutScrim.classList.remove('show');
    $('#successScrim').classList.add('show');
    state.cart = [];
    saveStorage('cart', state.cart);
    renderCart();
    e.target.reset();
    ['ckName','ckEmail','ckPhone','ckAddress','ckPass','ckPass2'].forEach(id=>{
      const input = document.getElementById(id);
      if(input) input._touched = false;
    });
    ['f-fullname','f-email','f-phone','f-address','f-pass','f-pass2'].forEach(id=>{
      const f = document.getElementById(id);
      if(f) f.classList.remove('valid','invalid');
    });
    const fPass = $('#f-pass'), fPass2 = $('#f-pass2');
    if(fPass) fPass.style.display = 'none';
    if(fPass2) fPass2.style.display = 'none';
    $('#strengthBar').style.width='0%';
    $('#strengthLabel').textContent='Password strength';
  }, 1100);
});
$('#successClose').addEventListener('click', ()=> $('#successScrim').classList.remove('show'));
const successScrim = $('#successScrim');
if(successScrim){
  successScrim.addEventListener('click', e=>{ if(e.target===successScrim) successScrim.classList.remove('show'); });
}

/* spin keyframe injected once */
const styleSpin = document.createElement('style');
styleSpin.textContent = '@keyframes spin{to{transform:rotate(360deg);}}';
document.head.appendChild(styleSpin);

/* ================================================================
   CONTACT FORM VALIDATION & WHATSAPP
================================================================ */
$('#contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  let ok = true;
  const name = $('#cfName').value.trim();
  const nameValid = name.length >= 3;
  document.getElementById('cf-name').classList.toggle('invalid', !nameValid);
  ok = ok && nameValid;

  const phone = $('#cfPhone').value.trim().replace(/\s+/g,'');
  const phoneValid = NG_PHONE.test(phone);
  document.getElementById('cf-phone').classList.toggle('invalid', !phoneValid);
  ok = ok && phoneValid;

  const msg = $('#cfMessage').value.trim();
  const msgValid = msg.length >= 5;
  document.getElementById('cf-message').classList.toggle('invalid', !msgValid);
  ok = ok && msgValid;

  if(!ok){ toast('Please check the highlighted fields', 'warn'); return; }
  toast("Message sent — we'll reply shortly ✓");
  e.target.reset();
  ['cf-name','cf-phone','cf-message'].forEach(id=>document.getElementById(id).classList.remove('invalid'));
});

const contactWhatsAppBtn = $('#contactWhatsAppBtn');
if(contactWhatsAppBtn){
  contactWhatsAppBtn.addEventListener('click', ()=>{
    const name = $('#cfName').value.trim();
    const phone = $('#cfPhone').value.trim();
    const msg = $('#cfMessage').value.trim();
    let text = "Hello Mandela Phonez & Gadgets, I would like to make an inquiry.";
    if(name || msg){
      text = `Hello Mandela Phonez & Gadgets,\n\nName: ${name || 'N/A'}\nPhone: ${phone || 'N/A'}\nMessage: ${msg || 'I would like to inquire about your available iPhones.'}`;
    }
    const url = 'https://wa.me/2349069395763?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener');
  });
}

/* ================================================================
   SCROLL REVEAL
================================================================ */
const revealObserver = new IntersectionObserver(entries=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); revealObserver.unobserve(en.target); } });
}, {threshold:.15});
$$('.reveal').forEach(el=> revealObserver.observe(el));

/* ================================================================
   MISC
================================================================ */
$('#yearNow').textContent = new Date().getFullYear();
renderCart();
renderWishlist();
updateActiveNav();

/* hero ticket illustrations (static showcase units) */
const heroPhoneA = document.getElementById('heroPhoneA');
const heroPhoneB = document.getElementById('heroPhoneB');
if(heroPhoneA) heroPhoneA.innerHTML = productMediaHTML(PRODUCTS.find(p=>p.id===30)); // iPhone 17 Pro Max
if(heroPhoneB) heroPhoneB.innerHTML = productMediaHTML(PRODUCTS.find(p=>p.id===12)); // iPhone 12 Pro Max 256GB