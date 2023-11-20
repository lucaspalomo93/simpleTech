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
