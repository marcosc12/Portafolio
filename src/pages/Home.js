import React, { useState } from 'react';
import '../App.css';
import foto2 from "../assets/img/foto2.jpeg";
import salon from "../assets/img/salon.jpeg";


const Home = () => {
  const [language, setLanguage] = useState('es');  // State for language toggle

  const texts = {
    es: {
      logo: "PORTAFOLIO",
      menuInicio: "Inicio",
      menuContacto: "Contacto",
      language: "ES",
      title: "Desarrollador Web",
      subtitle: "Backend",
      name: "SOBRE MI",
      description: "Soy Marcos un desarrollador con experiencia en Java, React, Angular, PHP, .NET, Spring Boot, Django MySQL y SQL. Tengo un sólido conocimiento en el diseño e implementación de APIs RESTful y en la integración de interfaces modernas y escalables.",
      btnContact: "Contacto",
      conocimiento: "¡Conocimiento!",
      habilidadesBlandas: "HABILIDADES BLANDAS",
      habilidad1: "Trabajo en equipo.",
      habilidad2: "Comunicación efectiva para capacitación técnica.",
      habilidad3: "Resolución creativa de problemas y adaptabilidad a nuevas tecnologías.",
      habilidadesTecnicas: "HABILIDADES TÉCNICAS",
      tecnica1: "Lenguajes de Programación: Java, Python, JavaScript, C#, PHP, .NET",
      tecnica2: "Frameworks: Vue.js, Spring Boot, Django",
      tecnica3: "Frontend: HTML, CSS, Bootstrap, React, Angular, Tailwind",
      tecnica4: "Backend: PHP, ASP.NET, Node.js.",
      tecnica5: "Bases de Datos: SQL, MySQL.",
      tecnica6: "Herramientas: Git, GitHub, Docker.",
      tecnica7: "Metodologías: Scrum, Kanban.",
      proyectos: "¡Proyectos Personales!",
      proyecto1: "Sistema de Gestión de eventos",
      proyecto2: "Control de Inventario",
      btnProyecto1: "Ver video en Google Drive",
      btnProyecto2: "Ver video en Google Drive",
      tecnologias1: "Tecnologías: HTML, JavaScript, CSS, PHP, MySQL.",
      tecnologias2: "Tecnologías: HTML, JavaScript, CSS, PHP, MySQL."
    },
    en: {
      logo: "PORTFOLIO",
      menuInicio: "Home",
      menuContacto: "Contact",
      language: "EN",
      title: "Web Developer",
      subtitle: "Backend",
      name: "ABOUT ME",
      description: "I'm Marcos, a developer with experience in Java, React, Angular, PHP, .NET, Spring Boot, Django, MySQL, and SQL. I have a solid understanding of RESTful API design and implementation, as well as integrating modern, scalable interfaces.",
      btnContact: "Contact",
      conocimiento: "Knowledge!",
      habilidadesBlandas: "SOFT SKILLS",
      habilidad1: "Teamwork.",
      habilidad2: "Effective communication for technical training.",
      habilidad3: "Creative problem solving and adaptability to new technologies.",
      habilidadesTecnicas: "TECHNICAL SKILLS",
      tecnica1: "Programming Languages: Java, Python, JavaScript, C#, PHP, .NET",
      tecnica2: "Frameworks: Vue.js, Spring Boot, Django",
      tecnica3: "Frontend: HTML, CSS, Bootstrap, React, Angular,Tailwind",
      tecnica4: "Backend: PHP, ASP.NET, Node.js.",
      tecnica5: "Databases: SQL, MySQL.",
      tecnica6: "Tools: Git, GitHub, Docker.",
      tecnica7: "Methodologies: Scrum, Kanban.",
      proyectos: "Personal Projects!",
      proyecto1: "Event Management System",
      proyecto2: "Inventory Control",
      btnProyecto1: "View video on Google Drive",
      btnProyecto2: "View video on Google Drive",
      tecnologias1: "Technologies: HTML, JavaScript, CSS, PHP, MySQL.",
      tecnologias2: "Technologies: HTML, JavaScript, CSS, PHP, MySQL."
    }
  };

  const changeLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="App">
      <header>
        <div className="logo">{texts[language].logo}</div>
        <nav>
          <ul>
            <li><a href="/">{texts[language].menuInicio}</a></li>
            <li><a href="/contacto">{texts[language].menuContacto}</a></li>
            <li id="languageToggle" onClick={changeLanguage}>{texts[language].language}</li>
          </ul>
        </nav>
      </header>
      

      <div className="horizontal-container">
        <div className="text-column">
          <div className="content-card">
            <div className="header">
              <div className="title">{texts[language].title}</div>
              <div className="subtitle">{texts[language].subtitle}</div>
              <div className="name">{texts[language].name}</div>
            </div>
            <p className="description">{texts[language].description}</p>
            <div className="buttons">
              <a href="/contacto"><button className="btn btn-contact">{texts[language].btnContact}</button></a>
            </div>
          </div>
        </div>
        <div className="image-column">
          <img className="computer-img" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Computadora de desarrollo" />
        </div>
      </div>

      <center>
        <p>{texts[language].conocimiento}</p>


        <div className="grid-container">
          <div className="box">
            <div className="icon">✨</div>
            <h2>{texts[language].habilidadesBlandas}</h2>
            <p>{texts[language].habilidad1}</p>
            <p>{texts[language].habilidad2}</p>
            <p>{texts[language].habilidad3}</p>
          </div>
          
          <div className="box">
            <div className="icon">📱</div>
            <h2>{texts[language].habilidadesTecnicas}</h2>
            <p>{texts[language].tecnica1}</p>
            <p>{texts[language].tecnica2}</p>
            <p>{texts[language].tecnica3}</p>
            <p>{texts[language].tecnica4}</p>
            <p>{texts[language].tecnica5}</p>
            <p>{texts[language].tecnica6}</p>
            <p>{texts[language].tecnica7}</p>
          </div>
        </div>

        <p>{texts[language].proyectos}</p>

        <div className="grid-container">
          <div className="box">
          <center>
            <h2>{texts[language].proyecto1}</h2>
            <img src={salon} style={{ width: '320px', height: '200px' }} />
            <a className="boton-drive" href="https://drive.google.com/file/d/1U9aJ9fKLestgzRvc1Ys43pPvuRuPI_qD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      
              <span>{texts[language].btnProyecto1}</span>
              
            </a>
            <h4>{texts[language].tecnologias1}</h4>
            </center>
          </div>

          <div className="box">
            <center>
            <h2>{texts[language].proyecto2}</h2>
            <img src={foto2} style={{ width: '320px', height: '200px' }} />
            <a className="boton-drive" href="https://drive.google.com/file/d/1VmtZ3IZjCKxEiGKjcwWHHgdpMYHwtejo/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <span>{texts[language].btnProyecto2}</span>
              
            </a>
            </center>
       
            <h4>{texts[language].tecnologias2}</h4>
          
      
          </div>
        </div>
      </center>
    </div>
  );
};

export default Home;
