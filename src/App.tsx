// @ts-nocheck
import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    console.log(window)
    const geotab = window.geotab;
    if (geotab && geotab.addin) {
      console.log(">>>>", geotab);
      const test = await api.call('Get', {
        typeName: 'FuelUsed'
      });

      console.log('test', test);

      console.log('initializeTriggered');
    }
  }, []);

  return (
    <iframe src="https://my-test-app-gamma-eight.vercel.app/" title="YouTube video player" style={{width: "100%", height: "100vh"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  );
}

export default App;
