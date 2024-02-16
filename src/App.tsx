// @ts-nocheck
import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    console.log(window)
    const api = window.GeotabApi;
    if (api) {
      console.log(">>>>", api);

      const foo = async () => {
        const result = await api.call('Get', {
          typeName: 'Device'
        });
        console.log('result', result);
      }

      foo();

      console.log('initializeTriggered');
    }
  }, []);

  return (
    <iframe src="https://my-test-app-gamma-eight.vercel.app/" title="YouTube video player" style={{width: "100%", height: "100vh"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  );
}

export default App;
