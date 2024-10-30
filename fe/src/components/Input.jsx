// IMPs - ExtLib
import { useState, useCallback, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import ax from 'axios';

export default function Input({ url, setUrl }) {
  const history = useHistory();

  const [err, setErr] = useState(false);

  const onClick = useCallback(async () => {
    await ax({ method: 'post', port: 9000, url: '/', data: { url }})
      .then(({ data: { guid }}) => history.push(`/${guid}`))
      .catch(err => setErr(true));
  });

  const onKeyDown = useCallback(({ key }) => {
    if (key === 'Enter')
      onClick();
  });

  const onChange = useCallback(({ target: { value }}) => (
    setUrl(value)
  ));

  useEffect(() => {
    const autoRead = async () => {
      if (localStorage.autoClipR === 'TRUE') {
        if (!document.hasFocus())
          return;
        const clipContent = await navigator.clipboard.readText();
        await ax({ method: 'post', port: 9000, url: '/validate', data: { url: clipContent }})
          .then(({ status })  => (status === 200) &&(setUrl(clipContent)))
          .catch(() => {}); // no-op
      }
    };
    autoRead();
  }, []);

  return (
    <>
      <TextField
        variant="outlined"
        value={url}
        error={err}
        helperText={ err ? 'invalid URL' : ''}
        onChange={onChange}
        onKeyDown={onKeyDown}
        fullWidth
      />
      <Button variant="contained" onClick={onClick} required>
        shorten
      </Button>
    </>
  );
}
