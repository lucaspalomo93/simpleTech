import { useContext } from 'react';
import { SimpleTechContext } from '../context/context';
import get from 'lodash/get';
import { CENTRAL_IMAGE } from '../constants/images';

export const imageSelector = () => {
  const { state } = useContext(SimpleTechContext);

  const sectionSelected = state.sectionSelected || '';
  const subSectionSelected = state.subSectionSelected || '';
  const colorPickerSelected = state.colorPickerSelected || '';

  // Crear un array con los valores que existen
  const valuesArray = [
    sectionSelected,
    subSectionSelected,
    colorPickerSelected,
  ];

  // Filtrar los valores no vacíos
  const nonEmptyValues = valuesArray.filter((value) => value !== '');

  // Unir los valores no vacíos por guiones bajos
  const imageName = nonEmptyValues.join('_');

  let category;

  if (imageName.includes('TECHOS')) {
    category = 'TECHOS';
  } else if (imageName.includes('PAREDES')) {
    category = 'PAREDES';
  } else {
    // Manejar el caso cuando la categoría no se encuentra
    // console.error('Categoría no encontrada para', imageName);
    return null;
  }

  // Realizar acciones según la categoría
  switch (category) {
    case 'TECHOS':
      // Realizar acciones específicas para TECHOS
      return findImageInTechos(imageName);
    case 'PAREDES':
      // Realizar acciones específicas para PAREDES
      return findImageInParedes(imageName);
    default:
      return null;
  }
};

function findImageInTechos(imageName: string) {
  const [section, subSection, color] = imageName.split('_');
  const img = get(CENTRAL_IMAGE, imageName);
  // const techosDefault = CENTRAL_IMAGE.TECHOS_SINUSOIDAL_DEFAULT;
  const defaultTechoSinusoidal = CENTRAL_IMAGE.TECHOS_SINUSOIDAL_DEFAULT;
  const defaultTechoTrapezoidal = CENTRAL_IMAGE.TECHOS_TRAPEZOIDAL_DEFAULT;
  const defaultTechoTeja = CENTRAL_IMAGE.TECHOS_TEJA_DEFAULT;

  console.log('imagen...', img);
  if (section && subSection && color) {
    if (img) {
      return img;
    } else if (subSection === 'SINUSOIDAL') {
      return defaultTechoSinusoidal;
    } else if (subSection === 'TRAPEZOIDAL') {
      return defaultTechoTrapezoidal;
    } else if (subSection === 'TEJA') {
      return defaultTechoTeja;
    }
  } else if (section && subSection) {
    if (subSection === 'SINUSOIDAL') {
      return defaultTechoSinusoidal;
    } else if (subSection === 'TRAPEZOIDAL') {
      return defaultTechoTrapezoidal;
    } else if (subSection === 'TEJA') {
      return defaultTechoTeja;
    }
  }

  return null;
}
function findImageInParedes(imageName: string) {
  const [section, subSection, color] = imageName.split('_');
  const img = get(CENTRAL_IMAGE, imageName);
  const paredDefault = CENTRAL_IMAGE.PAREDES_MICRONERVADO_DEFAULT;

  if (section && subSection && color) {
    if (img) {
      return img;
    }
  } else if (subSection) {
    return paredDefault;
  }

  return null;
}
