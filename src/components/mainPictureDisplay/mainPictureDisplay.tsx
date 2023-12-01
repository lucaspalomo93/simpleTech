import './mainPictureDisplay.css';
import { imageSelector } from '../../utils/imageSelector';
import { Box } from '@mui/material';
import DefaultSolutionDisplay from './defaultSolutionDisplay/defaultSolutionDisplay';
import { IMG_PRESENT_STYLE } from '../../constants/styles';
import { useContext } from 'react';
import { SimpleTechContext } from '../../context/context';
import { ICON } from '../../constants/images';

function MainPictureDisplay() {
  const { state } = useContext(SimpleTechContext);
  const imgText = state.pictureText;
  const img = imageSelector();

  return (
    <div id='main-picture-display' style={img && IMG_PRESENT_STYLE}>
      {img ? (
        <div>
          <Box className='box' component={'img'} src={img} alt='img' />
          <div className='flecha-text-container'>
            <div className='icon-flecha'>
              <img src={ICON.FLECHA_PANELES} alt="flecha_paneles" />
            </div>
            <div className='text-container'>
              <p>{imgText}</p>
            </div>
          </div>
        </div>
      ) : (
        <DefaultSolutionDisplay />
      )}
    </div>
  );
}

export default MainPictureDisplay;
