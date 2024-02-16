// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    const initializeAddIn = async (api) => {
      // Aquí estableces el objeto api en el estado cuando Geotab lo pasa a tu Add-In
      const res = await api.call('Get', {
        typeName: 'Device',
        search: {
          id: 'b1'
        }
      }, (result) => {
        console.log(result);
      })

      console.log(res)
      setApi(api);
    };



    // Simula la inicialización de Geotab llamando a tu función de inicialización
    // En un caso real, Geotab llamaría a esta función y pasaría el objeto `api`
    window.onload = () => {
      // Esto es solo un ejemplo. Deberías reemplazarlo con la lógica real de inicialización proporcionada por Geotab.
      if (typeof window !== "undefined" && window.geotab) {
        window.geotab.initialize(initializeAddIn);
      }
    };
  }, []);


  return (
    <div>Test</div>
  );
}

export default App;
