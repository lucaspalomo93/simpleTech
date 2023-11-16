import { Container, Link, Typography } from '@mui/material';
import { COLORS } from '../constants/colors';

function Home() {
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
        // fontSize={'10vh'}
        paddingTop={'30vh'}
        paddingBottom={'20vh'}
      >
        simpletech
      </Typography>

      <Container sx={{
        textAlign: 'center',
        marginTop: '20vh'
      }}>
        <Link href='/catalogo' underline='none'>
          <Typography
            textAlign={'center'}
            color={COLORS.WHITE}
            fontWeight={'200'}
            letterSpacing={'5px'}
            display={'inline'}
          >
            CATÁLOGO DE SOLUCIONES
          </Typography>
        </Link>
      </Container>
    </Container>
  );
}

export default Home;
