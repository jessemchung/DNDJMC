

// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from './components/App.jsx';
import Expenses from "./components/routes/expenses.jsx";
import Invoices from "./components/routes/invoices.jsx";
import Invoice from "./components/routes/invoice.jsx";
import Ryuutama from "./components/Ryuutama/Ryuutama.jsx";
// import AboutMyself from "./components/routes/AboutMyself.jsx";
import Blog from "./components/routes/blog.jsx";


import './main.css';
import { HashRouter } from 'react-router-dom'
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter  } from "react-router-dom";
import { Route, Routes } from 'react-router'
import "./main.css";
import App from './components/App.jsx';

// this page is handling the paths to the various pieces.  
ReactDOM.render(
  <HashRouter >
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="about-me" element={<Blog />} />
        {/* <Route path="aboutme" element={<AboutMyself />} /> */}

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

        <Route path="ryuutama" element={<Ryuutama />} />

        <Route path="animation" element={<Ryuutama />} />

        <Route path="postcard" element={<Ryuutama />} />

        <Route path="hex-map" element={<Ryuutama />} />


        {/* <Route path="AboutMyself" element={<AboutMyself />} /> */}


        {/* <Route path="journal" element={<Journal />} /> */}


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
