import './inspiration.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselComponent from './carousel/carousel';
import { useContext } from 'react';
import { SimpleTechContext } from '../../context/context';
import ProjectVisualizer from './projectVisualizer/projectVisualizer';

const Inspiration = () => {
  const { state } = useContext(SimpleTechContext);

  return (
    <>
      {!state.showInspirationProject && <CarouselComponent />}
      <div>{state.showInspirationProject && <ProjectVisualizer />}</div>
    </>
  );
};

export default Inspiration;
