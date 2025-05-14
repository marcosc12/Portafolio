import React from 'react';
import '../App.css';

const Contacto = () => {
  return (
    <div>
      <header>
        <div className="logo">PORTAFOLIO</div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/contacto">Contacto</a></li>
           
          </ul>
        </nav>
      </header>

      <div style={{ textAlign: 'center' }}>
        <div className="grid-container">
          <div className="box">
            <div className="icon">💻</div>
            <h2>CORREO ELECTRÓNICO</h2>
            <p>
              <a href="mailto:marcoscrack64lol@gmail.com">marcoscrack64lol@gmail.com</a>
            </p>
          </div>
          <div className="box">
            <div className="icon">📱</div>
            <h2>NÚMERO TELEFÓNICO</h2>
            <p>
              <a href="https://wa.me/5212411151454" target="_blank" rel="noopener noreferrer">241-115-14-54</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
