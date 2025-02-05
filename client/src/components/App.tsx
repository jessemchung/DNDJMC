import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

//adjust the full height appropriately.  

export default function App() {
  return (
    <div className='biggy'>
      <div className="top-component">
        <h1 className="title">Welcome</h1>
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '0.5rem' }}>
          <Link className="nav-option" to="/ryuutama">Ryuutama</Link> | {' '}
          <Link className="nav-option" to="/hex-map">Hex Map</Link> | {' '}
          <Link className="nav-option" to="/flash-card">Flash Cards</Link> | {' '}
          <Link className="nav-option" to="/ryuutama">Postcard Maker</Link> | {' '}
          <Link className="nav-option" to="/about-me">About Me</Link> | {' '}

          {/* <Link to="/AboutMyself">About Me</Link>         */}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
