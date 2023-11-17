import { imageSelector } from '../../utils/imageSelector';

function MainPictureDisplay() {
  const img = imageSelector();
  console.log('image...', img);
  return (
    <div className='solutions-picture-viewer'>
      {img && (
        <img className='solutions-picture-viewer-img' src={img} alt='img' />
      )}
    </div>
  );
}

export default MainPictureDisplay;
