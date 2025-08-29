import { useParams, Link } from "react-router-dom";
export default function Profile() {
  const { username } = useParams();
  return (
    <div>
      <p>
        Resumen del perfil de <strong>{username}</strong>.
      </p>

      <Link to={`/profile/${username}/settings`}>Ir a Ajustes</Link>
    </div>
  );
}
