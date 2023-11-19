import './mainPictureDisplay.css';
import { imageSelector } from '../../utils/imageSelector';
import { Box } from '@mui/material';
import DefaultSolutionDisplay from './defaultSolutionDisplay/defaultSolutionDisplay';
import { IMG_PRESENT_STYLE } from '../../constants/styles';

function MainPictureDisplay() {
  const img = imageSelector();
  return (
    <div style={img && IMG_PRESENT_STYLE}>
      {img ? (
        <Box
          component={'img'}
          sx={{
            height: '50vh',
            width: '70vh',
            backgroundColor: '#363636',
          }}
          src={img}
          alt='img'
        />
      ) : (
        <DefaultSolutionDisplay />
      )}
    </div>
  );
}

export default MainPictureDisplay;
