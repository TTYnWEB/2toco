// IMPs - ExtLib
import { useState } from 'react';
// IMPs - local
import Settings from './Settings';
import Input from './Input';

export default function Home() {
  const [url, setUrl] = useState('');

  return (
    <>
      <Settings />
      <h2>2to</h2>
      <h4>a minimalist url shortener</h4>
      <Input url={url} setUrl={setUrl} />
    </>
  );
};
