import './commonSection.css';
import ColorPicker from '../../../components/colorPicker/colorPicker';
import DescriptionFooter from '../../../components/descriptionFooter/descriptionFooter';
import ImageSidebar from '../../../components/imageSidebar/imageSidebar';
import MainPictureDisplay from '../../../components/mainPictureDisplay/mainPictureDisplay';

const CommonSection = () => {
  return (
    <div className='content'>
      <div className='main-content'>
        <div className='visualizer'>
          <div className='picker'>
            <ColorPicker />
          </div>
          <div className='display'>
            <MainPictureDisplay />
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
