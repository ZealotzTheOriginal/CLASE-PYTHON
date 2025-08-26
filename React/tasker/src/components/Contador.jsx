import { useState } from "react"

export default function Contador() {
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState('Sin Nombre');
    const [count, setCount] = useState(0);

    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(0);

    return (
        <div>
            <p>Has hecho clic {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
            <button onClick={() => setContador(contador - 1)}>Restar</button>
            <button onClick={() => setContador(0)}>Reiniciar</button>
            <button onClick={() => setNombre('Nombre Nuevo')}>Cambiar Nombre</button>
            <p>{nombre}</p>

            <p>Contador: {count}</p>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>

        </div>
    );
}