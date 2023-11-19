import { useContext, useState } from 'react';
import { items } from '../constants/menuItems';
import { SimpleTechContext } from '../context/context';

export const useSidebarOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(3).fill(false));
  const [expanded, setExpanded] = useState(Array(3).fill(false));
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const { state, setState } = useContext(SimpleTechContext);

  const handleItemClick = (index: number) => {
    setSelectedOptions((prev) => {
      const newOptions = Array(prev.length).fill(false);
      newOptions[index] = !prev[index]; // Invertir el estado de selección
      const sectionSelected = items[index][0].label;
      const value = newOptions[index] ? sectionSelected : '';
      setState({
        ...state,
        sectionSelected: value.toUpperCase(),
        subSectionSelected: '',
      });

      return newOptions;
    });

    setExpanded((prev) => {
      const newExpanded = Array(prev.length).fill(false); // Cerrar todas las opciones
      newExpanded[index] = !prev[index]; // Invertir el estado de expansión para la opción clickeada
      return newExpanded;
    });
  };

  const handleSubOptionClick = (subOption: string) => {
    // Verifica si la opción actual ya está seleccionada

    if (selectedSubOption === subOption) {
      setSelectedSubOption(''); // Desselecciona la opción actual
      setState({
        ...state,
        subSectionSelected: '',
      });
    } else {
      setSelectedSubOption(subOption); // Selecciona la nueva opción
      setState({
        ...state,
        subSectionSelected: subOption.toUpperCase(),
      });
    }
  };

  return {
    selectedOptions,
    expanded,
    selectedSubOption,
    handleItemClick,
    handleSubOptionClick,
  };
};
