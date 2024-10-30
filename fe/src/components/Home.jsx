// IMPs - ExtLib
import { useState } from 'react';
import { Container, Stack, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ax from 'axios';
// IMPs - local
import Settings from './Settings';
import Input from './Input';

export default function Home() {
  const [url, setUrl] = useState('');

  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <Container>
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'flex-end' }}>
          <IconButton href="/settings" size="large">
            <SettingsIcon color="secondary" />
          </IconButton>
        </Stack>
      </Container>
      <h2>2to</h2>
      <h4>a minimalist url shortener</h4>
      <Input url={url} setUrl={setUrl} />
    </Stack>
  );
};
