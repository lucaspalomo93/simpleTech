import { ReactNode, createContext, useMemo, useState } from 'react';

interface State {
  sectionSelected: string;
  subSectionSelected: string;
  colorPickerSelected: string;
  showColorPicker: boolean;
  colorPickersArray: any;
  footerDescriptionText: string;
  footerDescriptionDimensions: string;
  pictureText: string;
  sidebarImagesArray: any;
  showInspirationProject: boolean;
  projectCarouselImages: any;
  projectDisplayName: string;
  projectDescription1: string;
  projectDescription2: string;
}

interface ContextProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

const initialValue = {
  sectionSelected: '',
  subSectionSelected: '',
  colorPickerSelected: 'BLACK',
  showColorPicker: false,
  colorPickersArray: null,
  footerDescriptionText: '',
  footerDescriptionDimensions: '',
  pictureText: '',
  sidebarImagesArray: null,
  showInspirationProject: false,
  projectCarouselImages: null,
  projectDisplayName: '',
  projectDescription1: '',
  projectDescription2: '',
};

export const SimpleTechContext = createContext<ContextProps>({
  state: {
    ...initialValue,
  },
  setState: () => {},
});

const SimpleTechProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>({
    ...initialValue,
  });
  const contextValue = useMemo(() => ({ state, setState }), [state, setState]);

  return (
    <SimpleTechContext.Provider value={contextValue}>
      {children}
    </SimpleTechContext.Provider>
  );
};

export default SimpleTechProvider;
