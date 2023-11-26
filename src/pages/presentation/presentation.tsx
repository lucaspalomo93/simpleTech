import './presentation.css';
import { Container, Link, Typography } from '@mui/material';
import { COLORS } from '../../constants/colors';

function Presentation() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100vh',
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
