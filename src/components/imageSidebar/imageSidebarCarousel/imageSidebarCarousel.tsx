import './imageSidebarCarousel.css';
import { ICON } from '../../../constants/images';
import { Carousel } from 'react-responsive-carousel';

interface ImageSidebarCarouselProps {
  imageList: string[];
  selectedImageIndex: number;
  onIconClick: () => void;
}

function ImageSidebarCarousel({
  imageList,
  selectedImageIndex,
  onIconClick,
}: ImageSidebarCarouselProps) {
  return (
    <div className='image-sidebar-carousel'>
      <div className='carousel-overlay' onClick={onIconClick}></div>
      <div className='carousel-content'>
        <Carousel
          selectedItem={selectedImageIndex}
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          autoPlay={true}
          interval={3000}
        >
          {imageList.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <img
          src={ICON.CLOSE_ICON}
          alt='Close Icon'
          className='carousel-close-icon'
          onClick={onIconClick}
        />
      </div>
    </div>
  );
}

export default ImageSidebarCarousel;
