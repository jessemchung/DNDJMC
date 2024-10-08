import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1 className="title">Welcome</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link className="nav-option" to="/blog">Blog</Link> | {' '}
        <Link className="nav-option" to="/ryuutama">Ryuutama</Link> | {' '}
        <Link className="nav-option" to="/ryuutama">Postcard Maker</Link> | {' '}
        {/* <Link to="/AboutMyself">About Me</Link>         */}
      </nav>
      <Outlet />
    </div>
  );
}
