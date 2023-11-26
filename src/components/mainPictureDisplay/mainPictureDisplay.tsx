import './mainPictureDisplay.css';
import { imageSelector } from '../../utils/imageSelector';
import { Box, Typography } from '@mui/material';
import DefaultSolutionDisplay from './defaultSolutionDisplay/defaultSolutionDisplay';
import { IMG_PRESENT_STYLE } from '../../constants/styles';
import { useContext } from 'react';
import { SimpleTechContext } from '../../context/context';

function MainPictureDisplay() {
  const { state } = useContext(SimpleTechContext);
  const imgText = state.pictureText;
  const img = imageSelector();

  return (
    <div id='main-picture-display' style={img && IMG_PRESENT_STYLE}>
      {img ? (
        <div>
          <Box
            className='box'
            component={'img'}
            src={img}
            alt='img'
          />
          <div
          className='text-container'
          >
            <Typography>{imgText}</Typography>
          </div>
        </div>
      ) : (
        <DefaultSolutionDisplay />
      )}
    </div>
  );
}

export default MainPictureDisplay;
