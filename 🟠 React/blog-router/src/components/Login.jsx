import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [minutes, setMinutes] = useState(30); // X minutos seleccionables
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from =
    location.state?.from?.pathname || `/profile/${username || "Invitado"}`;

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación simulada (puedes ajustar a tus reglas)

    if (username.trim().toLowerCase() !== "admin") {
      setError("❌ Usuario incorrecto. Usa 'admin' para ingresar.");
      return;
    }

    // Login + duración en minutos
    login(username.trim(), Number(minutes));
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>🔐 Página de Login</h2>
      <form
        onSubmit={handleLogin}
        style={{ display: "grid", gap: 8, maxWidth: 360 }}
      >
        <label>
          Usuario:
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            placeholder="Escribe 'admin'"
          />
        </label>

        <label>
          Duración de la sesión (minutos):
          <input
            type="number"
            min="1"
            step="1"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
        </label>

        <button type="submit">Iniciar Sesión</button>
      </form>

      {error && <p style={{ color: "red", marginTop: 8 }}>{error}</p>}

      <p style={{ marginTop: 8 }}>
        Tras iniciar sesión, te llevaré a: <code>{from}</code>
      </p>
    </div>
  );
}
