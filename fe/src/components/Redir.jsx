// IMPs - ExtLib
import { useState, useEffect } from 'react';
import {
  Container,
  Stack,
} from '@mui/material';
import ax from 'axios';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

export default function Redir() {
  const [url, setUrl] = useState('');
  const [exp, setExp] = useState('');

  const history = useHistory();
  const { guid } = useParams();

  useEffect(() => {
    ax({
        method: 'get',
        port: 9000,
        url: `/${guid}`,
      })
      .then(async ({ data: { url: res_url, date_expire: res_exp }}) => {
        if (!res_url && !res_exp)
          history.push('/404');
        setUrl(res_url);
        setExp(res_exp);
        if (localStorage.getItem('autoClipW') === 'TRUE')
          await navigator.clipboard.writeText(res_url);
      })
      .catch(err => console.error('couldnt get', err));
  }, []);

  return (
    <>
      <h2>temporary link</h2>
      <a href={url}>{url}</a>
      <p>expires: {exp}</p>
      <a href="http://localhost:3000">2to.co</a>
    </>
  );
}
