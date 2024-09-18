import React, { useState } from 'react';

// Simple functional component for the "About Me" page
const aboutMe = () => {
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
        contribute to open-source. I also enjoy hiking, reading, and playing video games.
      </p>
      <p>
        Feel free to connect with me on <a href="https://linkedin.com/in/jessechung" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my <a href="https://github.com/jessechung" target="_blank" rel="noopener noreferrer">GitHub</a> profile to see some of my work!
      </p>
    </div>
  );
};

// Basic inline styles for the component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
};

export default aboutMe;