import './colorPicker.css';
import { Container, Typography } from '@mui/material';
import { COLORS } from '../../constants/colors';
import { useContext, useState } from 'react';
import { SimpleTechContext } from '../../context/context';
import { getColorPickerName } from '../../utils/getcolorPicker';
import { PICKER_TYPOGRAPHY_STYLE } from './colorPickerMui';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('');
  const { state, setState } = useContext(SimpleTechContext);

  const pickersSelectedArray = state.colorPickersArray;

  const handleColorClick = (color: string) => {
    // Si el color seleccionado ya está seleccionado, deseleccionarlo
    if (selectedColor === color) {
      setSelectedColor('');

      // Actualizar el contexto con el nuevo valor de colorPickerSelected
      setState({
        ...state,
        colorPickerSelected: '',
      });
    } else {
      // Si se hace clic en un nuevo color, seleccionarlo
      setSelectedColor(color);

      // Actualizar el contexto con el nuevo valor de colorPickerSelected
      setState({
        ...state,
        colorPickerSelected: getColorPickerName(color),
      });
    }
  };

  return (
    <div
      id='color-pickers'
      style={{
        backgroundColor: COLORS.DARK_GREY,
        height: '100%',
        width: '100%',
      }}
    >
      {state.showColorPicker && (
        <Container>
          <div className='picker-container'>
            <Typography
              color={COLORS.LIGT_GREY_TEXT}
              sx={PICKER_TYPOGRAPHY_STYLE}
            >
              Color
            </Typography>
            <div className='picker-list'>
              {pickersSelectedArray.map((picker: string, index: number) => (
                <div
                  id={`color-picker-container-${index}`}
                  key={index}
                  className={`color-picker ${
                    selectedColor === picker && state.colorPickerSelected !== ''
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => handleColorClick(picker)}
                >
                  <img
                    id={`color-picker-img-${index}`}
                    src={picker}
                    alt='picker'
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default ColorPicker;
