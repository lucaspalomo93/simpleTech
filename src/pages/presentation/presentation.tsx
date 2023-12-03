import './presentation.css';
import { Container, Link, Typography } from '@mui/material';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Presentation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Después de 3 segundos, realiza la redirección
      navigate('/catalogo');
    }, 4000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  useEffect(() => {
    // Configura la opacidad a 0 después de un pequeño retraso para comenzar a desvanecerse
    const fadeOutTimeout = setTimeout(() => {
      const container = document.querySelector(
        '.container-presentation'
      ) as HTMLDivElement;
      if (container) {
        container.style.opacity = '0';
      }
    }, 50); // 50 ms de retraso

    return () => clearTimeout(fadeOutTimeout);
  }, []);

  return (
    <Container
      className='container-presentation'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100vh',
        opacity: 1,
        transition: 'opacity 5s ease-out',
      }}
    >
      <Typography
        variant='h1'
        content='h1'
        textAlign={'center'}
        justifyContent={'center'}
        color={COLORS.ORANGE}
        fontWeight={'bold'}
        paddingTop={'30vh'}
        paddingBottom={'20vh'}
        fontSize={'4rem'}
        className='title-simpletech'
      >
        simpletech
      </Typography>

      <Container
        sx={{
          textAlign: 'center',
          marginTop: '20vh',
        }}
      >
        <Link href='/catalogo' underline='none'>
          <Typography
            sx={{ fontFamily: 'Montserrat, sans-serif' }}
            className='presentation-link'
          >
            CATÁLOGO DE SOLUCIONES
          </Typography>
        </Link>
      </Container>
    </Container>
  );
}

export default Presentation;
