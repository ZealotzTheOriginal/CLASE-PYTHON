import { Link } from "react-router-dom";
export default function Articles() {
  const articles = [
    { id: 1, title: "React desde cero" },
    { id: 2, title: "Introducción a Router" },
    { id: 3, title: "Rutas privadas en detalle" },
  ];
  return (
    <div>
      <h2>📝 Lista de Artículos</h2>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link to={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
