// @ts-nocheck
import React, { useCallback, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const foo = useCallback(async () => {

    if (typeof window !== "undefined") {
      window.onload = function() {
        // Geotab podría pasar el objeto api como argumento a una función de inicialización
        initializeAddIn((api, state) => {
          console.log(window)
          console.log("pase por aqui")
          const result = await api.call('Get', {
            typeName: 'Device'
          });
          console.log('result', result);

          console.log('initializeTriggered');
          return result;
        });
      }
    }
    return false;
  }, [])

  useEffect(() => {
    foo().then((result) => console.log('result', result))
  }, []);

  return (
    <iframe src="https://my-test-app-gamma-eight.vercel.app/" title="YouTube video player" style={{width: "100%", height: "100vh"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  );
}

export default App;
