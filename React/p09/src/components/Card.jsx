import React from 'react'

export default function Card({ title, children, highlight, footer }) {
  const panelStyle = {
    background: 'var(--panel)',
    border: highlight ? '2px solid var(--brand)' : '1px solid var(--brand)',
    borderRadius: 16,
    padding: 18,
  }
  return (
    <section className={panelStyle}>
      {title && <h3 style={{marginTop:0}}>{title}</h3>}
      <div>{children /* contenido libre dentro de la tarjeta */}</div>
      {footer && <div style={{marginTop:12, opacity:.8}}>{footer}</div>}
    </section>
    
  )
}
