// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    api.call('Get', {
      typeName: 'FuelUsed'
    }).then((test) => {
      console.log('test', test);
    }).catch((message, error) => {
      console.log('Something went wrong', message, error);
    })
  }, []);


  return (
    <div>Test</div>
  );
}

export default App;
