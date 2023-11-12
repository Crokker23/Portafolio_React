import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componentes/Home';

import React from 'react';
import Navegador from './Componentes/Navegador';



function App() {
  return (
    <BrowserRouter>
      <Navegador/>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}
export default App;
