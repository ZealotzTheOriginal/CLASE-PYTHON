import { useParams } from "react-router-dom";
export default function ArticleDetail() {
  const { id } = useParams();
  return <h2>📄 Mostrando artículo con ID: {id}</h2>;
}
