"use strict";
// src/components/Card.tsx
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// for consideration.  But maybe not needed
var react_1 = require("react");
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card(props) {
        return _super.call(this, props) || this;
        // Initialization or state can be done here if needed
    }
    Card.prototype.render = function () {
        var _a = this.props, title = _a.title, content = _a.content, imageUrl = _a.imageUrl;
        return (<div className="card">
        {imageUrl && <img src={imageUrl} alt={title} className="card-image"/>}
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{content}</p>
        </div>
      </div>);
    };
    return Card;
}(react_1.Component));
exports.default = Card;
//# sourceMappingURL=FreepsSingleCardClass.jsx.map