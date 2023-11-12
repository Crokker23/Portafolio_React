import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./assets/Carrucel.css";

const Carrusel = () => {
  const slides = [
    {
      titulo: 'Chef',
      titulo2: "Especiarium Bar- Barcelona, España. 2020 (7 Meses) | 2022 (3 Meses)",
      imagen: './imagenes/Chef.jpeg ',
      texto: '*Control de mercadería *Creación de platos *Diseño de carta *Gestión de Pedidos',
    },
    {
      titulo: 'Teleoperador',
      titulo2: "Plataformas de Inversiones INVESTQ. abril 2022- Setiembre 2022",
      imagen: './imagenes/Teleoperador.jpeg ',
      texto: '*Conversión de clientes *Retención *Manejo de Herramientas informáticas CRM',
    },
    {
      titulo: 'Mozo de almacén',
      titulo2: "Amazon Spain Fulfilment, S.L (BCN1, El Prat de Llobregat, Barcelona, España). 2021-2022 Amazon",
      imagen: './imagenes/Amazon.jpeg ',
      texto: '*Producción *Pick *Manual Pick',
    },
    // Añade más slides según sea necesario
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Desactivar todas las flechas de navegación
  };
 

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className='carrucel'>
          <img src={slide.imagen} alt={`Imagen ${index + 1}`} />
          <h2>{slide.titulo}</h2>
          <h3> {slide.titulo2}</h3>
          <p>{slide.texto}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carrusel;
