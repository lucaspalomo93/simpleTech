import './landingcarousel.css';
import { Carousel } from 'react-responsive-carousel';
import { landingImagesAndNames } from '../../inspiration/carousel/data';
import { useContext, useState } from 'react';
import { LANDING } from '../../../constants/images';
import { LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { SimpleTechContext } from '../../../context/context';

const LandingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { state, setState } = useContext(SimpleTechContext);

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

  const handleArrowClick = () => {
    setState({
      ...state,
      sectionSelected: 'INSPIRACIÓN',
    });
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
            autoPlay={true}
            interval={2500}
            infiniteLoop={true}
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
      <div className='landing-carousel-image-name-container'>
        <div className='landing-name-container'>
          <p className='landing-image-name'>
            {landingImagesAndNames.names[currentIndex]}
          </p>
        </div>
        <div>
          <Link to='/catalogo' onClick={handleArrowClick}>
            <img
              src={LANDING.FLECHA_DERECHA_LANDING}
              alt='flecha-derecha-landing'
            />
          </Link>
        </div>
      </div>
      <div className='landing-progress-bar'>
        <LinearProgress
          className='linear-progress'
          variant='determinate'
          value={
            (currentIndex / (landingImagesAndNames.images.length - 1)) * 100
          }
          sx={{
            backgroundColor: '#383838',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#D2632C',
            },
            borderRadius: '10px',
            width: '80%',
            height: '0.7rem',
            margin: '3rem auto',
          }}
        />
      </div>
    </div>
  );
};

export default LandingCarousel;
