import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function HexMap() {
  return (
    <div style={styles.container}>
      <h1>One Hex</h1>
    </div>

  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
};

