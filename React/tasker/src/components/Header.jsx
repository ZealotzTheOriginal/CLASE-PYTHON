export default function Header({ titulo, subtitulo }) {
  return (
    <header>
      <div className="container">
        <h1>{titulo}</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>{subtitulo}</p>
      </div>
    </header>
  );
}
