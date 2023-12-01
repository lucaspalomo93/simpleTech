import './imageSidebar.css';
import { useContext, useState } from 'react';
import { SimpleTechContext } from '../../context/context';
import ImageSidebarCarousel from './imageSidebarCarousel/imageSidebarCarousel';

function ImageSidebar() {
  const { state } = useContext(SimpleTechContext);
  const imageList = state.sidebarImagesArray;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Nuevo estado para controlar qué componente mostrar
  const [showCarousel, setShowCarousel] = useState(false);

  const handleImageClick = (index: number) => {
    // Mostrar el componente ImageSidebarCarousel al hacer clic en la imagen
    setShowCarousel(true);
    // Establecer el índice de la imagen clicada
    setSelectedImageIndex(index);
  };

  const handleCarouselIconClick = () => {
    // Ocultar el componente ImageSidebarCarousel al hacer clic en el icono
    setShowCarousel(false);
  };

  return (
    <div id='image-sidebar-container'>
      <div className='image-wrapper'>
        {imageList &&
          imageList.map((image: string, index: number) => (
            <div
              id={`img-sidebar-${index}`}
              key={index}
              className='image-container'
              onClick={() => handleImageClick(index)}
            >
              <img className='image' src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
      </div>

      {showCarousel && (
        <ImageSidebarCarousel
          imageList={imageList}
          selectedImageIndex={selectedImageIndex}
          onIconClick={handleCarouselIconClick}
        />
      )}
    </div>
  );
}

export default ImageSidebar;
