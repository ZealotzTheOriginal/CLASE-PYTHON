import { NavLink, Outlet, useParams } from "react-router-dom";
export default function ProfileLayout() {
  const { username } = useParams();
  return (
    <div>
      <h2>👤 Perfil de {username}</h2>
      <nav style={{ display: "flex", gap: 12, margin: "8px 0" }}>
        <NavLink end to={`/profile/${username}`}>
          Resumen
        </NavLink>
        <NavLink to={`/profile/${username}/settings`}>Ajustes</NavLink>
      </nav>
      {/* Aquí se renderizan las subrutas */}
      <Outlet />
    </div>
  );
}
