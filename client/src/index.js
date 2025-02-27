import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Expenses from "./components/routes/expenses.jsx";
import Invoices from "./components/routes/invoices.jsx";
import Invoice from "./components/routes/invoice.jsx";
import Ryuutama from "./components/Ryuutama/Ryuutama.jsx";
import Blog from "./components/routes/blog.jsx";
import FlashCard from "./components/routes/flashcard.jsx";

import HexMap from "./components/routes/HexMap/HexMap.jsx";
import './main.css';

// Get the root element
const container = document.getElementById('app');
const root = createRoot(container);

// Render the application

//cheer gif

// read music and time the beat
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Blog />} />
        <Route path="expenses" element={<Expenses />} />
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
        <Route path="hex-map" element={<HexMap />} />
        <Route path="flash-card" element={<FlashCard />} />

        <Route path="about-me" element={<Blog />} />
        {/* <Route path="about-me" element={<ChangeLog />} /> */}


        {/* <Route path="AboutMyself" element={<AboutMyself />} /> */}
        {/* <Route path="journal" element={<Journal />} /> */}

        <Route
          path="*"
          element={<Blog />}
        />
      </Route>
    </Routes>
  </HashRouter>
);