import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
* Si hay usuario, renderiza children.
* Si no hay usuario, redirige a /login y guarda a dónde quería ir
(state.from).
*/
export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
