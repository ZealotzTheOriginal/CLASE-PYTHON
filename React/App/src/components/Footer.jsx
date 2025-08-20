// src/components/Footer.jsx
import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('es-ES');

  return (
    <footer className="footer">
      <p>Hora actual: {formattedTime}</p>
    </footer>
  );
}

export default Footer;