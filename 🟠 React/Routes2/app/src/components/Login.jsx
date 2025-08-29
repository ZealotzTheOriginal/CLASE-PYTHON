import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/profile/Ana");
  }
  return (
    <div>
      <h2>Página de Login</h2>
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}
