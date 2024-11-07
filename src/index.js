import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormUser from './components/FormUser';
import Carrinho from './components/carrinho';
import Compra from './components/compra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/create-user' element={<FormUser/>}></Route>
        <Route path='/carrinho' element={<Carrinho/>}></Route>
        <Route path='/compra' element={<Compra/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

reportWebVitals();
