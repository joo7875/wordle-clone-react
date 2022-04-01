import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { KeyBoard } from './KeyBoard';

const App = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    setCount(9);
  }, []);
  
  return (
    <>
      <Header />
      <div>{count}</div>
      <KeyBoard />
    </>
  );
}

export default App;
