import './AdminDashboard.css'
import { useState } from 'react'
import chazinLogo from '../assets/chazin-food-logo.png'

function AdminDashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState('roles')
  const [configOpen, setConfigOpen] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [showNewRoleModal, setShowNewRoleModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [newRoleName, setNewRoleName] = useState('')
  const [newRoleDescription, setNewRoleDescription] = useState('')
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Administrador',
      color: 'linear-gradient(90deg, #AD46FF 0%, #8200DB 100%)',
      users: 2,
      permissions: 18,
      description: 'Acceso completo al sistema',
      status: 'Activo',
      assignedPermissions: ['Dashboard', 'Compras', 'Categoría Insumos', 'Insumos', 'Productos', 'Fichas Técnicas', 'Producción', 'Gestión de Producción', 'Ordenes de Producción', 'Ventas', 'Gestión de Ventas', 'Clientes', 'Configuración', 'Usuarios', 'Roles', 'Perfil']
    },
    {
      id: 2,
      name: 'Cocinero',
      color: 'linear-gradient(90deg, #00C950 0%, #008236 100%)',
      users: 3,
      permissions: 4,
      description: 'Acceso a producción y fichas técnicas',
      status: 'Activo',
      assignedPermissions: ['Dashboard', 'Productos', 'Fichas Técnicas']
    },
    {
      id: 3,
      name: 'Cliente',
      color: 'linear-gradient(90deg, #F05454 0%, #DC2626 100%)',
      users: 10,
      permissions: 4,
      description: 'Acceso básico para realizar pedidos',
      status: 'Activo',
      assignedPermissions: ['Dashboard', 'Ventas', 'Gestión de Ventas']
    }
  ])

  const filteredRoles = roles.filter(role => 
    role.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCreateRole = (e) => {
    e.preventDefault()
    if (!newRoleName.trim()) return
    
    const newRole = {
      id: roles.length + 1,
      name: newRoleName,
      color: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
      users: 0,
      permissions: 0,
      description: newRoleDescription,
      status: 'Activo',
      assignedPermissions: []
    }
    
    setRoles([...roles, newRole])
    setShowNewRoleModal(false)
    setNewRoleName('')
    setNewRoleDescription('')
  }

  return (
    <div className={`admin-dashboard ${darkMode ? 'dark' : ''}`}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-small">
            <img src={chazinLogo} alt="" className="logo-img" />
          </div>
          <h2>Chazin Food</h2>
          <button className="close-sidebar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="user-profile">
          <div className="user-avatar">A</div>
          <div className="user-info">
            <h3>Administrador Sistema</h3>
            <span>Administrador</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-section">
            <p className="nav-section-title">Administración</p>
            <button 
              className={`nav-item ${activeMenu === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveMenu('dashboard')}
            >
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="13" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="13" y="13" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Dashboard
            </button>
            <div className={`nav-item-group ${configOpen ? 'open' : ''}`}>
              <button 
                className={`nav-item ${activeMenu === 'roles' || activeMenu === 'users' ? 'active' : ''}`}
                onClick={() => setConfigOpen(!configOpen)}
              >
                <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                Configuración
                <svg className="nav-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="nav-submenu">
                <button 
                  className={`nav-subitem ${activeMenu === 'roles' ? 'active' : ''}`}
                  onClick={() => setActiveMenu('roles')}
                >
                  <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Roles
                </button>
                <button 
                  className={`nav-subitem ${activeMenu === 'users' ? 'active' : ''}`}
                  onClick={() => setActiveMenu('users')}
                >
                  <svg className="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Usuarios
                </button>
              </div>
            </div>
            <button className={`nav-item ${activeMenu === 'compras' ? 'active' : ''}`}>
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 10H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 18H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Compras
              <svg className="nav-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={`nav-item ${activeMenu === 'produccion' ? 'active' : ''}`}>
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4C10 4 8 6 8 9V19H16V9C16 6 14 4 12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2L8 7H16L12 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Producción
              <svg className="nav-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={`nav-item ${activeMenu === 'ventas' ? 'active' : ''}`}>
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 8H21M21 8V13M21 8L12 17L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 19H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 19H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ventas
              <svg className="nav-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="nav-section">
            <p className="nav-section-title">Cuenta</p>
            <button className="nav-item">
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Perfil
            </button>
            <button className="nav-item dark-mode-toggle-nav" onClick={() => setDarkMode(!darkMode)}>
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Modo Oscuro
              <div className={`toggle-switch ${darkMode ? 'active' : ''}`}></div>
            </button>
            <button className="nav-item logout" onClick={onLogout}>
              <svg className="nav-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <polyline points="16 17 21 12 16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Cerrar Sesión
            </button>
          </div>
        </nav>
      </aside>
      <main className="main-content">
        <header className="top-header">
          <button className="menu-toggle">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="header-logo">
            <img src={chazinLogo} alt="" className="header-logo-img" />
            <span>Chazin Food</span>
          </div>
          <div className="header-right">
            <button className="dark-mode-toggle-header" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              )}
            </button>
          </div>
        </header>
        <div className="content-body">
          <div className="page-header">
            <h1>Gestión de Roles</h1>
            <p>Administra los roles y permisos del sistema</p>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon" style={{ background: 'rgba(240, 84, 84, 0.1)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#F05454" strokeWidth="2"/>
                </svg>
              </div>
              <div className="stat-info">
                <p>Total Roles</p>
                <h3>{roles.length}</h3>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#F0FDF4' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#008236" strokeWidth="2"/>
                </svg>
              </div>
              <div className="stat-info">
                <p>Roles Activos</p>
                <h3>{roles.filter(r => r.status === 'Activo').length}</h3>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon" style={{ background: '#FAF5FF' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#8200DB" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" stroke="#8200DB" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87" stroke="#8200DB" strokeWidth="2"/>
                  <path d="M16 3.13a4 4 0 010 7.75" stroke="#8200DB" strokeWidth="2"/>
                </svg>
              </div>
              <div className="stat-info">
                <p>Usuarios Asignados</p>
                <h3>{roles.reduce((sum, role) => sum + role.users, 0)}</h3>
              </div>
            </div>
          </div>
          <div className="actions-row">
            <div className="search-bar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input 
                type="text" 
                placeholder="Buscar rol..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="add-role-btn" onClick={() => setShowNewRoleModal(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              Nuevo Rol
            </button>
          </div>
          <div className="roles-grid">
            {filteredRoles.map((role) => (
              <div key={role.id} className="role-card-full">
                <div className="role-card-header" style={{ background: role.color }}>
                  <div className="role-card-header-left">
                    <div className="role-card-icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div className="role-card-name-status">
                      <h3>{role.name}</h3>
                      <span className="role-permission-count">{role.permissions} permisos</span>
                    </div>
                  </div>
                  <span className="role-status-badge">{role.status}</span>
                </div>
                <div className="role-card-body">
                  <p className="role-description">{role.description}</p>
                  <div className="role-stats">
                    <div className="role-stat">
                      <span className="role-stat-label">Usuarios</span>
                      <span className="role-stat-value">{role.users}</span>
                    </div>
                    <div className="role-stat">
                      <span className="role-stat-label">Permisos</span>
                      <span className="role-stat-value">{role.permissions}</span>
                    </div>
                  </div>
                  <div className="role-permissions-tags">
                    <p className="role-permissions-title">Permisos Asignados</p>
                    <div className="role-tags-container">
                      {role.assignedPermissions.slice(0, 3).map((perm, idx) => (
                        <span key={idx} className="permission-tag" style={{ 
                          background: role.color.includes('8B5CF6') 
                            ? 'rgba(139, 92, 246, 0.15)' 
                            : role.color.includes('10B981')
                              ? 'rgba(16, 185, 129, 0.15)'
                              : 'rgba(244, 91, 105, 0.15)',
                          color: role.color.includes('8B5CF6') 
                            ? '#8B5CF6' 
                            : role.color.includes('10B981')
                              ? '#10B981'
                              : '#F45B69'
                        }}>
                          {perm}
                        </span>
                      ))}
                      {role.assignedPermissions.length > 3 && (
                        <span className="more-permissions-tag">+{role.assignedPermissions.length - 3} más</span>
                      )}
                    </div>
                  </div>
                  <div className="role-card-actions">
                    <button className="action-btn view-perms">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#3B82F6" strokeWidth="2"/>
                      </svg>
                      Permisos
                    </button>
                    <span className="action-divider">|</span>
                    <button className="action-btn edit">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#4B5563" strokeWidth="2"/>
                        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#4B5563" strokeWidth="2"/>
                      </svg>
                      Editar
                    </button>
                    <span className="action-divider">|</span>
                    <button className="action-btn deactivate">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="2"/>
                        <path d="M8 12H12M12 12H16M12 12V8M12 12V16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Desactivar
                    </button>
                    <span className="action-divider">|</span>
                    <button className="action-btn delete">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <nav className="bottom-nav">
          <button className="bottom-nav-item">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 10L12 3L21 10V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Inicio
          </button>
          <button className="bottom-nav-item">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 5V19" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Compras
          </button>
          <button className="bottom-nav-item">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 5C10 5 8 6.5 8 8.5V18H16V8.5C16 6.5 14 5 12 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Producción
          </button>
          <button className="bottom-nav-item">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 17H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12L12 8L16 10L21 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 3H21V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Ventas
          </button>
          <button className="bottom-nav-item active">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Config
          </button>
        </nav>
      </main>
      
      {showNewRoleModal && (
        <div className="modal-overlay" onClick={() => setShowNewRoleModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h2>Nuevo Rol</h2>
              <button className="modal-close" onClick={() => setShowNewRoleModal(false)}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <form className="modal-form" onSubmit={handleCreateRole}>
              <div className="form-group">
                <label>Nombre del Rol</label>
                <input 
                  type="text" 
                  placeholder="Ej. Vendedor, Supervisor..." 
                  value={newRoleName}
                  onChange={(e) => setNewRoleName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Descripción</label>
                <textarea 
                  placeholder="Descripción del nuevo rol"
                  value={newRoleDescription}
                  onChange={(e) => setNewRoleDescription(e.target.value)}
                  rows={3}
                />
              </div>
              <p className="modal-note">Podrás asignar permisos después desde el botón "Permisos" en la tarjeta del rol.</p>
              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowNewRoleModal(false)}>Cancelar</button>
                <button type="submit" className="btn-create" disabled={!newRoleName.trim()}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                  Crear Rol
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
