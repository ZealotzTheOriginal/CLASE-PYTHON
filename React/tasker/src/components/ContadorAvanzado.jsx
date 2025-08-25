import { useState } from "react"

export default function ContadorAvanzado() {
    const [contador, setContador] = useState(0);
    const [paso, setPaso] = useState(1);

    const manejarCambio = (e) => {
        setPaso(Number(e.target.value));
    }

    const manejarEnter = (e) => {
        if (e.key === "Enter") {
            setContador(contador + paso);
        }
    };

    return (
        <div className="p-4 text-center">
            <h2 onClick={() => setContador(0)}
            className="cursor-pointer text-2x1 font-bold"
            >
                
            </h2>
        </div>
    )
}