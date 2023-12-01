import { useContext, useState } from 'react';
import './projectVisualizer.css';
import { SimpleTechContext } from '../../../context/context';
import { Carousel } from 'react-responsive-carousel';
import { Divider, MobileStepper, Typography } from '@mui/material';
import { COLORS } from '../../../constants/colors';
import DefaultSolutionDisplay from '../../../components/mainPictureDisplay/defaultSolutionDisplay/defaultSolutionDisplay';
import { ICON } from '../../../constants/images';

function ProjectVisualizer() {
  const { state, setState } = useContext(SimpleTechContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleIconClick = () => {
    setState({
      ...state,
      showInspirationProject: false,
    });
  };

  const {
    projectCarouselImages,
    projectDisplayName,
    projectDescription1,
    projectDescription2,
  } = state;

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column' }}
      id='project-container'
      className='container'
    >
      <div className='carousel-visualizer-container'>
        {projectCarouselImages.length > 0 ? (
          <div className='carousel-wrapper'>
            <div className='close-icon' onClick={handleIconClick}>
              <img
                className='close-icon-img'
                src={ICON.CLOSE_ICON}
                alt='Close Icon'
              />
            </div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              selectedItem={currentIndex}
              onChange={(index) => handleCarouselChange(index)}
            >
              {projectCarouselImages.map((image: string, index: number) => (
                <div key={index}>
                  <img
                    className='project-visualizer-image'
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{ objectFit: 'cover', maxHeight: '30rem' }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <DefaultSolutionDisplay />
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MobileStepper
          variant='dots'
          steps={projectCarouselImages.length}
          position='static'
          activeStep={currentIndex}
          nextButton={null}
          backButton={null}
          sx={{
            bgcolor: 'transparent',
            '& .MuiMobileStepper-dot': {
              backgroundColor: '#D9D9D9',
              fontSize: '100px',
              width: '0.7rem',
              height: '0.7rem',
              margin: '0.3rem',
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#D2632C',
            },
          }}
        />
      </div>
      <div id='project-name'>
        <Typography
          fontFamily={'Montserrat, sans-serif'}
          fontWeight={'bold'}
          style={{
            padding: '1rem 1rem',
          }}
          color={COLORS.WHITE}
        >
          {projectDisplayName}
        </Typography>
      </div>
      <div style={{ width: '100%' }}>
        <Divider
          style={{
            width: '95%',
            margin: 'auto',
            fontWeight: 'bold',
            height: '1.5px',
          }}
          color={COLORS.GREY_TEXT}
        />
      </div>
      <div className='description-container'>
        <div className='description-1' id='project-description'>
          {projectDescription1}
        </div>
        <div className='description-2' id='project-description'>
          {projectDescription2}
        </div>
      </div>
    </div>
  );
}

export default ProjectVisualizer;
