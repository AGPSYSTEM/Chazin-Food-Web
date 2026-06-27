import { useState } from 'react'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
  }

  if (user && user.role === 'admin') {
    return <AdminDashboard onLogout={handleLogout} />
  }

  return <Login onLogin={handleLogin} />
}

export default App
