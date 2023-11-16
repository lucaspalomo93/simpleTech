import { CssBaseline } from '@mui/material';
import '../../styles/customStyles.css';
import SideBar from '../sideBar/sideBar';
import DescriptionFooter from '../descriptionFooter/descriptionFooter';
import PictureDisplay from '../pictureDisplay/pictureDisplay';
import ImageSidebar from '../imageSidebar/imageSidebar';
import ColorPicker from '../colorPicker/colorPicker';

function RenderImages() {
  return (
    <>
      <CssBaseline />
      <div className='render-grid'>
        <div className='div1'>
          <SideBar />
        </div>
        <div className='div2'>
          <ColorPicker />
        </div>
        <div className='div3'>
          <DescriptionFooter />
        </div>
        <div className='div4'>
          <ImageSidebar />
        </div>
        <div className='div5'>
          <PictureDisplay />
        </div>
      </div>
    </>
  );
}

export default RenderImages;
