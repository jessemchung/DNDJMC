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
var react_router_dom_1 = require("react-router-dom");
//adjust the full height appropriately.  
function App() {
    return (<div className='biggy'>
      <div className="top-component">
        <h1 className="title">Welcome</h1>
        <nav style={{ borderBottom: 'solid 1px', paddingBottom: '0.5rem' }}>
          <react_router_dom_1.Link className="nav-option" to="/about-me">About Me</react_router_dom_1.Link> | {' '}
          <react_router_dom_1.Link className="nav-option" to="/ryuutama">Ryuutama</react_router_dom_1.Link> | {' '}
          <react_router_dom_1.Link className="nav-option" to="/ryuutama">Hex Map</react_router_dom_1.Link> | {' '}

          <react_router_dom_1.Link className="nav-option" to="/ryuutama">Postcard Maker</react_router_dom_1.Link> | {' '}
          {/* <Link to="/AboutMyself">About Me</Link>         */}
        </nav>
      </div>
      <react_router_dom_1.Outlet />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map