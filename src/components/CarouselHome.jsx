import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const slides = [
  {
      name: "Calafate",
      location: "Argentina",
      image: "src/assets/img/Calafate.png",
  },
  {
      name: "Rio de Janeiro",
      location: "Brasil",
      image: "src/assets/img/Rio.png",
  },
  {
      name: "Gran Muralla",
      location: "China",
      image: "src/assets/img/Muralla.png",
  },
  {
      name: "Cataratas de Iguazu",
      location: "Argentina",
      image: "src/assets/img/Cataratas.png",
  },
  {
      name: "Piramides",
      location: "Egipto",
      image: "src/assets/img/Egipto.png",
  },
  // Agrega más destinos aquí
]

const CarouselHome = () => {
  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-image "
            src={slide.image}
            alt={slide.name}
          />
          <Carousel.Caption>
            <h3>{slide.name}</h3>
{/*             <p>{slide.location}</p>
 */}          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselHome;
