// @ts-nocheck
import React from 'react';
import logo from './logo.svg';
import './App.css';
import GeotabApi from "mg-api-js";
import Chart from 'chart.js/auto';

function App() {
  let api;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const test = api?.call('Get', {
    typeName: 'FuelUsed'
  });

  console.log('test', test);

  console.log('initializeTriggered');

  return (
    <iframe src="https://my-test-app-gamma-eight.vercel.app/" title="YouTube video player" style={{width: "100%", height: "100vh"}} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  );
}

export default App;
