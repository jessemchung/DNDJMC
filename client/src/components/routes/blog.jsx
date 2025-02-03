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
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
function Blog() {
    var _a = React.useState(false), isComponentVisible = _a[0], setIsComponentVisible = _a[1];
    var ref = React.useRef(null);
    var handleClickOutside = function (event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };
    React.useEffect(function () {
        document.addEventListener('click', handleClickOutside, true);
        return function () {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return (<>
    <div className="biggy">
    <div className="blog-background-image" style={{ backgroundImage: "url(\"./image/Ryuutama/Weather/CleanSword.png\")" }}></div>
    <div className="blog-container">
      <h1>About Me</h1>
      <p>
        Who So Findeth This Sword please return to Jesse Chung at earliest convenience.  Preferably with a job offer.
      </p>
      <p>
        I have been a fullstack software engineer since September 2021 and I love board games and the like and making tools for them.  Also, I enjoy contributing to open source projects to both improve my skills as a coder but also to help contribute to things used by many people.   
      </p>
      <p>
        Feel free to connect with me on <a href="https://linkedin.com/in/jessechung" target="_blank" rel="noopener noreferrer">LinkedIn</a> or check out my <a href="https://github.com/jessechung" target="_blank" rel="noopener noreferrer">GitHub</a> profile to see some of my work!
      </p>
      <p>
        You can also reach me at <a href="mailto:jessemchung1@gmail.com">jessemchung1@gmail.com</a> or through the contact form on my website.
      </p>

      <div className="social-media-buttons">
      <a href="https://www.facebook.com/jesse.m.chung/" target="_blank" rel="noopener noreferrer" className="facebook-btn">
        <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faFacebookF} size="2x"/>
      </a>
      <a href="https://linkedin.com/in/jessechung" target="_blank" rel="noopener noreferrer" className="linkedin-btn">
        <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faLinkedinIn} size="2x"/>
      </a>
      <a href="https://github.com/jessechung" target="_blank" rel="noopener noreferrer" className="github-btn">
        <react_fontawesome_1.FontAwesomeIcon icon={free_brands_svg_icons_1.faGithub} size="2x"/>
      </a>
    </div>
      
    </div>
    </div>
    </>);
}
exports.default = Blog;
var styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
    },
};
//# sourceMappingURL=blog.jsx.map