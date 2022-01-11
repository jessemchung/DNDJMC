

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './components/App.jsx';
import Expenses from "./components/routes/expenses.jsx";
import Invoices from "./components/routes/invoices.jsx";
import Invoice from "./components/routes/invoice.jsx";
import './main.css';
import { HashRouter } from 'react-router-dom'

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router, Route, Routes, IndexRoute } from 'react-router'
import "./main.css";
import App from './components/App.jsx';


ReactDOM.render(
  <HashRouter >
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </HashRouter>,

  document.getElementById("app")
);
