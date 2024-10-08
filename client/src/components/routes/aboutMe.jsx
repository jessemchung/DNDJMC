"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function App() {
    return (<div style={styles.container}>
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
      <p>
        You can reach me at <a href="mailto:jessemchung1@gmail.com">jessemchung1@gmail.com</a> or through the contact form on my website.
      </p>
      
    </div>);
}
exports.default = App;
var styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
};
//# sourceMappingURL=AboutMe.jsx.map