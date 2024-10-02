import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/expenses">Blog</Link> | {' '}
        <Link to="/ryuutama">Ryuutama</Link> | {' '}
        <Link to="/ryuutama">Postcard Maker</Link> | {' '}
        <Link to="/AboutMe">About Me</Link>        
      </nav>
      <Outlet />
    </div>
  );
}
