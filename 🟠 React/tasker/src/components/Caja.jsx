import { useState } from "react"

export default function Caja() {
    const [color, setColor] = useState('#345091');

    return (
            <div style={{backgroundColor:`${color}`, height:'100px', width:'100px', margin:'10px', borderRadius:'16px', boxShadow:'0px 2px 3px 1px rgba(150, 150, 150, 1)', textAlign:"center"}}
            onMouseEnter={() => setColor('#6d99ff')} 
            onMouseLeave={() => setColor('#345091')}>
            <p style={{with:'100%', height:'100%', margin:'0', alignContent:'center'}}>🥵</p></div>
    );
}