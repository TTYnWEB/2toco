// IMPs - ExtLib
import { TextField, Button } from '@mui/material';
import { useHistory } from "react-router-dom";
import ax from 'axios';

export default function Input({ url, setUrl }) {
  const history = useHistory();

  const onClick = async () => (
    await ax({ method: 'post', port: 9000, url: '/', data: { url }})
      .then(({ data: { guid }}) => history.push(`/${guid}`))
  );

  const onKeyDown = ({ key }) => {
    if (key === 'Enter')
      onClick();
  };

  const onChange = ({ target: { value }}) => (
    setUrl(value)
  );

  return (
    <>
      <TextField
        variant="outlined"
        value={url}
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
