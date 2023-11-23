import './inspiration.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselComponent from './carousel/carousel';
import { useContext } from 'react';
import { SimpleTechContext } from '../../context/context';
import ProjectVisualizer from './projectVisualizer/projectVisualizer';

const Inspiration = () => {
  const { state } = useContext(SimpleTechContext);

  return (
    // Utiliza la expresión condicional ternaria
    <>
      {!state.showInspirationProject && <CarouselComponent />}
      {state.showInspirationProject && <ProjectVisualizer />}
    </>
  );
};

export default Inspiration;
