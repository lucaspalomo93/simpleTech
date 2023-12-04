import './commonSection.css';
import ColorPicker from '../../../components/colorPicker/colorPicker';
import DescriptionFooter from '../../../components/descriptionFooter/descriptionFooter';
import ImageSidebar from '../../../components/imageSidebar/imageSidebar';
import MainPictureDisplay from '../../../components/mainPictureDisplay/mainPictureDisplay';
import { MouseEvent } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

interface PresentationButtonsProps {
  handleToggleSidebar: (
    event: MouseEvent<HTMLDivElement | HTMLButtonElement>
  ) => void;
  handleInspiracionClick: () => void;
  showSidebar: boolean;
}

const CommonSection: React.FC<PresentationButtonsProps> = ({
  handleToggleSidebar,
  handleInspiracionClick,
  showSidebar,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={`content ${isMobile && showSidebar ? 'no-display' : ''}`}>
      <div className='main-content'>
        <div className='visualizer'>
          <div className='picker'>
            <ColorPicker />
          </div>
          <div className='display'>
            <MainPictureDisplay
              handleToggleSidebar={handleToggleSidebar}
              handleInspiracionClick={handleInspiracionClick}
            />
          </div>
        </div>
        <div className='image-sidebar'>
          <ImageSidebar />
        </div>
      </div>
      <div className='home-footer'>
        <DescriptionFooter />
      </div>
    </div>
  );
};

export default CommonSection;
