/* sidebar.js — injecte la sidebar dans toutes les pages */
function buildSidebar(activePage) {
  const navItems = [
    { href: 'dashboard.html', icon: '⊞', label: 'Tableau de bord', key: 'dashboard' },
    { href: 'filieres.html',  icon: '◫', label: 'Filières',         key: 'filieres' },
    { href: 'epreuves.html',  icon: '📋', label: 'Épreuves',        key: 'epreuves' },
    { href: 'recherche.html', icon: '⌕', label: 'Recherche',        key: 'recherche' },
    { href: 'stats.html',     icon: '📊', label: 'Statistiques',    key: 'stats' },
  ];

  const navHTML = navItems.map(item => `
    <a href="${item.href}" class="nav-item ${activePage === item.key ? 'active' : ''}">
      <span class="nav-icon">${item.icon}</span>
      <span>${item.label}</span>
    </a>
  `).join('');

  const sidebarHTML = `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">
          <svg class="logo-hat" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="8" width="38" height="6" rx="1.5" fill="white"/>
            <polygon points="20,0 36,8 20,13 4,8" fill="white"/>
            <line x1="30" y1="8" x2="33" y2="3" stroke="white" stroke-width="1.5"/>
            <circle cx="33.5" cy="2" r="2" fill="white"/>
          </svg>
          <span class="logo-eb">EB</span>
        </div>
        <div class="logo-text">
          <div class="logo-name">EXAMBANQ</div>
          <div class="logo-sub">v2.0 · Gestion épreuves</div>
        </div>
      </div>

      <nav class="sidebar-nav">
        ${navHTML}
        <div class="nav-divider"></div>
        <a href="ajout.html" class="nav-item add-btn">
          <span class="nav-icon">＋</span>
          <span>Ajouter épreuve</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="user-chip">
          <div class="user-avatar">A</div>
          <div>
            <div class="user-name">Administrateur</div>
            <div class="user-role">admin@exambanq.ma</div>
          </div>
        </div>
      </div>
    </aside>
  `;

  document.getElementById('sidebar-placeholder').outerHTML = sidebarHTML;
}
