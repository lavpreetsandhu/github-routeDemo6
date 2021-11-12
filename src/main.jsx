import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './main.css';
import Expenses from './route/expenses';
import Invoices from './route/invoices';

let rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="*" element={
        <main>
          <p>There is nothing</p>
          </main>
          }
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
