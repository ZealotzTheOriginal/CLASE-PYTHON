import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import ProfileLayout from "./components/ProfileLayout";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";

import { useEffect, useState } from "react";

function NavBar() {
  const { user, logout, expiresAt } = useAuth();
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    if (!expiresAt) {
      setRemaining(null);
      return;
    }
    const tick = () => setRemaining(Math.max(0, expiresAt - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [expiresAt]);

  const fmt = (ms) => {
    if (ms == null) return "";

    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec}s`;
  };

  return (
    <nav style={{
      display: "flex", gap: 12, padding: 12,
      borderBottom: "1px solid #ddd"
    }}>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/articles">Artículos</NavLink>
      <NavLink to="/contact">Contacto</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to={`/profile/${user?.username || "Invitado"}`}>Perfil</NavLink>
      <span style={{ marginLeft: "auto" }}>
        {user ? (
          <>
            <strong>Hola, {user.username}</strong>{" "}
            {remaining !== null && <em> · expira en {fmt(remaining)}</em>}{" "}
            <button onClick={logout}>Salir</button>
          </>
        ) : (
          <em>No autenticado</em>
        )}
      </span>
    </nav>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <div style={{ padding: 16 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/login" element={<Login />} />
            {/* 🔒 Bloque protegido del perfil con subrutas */}
            <Route
              path="/profile/:username"
              element={
                <PrivateRoute>
                  <ProfileLayout />
                </PrivateRoute>
              }
            >
              {/* /profile/:username → resumen */}
              <Route index element={<Profile />} />
              {/* /profile/:username/settings → ajustes */}
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}