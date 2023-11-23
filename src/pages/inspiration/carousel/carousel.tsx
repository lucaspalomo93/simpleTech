import { LinearProgress, Link, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { COLORS } from "../../../constants/colors";
import { Carousel } from "react-responsive-carousel";
import { SimpleTechContext } from "../../../context/context";
import { categories, imageSets } from "./data";

function CarouselComponent() {
  const { state, setState } = useContext(SimpleTechContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  console.log('showing project? ', state.showInspirationProject);

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
      imageSets[selectedCategory].images.length
    );
    setCurrentIndex(prevIndex);
  };

  const handleNextImageClick = () => {
    const nextIndex = getNextIndex(
      currentIndex,
      imageSets[selectedCategory].images.length
    );
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
          gap: '1rem',
        }}
      >
        {categories.map((category, index) => (
          <Link
            key={index}
            underline='none'
            color={COLORS.WHITE}
            bgcolor={
              selectedCategory === category ? COLORS.ORANGE : COLORS.DARK_GREY
            }
            padding={'0.5rem'}
            border={selectedCategory === category ? 'none' : '1px solid white'}
            borderRadius={'25px'}
            display={'inline'}
            onClick={() => handleLinkClick(category)}
            style={{ cursor: 'pointer' }}
            marginTop={'1rem'}
            marginBottom={'6rem'}
          >
            <Typography>{category}</Typography>
          </Link>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '70%',
          margin: '0 auto',
          paddingTop: '2rem',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '250px',
          }}
        >
          <img
            src={
              imageSets[selectedCategory].images[
                getPrevIndex(
                  currentIndex,
                  imageSets[selectedCategory].images.length
                )
              ]
            }
            alt='prev'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            onClick={handlePrevImageClick}
          />
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={currentIndex}
          onChange={handleSlideChange}
          width={'100%'}
        >
          {imageSets[selectedCategory].images.map((slide, index) => (
            <div key={index} style={{ width: '100%', height: '300px' }}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </Carousel>
        <div style={{ width: '100%', height: '250px' }}>
          <img
            src={
              imageSets[selectedCategory].images[
                getNextIndex(
                  currentIndex,
                  imageSets[selectedCategory].images.length
                )
              ]
            }
            alt='next'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              cursor: 'pointer',
            }}
            onClick={handleNextImageClick}
          />
        </div>
      </div>
      <Typography
        variant='body2'
        style={{
          textAlign: 'center',
          marginTop: '1rem',
          color: COLORS.WHITE,
          fontSize: '1rem',
          fontWeight: '500',
          letterSpacing: '0.1rem',
          paddingTop: '1rem',
        }}
      >
        {imageSets[selectedCategory].texts[currentIndex]}
      </Typography>
      {/* {showProject && ( */}
      <div
        style={{
          display: 'block',
          textAlign: 'center',
        }}
      >
        <Link
          component='button'
          color={COLORS.WHITE}
          underline='always'
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            marginBottom: '1rem',
            fontSize: '0.9rem',
            letterSpacing: '0.07rem',
          }}
          onClick={() => {
            setState({
              ...state,
              showInspirationProject: true,
            }),
              console.log(
                `Ver proyecto de ${imageSets[selectedCategory]?.texts[currentIndex]}`
              );
          }}
        >
          VER PROYECTO
        </Link>
      </div>
      {/* )} */}
      <div
        style={{
          marginBottom: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LinearProgress
          variant='determinate'
          value={
            (currentIndex / (imageSets[selectedCategory].images.length - 1)) *
            100
          }
          sx={{
            backgroundColor: '#D9D9D9',
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
    </>
  );
}

export default CarouselComponent;
