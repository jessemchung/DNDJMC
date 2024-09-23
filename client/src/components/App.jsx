"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
function App() {
    return (<div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <react_router_dom_1.Link to="/invoices">Invoices</react_router_dom_1.Link> | {' '}
        <react_router_dom_1.Link to="/expenses">Blog</react_router_dom_1.Link> | {' '}
        <react_router_dom_1.Link to="/ryuutama">Ryuutama</react_router_dom_1.Link> | {' '}
        <react_router_dom_1.Link to="/ryuutama">Postcard Maker</react_router_dom_1.Link> | {' '}
        <react_router_dom_1.Link to="/AboutMe">About Me</react_router_dom_1.Link>        
      </nav>
      <react_router_dom_1.Outlet />
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map