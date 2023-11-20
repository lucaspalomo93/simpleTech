import './mainPictureDisplay.css';
import { imageSelector } from '../../utils/imageSelector';
import { Box, Typography } from '@mui/material';
import DefaultSolutionDisplay from './defaultSolutionDisplay/defaultSolutionDisplay';
import { IMG_PRESENT_STYLE } from '../../constants/styles';
import { COLORS } from '../../constants/colors';
import { useContext } from 'react';
import { SimpleTechContext } from '../../context/context';

function MainPictureDisplay() {
  const { state } = useContext(SimpleTechContext);
  const imgText = state.pictureText;
  const img = imageSelector();

  return (
    <div style={img && IMG_PRESENT_STYLE}>
      {img ? (
        <div>
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              color: COLORS.LIGT_GREY_TEXT,
            }}
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
