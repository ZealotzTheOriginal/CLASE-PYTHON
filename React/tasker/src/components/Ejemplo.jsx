    import { useState, useEffect } from "react";

    function Ejemplo() {
        const [contador, setContador] = useState(0);

        useEffect(() => {
            console.log("El contador cambió:", contador);
        }, [contador]);

        useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Tick...");
        }, 1000);
        return () => {
        clearInterval(intervalId);
        };
        }, [contador]);

        return(
            <>
                <h2>El valor de contador es : {contador}</h2>
                <button onClick={() => setContador(contador + 1)}>+</button>
            </>
        )
    }

    export default Ejemplo;