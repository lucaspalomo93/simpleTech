import { useContext, useState } from 'react';
import './projectVisualizer.css';
import { SimpleTechContext } from '../../../context/context';
import { Carousel } from 'react-responsive-carousel';
import { Divider, MobileStepper, Typography } from '@mui/material';
import { COLORS } from '../../../constants/colors';
import DefaultSolutionDisplay from '../../../components/mainPictureDisplay/defaultSolutionDisplay/defaultSolutionDisplay';
function ProjectVisualizer() {
  const { state } = useContext(SimpleTechContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCarouselChange = (index: number) => {
    setCurrentIndex(index);
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
      <div id='project-caraousel' className='carousel'>
        {projectCarouselImages.length > 0 ? (
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
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ objectFit: 'cover', maxHeight: '30rem' }}
                />
              </div>
            ))}
          </Carousel>
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
              margin: '0.3rem'
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: '#D2632C',
            },
          }}
        />
      </div>
      <div id='project-name'>
        <Typography
          style={{
            padding: '2rem 1rem',
            fontWeight: '500',
            letterSpacing: '1px',
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            color: COLORS.LIGT_GREY_TEXT,
            padding: '3rem 2rem 0 0',
            fontWeight: '200',
          }}
          id='project-description'
        >
          {projectDescription1}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            color: COLORS.LIGT_GREY_TEXT,
            padding: '0 2rem 0 0',
            fontWeight: '200',
          }}
          id='project-description'
        >
          {projectDescription2}
        </div>
      </div>
    </div>
  );
}

export default ProjectVisualizer;
