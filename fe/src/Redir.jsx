// IMPs - ExtLib
import { useState } from 'react';
import {
  Container,
  Stack,
} from '@mui/material';
import ax from 'axios';
import { useParams } from 'react-router';

export default function Redir() {
  const { guid } = useParams();
  const [url, setUrl] = useState('');
  const [exp, setExp] = useState('');

  ax({
    method: 'get',
    port: 9000,
    url: `/${guid}`,
  }).then(({ data: { url: res_url, date_expire: res_exp }}) => {
    setUrl(res_url);
    setExp(res_exp);
  });

  return (
    <>
      <h2>temporary link</h2>
      <a href={url}>{url}</a>
      <p>guid: {guid}</p>
      <p>expires: {exp}</p>
      <a href="http://localhost:3000">2to.co</a>
    </>
  );
}
