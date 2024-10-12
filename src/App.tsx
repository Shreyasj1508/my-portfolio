import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import { MantineProvider } from '@mantine/core';
import "@mantine/core/styles.css"


function App() {
  return (
 <MantineProvider>
  <HomePage/>
 </MantineProvider>
  );
}

export default App;
 