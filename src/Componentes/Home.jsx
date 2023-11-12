import React from 'react';
import "./assets/Home.css";
import Carrusel from './Carrucel';
import Contacto from './Contacto';
import Footer from './Footer';





const Home = () => {

  return (
    <div className='Home'>

      <div>
        <img className='uruguay' src="./imagenes/uruguay.jpg" alt="" />
      </div>

      <div class='Titulo' >
        <h1 > ¡Hola y bienvenidos!  <br />Soy Nestor Olivera</h1>
      </div>

      <div className='sobre-mi' id='Sobre-mi'>

        <img className='imagen-Nestor' src="./imagenes/Nestor.jpeg" alt="" />

        <p className='descripcion'>
          Soy un joven uruguayo con raíces en la gastronomía, donde el arte de crear platos se convirtió en mi primer amor. Mi viaje en la cocina me enseñó la importancia de la creatividad y la precisión. Ahora, embarcándome en un nuevo capítulo, estoy incursionando en el mundo de la programación. Esta transición me desafía a fusionar mi pasión por la innovación culinaria con el mundo digital, buscando nuevos sabores en el código y la lógica. Mi determinación y creatividad, forjadas en la cocina,
          ahora encuentran un nuevo lienzo en el vasto mundo de la programación, donde busco saborear cada desafío como un plato exquisito por descubrir.
        </p>


      </div>

      <div className='Enlaces'>

        <a href="https://github.com/Crokker23" className='enlaces-directos' target='blanck'><img src="/imagenes/Github.png" alt="" /></a>
        <a href="./Curriculum/Nestor.pdf" download={"./Curriculum/Nestor.pdf"} className='enlaces-directos'><img src="/imagenes/Descarga.png" alt="" /></a>
        <a href="https://www.linkedin.com/in/néstorolivera" className='enlaces-directos' target='blanck'><img src="/imagenes/Linkedin.png" alt="" /></a>

      </div>



      <div className='fundacio'>
        <br />
        <h2 className='conocimiento' id='Conocimientos' >Conocimientos y Skills</h2>
      </div>
      <div className='fundacio'>


        <br />
        <div className='inf'>

          <h2 >Fundación Esplai. Barcelona 2023 (5 Meses)</h2>
          <br />
          <h3>Fronted</h3>
          <p> Html5
            /Css3
            / JavaScript / jQuery
            / Bootstrap</p>
          <p>Biblioteca:React</p>
          <p>Backend:
            Python</p>
          <p>
            Bases de Datos:
            SQL / MySQL / MongoDB</p>
        </div>
        <img className='img-fundacio' src="./imagenes/Fundacio.jpeg" alt="" />
      </div>

      <div className='fundacio'>

        <br />
        <div >
          <h2 >Instituto Uruguayo Gastronómico UG, Punta del este, Uruguay</h2>
          <br />
          <h3>Técnico Gastronomía</h3>
          <p>Cocina / Pastelería / Panadería </p>
          <p> Marketing / Administración de Personal / Organización y
            Planificación de Eventos / Principios de Administración / Administración de Procesos
            Gastronómicos / Costos y Presupuestación / Legislación Técnico Tributaria</p>
        </div>
        <img className='img-ug' src="./imagenes/UG.jpeg" alt="" />

      </div>










      <div className='Experiencia' id='Experiencia'>
        <h1>Experiencias</h1>
      </div>
      <Carrusel />

      <div className='fundacio'>
        <h1 className='contacto-titulo'>Contacto</h1>

      </div>
      <Contacto />

<Footer/>

    </div>
  );
}

export default Home;