// IMPs - ExtLib
import {
  Container,
  Stack,
} from '@mui/material';
// IMPs - local
import Routes from './Routes';

export default function App() {
  return (
    <Container>
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Routes />
      </Stack>
    </Container>
  );
}
