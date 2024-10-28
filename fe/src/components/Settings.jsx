// IMPs - ExtLib
import { useState, useCallback, useEffect } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// COMPONENTs
const control = <Switch />;

// EXPs
export default function Settings() {
  const lsIsTrue = useCallback(lsItem => (
    ((localStorage.getItem(lsItem)) === 'TRUE')
  ));
  const [clipR, setClipR] = useState(lsIsTrue('clipR'));
  const [clipW, setClipW] = useState(lsIsTrue('clipW'));

  const { mode, setMode } = useColorScheme();
  const lightSwitch = useCallback(() => setMode(
    (mode === 'dark')
      ? 'light'
      : 'dark'
  ));

  const onChange = useCallback((lsKey, isSet, set) => async ({ target: { checked }}) => {
    if ((lsKey === 'autoClipR') && !isSet) {
      await navigator.clipboard.readText()
        .then(() => setClipR(true))
        .catch(({ name }) => localStorage.setItem('autoClipR', 'FALSE'));
    }
    if (lsKey === 'autoClipW')
      setClipW(!clipW);
  });

  useEffect(() => {
    localStorage.setItem('autoClipW', (clipW ? 'TRUE' : 'FALSE'));
  }, [clipW]);

  useEffect(() => {
    localStorage.setItem('autoClipR', (clipR ? 'TRUE' : 'FALSE'));
  }, [clipR]);

  //useEffect(async () => {
  //  const { state: clipRpermissionStatus } = await navigator.permissions.query({ name: 'clipboard-read' });
  //  if (clipRpermissionStatus === 'granted')
  //    setClipR(true);
  //});

  return (
    <>
      <h1>Settings</h1>
      <FormGroup>
        <FormControlLabel
          control={control}
          onChange={lightSwitch}
          label={
            (mode === 'dark')
              ? <DarkModeIcon />
              : <LightModeIcon />
          }
        />
        <FormControlLabel
          control={control}
          checked={clipR}
          onChange={onChange('autoClipR', clipR, setClipR)}
          label="auto-clipboard-read"
        />
        <FormControlLabel
          control={control}
          checked={clipW}
          onChange={onChange('autoClipW', clipW, setClipW)}
          label="auto-clipboard-write"
        />
      </FormGroup>
      <a href="http://localhost:3000">2to.co</a>
    </>
  );
}

/*
  const queryPermission = async (name) => (
    ((await navigator.permissions.query({ name })) === 'granted')
  );

   navigator.clipboard.writeText(txt);

          if (name === 'NotAllowedError')
            console.log('DENIED');
          if (name === 'NotFoundError')
            console.log('NOT TEXT');
           alert('need to reset "site permissions" to enable clipboard read');
*/
