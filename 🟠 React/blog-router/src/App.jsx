import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./components";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";
function NavBar() {
  const { user, logout } = useAuth();
  return (
    <nav
      style={{
        display: "flex",
        gap: 12,
        padding: 12,
        borderBottom: "1px solid #ddd",
      }}
    >
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/articles">Artículos</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to={`/profile/${user?.username || "Invitado"}`}>Perfil</NavLink>
      <span style={{ marginLeft: "auto" }}>
        {user ? (
          <>
            <strong>Hola, {user.username}</strong>{" "}
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
            <Route
              path="/profile/:username"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}
