import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div style={styles.container}>
      <h1>About Me</h1>
      <p>
        Hi! I'm Jesse Chung, a passionate developer with a love for creating web applications. 
        I have experience in a variety of technologies, including React, TypeScript, Node.js, 
        and many others. I enjoy solving complex problems and building user-friendly interfaces.
      </p>
      <p>
        In my free time, I love to explore new technologies, work on personal projects, and 
        contribute to open-source projects. I also enjoy hiking, reading, and playing video games.
      </p>
      <p>
        Feel free to connect with me on <a href="https://linkedin.com/in/jessechung" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my <a href="https://github.com/jessechung" target="_blank" rel="noopener noreferrer">GitHub</a> profile to see some of my work!
      </p>
      <p>
        You can reach me at <a href="mailto:jessemchung1@gmail.com">jessemchung1@gmail.com</a> or through the contact form on my website.
      </p>
      
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

