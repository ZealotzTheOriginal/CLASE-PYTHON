import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const AuthContext = createContext();

const STORAGE_KEY = "auth_session";
const DEFAULT_SESSION_MINUTES = 30; // valor por defecto si no pasas uno

function now() {
  return Date.now();
}
function minutesFromNow(min) {
  return now() + min * 60 * 1000;
}

function readSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data?.user || !data?.expiresAt) return null;
    if (data.expiresAt <= now()) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return data; // { user, expiresAt }
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readSession()?.user || null);
  const [expiresAt, setExpiresAt] = useState(
    () => readSession()?.expiresAt || null
  );
  const logoutTimerRef = useRef(null);

  const scheduleLogout = (whenMs) => {
    if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
    const delay = Math.max(0, whenMs - now());
    logoutTimerRef.current = setTimeout(() => {
      setUser(null);
      setExpiresAt(null);
      localStorage.removeItem(STORAGE_KEY);
    }, delay);
  };

  // Login con duración en minutos (por defecto 30)
  const login = (username, minutes = DEFAULT_SESSION_MINUTES) => {
    const session = {
      user: { username },
      expiresAt: minutesFromNow(minutes),
    };
    setUser(session.user);
    setExpiresAt(session.expiresAt);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    scheduleLogout(session.expiresAt);
  };

  const logout = () => {
    setUser(null);
    setExpiresAt(null);

    localStorage.removeItem(STORAGE_KEY);
    if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
  };

  // Al montar: si hay sesión válida, programar autologout
  useEffect(() => {
    const s = readSession();
    if (s?.expiresAt) scheduleLogout(s.expiresAt);
    // Limpieza al desmontar
    return () => {
      if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current);
    };
  }, []);

  // Listener de visibilidad: si el usuario vuelve a la pestaña, revalidar
  useEffect(() => {
    const handleVisibility = () => {
      const s = readSession();
      if (!s) {
        logout();
      } else {
        setUser(s.user);
        setExpiresAt(s.expiresAt);

        scheduleLogout(s.expiresAt);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Intervalo de seguridad (ej. cada 30s) para caducidad en tiempo real
  useEffect(() => {
    const id = setInterval(() => {
      const s = readSession();
      if (!s) logout();
    }, 30 * 1000);
    return () => clearInterval(id);
  }, []);

  // Sync entre pestañas (dispara en pestañas distintas)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY) {
        const s = readSession();
        if (!s) logout();
        else {
          setUser(s.user);
          setExpiresAt(s.expiresAt);
          scheduleLogout(s.expiresAt);
        }
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(
    () => ({ user, expiresAt, login, logout }), [user, expiresAt]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
