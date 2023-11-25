import './carousel.css';
import { LinearProgress, Link, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import { COLORS } from '../../../constants/colors';
import { Carousel } from 'react-responsive-carousel';
import { SimpleTechContext } from '../../../context/context';
import { categories, imageSets } from './data';

function CarouselComponent() {
  const { state, setState } = useContext(SimpleTechContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleSlideChange = (value: any) => {
    setCurrentIndex(value);
    // No reiniciar la variable booleana al cambiar de diapositiva
  };

  const handleLinkClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0); // Reiniciar el índice cuando se cambia de categoría
  };

  const getPrevIndex = (currentIndex: number, length: number) => {
    return (currentIndex - 1 + length) % length;
  };

  const getNextIndex = (currentIndex: number, length: number) => {
    return (currentIndex + 1) % length;
  };

  const handlePrevImageClick = () => {
    const prevIndex = getPrevIndex(
      currentIndex,
      imageSets[selectedCategory].projectImagePresentation.length
    );
    setCurrentIndex(prevIndex);
  };

  const handleNextImageClick = () => {
    const nextIndex = getNextIndex(
      currentIndex,
      imageSets[selectedCategory].projectImagePresentation.length
    );
    setCurrentIndex(nextIndex);
  };

  const handleProjectLinkClick = () => {
    const currentProjectCarouselImages =
      imageSets[selectedCategory]?.carouselImages[currentIndex][0];
    const currentProjectDisplayNames =
      imageSets[selectedCategory]?.projectDisplayName[currentIndex];
    const currentProjectDescriptions1 =
      imageSets[selectedCategory]?.projectDescription_1[currentIndex];
    const currentProjectDescriptions2 =
      imageSets[selectedCategory]?.projectDescription_2[currentIndex];

    setState({
      ...state,
      projectCarouselImages: currentProjectCarouselImages,
      projectDisplayName: currentProjectDisplayNames,
      projectDescription1: currentProjectDescriptions1,
      projectDescription2: currentProjectDescriptions2,
      showInspirationProject: true,
    });
  };

  return (
    <>
      <div id='carousel-container' className='carousel-container'>
        {categories.map((category, index) => (
          <Link
            className='link'
            key={index}
            bgcolor={
              selectedCategory === category ? COLORS.ORANGE : COLORS.DARK_GREY
            }
            border={selectedCategory === category ? 'none' : '1px solid white'}
            onClick={() => handleLinkClick(category)}
          >
            <Typography>{category}</Typography>
          </Link>
        ))}
      </div>
      <div id='img-container' className='img-container'>
        {imageSets[selectedCategory].projectImagePresentation.length > 1 && (
          <div className='side-img-container'>
            <img
              src={
                imageSets[selectedCategory].projectImagePresentation[
                  getPrevIndex(
                    currentIndex,
                    imageSets[selectedCategory].projectImagePresentation.length
                  )
                ]
              }
              alt='prev'
              onClick={handlePrevImageClick}
            />
          </div>
        )}
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={currentIndex}
          onChange={handleSlideChange}
          width={'100%'}
        >
          {imageSets[selectedCategory].projectImagePresentation.map(
            (slide, index) => (
              <div
                id={`carousel-img-container-${index}`}
                className='carousel-img-container'
                key={index}
              >
                <img
                  id={`carousel-img-${index}`}
                  src={slide}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            )
          )}
        </Carousel>
        {imageSets[selectedCategory].projectImagePresentation.length > 1 && (
          <div id='right-img-container' className='side-img-container'>
            <img
              src={
                imageSets[selectedCategory].projectImagePresentation[
                  getNextIndex(
                    currentIndex,
                    imageSets[selectedCategory].projectImagePresentation.length
                  )
                ]
              }
              alt='next'
              onClick={handleNextImageClick}
            />
          </div>
        )}
      </div>
      <Typography className='project-name' variant='body2'>
        {imageSets[selectedCategory].projectName[currentIndex]}
      </Typography>
      <div id='project-link-container' className='project-link-container'>
        <Link
          component='button'
          color={COLORS.WHITE}
          underline='always'
          className='view-project-link'
          onClick={handleProjectLinkClick}
        >
          VER PROYECTO
        </Link>
      </div>
      <div id='linear-progress-container' className='linear-progress-container'>
        <LinearProgress
          className='linear-progress'
          variant='determinate'
          value={
            (currentIndex /
              (imageSets[selectedCategory].projectImagePresentation.length -
                1)) *
            100
          }
          sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#D2632C',
            },
          }}
        />
      </div>
    </>
  );
}

export default CarouselComponent;
