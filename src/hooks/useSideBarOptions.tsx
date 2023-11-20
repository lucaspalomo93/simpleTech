import { useContext, useState } from 'react';
import { items } from '../constants/menuItems';
import { SimpleTechContext } from '../context/context';

export const useSidebarOptions = () => {
  const [selectedSection, setSelectedSection] = useState(Array(3).fill(false));
  const [expanded, setExpanded] = useState(Array(3).fill(false));
  const [selectedSubSection, setSelectedSubSection] = useState('');
  const [selectedSubSectionStyle, setSelectedSubSectionStyle] = useState('');

  const { state, setState } = useContext(SimpleTechContext);

  const handleItemClick = (index: number) => {
    setSelectedSection((prev) => {
      const newOptions = Array(prev.length).fill(false);
      newOptions[index] = !prev[index]; // Invertir el estado de selección
      const sectionSelected = items[index][0].label;
      const value = newOptions[index] ? sectionSelected : '';
      setState({
        ...state,
        sectionSelected: value.toUpperCase(),
        subSectionSelected: '',
        showColorPicker: false,
        colorPickerSelected: '',
        footerDescriptionText: '',
        footerDescriptionDimensions: '',
      });
      setSelectedSubSectionStyle('');

      return newOptions;
    });

    setExpanded((prev) => {
      const newExpanded = Array(prev.length).fill(false); // Cerrar todas las opciones
      newExpanded[index] = !prev[index]; // Invertir el estado de expansión para la opción clickeada
      return newExpanded;
    });
  };

  const handleSubSectionClick = (
    subOption: string,
    subOptionColors: any,
    subSection: any
  ) => {
    const footerDescriptionText = subSection.footerDescription.text;
    const footerDescriptionDimensions = subSection.footerDescription.dimensions;
    // Verifica si la opción actual ya está seleccionada
    if (selectedSubSection === subOption) {
      setSelectedSubSection(''); // Desselecciona la opción actual
      setSelectedSubSectionStyle('');
      setState({
        ...state,
        subSectionSelected: '',
        showColorPicker: false,
        footerDescriptionText: '',
        footerDescriptionDimensions: '',
      });
    } else {
      setSelectedSubSection(subOption); // Selecciona la nueva opción
      setSelectedSubSectionStyle('selected-option');
      setState({
        ...state,
        subSectionSelected: subOption.toUpperCase(),
        showColorPicker: true,
        colorPickersArray: subOptionColors,
        footerDescriptionText: footerDescriptionText,
        footerDescriptionDimensions: footerDescriptionDimensions,
      });
    }
  };

  return {
    selectedSection,
    expanded,
    selectedSubSection,
    selectedSubSectionStyle,
    handleItemClick,
    handleSubSectionClick,
  };
};
