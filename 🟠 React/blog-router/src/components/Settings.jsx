import { useParams } from "react-router-dom";
export default function Settings() {
  const { username } = useParams();

  return (
    <div>
      <h3>⚙️ Ajustes de {username}</h3>
      <p>Aquí puedes simular ajustes del usuario.</p>
      <form style={{ display: "grid", gap: 8, maxWidth: 360 }}>
        <label>
          Nombre visible:
          <input defaultValue={username} />
        </label>
        <label>
          Notificaciones:
          <select defaultValue="on">
            <option value="on">Activadas</option>
            <option value="off">Desactivadas</option>
          </select>
        </label>
        <button
          type="button"
          onClick={() => alert("Ajustes guardados (simulado)")}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
