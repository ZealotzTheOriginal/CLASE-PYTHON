export default function Contact() {
    return (
        <div>
            <h2>📩 Página de Contacto</h2>
            <p>Puedes escribirnos a:</p>
            <ul>
                <li>Email: soporte@blogdemo.com</li>
                <li>Teléfono: +34 600 123 456</li>
            </ul>
            <form style={{ marginTop: 16 }}>
                <label>
                    Tu mensaje:
                    <br />
                    <textarea
                        rows="4"
                        cols="40"
                        placeholder="Escribe tu mensaje aquí..."
                    />
                </label>
                <br />
                <button type="submit" style={{ marginTop: 8 }}>
                    Enviar
                </button>
            </form>
        </div>
    );
}
