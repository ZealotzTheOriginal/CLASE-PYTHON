import { useState } from "react"

export default function Caja() {
    const [color, setColor] = useState('gray');

    return (
            <div style={{backgroundColor:`${color}`, height:'100px', width:'100px'}}
            onMouseEnter={() => setColor('blue')} 
            onMouseLeave={() => setColor('gray')}>
            </div>
    );
}