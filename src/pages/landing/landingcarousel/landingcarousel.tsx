import './landingcarousel.css';
import { Carousel } from 'react-responsive-carousel';
import { landingImagesAndNames } from '../../inspiration/carousel/data';
import { useState } from 'react';

const LandingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevImageClick = () => {
    const prevIndex =
      (currentIndex - 1 + landingImagesAndNames.images.length) %
      landingImagesAndNames.images.length;
    setCurrentIndex(prevIndex);
  };

  const handleNextImageClick = () => {
    const nextIndex = (currentIndex + 1) % landingImagesAndNames.images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className='mayor-carousel-container'>
      <p className='landing-inspiration-text'>
        Inspirate con nuestros proyectos
      </p>
      <div className='landing-carousel-container'>
        <div className='landing-carousel'>
          {/* Imagen a la izquierda */}
          <div className='landing-side-img-container'>
            <img
              src={
                landingImagesAndNames.images[
                  (currentIndex - 1 + landingImagesAndNames.images.length) %
                    landingImagesAndNames.images.length
                ]
              }
              alt='prev'
              onClick={handlePrevImageClick}
            />
          </div>

          {/* Carousel principal */}
          <Carousel
            className='landing-carousel-component'
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            showArrows={false}
            selectedItem={currentIndex}
            onChange={(index) => setCurrentIndex(index)}
          >
            {landingImagesAndNames.images.map((image, index) => (
              <div className='landing-carousel-img' key={index}>
                <img src={image} alt={landingImagesAndNames.names[index]} />
              </div>
            ))}
          </Carousel>

          {/* Imagen a la derecha */}
          <div className='landing-side-img-container'>
            <img
              src={
                landingImagesAndNames.images[
                  (currentIndex + 1) % landingImagesAndNames.images.length
                ]
              }
              alt='next'
              onClick={handleNextImageClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCarousel;
